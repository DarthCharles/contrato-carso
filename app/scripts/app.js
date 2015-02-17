'use strict';

/**
 * @ngdoc overview
 * @name contratoCarsoApp
 * @description
 * # contratoCarsoApp
 *
 * Main module of the application.
 */
 angular
 .module('contratoCarsoApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
  ])
 .directive('spacedInput', function() {
  return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element) {
          element.children(':input').keyup(function(){
            var maxlength = $(this).prop('maxlength');
            var length = this.value.length;
            if (maxlength === length) {
              $(this).next().focus();
            }
          });
        }
      };
    })
.service('Data', function() {
  this.contract = {
    businessName: '',
    startDate: '',
    URL: ''
  };

  this.setContractData = function(data) {
        this.contract = data;
  };

  this.getContractData = function() {
        return this.contract;
  };


})
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
