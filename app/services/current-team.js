import Ember from 'ember';

export default Ember.Service.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),
  monsters: Ember.computed('session.currentUser.teamMemberships.[]', function(){
    var teamMemberships = this.get('session.currentUser.teamMemberships');
    if (!!teamMemberships){
      return teamMemberships.mapBy('monster');
    } else {
      return [];
    }
  }),
  add(monster){
    if(this.get("fullTeam")){
      alert('Team is full. Remove a monster to add another.');
    } else {
      var record = this.get('store').createRecord('team-membership', {
        user: this.get("session.currentUser"),
        monster: monster
      });
      record.save();
    }
  },
  remove(monster) {
    var memberships = this.get('session.currentUser.teamMemberships').filterBy('monster.id', monster.id);
    // we get an array (usually length 1), so we use forEach
    memberships.forEach(function(membership){
      membership.destroyRecord();
    });
  },
  includes(monster){
    return this.get('monsters').mapBy('content').includes(monster);
  },
  fullTeam: Ember.computed.gte('monsters.length', 6)
});
