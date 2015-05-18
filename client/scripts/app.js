var myApp = angular.module('myApp',[]); //this is a standard way to declare a module! names match, empty brackets

var greetingArray = [
    ["Hello ", "English"],
    ["Bonjour ", "French"],
    ["Hola ", "Spanish"],
    ["Pozdrav ", "Croatian"],
    ["Hallo ", "Dutch"],
    ["Kumusta ", "Filipino"],
    ["Bonjou ", "Haitian"],
    ["Sveiki ", "Lithuanian"],
    ["Hei ", "Norwegian"],
    ["Habari ", "Swahili"],
    ["Hej ", "Swedish"],
    ["Helo ", "Welsh"],
    ["Sawubona ", "Zulu"]
];
var i = 0

myApp.controller('WelcomeController',["$scope", function($scope){
    $scope.heading = "Message: ";

    $scope.updateMessage = function(){
        $scope.message = greetingArray[i][0] + $scope.name + "!";
        console.log("Greeting array: ", greetingArray[i][0]);
        i++;
        //while (i < greetingArray.length){
        //    if (i >= greetingArray.length){
        //        i = 0;
        //    };
        //    $scope.message = greetingArray[i][0] + $scope.name + "!";
        //    i++;
        //
        //}
    };

    $scope.goodByeMessage = function(){
        $scope.message = "Goodbye, " + $scope.name + " :(";
    };
}]);