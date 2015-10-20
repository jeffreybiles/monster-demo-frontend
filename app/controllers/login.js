import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    login(){
      let { userName, password } = this.getProperties('userName', 'password');
      this.get("session").login(userName, password).then(()=>{
        // TODO: put in a flash message here
        var previousTransition = this.get('previousTransition');
        if (previousTransition) {
          this.set('previousTransition', null);
          previousTransition.retry();
        } else {
          // Default back to homepage
          this.transitionToRoute('index');
        }
      }).catch((reason)=>{
        console.log("error: ", reason)
        // TODO: put in a flash message here
      })
    }
  }
})
