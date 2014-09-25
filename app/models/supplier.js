import DS from 'ember-data';

var Supplier = DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  contact: DS.attr('string')
});

Supplier.reopenClass({
	FIXTURES: [
		{ id: 1, name: 'supplier 1', address: 'adsad', contact: '23424' },
		{ id: 2, name: 'supplier 2', address: 'fsdf', contact: '23424' },
		{ id: 3, name: 'supplier 3', address: 'bdfggd', contact: '23424' },
	]
});

export default Supplier;