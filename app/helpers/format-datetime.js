import Ember from 'ember';

export function formatDatetime(input) {
  if ( ! input ) { return ''; }
  return '%@/%@/%@'.fmt(input.getDate(), input.getMonth()+1, input.getFullYear());
};

export default Ember.Handlebars.makeBoundHelper(formatDatetime);
