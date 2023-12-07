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

	if(scorerightwrist > 0.2) {
        circle(rightWristx, rightWristy , 20);

		r = Math.random(255);
		g = Math.random(255);
		b = Math.random(255);

		fill(r, g, b);
		percent = floor(objects[i].confidence * 100)
		noFill();
		text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
		stroke(r, g, b);
		rect(objects[i].x , objects[i].y, objects[i].width, objects[i].height);
    }
}

game_status = "";

function restart() {
}

function start() {
	game_status = "start";
	document.getElementById("status").innerHTML = "Game Is Loaded!";
}

function modelLoaded() {
    console.log( "It worked");
    
    objectDetector.detect(img, gotResults);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        scoreleftwrist = results[0].pose.keypoints[9].scoreleftwrist;

        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        console.log("left wrist x is - "+ leftWristx + "left wrist y is - "+ leftWristy);

        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.xy;
        console.log("right wrist x is - "+ rightWristx + "right wrist y is - "+ rightWristy);
    }
}
