import Ember from 'ember';

// This is just a converter from Dollars to Yen
// Could generalize later
export default Ember.Service.extend({
  currentCurrency: 'Dollars',
  exchangeRate: 121.60,
  isInDollars: Ember.computed.equal('currentCurrency', 'Dollars'),
  exchange(dollarAmount){
    if(this.get('isInDollars')){
      return dollarAmount;
    } else {
      return dollarAmount * this.get('exchangeRate');
    }
  },
  switchCurrency(){
    if(this.get('isInDollars')){
      this.set('currentCurrency', 'Yen');
    } else {
      this.set('currentCurrency', 'Dollars');
    }
  },
});
