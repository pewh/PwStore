import Ember from 'ember';
import MasterPageController from '../mixins/master-page-controller';

export default Ember.ArrayController.extend(MasterPageController, {
  modelName: 'item',

  qtyStatus: function() {
  	return [{
		label: 'Item yang tersedia',
		value: this.get('model').filterBy('is_available', true).length
	}, {
		label: 'Item yang dipinjam',
		value: this.get('model').filterBy('is_available', false).length
	}];
  }.property('is_available'),

  availableQty: function() {
  	debugger;
    return this.get('model').filterBy('is_available', true).length;
  }.property('is_available'),

  borrowedQty: function() {
    return this.get('model').filterBy('is_available', false).length;
  }.property('is_available'),
});
