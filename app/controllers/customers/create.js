import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		create: function() {
			var record = this.store.createRecord('customer', {
        name: this.get('name'),
        address: this.get('address'),
        contact: this.get('contact')
      });

      record.save().then(function() {
				this.transitionToRoute('customers.index');
			}.bind(this));
		}
  }
});
