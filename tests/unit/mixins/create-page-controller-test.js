import Ember from 'ember';
import CreatePageControllerMixin from 'pw-store/mixins/create-page-controller';

module('CreatePageControllerMixin');

// Replace this with your real tests.
test('it works', function() {
  var CreatePageControllerObject = Ember.Object.extend(CreatePageControllerMixin);
  var subject = CreatePageControllerObject.create();
  ok(subject);
});
