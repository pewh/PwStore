import DS from 'ember-data';
import Ember from 'ember';

var borrowedAt = function() {
  return this.get('transaction.created_at');
}.property('transaction.created_at');

var maxReturnedAt = function() {
  var previousDate = this.get('transaction.created_at');
  var date = Ember.copy( previousDate );

  return moment(date).add(3, 'days');
}.property('transaction.created_at');

var totalFine = function() {
  var FINE_CONST = 100000;
  var maxReturnedAt = moment( this.get('max_returned_at') );
  var _returnedAt = this.get('returned_at');
  var returnedAt = moment();

  if ( ! Ember.isEmpty( _returnedAt ) ){
    returnedAt = moment( _returnedAt );
  }

  var dateDifference = returnedAt.diff(maxReturnedAt, 'days');

  if ( dateDifference > 0 ) {
    return FINE_CONST * dateDifference;
  }

  return 0;
}.property('max_returned_at', 'returned_at');

var TransactionDetail = DS.Model.extend({
  transaction: DS.belongsTo('transaction'),
  item: DS.belongsTo('item', { async: true }),
  borrowed_at: borrowedAt,
  max_returned_at: maxReturnedAt,
  returned_at: DS.attr('date'),
  price: function() {
    debugger;
    return this.get('item.price');
  }.property(),
  total_fine: totalFine,

  // price: DS.attr('number') //, {
  //   defaultValue: function( detail) { return detail.get('item.price'); }
  // }),
});

TransactionDetail.reopenClass({
  FIXTURES: [
    { id: 1, price: 12000, item: 1 },
    { id: 2, price: 15000, item: 2, returned_at: new Date() },
    { id: 3, price: 10000, item: 2 },
    { id: 4, price: 15500, item: 3 },
    { id: 5, price: 13500, item: 1, returned_at: new Date() }
  ]
});

export default TransactionDetail;
