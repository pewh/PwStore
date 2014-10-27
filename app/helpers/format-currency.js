import Ember from 'ember';

export function formatCurrency(input) {
  var currency = input || 0;
  return "Rp" + currency.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}

export default Ember.Handlebars.makeBoundHelper(formatCurrency);
