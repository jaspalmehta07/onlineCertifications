var myApp = angular
				.module('myModule', [])
				.factory('httpq', function($http) {
               	return {
                   get: function() {
                      return $http.get.apply(null, arguments);
                   }
               	}
            	});
				myApp.controller("myController", function($scope, httpq)
				{
				
				
				httpq.get('http://localhost/servicenswproject/vehicleregistration.json')
				.then(function(successCallBack,errorCallBack) {
				});
				
				var vehRegistrations = "";
				var successCallBack = function(response){
					$scope.vehRegistrations = response.data.registrations
					console.log($scope.vehRegistrations);
				}

				var errorCallBack = function(response){
					$scope.showError = "There is an API calling Web Services";

				}				
					
	
	});