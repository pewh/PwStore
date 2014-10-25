import Ember from 'ember';

export function formatDatetime(input) {
  if ( input ) {
    return input;
    debugger;
    return input.getDate(); // '%@/%@/%@'.fmt(input.getDate(), input.getMonth()+1, input.getFullYear());
  } else {
    return '';
  }
}

export default Ember.Handlebars.makeBoundHelper(formatDatetime);
