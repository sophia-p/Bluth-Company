import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let modelHome = Ember.Object.create({
  title: 'test-title',
  development: 'home description',
  id: 'home-id'
})
moduleForComponent('model-home', 'Integration | Component | model home', {
  integration: true
});



test('it should display model home details', function(assert) {
  this.set('modelHomeObj', modelHome );
  this.render(hbs`{{model-home modelHome=modelHomeObj}}`);
  assert.equal(this.$('article.listing h3').text(), 'test-title');
  assert.equal(this.$('.listing div.development').text().trim(), 'home description');
});

test('it should toggle wide class on click', function(assert) {
  this.set('modelHomeObj', modelHome );
  this.render(hbs`{{model-home modelHome=modelHomeObj}}`);
  assert.equal(this.$('.image.wide').length, 0, 'initially rendered small');
  this.$('.image').click();
  assert.equal(this.$('.image.wide').length, 1, 'rendered wide after click');
  this.$('.image').click();
  assert.equal(this.$('.image.wide').length, 0, 'rendered small after second click');
})

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{model-home}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#model-home}}
      template block text
    {{/model-home}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});