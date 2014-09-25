import Ember from 'ember';

export default Ember.Route.extend({
	model: function( params ) {
		return this.store.find('customer', params.id);
	},
	actions: {
		goBack: function() {
			this.transitionTo('customers.index');
		}
	}
});
