import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  teamMemberships: DS.hasMany('team-membership')
});
