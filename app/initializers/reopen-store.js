	import DS from 'ember-data';

	export function initialize(container, application) {
	  var store = container.lookup('store:main');

	  DS.Store.reopen({
		setup: function() {
	      console.log('tes');
	    }.on('init'),

	    createRecord: function(type, properties) {
	      if (type === 'transactionDetail') {
	        if (typeof properties.price !== 'number') {
	          properties.price = properties.item.get('price');
	        }
	      }

	      return this._super.apply(this, arguments);
	    }.on('createRecord')
	  });

	};

	export default {
	  name: 'reopen-store',
	  initialize: initialize
	};
