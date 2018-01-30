angular.module("myApp").controller(friendCtrl, function($scope) {
    $scope.friends = [];

    $scope.filter = {
        name:'',
        state:''
    }

    $scope.sorts = {
        property = "name"
        direction = "+"
    }


})