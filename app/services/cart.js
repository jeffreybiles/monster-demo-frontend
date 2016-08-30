import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  monsterIds: [1, 2],
  monsters: Ember.computed('monsterIds.[]', function(){
    let monsterIds = this.get('monsterIds');
    return this.get('store').query('monster', {ids: monsterIds})
  }),
  add(monsterId){
    this.get('monsterIds').addObject(monsterId);
  },
  remove(monsterId){
    this.get('monsterIds').removeObject(parseInt(monsterId));
  }
});
