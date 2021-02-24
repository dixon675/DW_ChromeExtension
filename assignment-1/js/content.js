console.log("Extension is running!");

// Works for the initial page load
// $('img').pixelate();

// Current attempt with event listener
pixels();

function pixels () {
	console.log('Entered function')

	$('img').pixelate();

	console.log('First pass')

	document.addEventListener('load', function (){
		console.log('listener is listening')
		var image = document.querySelectorAll('img[data-pixelate]');

    	for (var i = 0; i < img.length; i++) {
      		image[i].addEventListener('load', function () {
        	image[i].pixelate();
      	});
    }
  });
}



// basic replace function taken from https://github.com/MysteryPancake/Image-Replacer/blob/master/scripts/Main.js
// modified to work with pixelate.js function

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



// // Attempts with MutationObeserver

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