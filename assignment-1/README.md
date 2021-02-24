# 8-BIT CHROME EXTENSION

This extension is intended to play with nostalgia for older gamers by taking a webside and making it "8-bit." The extension replaces the font with a pixelated one, reminiscient of Super Mario Bros. It also takes any images on the page and pixelates them, giving the page a very 8-bit feel. 

### Inspiration
From the start of the project I knew I wanted to change the images and font to give the website a new identity. The decision to try for a pixelated 8-bit look came from a recent YouTube video I stumbled across which was showing off a fan remake of Castlevania with the original pixelated graphics, but from a first person perspective rather than the traditional side-scroller. Link to the video: [https://www.youtube.com/watch?v=F7j_gbIC2ao]



### Bugs
Currently, the images won't replace for any dynamically loading images (i.e. lazy load images).
My best guess as to why that is, is because pixelate.js takes the images and turns them into a canvas, however, once an image dynamically loads in pixelate.js doesn't take the image width and height information and attemps to just use the canvas, thus returning the error: 
"Uncaught DOMException: Failed to execute 'drawImage' on 'CanvasRenderingContext2D': The image argument is a canvas element with a width or height of 0."



## Citations

* Press Start 2P [https://fonts.google.com/specimen/Press+Start+2P?preview.text_type=custom]
* Pixelate.js plugin [https://github.com/43081j/pixelate.js/]
* Replace function which was a basis for trying to dynamically load images [https://github.com/MysteryPancake/Image-Replacer]