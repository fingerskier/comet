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

Meteor.startup(function () {
	$(function() {
		$(	'#theTree').jstree({
			"plugins" : [ "checkbox", "contextmenu", "dnd", "search", "state", "types", "unique"],
			'core' : {
		    'data' : mainData
		  }
		});
	});
});