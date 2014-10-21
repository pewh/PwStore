import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		goBack: function() {
			this.transitionToRoute('transactions');
		},
		update: function() {
			this.get('model').save().then(function() {
				this.transitionToRoute('transctions');
			}.bind(this));
		}
	}
});
