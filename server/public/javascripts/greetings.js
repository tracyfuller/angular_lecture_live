angular.module('myApp', [])
    .service('greetingArray', function() {
    greetings = [
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

    return {
        getProperty: function () {
            return greetings;
        }
    };
});

console.log("This is grunted");

