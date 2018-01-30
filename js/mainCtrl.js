angular.module("friendsList").controller("mainCtrl", function($scope) {
  scope.friends = [
    "Fred Flinstone",
    "Bruce Wayne",
    "Barry Allen",
    "Tony Stark"
  ];
  scope.addFriends = str => {
    $scope.friends.push(str);
    $scope.input = "";
  };
});
