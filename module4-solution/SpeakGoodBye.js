

(function(window){ 

	var byeSpeaker = {};

	var speakWord = "Good Bye";

	byeSpeaker.goodbyeFunction = function speak(name) {
	  console.log(speakWord + " " + name);
	}
	window.byeSpeaker = byeSpeaker
 })(window);

