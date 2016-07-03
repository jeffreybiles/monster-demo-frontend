import Ember from 'ember';

export default Ember.Helper.extend({
  yenConverter: Ember.inject.service(),
  compute(params, {price}) {
    var symbol = this.get('yenConverter.isInDollars') ? '$' : '&#165;';
    var convertedPrice = this.get('yenConverter').exchange(price);
    var roundedPrice = Math.round(convertedPrice * 100)/100;
    return Ember.String.htmlSafe(`<b>${symbol}${Ember.Handlebars.Utils.escapeExpression(roundedPrice)}</b>`);
  },
  recomputeWhenChanged: Ember.observer('yenConverter.currentCurrency', 'yenConverter.exchangeRate', function(){
    this.recompute();
  })
});
