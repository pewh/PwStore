import Ember from 'ember';

export default Ember.ArrayController.extend({
	filter: '',

	checkFilterMatch: function( model, string ) {
		var regex = new RegExp(string, 'gi');

		for ( var attr in model._data ) {
			if ( model.get(attr).match(regex) ) {
				return true;
			}
		}

		return false;
	},

	filteredModel: function() {
		var filter = this.get( 'filter' );

		return this.get('model').filter( function( model ) {
			return this.checkFilterMatch( model, filter );
		}, this);
	}.property('filter', 'model.@each'),

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
