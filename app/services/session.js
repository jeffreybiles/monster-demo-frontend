import Ember from 'ember';
import ENV from 'ember-2-0-frontend/config/environment';

export default Ember.Service.extend({
  currentUser: null,
  isLoggedIn: Ember.computed.bool('currentUser'),
  store: Ember.inject.service(),
  login(userName, password){
    return new Promise((resolve, reject)=>{
      Ember.$.ajax({
        method: "POST",
        url: `${ENV.host}/sessions`,
        data: {
          email: userName,
          password: password
        }
      }).then((data)=>{
        var token = data['authentication_token'];
        var user_id = data['user_id'];
        Cookies.set('userId', user_id);
        Cookies.set('authenticationToken', token);
        this.initializeFromCookie();
        resolve();
      }, ()=>{
        reject('Username and password did not match');
      });
    });
  },
  register(userName, password){
    return new Promise((resolve, reject)=>{
      Ember.$.ajax({
        method: "POST",
        url: `${ENV.host}/users`,
        data: {
          email: userName,
          password: password
        }
      }).then((data)=>{
        var token = data['authentication_token'];
        var user_id = data['user_id'];
        Cookies.set('userId', user_id);
        Cookies.set('authenticationToken', token);
        this.initializeFromCookie();
        resolve();
      }, (response)=>{
        reject(`Server error: ${Ember.get(response, 'responseJSON.error')}`);
      });
    });
  },
  logout(){
    this.set("currentUser", null);
    Cookies.remove('userId');
    Cookies.remove('authenticationToken');
  },
  initializeFromCookie: function(){
    var userId = Cookies.get('userId');
    if(!!userId){
      var user = this.get('store').find('user', userId);
      this.set('currentUser', user);
    }
  }.on('init'),
});
