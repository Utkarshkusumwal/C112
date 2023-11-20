Webcam.set({  // Webcam.set - is a function of webcam.js to see the properties for the live view 
    width:350, // set the width of webcam
    height:300, // set the height of webcam
    image_format : 'png', // format
    png_quality:90 // quality of the live view of a webcam
});

camera = document.getElementById("camera");
    // get the HTMl element in which we want to show the live view of the webcam 
Webcam.attach(' #camera ')
    // pass the id camera (which has the HTML div) inside Webcam.attach()
    // as soon as the page is loaded the webcam will get triggered  
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        // Webcam.snap() is a predefined function of webcam.js
        // used to take images from a webcam
        // data_uri var that can be used to show the preview of the image 
        document.getElementById("result").innerHTML = '<img id="captured_image" src = "'+data_uri+'"/>';
        // update the div
        // id to the img tag
        // src of the img tag we will pass data_uri
    });
}

console.log('ml5 version:', ml5.version);

// if we get the version number on the console screen without any error
// it means we are ready to use the ml5.js library

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/T6NgywyAu/", modelLoaded);

// define var classifier
// ml5 - library
// imageClassifier - predefined function of ml5.js library that is used to trigger the ml5.js image classification 
// pass two parameters inside this function - model.json, modelLoaded

// javascript object notation is an open standard file 
// format that is used to hold data in an object format

// modelLoaded - function will start the ml5 image classification   
// it helps in image classification 
function modelLoaded()  
{
    console.log("Model Loaded!");
    // console a message just to check that ml5 image classification has started
}

// start writing the JS machine learning

// new library which is ml5.js
// ml5.js helps us to work with diffrent models and do a comparison between our input with the model
// and give the result
// features of ml5.js - it provides a pre - taioned model which detects the model from a
// video OR webcam live preview
// if we get the version number on the console screen without any error,
// it means we are ready to use the ml5.js library
   