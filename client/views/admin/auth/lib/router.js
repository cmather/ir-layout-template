Router.route('admin/login', {name: 'admin.login'});
Router.route('admin/logout', {name: 'admin.logout'});

AdminLogoutController = AdminController.extend({
	action: function () {
		Meteor.logout();

		this.redirect('home');
	}
});