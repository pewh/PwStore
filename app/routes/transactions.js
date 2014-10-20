import Ember from 'ember';

export default Ember.Route.extend({
	// setupController: function( controller, model ) {
	// 	this._super(controller, model);
	//
	// 	var transactionDetails = this.store.find('transaction_detail', {
	// 		transaction: model.get('id')
	// 	});
	//
	// 	this.controllerFor('transaction_details').set('content', transactionDetails);
	// },
	model: function() {
		return this.store.find('transaction');
	}
});
