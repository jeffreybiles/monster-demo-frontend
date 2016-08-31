import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  monsterIds: storageFor('cart'),
  monsters: Ember.computed('monsterIds.[]', function(){
    if(this.get('monsterIds.length') == 0){
      return []
    } else {
      return this.get('store').query('monster', {ids: this.get('monsterIds.content')})
    }
  }),
  add(monsterId){
    this.get('monsterIds').addObject(monsterId);
  },
  remove(monsterId){
    this.get('monsterIds').removeObject(parseInt(monsterId));
  },
  monsterPrices: Ember.computed.mapBy('monsters', 'price'),
  total: Ember.computed.sum('monsterPrices'),
  clear(){
    this.get('monsterIds').clear()
  },
  centsTotal: Ember.computed('total', function(){
    return this.get('total') * 100;
  })
});
