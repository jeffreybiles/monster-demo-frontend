import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  navigator: Ember.inject.service(),
  actions: {
    logout(){
      this.get("session").logout()
      this.transitionToRoute('login')
    }
  }
})
