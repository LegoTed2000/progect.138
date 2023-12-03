function preload() {
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canavs");

	video = creatCapture(VIDEO);
	video.hide

	objectDetector = ml5.objectDetector("cocossd", modelLoaded)
}

function draw() {
	image(video, 0, 0, 1240, 336);
}

function restart() {
    
}

function modelLoaded() {
    console.log( "It worked");
    
    objectDetector.detect(img, gotResults);
}
