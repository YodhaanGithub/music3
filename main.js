song1= "";
song2= "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
 song1 = loadSound("metal.mp3");
 song2 = loadSound("town-10169.mp3");
}

function setup() {
    canvas = createCanvas( 600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    
    posenet = ml5.poseNet(video , modaloaded)
    posenet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}
function play() {
    song1.play();
    song2.play();
}    

function gotPoses(results) {
    if(results.length>0){
        console.log("results");
      leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;
      console.log("leftWristX" + leftWristX + "leftWirstY"+ leftWristY);
     
      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y; 
      console.log("rightWristX"+ rightWristX + "rightWristY"+ rightWristY)
    }
}

function modaloaded() {
    console.log("Posenet is On");
}