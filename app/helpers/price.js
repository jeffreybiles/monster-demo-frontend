import Ember from 'ember';

export function price(params, {name}) {
  var price = params[0];
  var display = `<b>$${price}</b>`
  if(!!name){
    display += ` for ${Ember.Handlebars.Utils.escapeExpression(name)}`
  }
  return Ember.String.htmlSafe(display);
}

export default Ember.Helper.helper(price);
