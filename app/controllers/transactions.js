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
			this.transitionToRoute('transactions.create');
		},
		showDetailTransaction: function( model ) {
			this.transitionToRoute('transactions.edit', model.id);
		},
		destroyRecord: function( model ) {
			model.destroyRecord();
		}
  }
});
