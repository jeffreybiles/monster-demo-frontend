import Ember from 'ember';

export default Ember.Controller.extend({
  yenConverter: Ember.inject.service(),
  actions: {
    switchCurrency(){
      this.get('yenConverter').switchCurrency()
    }
  }
})
