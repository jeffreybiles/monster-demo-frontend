import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('monsters', function(){
    this.route('new');
    this.route('monster', {path: ':monster_id'}, function(){
      this.route('edit');
    });
  });
  this.route('users');
  this.route('about');
  this.route('authenticated');
  this.route('login');
  this.route('register');
  this.route('monsters-peek');
  this.route('anything', function(){
    this.route('model', {path: ':model_name'}, function(){
      this.route('record', {path: ':record_id'}, function(){

      });
    });
  });
  this.route('checkout');
});

export default Router;
