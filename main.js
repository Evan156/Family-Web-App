Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

Webcam.attach("#camera")


function take_snapshot() {


    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });

}

console.log(ml5.version)

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Toe3Tg_U3/model.jason', modelLoaded); // import model

function modelLoaded() { // check if model is loaded
    console.log('Model Loaded!');
}