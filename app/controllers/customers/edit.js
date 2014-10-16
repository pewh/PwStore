import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		goBack: function() {
			this.transitionToRoute('customers.index');
		},
		update: function() {
			this.get('model').save(function() {
				this.transitionToRoute('customers.index');
			}.bind(this));
		}
	}
});
