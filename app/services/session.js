import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: null,
  store: Ember.inject.service(),
  login(user){
    this.set('currentUser', user)
  },
  logout(){
    this.set('currentUser', null)
  },
  tempFirstUser: function(){
    // only for a bit, setting currentUser as first user
    this.set('currentUser', this.get('store').find('user', 1))
  }.on('init')
});
