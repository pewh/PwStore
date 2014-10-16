import DS from 'ember-data';

var Transaction = DS.Model.extend({
  code: DS.attr('number'),
  created_at: DS.attr('date', {
    defaultValue: function() { return new Date(); }
  }),
  customer: DS.belongsTo('customer'),
  details: DS.hasMany('transaction_detail')
});

Transaction.reopenClass({
  FIXTURES: [
    { id: 1, code: 'transaction 1', customer: 1, details: [1, 2] },
    { id: 2, name: 'transaction 2', customer: 2, details: [3, 4] }
  ]
});

export default Transaction;
