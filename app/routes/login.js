import Ember from 'ember';

const { inject, Route } = Ember;

export default Route.extend({
  session: inject.service('session'),

  model() {
    return {};
  },

  actions: {
    authenticate(email, password) {
      debugger;
      
      this.get('session').authenticate('authenticator:oauth2', email, password).then(() => {
        debugger;
      }, (err) => {
        console.log(`error: ${err}`);
      });
    }
  }
});
