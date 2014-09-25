import Ember from 'ember';

export default Ember.View.extend({
	tagName: 'header',
	classNames: ['navbar', 'navbar-inverse', 'navbar-fixed-top'],
	templateName: 'render/navigation'
});
