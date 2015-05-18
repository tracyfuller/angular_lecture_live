var myApp = angular.module('myApp',[]); //this is a standard way to declare a module! names match, empty brackets

var greetingArray = [
    ["Hello ", "Goodbye ", "English"],
    ["Bonjour ", "Adieu ", "French"],
    ["Hola ", "Adiós ", "Spanish"],
    ["Pozdrav ", "Zbogom ", "Croatian"],
    ["Hallo ", "afscheid ", "Dutch"],
    ["Kumusta ", "Paalam ", "Filipino"],
    ["Bonjou ", "Adye ", "Haitian"],
    ["Sveiki ", "Atsisveikinimas ", "Lithuanian"],
    ["Hei ", "farvel ", "Norwegian"],
    ["Habari ", "kuaga ", "Swahili"],
    ["Hej ", "adjö ", "Swedish"],
    ["Helo ", "Hwyl fawr ", "Welsh"],
    ["Sawubona ", "Hamba kahle ", "Zulu"]
];
var i = 0;

myApp.controller('WelcomeController',["$scope", function($scope){
    $scope.heading = "Message: ";
    $scope.language = greetingArray[i][2];

    $scope.changeLanguage = function(){
        i++;
        if (i >= greetingArray.length){
            i = 0;
        };
        $scope.language = greetingArray[i][2];
    }

    $scope.updateMessage = function(){
        $scope.message = greetingArray[i][0] + $scope.name + "!";
    };

    $scope.goodByeMessage = function(){
        $scope.message = greetingArray[i][1] + $scope.name + " :(";
    };
}]);