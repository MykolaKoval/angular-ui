'use strict';

(function () {
    var MainController = function ($scope) {
        $scope.model=[
            {"pageName":"Page One"},
            {"pageName":"Page Two"},
            {"pageName":"Page Three"},
            {"pageName":"Page Four"}
        ];
    }

    angular.module('atanorApp').controller('MainController', MainController);
}());
