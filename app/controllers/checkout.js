import Ember from 'ember';
import ENV from 'ember-2-0-frontend/config/environment';

export default Ember.Controller.extend({
  cart: Ember.inject.service(),
  ajax: Ember.inject.service(),
  actions: {
    removeItem(monsterId){
      this.get('cart').remove(monsterId)
    },
    clear(){
      this.get('cart').clear()
    },
    processStripeToken({card, email, id}){
      return this.get('ajax').request(`${ENV.host}/purchase`, {
        method: 'POST',
        data: {card, email, id}
      }).then(()=>{

      }).catch(()=>{

      })
    }
  },
  arriveDate: Ember.computed(function(){
    let date = new Date();
    date.setDate(date.getDate() + 2);
    return date
  })
});
