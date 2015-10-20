import Ember from 'ember';
import EmberValidations from 'ember-validations';
import displayFlashErrors from '../utils/display-flash-errors';

export default Ember.Controller.extend(EmberValidations, {
  validations: {
    userName: {
      presence: true
    },
    password: {
      presence: true,
      length: {minimum: 6}
    }
  },
  session: Ember.inject.service(),
  actions: {
    login(){
      let { userName, password } = this.getProperties('userName', 'password');
      this.validate().then(()=>{
        this.get("session").login(userName, password).then(()=>{
          this.get('flashMessages').success('You have signed in succesfully');
          this.transitionToPreviousRoute();
        }).catch((reason)=>{
          this.get('flashMessages').danger(reason)
        })
      }).catch((errors)=>{
        displayFlashErrors(this.get('errors'), this.get('flashMessages'));
      })
    }
  },
  transitionToPreviousRoute(){
    var previousTransition = this.get('previousTransition');
    if (previousTransition) {
      this.set('previousTransition', null);
      previousTransition.retry();
    } else {
      // Default back to homepage
      this.transitionToRoute('index');
    }
  },
})
