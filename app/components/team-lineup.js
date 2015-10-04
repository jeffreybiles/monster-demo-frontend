import Ember from 'ember';

export default Ember.Component.extend({
  currentTeam: Ember.inject.service(),
  teamMembers: Ember.computed.alias('currentTeam.monsters')
});
