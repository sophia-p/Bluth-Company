import { test } from 'qunit';
import moduleForAcceptance from 'ember-bluth-company/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | employees');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('should link to information about company', function(assert) {
	visit('/');
	click('a:contains("About")');
	andThen(function() {
		assert.equal(currentURL(), '/about', 'should navigate to about');
	});
});

test('should link to contact information', function(assert) {
	visit('/');
	click('a:contains("Contact")');
	andThen(function() {
		assert.equal(currentURL(), '/contact', 'should navigate to about');
	});
});
