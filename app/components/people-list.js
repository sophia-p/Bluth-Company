import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['title-name'],
	isShowing: false,
	actions: {
		nameShow() {
			this.set('isShowing', false);
		},
		nameHide() {
			this.set('isShowing', true)
		}
		
	}
});
