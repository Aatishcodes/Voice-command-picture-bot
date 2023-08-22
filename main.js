var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = " "
    recognition.start()
}

recognition.onresult = function (event) {
    console.log(event)
    var content = event.results[0][0].transcript
    console.log(content)
    document.getElementById("textbox").innerHTML = content
    if (content == "take my selfie") {
        speak()
    }
}

camera = document.getElementById("camera")
function speak() {
    var synth = window.speechSynthesis
    speak_data = document.getElementById("textbox").innerHTML
    var utterthis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterthis)


    Webcam.attach(camera)
    Webcam.set({
        width: 360,
        height: 250,
        image_format: "jpeg",
        jpeg_quality: 90
    });
    setTimeout(function () {
        take_snapShot();
        save();
    }, 5000);

}

function take_snapShot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
    });

}

function save(){
    link = document.getElementById("link")
    image = document.getElementById("selfie_image").src 
    link.href = image
    link.click()
}

