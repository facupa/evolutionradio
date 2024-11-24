var audio_obj = document.querySelector("audio");

var sound = document.getElementById("boton");

var audio_volume = audio_obj.volume;



sound.addEventListener("click", function() {

	if (audio_obj.paused) {

		audio_obj.play();

		sound.innerHTML = "Pause";

	} else {

		audio_obj.pause();

		sound.innerHTML = "Play";

	}

});



function volumeUp() {

	if (audio_volume < 1.0) {

		audio_volume += 0.1;

		audio_obj.volume = audio_volume;

	}

}



function volumeDown() {

	if (audio_volume > 0.2) {

		audio_volume -= 0.1;

		audio_obj.volume = audio_volume;

	}

}