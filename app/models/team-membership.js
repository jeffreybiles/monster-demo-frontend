import DS from 'ember-data';

export default DS.Model.extend({
  monster: DS.belongsTo('monster'),
  user: DS.belongsTo('user')
});
