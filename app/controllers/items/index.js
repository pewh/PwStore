import Ember from 'ember';

export default Ember.ArrayController.extend({
	needs: ['transaction_detail'],

	qtyStatus: function() {
		return [{
			label: 'Tersedia',
			value: this.get('model').filterBy('is_available', true).length
		}, {
			label: 'Dipinjam',
			value: this.get('model').filterBy('is_available', false).length
		}];
	}.property('model.@each.is_available', 'controllers.transaction_detail.returned_at'),

	availableQty: function() {
    	return this.get('model').filterBy('is_available', true).length;
    }.property('model.@each.is_available'),

	borrowedQty: function() {
    	return this.get('model').filterBy('is_available', false).length;
	}.property('model.@each.is_available')
});
