import DS from 'ember-data';

export default DS.Store.extend({
    init: function() {
    	console.log('Init called!');
        return this._super.apply(this, arguments);
    }
    // createRecord: function(type, properties) {
    //   console.log('Prepare createRecord!');
    //   debugger;

    //   if (type === 'transactionDetail') {
    //     if (typeof properties.price !== 'number') {
    //       properties.price = properties.item.get('price');
    //     }
    //   }

    //   return this._super.apply(this, arguments);
    // }
});