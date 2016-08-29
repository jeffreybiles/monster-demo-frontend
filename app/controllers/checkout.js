import Ember from 'ember';

export default Ember.Controller.extend({
  cart: Ember.inject.service(),
  actions: {
    clear(){
      this.get('cart').clear()
    },
    removeItem(itemId){
      this.get('cart').remove(itemId);
    }
  }
});
