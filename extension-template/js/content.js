console.log("Extension is running!");

// modified from https://github.com/MysteryPancake/Image-Replacer/blob/master/scripts/Main.js

replace();

function replace() {
    console.log("entered function");
    window.setInterval(replace, 2000);
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
        $(images[i]).pixelate();       
    }
}