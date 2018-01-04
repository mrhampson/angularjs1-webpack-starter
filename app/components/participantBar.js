'use strict';

function ParticpantBarController() {
  this.handleAdd = function() {
    this.participants.push({
      name: String(this.newParticipant)
    })
    console.log("Added!");
  }
}

angular.module('myApp')
.component('participantBar', {
  template: `
    <ul>
      <li ng-repeat="participant in $ctrl.participants">{{participant.name}}</li>
      <li>
        <input type="text" ng-model="$ctrl.newParticipant" placeholder="Enter another ..."></input>
        <button ng-click="$ctrl.handleAdd()">Add</button>
      </li>
    </ul>
  `,
  bindings: {
    participants: '='
  },
  controller: ParticpantBarController
});
