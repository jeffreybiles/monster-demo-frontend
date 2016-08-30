import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  monsterIds: [1, 2],
  monsters: Ember.computed('monsterIds.[]', function(){
    let monsterIds = this.get('monsterIds');
    if(monsterIds.length == 0){
      return []
    } else {
      return this.get('store').query('monster', {ids: monsterIds})      
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
    this.set('monsterIds', [])
  }
});
