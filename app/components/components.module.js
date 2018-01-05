import timezoneViewer  from './timezoneViewer.js';
import participantBar from './participantBar';

export default angular.module('myApp.components', [])
.component('timezoneViewer', timezoneViewer)
.component('participantBar', participantBar)
.name;