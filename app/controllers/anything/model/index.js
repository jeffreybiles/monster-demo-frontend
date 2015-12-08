import Ember from 'ember';

export default Ember.Controller.extend({
  modelController: Ember.inject.controller('anything.model'),
  headlinerField: Ember.computed.alias('modelController.headlinerField')
})
