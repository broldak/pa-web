import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('plans', function() {
    this.route('index', { path: '/' });
    this.route('show', { path: '/:plan_id'});
  });
  this.route('users');
  this.route('login');
});

export default Router;
