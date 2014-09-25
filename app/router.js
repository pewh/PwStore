import Ember from 'ember';

var Router = Ember.Router.extend({
	location: PwStoreENV.locationType
});

Router.map(function() {
	this.resource('customers', function() {
		this.route('edit', { path: '/:id' });
		this.route('create');
	});

	this.route('missing', { path: '/*path' });
});

export default Router;
