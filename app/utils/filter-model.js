import Ember from 'ember';

var checkFilterMatch = function( model, string, exceptionAttr ) {
	var regex = new RegExp(string, 'gi');

	if ( ! exceptionAttr ) {
		exceptionAttr = [];
	}

	for ( var attr in model._data ) {
		if ( ! exceptionAttr.contains(attr) ) {
			var getModelAttr = model.get(attr);
			if ( !Ember.none(getModelAttr) && getModelAttr.toString().match(regex) ) {
				return true;
			}
		}
	}

	return false;
};

export default function ( models, filterString ) {
	return models.filter( function( model ) {
		return checkFilterMatch( model, filterString );
	});
}
