function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    song1= loadSound("No Friends-Cadmium.mp3");
    song2 = loadSound("Believer-Imagine Dragon.mp3");
}

function draw(){
    image(video,0,0,600,530);
}