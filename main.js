noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(500,500);
    canvas.position(560,101);

    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on("pose", GotPosses);
}

function ModelLoaded() 
{
    console.log("Posnet is Dumber than a pluot")
}

function GotPosses(results)
{
    if(results.length > 0)
   { console.log(results);

    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("NoseX =" + noseX + "NoseY =" + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);


    console.log("leftWrist =" + leftWristX + "rightWrist=" + rightWristX + "difference=" + difference);
}}

function draw()
{
    background("#969A97");
    document.getElementById("square_side").innerHTML = "The width of the square is: " + difference + "px";
    fill("#a83232");
    stroke("#34a832");
    square(noseX , noseY, difference);
}

