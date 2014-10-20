import Ember from 'ember';

export default Ember.ObjectController.extend({
	clearForm: function() {
		this.set('name', '');
		this.set('price', 0);
	},

	actions: {
		create: function() {
			var record = this.store.createRecord('item', {
        name: this.get('name'),
        price: this.get('price')
      });

      record.save().then(function() {
				this.model.pushObject({});
				this.clearForm();
				this.transitionToRoute('items');
			}.bind(this));
		}
  }
});
