(function(){
    'use strict';

    function missionsData(data) {
        function addMission(mission) {
            return data.post('missions/add', mission)
        }

        return {
            addMission: addMission
        }
    }

    angular.module('app.services')
        .factory('missionsData', ['data' , missionsData])
}());