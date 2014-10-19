import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('customers', function() {
    this.route('edit', { path: '/:id' });
    this.route('create');
  });

  this.resource('items', function() {
    this.route('edit', { path: '/:id' });
    this.route('create');
  });

  this.route('missing', { path: '/*path' });
  this.route('items');
  this.route('items/edit');
});

export default Router;
