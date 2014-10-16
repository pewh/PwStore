import DS from 'ember-data';

var Item = DS.Model.extend({
  name: DS.attr('string'),
  is_available: DS.attr('boolean', { defaultValue: true }),
  price: DS.attr('number', { defaultValue: 0 })
});

Item.reopenClass({
  FIXTURES: [
    { id: 1, name: 'item 1', price: 12000 },
    { id: 2, name: 'item 2', price: 12000 },
    { id: 3, name: 'item 3', price: 12000 }
  ]
});

export default Item;
