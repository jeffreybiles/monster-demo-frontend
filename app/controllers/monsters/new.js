import Ember from 'ember';

export default Ember.Controller.extend({
  monster: {},
  actions: {
    save(){
      let {name, imageUrl, level, price} = this.get("monster")
      var monster = this.store.createRecord('monster', {
        name,
        imageUrl,
        level,
        price
      })
      monster.save().then((savedMonster)=>{
        this.transitionToRoute('monsters.monster', savedMonster)
      })
    }
  }
})
