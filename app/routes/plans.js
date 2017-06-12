import Ember from 'ember';

const { inject, Route } = Ember;

export default Route.extend({
  session: inject.service('session'),
  
  model() {
    return this.store.findAll('plan');
  }
});
