import DS from 'ember-data';

export default DS.Model.extend({
  monster: DS.belongsTo('monster'),
  user: DS.belongsTo('user'),
  mainAttribute: Ember.computed('monster.mainAttribute', 'user.mainAttribute', function(){
    return `monster: ${this.get('monster.mainAttribute')}, user: ${this.get('user.mainAttribute')}`
  })
});
