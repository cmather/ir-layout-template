AdminController = RouteController.extend({
	layoutTemplate: 'adminLayout',

	onBeforeAction: function () {
		if (!Meteor.user() && !Meteor.loggingIn()) {
			return this.redirect('home');
		} else {
			return this.next();
		}
	}
});