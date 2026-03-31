(function (window) {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (const name of names) {
        var firstLetter = name.charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            window.byeSpeaker.speak(name);
        } else {
            window.helloSpeaker.speak(name);
        }
    }

})(window);
