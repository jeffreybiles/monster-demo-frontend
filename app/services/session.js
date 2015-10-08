import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: null,
  isLoggedIn: Ember.computed.bool('currentUser'),
  store: Ember.inject.service(),
  login(user){
    this.set("currentUser", user)
    Cookies.set('userId', user.id)
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
  }.on('init')
});
