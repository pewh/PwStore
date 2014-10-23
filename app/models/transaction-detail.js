import DS from 'ember-data';

var TransactionDetail = DS.Model.extend({
  transaction: DS.belongsTo('transaction'),
  item: DS.belongsTo('item', { async: true }),
  borrowed_at: DS.attr('date'), //belongsTo 'transaction' and get created_at
  returned_at: DS.attr('date'),
  price: DS.attr('number') // get price from item
});

TransactionDetail.reopenClass({
  FIXTURES: [
    { id: 1, item: 1, price: 12000, borrowed_at: new Date() },
    { id: 2, item: 2, price: 12000, borrowed_at: new Date(), returned_at: new Date() },
    { id: 3, item: 2, price: 12000, borrowed_at: new Date() },
    { id: 4, item: 3, price: 12000, borrowed_at: new Date() },
    { id: 5, item: 1, price: 15200, borrowed_at: new Date(), returned_at: new Date() },
  ]
});

export default TransactionDetail;
