// each separate functions below

function fToM(){

  var measure = parseInt(document.getElementById("value1").value);
// x is invalid operator, was replaced with * (multiplication symbol)
// if field is left empty pop up message box
if (!fToM)
	alert("Please enter a valid measurement");
//ensuring the measure is above 0 and between 9999999999
else (fToM < 0 || fToM > 9999999999)

  var meters = measure * 0.3048;
  //

	alert("Please enter a valid measurement");


  var message = measure + ' feet converts to ' + meters + ' meters.';
  //console.log is the correct operator was updated from the error in code
  console.log(message);
  //camel case is used for each word, the b of by was lowercase rendering it invalid
  document.getElementById("resultsentence").innerHTML = message;
  
}

// once this is corrected above i copyied and pasted to below..

/* Then, all that is required is new function names. And also to define these functions using the correct names,
and duplicating the buttons. Then also making sure the function names match.

Once i realised the above errors i completed this work in less than 10 minutes. Errors in the code were an easy spot
i am disappointed with myself for not spotting them in the ca after them staring at me.
*/



function inchesToCentimeters(){

  var measure = parseInt(document.getElementById("value1").value);
if (!inchesToCentimeters)
	alert("Please enter a valid measurement");
else (inchesToCentimeters < 0 || inchesToCentimeters > 9999999999)
  var centimeters = measure * 2.54;
  	alert("Please enter a valid measurement");
  var message = measure + ' feet converts to ' + centimeters + ' centimeters.';
  console.log(message);
    
  document.getElementById("resultsentence").innerHTML = message;
}




function yardsToMeters(){

  var measure = parseInt(document.getElementById("value1").value);
if (!yardsToMeters)
	alert("Please enter a valid measurement");
else (yardsToMeters < 0 || yardsToMeters > 9999999999)
  var yards = measure * 0.9144;
  	alert("Please enter a valid measurement");
  var message = measure + ' feet converts to ' + yards + ' yards.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}




function milesToKilometers(){

  var measure = parseInt(document.getElementById("value1").value);
if (!milesToKilometers)
	alert("Please enter a valid measurement");
else (milesToKilometers < 0 || milesToKilometers > 9999999999)
  var kilometers = measure * 1.60934;
  	alert("Please enter a valid measurement");
  var message = measure + ' miles converts to ' + kilometers + ' kilometers.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}


