import Ember from 'ember';

export default Ember.Route.extend({
	redirect: function() {
		this.transitionToRoute('customers.index');
	}
});
