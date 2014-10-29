import Ember from 'ember';


export default Ember.ObjectController.extend({
	transactionCode: '232314',
	dateNow: new Date(),
	maxReturnedAt: new Date(),
	isCashPayment: true,

	totalPrice: 0,
	payValue: 0,
	change: 0,

	clearForm: function() {
		debugger;
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
