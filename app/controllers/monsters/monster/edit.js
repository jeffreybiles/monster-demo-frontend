import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(){
      this.get('model').save().then(()=>{
        this.transitionToRoute('monsters.monster');
      });
    },
    destroy(){
      this.get('model').destroyRecord().then(()=>{
        this.transitionToRoute('monsters.monster');
      });
    },
    cancel(){
      this.get('model').rollbackAttributes();
      this.transitionToRoute('monsters.monster');
    }
  },
  changedAttributesHash: Ember.computed('model.{name,level,imageUrl,price}', function(){
    let changeAttributes = this.get('model').changedAttributes();
    let usableHash = Object.keys(changeAttributes).map(function(attributeName){
      return {
        key: attributeName,
        earlierValue: changeAttributes[attributeName][0],
        currentValue: changeAttributes[attributeName][1]
      }
    });
    return usableHash;
  })
});
