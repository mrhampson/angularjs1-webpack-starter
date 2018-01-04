'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
  $scope.participants = [
    {
      name: "Marshall Hampson",
      offset: -8
    },
    {
      name: "Participant 2",
      offset: 0
    }
  ];
  $scope.test = "testing";
})
