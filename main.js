nosex=0;
nosey=0;
function preload(){
    clown_nose_img=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}
function modelloaded(){
    console.log("Modelloaded");
}
function draw(){
    image(video,0,0,300,300);
    //fill(200,0,0);
    //stroke(200,0,0);
    //circle(nosex,nosey,20);
    image(clown_nose_img,nosex-20,nosey+5,40,30);
}
function takesnapshot(){
    save("Image.png");
    
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("nosex= "+results[0].pose.nose.x);
        console.log("nosey= "+results[0].pose.nose.y);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
    }
}