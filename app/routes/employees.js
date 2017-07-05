import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return [{
			name: 'George Bluth',
			position: 'Founder',
			id: 'george-bluth'}, 
			{
			name: 'Lucille Bluth',
			position: 'CEO',
			id: 'lucille-bluth'
			},
			{
			name: 'Michael Bluth',
			position: 'President',
			id: 'michael-bluth',
			},
			{
			name: 'Kitty Sanchez',
			position: 'Personal Assistant',
			id: 'kitty-sanchez' 
			},
			{
			name: 'Tobias Fünke',
			position: 'Personal Assistant',
			id: 'tobias-funke'
			},
			{
			name: 'Starla',
			position: 'Business Model',
			id: 'starla'
			},
			{
			name: 'Lindsay Bluth Fünke',
			position: 'Secretary',
			id: 'lindsay-funke'
			}]
	}
});
