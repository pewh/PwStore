import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
		showCreateForm: function() {
			console.log('tes');
			this.transitionToRoute('customers.create');
		},
		showEditForm: function( params ) {
			this.transitionToRoute('customers.edit', params.id);
		}
  }
});
