'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import view1Module from './view1/view1.js';
import view2Module from './view2/view2.js';
import myAppComponents from './components/components.module.js';

require('./app.css')

// Declare app level module which depends on views, and components
angular.module('myApp', [
  ngRoute,
  view1Module,
  view2Module,
  myAppComponents
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);