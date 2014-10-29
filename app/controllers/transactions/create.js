import Ember from 'ember';

var a = Ember.A();
a.pushObject({ id: 2, name: '2323' });
a.pushObject({ id: 4, name: '2323' });
a.pushObject({ id: 2, name: '2323' });
a.pushObject({ id: 2, name: '2323' });

export default Ember.ObjectController.extend({
	needs: ['item'],

	transactionCode: '232314',
	dateNow: new Date(),
	maxReturnedAt: new Date(),
	isCashPayment: true,

	totalPrice: 0,
	payValue: 0,
	change: 0,

	items: Ember.computed.alias('controllers.items.availableQty'),

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
