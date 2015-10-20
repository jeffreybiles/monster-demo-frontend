import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    login(){
      let { userName, password } = this.getProperties('userName', 'password');
      this.get("session").login(userName, password).then(()=>{
        this.get('flashMessages').success('You have signed in succesfully')
        var previousTransition = this.get('previousTransition');
        if (previousTransition) {
          this.set('previousTransition', null);
          previousTransition.retry();
        } else {
          // Default back to homepage
          this.transitionToRoute('index');
        }
      }).catch((reason)=>{
        this.get('flashMessages').danger(reason)
      })
    }
  }
})
