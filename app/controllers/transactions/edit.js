import Ember from 'ember';

export default Ember.ObjectController.extend({
	needs: ['transaction_details'],
	
	actions: {
		goBack: function() {
			this.transitionToRoute('items');
		},
		update: function() {
			this.get('model').save().then(function() {
				this.transitionToRoute('items');
			}.bind(this));
		}
	}
});
