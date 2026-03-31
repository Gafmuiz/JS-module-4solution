(function (window) {
    var speakWord = "Good Bye";
    var byeSpeaker = {
        speak: function (name) {
            console.log(speakWord + " " + name);
        }
    };
// function speak(name) {
//   console.log(speakWord + " " + name);
// }
    window.byeSpeaker = byeSpeaker;
})(window);
window.byeSpeaker.speak(names);