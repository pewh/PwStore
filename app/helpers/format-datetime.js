	import Ember from 'ember';

	export function formatDatetime(input) {
	  if ( input ) {
	    return moment(input).format('DD/MM/YYYY hh:mm:ss');
	  } else {
	  	return '-';
	  }
	}

	export default Ember.Handlebars.makeBoundHelper(formatDatetime);
