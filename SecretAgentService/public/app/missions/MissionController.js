(function () {
    'use strict';

    function MissionController(identity, missionsData, notifier) {
        var vm = this;
        vm.identity = identity;

        if (identity.currentUser) {
            vm.mission = {
                postedBy: identity.currentUser.username,
                agent: ''
            };
        }

        vm.addMission = function (mission) {
            missionsData.addMission(mission)
                .then(function () {
                    notifier.success('Mission add successfully');
                    setInterval(function () {
                        window.location.href = "/missions";
                    }, 1000)
                })
        };
        vm.acceptMission = function () {
            var missionId = window.location.href.split('/')[5];
            missionsData.acceptMission(missionId, identity.currentUser)
                .then(function (mission) {
                    vm.currentMission = mission;
                    notifier.success('You accept mission successfully');
                })
        };
    }

    angular.module('app.controllers')
        .controller('MissionController', ['identity', 'missionsData', 'notifier', MissionController]);
}());