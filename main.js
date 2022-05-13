Webcam.attach ('#camera');
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    })
}

console.log('ml5 version:', ml5.version);


classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hFeddn_TN/model.json',modelLoaded);

  // When the model is loaded
  function modelLoaded() {
    console.log('Model Loaded!');
  }

function check(){
img = document.getElementById("selfie_image");
classifier.classify(img,gotResult);
}

function gotResult (error,results){
   if (error){
    console.log(error);
   }
   else{
       console.log(results)
       document.getElementById("smt").innerHTML ="Object: "+results[0].label
       x=results[0].confidence.toFixed(3)
       document.getElementById("Accuracy").innerHTML ="Accuracy: "+x*100
   }
}
