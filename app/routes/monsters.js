import Ember from 'ember';
import Authenticated from '../mixins/authenticated-route';

export default Ember.Route.extend(Authenticated, {
  model(){
    return new Ember.RSVP.Promise((resolve, reject)=>{
      this.store.findAll('monster').then((response)=>{
        console.log('the response is', response)
        resolve(response)
      }).catch((reason)=>{
        console.log('finding monsters failed', reason)
        reject(reason)
      })
    })
  }
});
