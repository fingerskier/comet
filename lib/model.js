Files = new Meteor.Collection('files');

if (Meteor.isServer) {
	Meteor.publish('allFiles', function () {
		return Files.find();
	});
}

if (Meteor.isClient) {
	Meteor.subscribe('allFiles');
}
