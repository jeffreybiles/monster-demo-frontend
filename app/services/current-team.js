import Ember from 'ember';

export default Ember.Service.extend({
  monsters: [],
  add(monster){
    if(this.includes(monster)){
      alert("This monster is already on your team.")
    } else if(this.get("fullTeam")){
      alert('Team is full. Remove a monster to add another.')
    } else {
      this.get('monsters').pushObject(monster)
    }
  },
  remove(monster) {
    this.get('monsters').removeObject(monster);
  },
  empty() {
    this.get('monsters').setObjects([]);
  },
  includes(monster){
    return this.get('monsters').includes(monster)
  },
  fullTeam: Ember.computed.gte('monsters.length', 6)
});
