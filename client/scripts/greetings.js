angular.module('myApp', []).controller('greetingArray', function($scope) {
    $scope.greetings = [
        {hello: "Hello ", goodbye: "Goodbye ", language: "English"},
        {hello: "Bonjour ", goodbye: "Adieu ", language: "French"},
        {hello: "Hola ", goodbye: "Adiós ", language: "Spanish"},
        {hello: "Pozdrav ", goodbye: "Zbogom ", language: "Croatian"},
        {hello: "Hallo ", goodbye: "Afscheid ", language: "Dutch"},
        {hello: "Kumusta ", goodbye: "Paalam ", language: "Filipino"},
        {hello: "Bonjou ", goodbye: "Adye ", language: "Haitian"},
        {hello: "Sveiki ", goodbye: "Atsisveikinimas ", language: "Lithuanian"},
        {hello: "Hei ", goodbye: "Farvel ", language: "Norwegian"},
        {hello: "Habari ", goodbye: "Kuaga ", language: "Swahili"},
        {hello: "Hej ", goodbye: "Adjö ", language: "Swedish"},
        {hello: "Helo ", goodbye: "Hwyl fawr ", language: "Welsh"},
        {hello: "Sawubona ", goodbye: "Hamba kahle ", language: "Zulu"}
    ];
});

//var greetingArray = [
//    ["Hello ", "Goodbye ", "English"],
//    ["Bonjour ", "Adieu ", "French"],
//    ["Hola ", "Adiós ", "Spanish"],
//    ["Pozdrav ", "Zbogom ", "Croatian"],
//    ["Hallo ", "afscheid ", "Dutch"],
//    ["Kumusta ", "Paalam ", "Filipino"],
//    ["Bonjou ", "Adye ", "Haitian"],
//    ["Sveiki ", "Atsisveikinimas ", "Lithuanian"],
//    ["Hei ", "farvel ", "Norwegian"],
//    ["Habari ", "kuaga ", "Swahili"],
//    ["Hej ", "adjö ", "Swedish"],
//    ["Helo ", "Hwyl fawr ", "Welsh"],
//    ["Sawubona ", "Hamba kahle ", "Zulu"]
//];

module.exports = greetingArray;

