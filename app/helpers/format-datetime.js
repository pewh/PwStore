	import Ember from 'ember';

	export function formatDatetime(input) {
	  if ( input ) {
	    return moment(input).format('DD/MM/YYYY');
	  } else {
	  	return '-';
	  }
	}

	export default Ember.Handlebars.makeBoundHelper(formatDatetime);
