import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('monsters', function(){
    this.route('monster', {path: ':monster_id'})
  });
  this.route('users');
  this.route('about');
  this.route('authenticated');
  this.route('login');
  this.route('register');
});

export default Router;
