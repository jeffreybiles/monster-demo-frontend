import Ember from 'ember';
import Authenticated from '../mixins/authenticated-route';

export default Ember.Route.extend(Authenticated, {
  model(){
    return this.store.findAll('monster');
  }
});
