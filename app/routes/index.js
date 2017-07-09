import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [{
					id:'model-home-day',
					title: 'Model Home in Newport Beach',
					development: 'Sudden Valley'
				}, {
					id:'model-home-night',
					title: 'Model Home in Newport Beach At Night',
					development: 'Sudden Valley'
				},{
					id:'model-home-iraq',
					title: 'Model Home in Iraq',
					development: 'Baghdad'
				},{
					id:'model-home-mexico',
					title: 'Model Home in Baja California',
					development: 'Baja California'
				},]
	}
});
