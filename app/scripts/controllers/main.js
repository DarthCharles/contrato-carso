'use strict';

/**
 * @ngdoc function
 * @name contratoCarsoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contratoCarsoApp
 */
 angular.module('contratoCarsoApp')
 .controller('MainCtrl', function ($scope, Data) {

 	$scope.contract = {};

 	$scope.saveData = function() {
 		console.log($scope.contract);

 		Data.setContractData($scope.contract);
 
 	};

		
 		$scope.contract = Data.getContractData();

 });
