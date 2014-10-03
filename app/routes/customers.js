import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('customer');
	},
	actions: {
		showCreateForm: function() {
			console.log('tes');
			this.transitionTo('customers.create');
		},
		showEditForm: function(customer) {
			this.transitionTo('customers.edit', customer);
		}
	}
});
