import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr(),
	img: DS.attr(),
	development: DS.attr()
});
