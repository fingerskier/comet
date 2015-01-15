// Model
Stuff = new Meteor.Collection('stuff');

if (Meteor.isServer) {
	Meteor.publish('allStuff', function () {
		return Stuff.find();
	});
}

if (Meteor.isClient) {
	Meteor.subscribe('stuff');
}

Stuff.allow({
	insert: function (userId, doc) {
		//...
	},
	update: function (userId, doc, fields, modifier) {
		//...
	},
	remove: function (userId, doc) {
		//...
	},
	fetch: ['owner'],
	transform: function () {
		//...
	}
});

Stuff.deny({
	insert: function (userId, doc) {
		//...
	},
	update: function (userId, doc, fields, modifier) {
		//...
	},
	remove: function (userId, doc) {
		//...
	},
	fetch: ['locked'],
	transform: function () {
		//...
	}
});

// Routes
Router.route('/stuff/:_id', function () {
  var stuff = Stuff.findOne({_id: this.params._id});
  this.render('StuffTemplate', {data: stuff});
});

// Meteor.methods
Meteor.methods({
	addStuff: function (stuffObj) {
		// ...
	}
});

// Helpers
Template.StuffTemplate.helpers({
	foo: function () {
		return "asdf1234";
	}
});

// Event-handlers
Template.StuffTemplate.events({
	'click': function () {
		$("#foo_div").addClass('higlight');
	}
});
