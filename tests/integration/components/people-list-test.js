import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
moduleForComponent('people-list', 'Integration | Component | people list', {
  integration: true
});

let person = Ember.Object.create({
  position: 'test-position',
  name: 'test-name',
  id: 'test-id'
})

test('it should toggle position on click', function(assert) {
  this.set('personObj', person );
  this.render(hbs`{{people-list person=personObj}}`);
  assert.equal(this.$('ul li p').text(), 'test-position');
  this.$('ul li p').click();
  assert.equal(this.$('ul li p').text(), 'test-name');
  this.$('ul li p').click();
  assert.equal(this.$('ul li p').text(), 'test-position');

})














test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{people-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#people-list}}
      template block text
    {{/people-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
