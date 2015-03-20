if (Meteor.isClient) {
	// The IR Default Settings
	Router.configure({
		layoutTemplate: 'mainLayout',
		loadingTemplate: 'loading',
		notFoundTemplate: '404'
	});

	// Home Page Route
	Router.route('/', {name: 'home'});

	// Admin Dashboard Route
	Router.route('/admin', {
		name: 'admin.dashboard',
		controller: 'AdminDashboardController'
	});

	// Admin Controller
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

	// Admin Dashboard Controller
	AdminDashboardController = AdminController.extend({});

  Template.adminLayout.rendered = function() {
    console.log('rendered admin layout');
  };
}
