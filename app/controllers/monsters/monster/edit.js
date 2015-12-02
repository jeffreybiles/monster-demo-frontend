import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(){
      this.get('model').save().then((monster)=>{
        this.transitionToRoute('monsters.monster', monster)
      })
    },
    destroy(){
      this.get('model').destroyRecord().then(()=>{
        this.transitionToRoute('monsters.monster')
      })

    }
  }
})
