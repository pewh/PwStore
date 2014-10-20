import Ember from 'ember';

export default Ember.Component.extend({
	appName: 'PwStore',
	links: Ember.A([
		Ember.Object.create({title: 'Daftar Barang', model: 'items'}),
		Ember.Object.create({title: 'Daftar Pelanggan', model: 'customers'}),
		Ember.Object.create({title: 'Transaksi', model: 'transactions'})

		// Ember.Object.create({title: 'Faktur Beli', model: 'purchase-invoices'})
		// Ember.Object.create({title: 'Transaksi Beli', model: 'purchase-invoices.new'})

		// Ember.Object.create({title: 'Faktur Jual', model: 'sales-invoices'})
		// Ember.Object.create({title: 'Transaksi Jual', model: 'sales-invoices.new'})

		// Ember.Object.create({title: 'User', model: 'users'})
	])
});
