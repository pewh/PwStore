	import Ember from 'ember';

	export function formatDatetime(input) {
	  if ( input ) {
	    var date = new Date(input);
	    return '%@/%@/%@'.fmt(date.getDate(), date.getMonth()+1, date.getFullYear());
	  } else {
	    return '';
	  }
	}

	export default Ember.Handlebars.makeBoundHelper(formatDatetime);
