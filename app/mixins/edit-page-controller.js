import Ember from 'ember';

export default Ember.Mixin.create({
  modelName: 'application',

	actions: {
		goBack: function() {
      // TODO use inflection
      var index = this.get('modelName') + 's';

			this.transitionToRoute(index);
		},
		update: function() {
      // TODO use inflection
      var index = this.get('modelName') + 's';

			this.get('model').save().then(function() {
				this.transitionToRoute(index);
			}.bind(this));
		}
	}
});
