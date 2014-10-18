import Ember from 'ember';

export default Ember.ArrayController.extend({
	filter: '',

	filteredModel: function() {
		var filter = this.get('filter');
		var regexRule = new RegExp(filter, 'gi');

		var filtered = this.get('customer').filter(function( customer ) {
			return customer.get('name').match(regexRule) ||
						 customer.get('address').match(regexRule) ||
						 customer.get('contact').match(regexRule);
		});

		return filtered;
	}.property('filter'),

	actions: {
		showCreateForm: function() {
			this.transitionToRoute('customers.create');
		},
		showEditForm: function( record ) {
			this.transitionToRoute('customers.edit', record.id);
		},
		destroyRecord: function( record ) {
			record.destroyRecord();
		}
  },

	toolbar: [
		Ember.Object.create({ title: 'Edit', type: 'primary' }),
		Ember.Object.create({ title: 'Delete', type: 'danger' })
	]
});
