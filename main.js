nose_x = 0
nose_y = 0
leftWrist_x = 0
rightWrist_x = 0
dif = 0 



function setup(){
canvas = createCanvas(400 , 400)
canvas.center()
video = createCapture(VIDEO)
video.size(550 , 500)
 posenet = ml5.poseNet(video, modelLoaded)
 posenet.on('pose' , gotPoses)
}
function draw(){
    background("white")
    textSize(dif)
    text("Apple" , nose_x , nose_y)

}
function modelLoaded(){
    console.log('Posenet is Initiallized')
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        nose_x = results[0].pose.nose.x
        nose_y = results[0].pose.nose.y
        leftWrist_x = results[0].pose.leftWrist.x
        rightWrist_x = results[0].pose.rightWrist.x
        dif = leftWrist_x - rightWrist_x
        console.log(dif)

    }
}