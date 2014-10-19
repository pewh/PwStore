import Ember from 'ember';

export default Ember.ObjectController.extend({
	clearForm: function() {
		this.set('name', '');
		this.set('address', '');
		this.set('contact', '');
	},

	actions: {
		create: function() {
			var record = this.store.createRecord('customer', {
        name: this.get('name'),
        address: this.get('address'),
        contact: this.get('contact')
      });

      record.save().then(function() {
				this.model.pushObject({});
				this.clearForm();
				this.transitionToRoute('customers');
			}.bind(this));
		}
  }
});
