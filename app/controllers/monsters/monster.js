import Ember from 'ember';

export default Ember.Controller.extend({
  currentTeam: Ember.inject.service(),
  actions: {
    add(){
      this.get("currentTeam").add(this.get("model"))
    }
  }
})
