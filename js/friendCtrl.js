angular.module("myApp").controller("friendCtrl", function( $scope ) {
    $scope.friends = // array from mock-data.json
  
    $scope.filters = {
      name: '',
      state: ''
    };
  
    $scope.sorts = {
      property: 'name',
      direction: '+'
    };
  });