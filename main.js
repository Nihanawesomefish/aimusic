function preload(){
song1=loadSound("music.mp3");
song2=loadSound("music2.mp3");
}
function setup(){
canvas=createCanvas(0,0,700,450);
canvas.center();
video=createCapture(VIDEO);
video.size(700,450);
console.log("cocolachocolate");
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}
function draw(){
background("black");
console.log("cococolaesestoma");
image(video, 0,0,700,450);
}
function modelLoaded(){
console.log("posenet is initialized")
}
function gotPoses(results){
    if(results.length>0){
     console.log(results);
     leftwristx=results[0].pose.leftWrist.x;
     leftwristy=results[0].pose.leftWrist.y;
     rightwristx=results[0].pose.rightWrist.x;
     rightwristy=results[0].pose.rightWrist.y;
     score_leftwrist=results[0].pose.keypoints[9].score;
     score_rightwrist=results[0].pose.keypoints[10].score;
    }
    }