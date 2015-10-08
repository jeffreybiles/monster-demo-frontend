import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel(){
    if(!this.get('session.isLoggedIn')){
      this.transitionTo('users')
    }
  },
  model(){
    return this.store.findAll('monster')
  }
});
