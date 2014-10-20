export default function ( models ) {
	models.filter( function( model ) {
  	for ( var attr in model._data ) {
  	   model.set(attr, '');
  	}
	});
}
