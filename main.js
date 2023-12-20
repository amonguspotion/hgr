Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById('camera');

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotresult)
}

console.log('ml5 version: ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WrMqld84K/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded');
}

function gotresult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results)
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
    }
}