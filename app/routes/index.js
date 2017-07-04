import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [{
					id:'model-home-day',
					img: '/assets/modelhome1.png',
					title: 'Model Home in Newport Beach',
					development: 'Sudden Valley'
				}, {
					id:'model-home-night',
					title: 'Model Home in Newport Beach',
					development: 'Sudden Valley'
				},{
					id:'model-home-iraq',
					title: 'Model Home in Iraq',
					development: 'Baghdad'
				},{
					id:'model-home-mexico',
					title: 'Model Home in Newport Beach',
					development: 'Baja California'
				},]
	}
});
