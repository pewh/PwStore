import DS from 'ember-data';

var Customer = DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  contact: DS.attr('string')
});

Customer.reopenClass({
	FIXTURES: [
		{ id: 1, name: 'customer 1', address: 'adsad', contact: '23424' },
		{ id: 2, name: 'customer 2', address: 'fsdf', contact: '23424' },
		{ id: 3, name: 'customer 3', address: 'bdfggd', contact: '23424' }
	]
});

export default Customer;
