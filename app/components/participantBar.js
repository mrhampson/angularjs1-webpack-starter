'use strict';

angular.module('myApp')
.component('participantBar', {
  template: `
    <ul>
      <li ng-repeat="participant in $ctrl.participants">{{participant.name}}</li>
    </ul>
  `,
  bindings: {
    participants: '='
  }
});
