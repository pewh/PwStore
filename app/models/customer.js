import DS from 'ember-data';

var Customer = DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  contact: DS.attr('string')
});

Customer.reopenClass({
	FIXTURES: [
		{ id: 1, name: 'tes', address: 'adsad', contact: '23424' },
		{ id: 2, name: 'tes 2', address: 'fsdf', contact: '23424' },
		{ id: 3, name: 'tes 3', address: 'bdfggd', contact: '23424' },
	]
});

export default Customer;