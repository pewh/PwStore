import Ember from 'ember';

export default Ember.ArrayController.extend({
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
  }
});
