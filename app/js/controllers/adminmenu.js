angular.module('sywStyleXApp')
.controller('AdminMenuCtrl', ['$scope', '$state', function($scope, $state) {
  $scope.goAdmin=function(){
	  $state.go('admin');
  };
  
  $scope.goCms=function(){
	  $state.go('cms');
  }
}]);
