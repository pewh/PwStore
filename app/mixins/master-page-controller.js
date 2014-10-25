import Ember from 'ember';
import filterModel from '../utils/filter-model';

export default Ember.Mixin.create({
  modelName: 'application',
	filter: '',

  route: {
    index: function( controller ) {
      // TODO use inflection
      return controller.get('modelName') + 's';
    },

    create: function( controller ) {
      return controller.get('route.index')(controller) + '.create';
    },

    edit: function( controller ) {
      return controller.get('route.index')(controller) + '.edit';
    }
  },

	filteredModel: function() {
		var model = this.get('model');
		var filter = this.get('filter');

		return filterModel(model, filter);
	}.property('filter', 'model.@each', 'content.@each'),

	actions: {
		showCreateForm: function() {
      var create = this.get('route.create')(this);

			this.transitionToRoute(create);
		},
		showEditForm: function( model ) {
      var edit = this.get('route.edit')(this);

			this.transitionToRoute(edit, model.id);
		},
		destroyRecord: function( model ) {
      if ( confirm('Apakah Anda yakin untuk menghapus?') ) {
        var index = this.get('route.index')(this);

        model.destroyRecord();
        this.transitionToRoute(index);
      }
		}
  }
});
