import Ember from 'ember';

export function price(params, {price}) {
  return Ember.String.htmlSafe(`<b>$${Ember.Handlebars.Utils.escapeExpression(price)}</b>`);
}

export default Ember.Helper.helper(price);
