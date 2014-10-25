import Ember from 'ember';
import EditPageControllerMixin from 'pw-store/mixins/edit-page-controller';

module('EditPageControllerMixin');

// Replace this with your real tests.
test('it works', function() {
  var EditPageControllerObject = Ember.Object.extend(EditPageControllerMixin);
  var subject = EditPageControllerObject.create();
  ok(subject);
});
