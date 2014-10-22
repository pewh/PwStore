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
		showEditForm: function( model ) {
			this.transitionToRoute('customers.edit', model.id);
		},
		destroyRecord: function( model ) {
      if ( confirm('Apakah Anda yakin untuk menghapus?') ) {
        model.destroyRecord();
      }
		}
  }
});
