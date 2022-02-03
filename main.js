function setup() {
    canvas = createCanavas (480, 380);
    canvas.center();
}

function draw() {
    Image(video, 0, 0, 480, 380);
 
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status : Detecting 0bject";
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

