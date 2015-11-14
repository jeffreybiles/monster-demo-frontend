import Ember from 'ember';
import Authenticated from '../mixins/authenticated-route';

export default Ember.Route.extend(Authenticated, {
  model(){
    return new Ember.RSVP.hash({
        worlds: this.store.findAll('world'),
        monsters: this.store.findAll('monster'),
        taco: true
    }).then((response)=>{
      console.log('the response was', response)
      return response
    }).catch((reason)=>{
      console.log("rejected", reason)
    })
  }
});
