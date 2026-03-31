var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (const name of names) {
    // console.log(name);
    var firstLetter = name.charAt(0).toLowerCase();
    // console.log(firstLetter);
    if (firstLetter === 'j') {
        window.byeSpeaker.speak(name)
    }
    else {
        window.helloSpeaker.speak(name)
    }
}