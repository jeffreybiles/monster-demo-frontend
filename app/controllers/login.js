import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  showErrors: false,
  session: Ember.inject.service(),
  validations: {
    userName: {
      presence: true
    },
    password: {
      presence: true,
      length: {minimum: 6}
    }
  },
  actions: {
    login(){
      let {userName, password} = this.getProperties('userName', 'password');
      this.get("session")
            .login(userName, password)
            .then(this.logId)
            .then(this.successfulLoginTransition.bind(this))
            .catch(this.displayErrors.bind(this))
            .finally(this.sillyLog)
    }
  },

  logId(user){
    console.log('user_id', user)
    return "user's ID is " + user
  },

  successfulLoginTransition(user){
    console.log(user)
    this.get('flashMessages').success('You have signed in successfully')
    this.transitionToPreviousRoute()
  },

  displayErrors(reason){
    this.set("showErrors", true)
    this.get('flashMessages').danger(reason)
  },

  sillyLog(){
    console.log('We are done with the promises!')
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
  }

})
