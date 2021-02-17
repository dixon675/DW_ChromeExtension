console.log("Extension is running!");

// // Code pulled from a combination of pre-existing js library "Pixelate",
// // https://github.com/43081j/pixelate.js
// // codepen sketch,
// // https://codepen.io/crosslab/pen/ZLJxRj
// // fiddle,
// // https://jsfiddle.net/fedek6/NgwP2/
// // and stackoverflow
// // https://stackoverflow.com/questions/52444784/detect-all-images-with-javascript-in-an-html-page

// var ctx = document.getContext('2d');
// var value = factor.value;
// var img = document.images.length ;

// var y = 0;


// function pixelate() {
// 	while (y != img.length){ 
//     /// calculate the factor
//     	var fw = (img[y].width / '.5')|0,
//     	    fh = (img[y].height / '.5')|0;
    
//     /// turn off image smoothing (prefixed in some browsers)
//     	ctx.imageSmoothingEnabled = false;
//     	ctx.mozImageSmoothingEnabled = false;
//     	ctx.msImageSmoothingEnabled = false;
//     	ctx.webkitImageSmoothingEnabled = false;
    
//     /// draw mini-version of image
//     	ctx.drawImage(img[y], 0, 0, fw, fh);
    
//     /// draw the mini-version back up, voila, pixelated
//     	ctx.drawImage(document, 0, 0, fw, fh, 0, 0, img.width, img.height);
//     	y++;
// 	}
// }

// pixelate();


// Attempt to use the pixelate.js plugin
$('.img').pixelate()