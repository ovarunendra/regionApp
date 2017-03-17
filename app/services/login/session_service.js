'use strict';
(function() {
    var sessionService = function($cookies) {
      this.setUserAuthentication = function(username,session) {
         var sessionInfo = {
           "username" : username,
           "password" : session
         };
          $cookies.putObject('seesionInfo', sessionInfo);
      };

      this.removeAuthentication = function() {
          $cookies.putObject('seesionInfo', null);
      };
      this.getUsername = function() {
          var username = '';
          var sessionInfo= $cookies.getObject('seesionInfo');
          if(sessionInfo != null)
              username = sessionInfo.username;
          return username;
      };
      this.isUserAuthenticated = function(value) {
      var sessionInfo= $cookies.getObject('seesionInfo');
      if(sessionInfo !=null)
        return true;
        return false;
      };
    };
    angular.module('RegionApp').service('sessionService',['$cookies',sessionService]);
}());
