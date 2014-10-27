import DS from 'ember-data';

var totalPrices =  function() {
  var details = this.get('details');

  return details.reduce(function( previousValue, currentValue ) {
    return previousValue + currentValue.get('price') + currentValue.get('total_fine');
  }, 0);
}.property('details.@each.price', 'details.@each.total_fine');

var transactionStatus = function() {
  var details = this.get('details');

  var itemHasReturned = function( detail ) {
    return !! detail.get('returned_at');
  };

  var allTransactionsExpired = details.every(itemHasReturned);
  var anyTransactionsExpired = details.any(itemHasReturned);

  if ( allTransactionsExpired ) { return 'ALL_EXPIRED'; }
  if ( anyTransactionsExpired ) { return 'ANY_EXPIRED'; }
  return 'NO_EXPIRED';
}.property('details.@each.returned_at');

var Transaction = DS.Model.extend({
  code: DS.attr('number'),
  created_at: DS.attr('date', {
    defaultValue: function() { return new Date(); }
  }),
  customer: DS.belongsTo('customer', { async: true }),
  details: DS.hasMany('transaction-detail', { async: true }),
  total_prices: totalPrices,
  transaction_status: transactionStatus
});

Transaction.reopenClass({
  FIXTURES: [
    { id: 1, code: 'transaction 1', customer: 1, created_at: moment("2013-12-25").toDate(), details: [1, 2] },
    { id: 2, code: 'transaction 2', customer: 2, details: [3, 4] },
    { id: 3, code: 'transaction 3', customer: 1, created_at: moment("2014-10-22").toDate(), details: [5] }
  ]
});

export default Transaction;
