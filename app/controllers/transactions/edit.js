import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		goBack: function() {
			this.transitionToRoute('transactions');
		},
		itemReturned: function( detail ) {
      window.a = this.get('model');
      this.set('model.returned_at', new Date());
      // this.set('model').save();
      this.get('model').pushObject({});
			// this.get('model').save().then(function() {
			// 	this.transitionToRoute('transctions');
			// }.bind(this));
		}
	}
});
