import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  newValue: null,
  actions: {
    editModel(){
      this.set('isEditing', true)
    },
    cancel(){
      this.set('newValue', null)
      this.set('isEditing', false)
    },
    save(){
      let {model, attribute} = this;
      model.set(attribute.name, this.get('newValue') || model.get(attribute.name));
      model.save();
      this.set('isEditing', false)
    }
  }
})
