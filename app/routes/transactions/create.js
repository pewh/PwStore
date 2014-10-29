import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function() {
    var self = this;

    return this.store.find('item').then(function( item ) {
      self.set('item', item);
    });
  },

	setupController: function( controller, model ) {
		this._super(controller, model);

    var availableItems = this.get('item').filterBy('is_available');
    controller.set('items', availableItems);
	},

	model: function() {
    return this.store.find('transaction');
	}
});
