'use strict';

function TimeZoneViewerController() {

}

angular.module('myApp')
.component('timezoneViewer', {
  template: `
    <h1>Participants</h1>
    <ul>
      <li ng-repeat="participant in $ctrl.participants">
        <span>{{participant.name}} (UTC {{participant.offset}})</span>
      </li>
      <li class="entry-field" ng-keyup="$ctrl.handleKeyUp($event)">
        <input class="name-field" type="text" ng-model="$ctrl.newParticipant.name" placeholder="Name"></input>
        <input class="offset-field" type="text" ng-model="$ctrl.newParticipant.offset" placeholder="Offset"></input>
        <button ng-click="$ctrl.handleAdd()">Add</button>
      </li>
    </ul>
  `,
  bindings: {
    participants: '='
  },
  controller: TimeZoneViewerController
});