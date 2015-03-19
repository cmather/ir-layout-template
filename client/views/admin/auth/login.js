Template.adminLogin.events({
	'submit form': function (event, template) {
		event.preventDefault();

		Meteor.loginWithPassword(
			template.find('input[name=user]').value,
			template.find('input[name=password]').value
		);

		Router.go('admin.dashboard');
	}
});