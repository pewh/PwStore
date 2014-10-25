import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  classNameBindings: [ 'noItemExpired:danger', 'anyItemExpired:warning', 'allItemExpired:info' ],
  noItemExpired: Ember.computed(function() {
    return this.get('status') === 'NO_EXPIRED';
  }).property('status'),
  anyItemExpired: Ember.computed(function() {
    return this.get('status') === 'ANY_EXPIRED';
  }).property('status'),
  allItemExpired: Ember.computed(function() {
    return this.get('status') === 'ALL_EXPIRED';
  }).property('status')
});
