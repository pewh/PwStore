import Ember from 'ember';
import filterModel from 'pw-store/utils/filter-model';

export default Ember.ArrayController.extend({
	filter: '',

	filteredModel: function() {
		var model = this.get('model');
		var filter = this.get('filter');

		return filterModel(model, filter);
	}.property('filter', 'model.@each', 'content.@each'),

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
