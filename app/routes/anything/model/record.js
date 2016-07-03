import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let modelName = this.paramsFor('anything.model').model_name;
    return this.store.findRecord(modelName, params.record_id);
  }
});
