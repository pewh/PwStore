import Ember from 'ember';

export function formatDatetime(input) {
  return '%@/%@/%@'.fmt(input.getDate(), input.getMonth()+1, input.getFullYear());
};

export default Ember.Handlebars.makeBoundHelper(formatDatetime);
