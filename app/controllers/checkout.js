import Ember from 'ember';

export default Ember.Controller.extend({
  cart: Ember.inject.service(),
  actions: {
    removeItem(monsterId){
      this.get('cart').remove(monsterId)
    }
  }
});
