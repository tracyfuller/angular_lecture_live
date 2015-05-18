var myApp = angular.module('myApp',[]); //this is a standard way to declare a module! names match, empty brackets

myApp.controller('WelcomeController',["$scope", function($scope){
    $scope.heading = "Message: ";

    $scope.updateMessage = function(){
        $scope.message = "Hello " + $scope.name + "!";
    };

    $scope.goodByeMessage = function(){
        $scope.message = "Goodbye, " + $scope.name + " :(";
    };
}]);