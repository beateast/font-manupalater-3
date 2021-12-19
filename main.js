noseX=0;
nosey=0;
difference = 0;
rightWristx = 0;
leftWristx = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].nose.pose.x;
        nosey = results[0].nose.pose.y;
        console.log("noseX = "+ noseX +"noseY = " + nosey);

        leftWristx = results[0].nose.leftWristx.x;
        rightWristx = results[0].nose.rightWristx.x;
        difference = floor(leftWristx - rightWristx);
        console.log("rightwristx = " + rightWristx +"leftwristx = " + leftWristx + "difference = " + difference);
    }
}

function draw() {
    background('#969A97');
    fill('F90093');
    stroke('F90093');
    square(noseX, nosey, difference);
}