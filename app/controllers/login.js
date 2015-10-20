import Ember from 'ember';
import EmberValidations from 'ember-validations';

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
        this.displayFlashErrors(this.get('errors'));
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
  displayFlashErrors(errorHashes){
    var errorKeys = Object.keys(errorHashes);
    this.get('flashMessages').clearMessages();
    errorKeys.forEach((key)=>{
      errorHashes[key].forEach((error)=>{
        this.get('flashMessages').danger(`${key} ${error}`, {sticky: true})
      })
    })
  }
})
