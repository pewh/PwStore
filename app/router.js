import Ember from 'ember';

var Router = Ember.Router.extend({
  location: PwStoreENV.locationType
});

Router.map(function() {
  this.resource('customers');
});

export default Router;
