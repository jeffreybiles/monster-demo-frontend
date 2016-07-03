import { moduleForModel, test } from 'ember-qunit';

moduleForModel('team-membership', 'Unit | Model | team membership', {
  // Specify the other units that are required for this test.
  needs: ['model:monster', 'model:user']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
