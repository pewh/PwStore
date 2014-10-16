import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		goBack: function() {
			this.transitionToRoute('customers.index');
		}
	}
});
