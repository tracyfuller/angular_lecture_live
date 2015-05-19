var myApp = angular.module('myApp'); //this is a standard way to declare a module! names match, empty brackets

myApp.controller('WelcomeController',["$scope", 'greetingArray', function($scope, greetingArray){
    var array = greetingArray.getProperty();
    var i = 0;
    $scope.heading = "Message: ";
    console.log(array[i]);
    $scope.language = array[i].language;

    $scope.changeLanguage = function(){
        i++;
        if (i >= array.length){
            i = 0;
        }
        $scope.language = array[i].language;
    };

    $scope.updateMessage = function(){
        if (!$scope.name){
            alert("Please enter your name");
        } else {
            $scope.message = array[i].hello + $scope.name + "!";
        }
    };

    $scope.goodByeMessage = function(){
        if (!$scope.name){
            alert("Please enter your name");
        } else {
            $scope.message = array[i].goodbye + $scope.name + " :(";
        }
    };
}]);