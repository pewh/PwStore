import Ember from 'ember';
import filterModel from 'pw-store/utils/filter-model';

export default Ember.ArrayController.extend({
  filter: '',

  filteredModel: function() {
		var model = this.get('model');
		var filter = this.get('filter');

		return filterModel(model, filter, ['is_available']);
  }.property('filter', 'model.@each'),

  actions: {
    showCreateForm: function() {
      this.transitionToRoute('items.create');
    },
    showEditForm: function( record ) {
      this.transitionToRoute('items.edit', record.id);
    },
    destroyRecord: function( record ) {
      record.destroyRecord();
    }
  }
});
