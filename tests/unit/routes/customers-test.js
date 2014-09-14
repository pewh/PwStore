import { test, moduleFor } from 'ember-qunit';

moduleFor('route:customers', 'CustomersRoute', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function() {
  var route = this.subject();
  ok(route);
});

// test('should activate the customer link', function() {
// 	visit('/customers').then(function() {

// 		var aboutLink = find('a:contains("Home")');
// 		equal(aboutLink).hasClass("active", false);

// 		var customerLink = find('a:contains("Pelanggan")');
// 		equal(customerLink).hasClass("active", true);
// 	});
// });
