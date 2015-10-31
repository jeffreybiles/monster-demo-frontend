import Ember from 'ember';

export default Ember.Mixin.create({
  session: Ember.inject.service(),
  beforeModel(transition){
    if(!this.get('session.isAuthenticated')){
      var loginController = this.controllerFor('login');
      loginController.set('previousTransition', transition);
      this.transitionTo('login')
    }
  }
});
