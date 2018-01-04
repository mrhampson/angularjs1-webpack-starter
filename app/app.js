'use strict';

import * as angular from 'angular';
import * as timezoneViewer  from "./components/timezoneViewer.js";
import participantBar from './components/participantBar';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.component('timezoneViewer', timezoneViewer);
.component('participantBar', participantBar);