'use strict';

/**
 * @ngdoc function
 * @name contratoCarsoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the contratoCarsoApp
 */
angular.module('contratoCarsoApp')
  .controller('AboutCtrl', function ($scope, Data) {
  	$scope.contractData = Data.getContractData();
  });
