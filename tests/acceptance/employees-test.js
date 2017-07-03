import { test } from 'qunit';
import moduleForAcceptance from 'ember-bluth-company/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | employees');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
