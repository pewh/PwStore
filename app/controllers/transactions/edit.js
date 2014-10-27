import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		goBack: function() {
			this.transitionToRoute('transactions');
		},
		itemReturned: function( detail ) {
	      detail.set('returned_at', new Date());
	      detail.save();
		},
		cancelToReturned: function( detail ) {
	      detail.set('returned_at', null);
	      detail.save();
		}
	}
});
