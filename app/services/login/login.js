'use strict';
(function() {
    var loginService = function($http,urlConfig,sessionService)
     {
      this.authenticate = function(username , password) {
        if(username == 'username' && password == 'password')
        {
          sessionService.setUserAuthentication(username,"SampleSessionData");
          return true;
        }
          return false;
      };
    };
    angular.module('RegionApp').service('loginService',['$http','urlConfig','sessionService',loginService]);
}());
