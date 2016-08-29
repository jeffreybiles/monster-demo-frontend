import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  monsterIds: storageFor('monster-ids'),
  add(monsterId){
    this.get('monsterIds').addObject(monsterId);
  },
  remove(monsterId){
    this.get('monsterIds').removeObject(parseInt(monsterId));
  },
  clear(){
    this.set('monsterIds', []);
  },
  monsters: Ember.computed('monsterIds.[]', function(){
    if(this.get('monsterIds.length') == 0){
      return []
    } else {
      return this.get('store').query('monster', {ids: this.get('monsterIds.content')})
    }
  }),
  monsterPrices: Ember.computed.mapBy('monsters', 'price'),
  total: Ember.computed.sum('monsterPrices'),
  itemCount: Ember.computed.alias('monsterIds.length')
});
