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

	clearForm: function() {
    var attributes = getAttributes(this.model);

    attributes.forEach(function( attribute ) {
      this.set(attribute, '');
    }, this);
	},

	actions: {
		create: function() {
      var createRecord = this.get('createRecord');
      // TODO use inflection
      var indexRouteName = this.get('modelName') + 's';

      createRecord(this).save().then(function() {
        this.model.pushObject({});
        this.clearForm();
        this.transitionToRoute(indexRouteName);
      }.bind(this));
    }
  }
});
