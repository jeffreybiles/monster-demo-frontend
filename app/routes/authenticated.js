import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel(transition){
    if(!this.get('session.isLoggedIn')){
      var loginController = this.controllerFor('users');
      loginController.set('previousTransition', transition);
      this.transitionTo('users')
    }
  }
});
