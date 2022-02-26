noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage("https://i.postimg.cc/28pyJydK/580b57fbd9996e24bc43bed5-1.png");
}
function setup(){
canvas = createCanvas(400, 400);
canvas.center();
video=createCapture(VIDEO);
video.size(400, 400);
video.hide();
poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}
function draw(){
image(video, 0, 0, 400, 400)
fill(255, 0, 0);
stroke(255, 0, 0);
circle(noseX, noseY, 25);
image(clown_nose, noseX-10, noseY-10, 25, 25);

}
function take_pic(){
    save("clownnose_pic.png");
}
function modelLoaded(){
    console.log("model successfully loaded");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    console.log("nose x is =", results[0].pose.nose.x);
    console.log("nose y is =", results[0].pose.nose.y);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;

}
}