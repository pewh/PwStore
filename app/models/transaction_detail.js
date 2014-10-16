import DS from 'ember-data';

var TransactionDetail = DS.Model.extend({
  transaction: DS.belongsTo('transaction'),
  item: DS.belongsTo('item'),
  borrowed_at: DS.attr('date'), //belongsTo 'transaction' and get created_at
  returned_at: DS.attr('date'),
  price: DS.attr('number') // get price from item
});

TransactionDetail.reopenClass({
  FIXTURES: [
    { id: 1, item: 1, price: 12000 },
    { id: 2, item: 2, price: 12000 },
    { id: 3, item: 2, price: 12000 },
    { id: 4, item: 3, price: 12000 }
  ]
});

export default TransactionDetail;
