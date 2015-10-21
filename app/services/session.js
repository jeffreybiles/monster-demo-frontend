import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: null,
  isLoggedIn: Ember.computed.bool('currentUser'),
  store: Ember.inject.service(),
  login(userName, password){
    return new Promise((resolve, reject)=>{
      if(userName == 'emberscreencasts' && password == 'awesome'){
        this.get('store').findAll('user').then((response)=>{
          var user = response.get('firstObject')
          this.set("currentUser", user)
          Cookies.set('userId', user.id)
          resolve()
        })
      } else {
        reject('Username and password did not match')
      }
    })
  },
  logout(){
    this.set("currentUser", null)
    Cookies.remove('userId')
  },
  initializeFromCookie: function(){
    var userId = Cookies.get('userId');
    if(!!userId){
      var user = this.get('store').find('user', userId)
      this.set('currentUser', user)
    }
  }.on('init'),
});
