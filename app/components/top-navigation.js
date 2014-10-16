import Ember from 'ember';

export default Ember.Component.extend({
	appName: 'PwStore',
	links: Ember.A([
		// Ember.Object.create({title: 'Produk', model: 'products'})
		// Ember.Object.create({title: 'Pemasok', model: 'suppliers'})
		Ember.Object.create({title: 'Pelanggan', model: 'customers'})

		// Ember.Object.create({title: 'Faktur Beli', model: 'purchase-invoices'})
		// Ember.Object.create({title: 'Transaksi Beli', model: 'purchase-invoices.new'})

		// Ember.Object.create({title: 'Faktur Jual', model: 'sales-invoices'})
		// Ember.Object.create({title: 'Transaksi Jual', model: 'sales-invoices.new'})

		// Ember.Object.create({title: 'User', model: 'users'})
	])
});
