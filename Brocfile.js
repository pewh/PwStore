/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
	'ember-cli-bootstrap': {
		'importBootstrapJS': false,
    'importBootstrapCSS': false
	},
  sassOptions: {
    inputFile: 'app.sass',
    // includePaths: ['bower_components/bootstrap-sass-official/assets/stylesheets']
  }
});

app.import('bower_components/bootswatch/sandstone/bootstrap.min.css');
app.import('bower_components/ember-forms/dist/globals/main.js');
app.import('bower_components/moment/moment.js');
app.import('bower_components/lodash/lodash.js');
app.import('bower_components/ember-list-view/list-view.js');
app.import('bower_components/ember-widgets/dist/css/ember-widgets.css');
app.import('bower_components/ember-widgets/dist/js/ember-widgets.js');

module.exports = app.toTree();
