(function () {

    function  editUser(auth, notifier, identity) {

        var vm = this;

        vm.user = {
            email : identity.currentUser.email,
            pictureUrl: identity.currentUser.pictureUrl
        };

        vm.edit = function(user) {
            auth.update(user).then(function() {
                notifier.success('Profile successfully edited!');
                window.location.href = "/"
            })
        }}

    angular.module('app.controllers')
        .controller('EditProfileController', ['auth', 'notifier', 'identity', editUser]);
}());

