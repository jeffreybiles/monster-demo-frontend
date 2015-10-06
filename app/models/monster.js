import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  level: DS.attr('number'),
  imageUrl: DS.attr('string'),
  teamMemberships: DS.hasMany('team-membership'),

  currentTeam: Ember.inject.service(),
  onTeam: Ember.computed('currentTeam.monsters.[]', function(){
    return this.get("currentTeam").includes(this)
  })
});
