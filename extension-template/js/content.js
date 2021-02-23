console.log("Extension is running!");

// basic replace function taken from https://github.com/MysteryPancake/Image-Replacer/blob/master/scripts/Main.js
// modified to work with pixelate.js function
replace();

function replace() {
	console.log("entered function");
	var images = document.querySelectorAll("img");

	function addImages () {
		console.log('adding event listener')
		addImages.addEventListener('load', function () {
			console.log('event listener activated')
			images.push(document.querySelectorAll('img'));
			replace();
		});
	}

	addImages();
	pixels(images);
}

// function addImages () {
// 	addImages.addEventListener('load',function () {
// 		document.querySelectorAll('img').appendChild(images);
// 		replace();
// 	});
// }

function pixels (images) {
	for (var i = 0; i < images.length; i++) {
		$(images[i]).pixelate();       
	}
}


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