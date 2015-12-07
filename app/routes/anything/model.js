import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let modelObject = this.container.lookup('data-adapter:main').getModelTypes().findBy('name', params.model_name);
    let records = this.store.findAll(params.model_name)
    return {
      modelObject: modelObject,
      records: records
    }
  }
})
