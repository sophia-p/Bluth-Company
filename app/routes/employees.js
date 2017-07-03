import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return ['George Bluth', 'Lucille Bluth', 'Michael Bluth', 'Kitty Sanchez', 'Tobias Fünke', 'Starla', 'Lindsay Bluth Fünke']
	}
});
