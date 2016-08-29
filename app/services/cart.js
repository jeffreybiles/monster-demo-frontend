import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  monsterIds: [1, 2],
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
    let monsterIds = this.get('monsterIds');
    if(monsterIds.length == 0){
      return []
    } else {
      return this.get('store').query('monster', {ids: monsterIds})
    }
  }),
  monsterPrices: Ember.computed.mapBy('monsters', 'price'),
  total: Ember.computed.sum('monsterPrices'),
  itemCount: Ember.computed.alias('monsterIds.length')
});
