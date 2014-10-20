import Ember from 'ember';

export default Ember.ObjectController.extend({
	needs: ['transaction_details'],
	
	clearForm: function() {
		this.set('code', '');
		this.set('customer', null);
		this.set('details', []);
	},

	actions: {
		create: function() {
			var record = this.store.createRecord('transaction', {
        customer_id: this.get('name'),
        address: this.get('address'),
        contact: this.get('contact')
      });

      record.save().then(function() {
				this.model.pushObject({});
				this.clearForm();
				this.transitionToRoute('transactions');
			}.bind(this));
		}
  }
});
