import DS from 'ember-data';

var Transaction = DS.Model.extend({
  code: DS.attr('number'),
  created_at: DS.attr('date', {
    defaultValue: function() { return new Date(); }
  }),
  customer: DS.belongsTo('customer', { async: true }),
  details: DS.hasMany('transaction-detail', { async: true }),
  total_prices: function() {
    var details = this.get('details');

    return details.reduce(function( previousValue, currentValue ) {
      return previousValue + currentValue.get('price');
    }, 0);
  }.property('details.@each.price')
});

Transaction.reopenClass({
  FIXTURES: [
    { id: 1, code: 'transaction 1', customer: 1, details: [1, 2] },
    { id: 2, code: 'transaction 2', customer: 2, details: [3, 4] }
  ]
});

export default Transaction;
