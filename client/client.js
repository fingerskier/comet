var mainData = [
 	'Simple root node', {
   	'text': 'Model',
   	'state': {
     	'opened': false,
     	'selected': false
   	},
   	'children': [
     	{ 'text': 'Child 1' },
     	'Child 2'
   	]
	},{
		text: 'Routes',
		children: []
	},{
		text: 'Methods',
		children: []
	},{
		text: 'Templates',
		children: []
	},{
		text: 'Helpers',
		children: []
	},{
		text: 'Events',
		children: []
	}
];

Router.route('/service/:_service', function () {
  this.render('service_editor', {service_name: this.params._service});
});

Meteor.startup(function () {
	$(function() {
	});
});