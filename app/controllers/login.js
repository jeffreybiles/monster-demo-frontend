import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    login(){
      let {userName, password} = this.getProperties('userName', 'password');
      this.get("session").login(userName, password).then(()=>{
        this.transitionToPreviousRoute()
      }).catch((reason)=>{
        console.log("Error: ", reason)
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
  }

})
