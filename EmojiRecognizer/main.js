 
      Webcam.attach("#camera")
      camera = document.getElementById("camera")

      Webcam.set({
          width:300,
          height:300,
          image_format:"jpeg",
          image_quality:90,
      })

      function take_selfie() {
          console.log("Webcam.snap();")
          Webcam.snap(function(data_uri) {
              document.getElementById("result").innerHTML = "<center> <img height='400' width='400' src='" +data_uri+"'> <br> <button style='border-radius: 5px; font-size: 130%; border-width: 0px; color: white; background-color:rgb(0, 0, 25)'>Predict Emoji</button> </center>"
          });
          
      }

      
      
      console.log("ml5 -v: " + ml5.version);

      classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/o9Utv_YDW/',modelLoaded);
      
      function modelLoaded() {
          console.log("Model Loaded Successfully.")
      }
      function check() {
          img = document.getElementById("selfie-image");
          classifier.classify(img, gotResult);
      }

      function gotResult(error, results) {
          if(error) {
              error.throw(error)
          } else {
              document.getElementById("predictionOne").innerHTML = results[0].label;
              document.getElementById("predictionTwo").innerHTML = results[1].label;

              prediction1 = results[0].label;
              prediction2 = results[1].label;

              console.log(prediction1 + ", " + prediction2)
          }
      }