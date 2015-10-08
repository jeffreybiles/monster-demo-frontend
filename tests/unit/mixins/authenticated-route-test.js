import Ember from 'ember';
import AuthenticatedRouteMixin from '../../../mixins/authenticated-route';
import { module, test } from 'qunit';

module('Unit | Mixin | authenticated route');

// Replace this with your real tests.
test('it works', function(assert) {
  var AuthenticatedRouteObject = Ember.Object.extend(AuthenticatedRouteMixin);
  var subject = AuthenticatedRouteObject.create();
  assert.ok(subject);
});
