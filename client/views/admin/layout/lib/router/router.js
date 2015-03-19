AdminController = RouteController.extend({
	layoutTemplate: 'adminLayout',

	onBeforeAction: function () {
		if (Meteor.loggingIn()) {
			return this.render('loading');
		} else if (!Meteor.user()) {
			return this.redirect('home');
		} else {
			return this.next();
		}
	}
});