console.log("Extension is running!");

// basic replace function taken from https://github.com/MysteryPancake/Image-Replacer/blob/master/scripts/Main.js
// modified to work with pixelate.js function

// Works for the initial page load
$('img').pixelate();

// Works for the initial page load
// var images = document.getElementsByTagName('img');

// for (var i = 0; i < images.length; i++) {
//  		$(images[i]).pixelate();       
//  	}


document.addEventListener('DOMContentLoaded', function (){
	console.log('listener is listening')
	var images = document.getElementsByTagName('img');
	
	images.pixelate();



	// pixels();

	// function pixels (){
	// console.log("beginning loop");
	// for (var i = 0; i < images.length; i++) {
 // 		$(images[i]).pixelate();
 // 		console.log("Image #");
	// }
// }

});

// function pixels (){
// 	console.log("beginning loop");
// 	for (var i = 0; i < images.length; i++) {
//  		$(images[i]).pixelate();
//  		console.log("Image #");
// 	}
// }



// replace();

// function replace() {
// 	console.log("entered function");
// 	var images = [];
// 	document.getElementsByTagName('img').addEventListener('load', addImages(images));

// 	pixels(images);
// }

// function addImages (newImg) {
// 	var newImages = document.getElementsByTagName('img');
// 	newImg.append(newImages);
// 	return newImg;
// }

// function pixels (images) {
// 	for (var i = 0; i < images.length; i++) {
// 		$(images[i]).pixelate();       
// 	}
// }


// Attempt with MutationObeserver
// const imgOnPage = document.querySelector('img');

// var observer = new MutationObserver(mutations => {
// 	mutations.forEach((mutation) => {
// 		pixelate.js();
// 	})
// }).observe(imgOnPage, {
// 	childList: true,
// 	attributes: false,
// 	subtree: false
// });

// var imgOnPage = [];

// function addImages () {
// 	imgOnPage = document.getElementsByTagName('img');
// 	pixelateImgs();
// };

// // addImages.addEventListener('load', function () {
// // 	document.getElementsByTagName('img').appendChild(imgOnPage);
// // });

// function pixelateImgs () {
// 	for (var x = 0; x < imgOnPage.length; x++) {
// 		imgOnPage[x].pixelate();
// 	}
// }



// const imgOnPage = document.querySelector("img");

// const observer = new MutationObserver(mutations => {
// 	mutations.forEach(function (mutation) {
// 		child.addEventListener('lazy', imgOnPage, false);

// 		if (imgOnPage === true){
// 			pixelate.js();
// 		}
// 	});
// });

// observer.observe(imgOnPage, {
// 	childList: true,
// 	characterData: true,
// 	subtree: true
// });