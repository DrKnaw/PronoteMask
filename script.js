var fait
window.setInterval( function(){ // Loop every 10ms
    
    if(fait !== true) { // do this if "fait" !== true
        var element = document.getElementById("GInterface.Instances[0].Instances[0]"); // get the banner
        if(element !== "null") {
            element.parentNode.removeChild(element); // Remove the banner with your name.
            document.title = 'Pronote'; // Put a new title without the name of your school.
            fait = true // set the var "fait" == "true"
        }
    }
  },10)