import Ember from 'ember';

var getAttributes = function( model ) {
  return Ember.keys(model)
    .rejectBy('', 'content')
    .rejectBy('', 'store')
    .rejectBy('', 'isLoaded')
    .rejectBy('', 'isUpdating')
    .rejectBy('', 'toString')
    .rejectBy('', '_super');
};

var getNewRecord = function( controller ) {
  var obj = {};
  var attributes = getAttributes(controller.model);

  attributes.forEach(function( attribute ) {
    var value = controller.get( attribute );

    if ( Ember.typeOf( value ) !== 'class' ) {
      obj[ attribute ] = value;
    }
  });

  return obj;
};

export default Ember.Mixin.create({
  modelName: 'model',

  createRecord: function( controller ) {
    var modelName = controller.get('modelName');
    var newRecord = getNewRecord(controller);

    return controller.store.createRecord(modelName, newRecord);
  },

	clearForm: function( response ) {
    var attributes = getAttributes(this.model);

    attributes.forEach(function( attribute ) {
      var actualValue = response.get(attribute);

      switch (Ember.typeOf( actualValue )) {
        case 'string':
          this.set(attribute, '');
          break;
        case 'number':
          this.set(attribute, 0);
          break;
        case 'array':
          this.set(attribute, []);
          break;
        default:
          this.set(attribute, null);
      }
    }, this);
	},

	actions: {
		create: function() {
      var createRecord = this.get('createRecord');
      // TODO use inflection
      var indexRouteName = this.get('modelName') + 's';

      createRecord(this).save().then(function( response ) {
        this.model.pushObject({});
        this.clearForm(response);
        this.transitionToRoute(indexRouteName);
      }.bind(this));
    },

		goBack: function() {
      // TODO use inflection
      var index = this.get('modelName') + 's';

			this.transitionToRoute(index);
		}
  }
});
