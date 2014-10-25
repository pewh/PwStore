import Ember from 'ember';
import MasterPageControllerMixin from 'pw-store/mixins/master-page-controller';

module('MasterPageControllerMixin');

// Replace this with your real tests.
test('it works', function() {
  var MasterPageControllerObject = Ember.Object.extend(MasterPageControllerMixin);
  var subject = MasterPageControllerObject.create();
  ok(subject);
});
