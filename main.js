

document.getElementById('button1').onclick = function () {

  var delayInMilliseconds = 100; //1 second

  setTimeout(function() {
    document.body.scrollTop = 999;
     document.documentElement.scrollTop = 999;
  }, delayInMilliseconds);


document.getElementById('mydiv').style.display = 'block';
var mydiv = $("#mydiv");
var myDivMain = $("#myDivMain");
 mydiv.addClass("alt");
 myDivMain.addClass("alt");

  var select01 = document.getElementById('inputGroupSelect01').value;
  var select02 = document.getElementById('inputGroupSelect02').value;
  var select03 = document.getElementById('inputGroupSelect03').value;
  var select04 = document.getElementById('inputGroupSelect04').value;
  var select05 = document.getElementById('inputGroupSelect05').value;
  var pointesAdded = Number(select01) + Number(select02)+Number(select03)+Number(select04)+Number(select05);
  if (pointesAdded >=1 && pointesAdded <=2 ) {
    // alert(pointesAdded + "; 1 to 3");
    document.getElementById("demo").innerHTML = "R100 to R150";
  }
  else if (pointesAdded >=3 && pointesAdded <=5 ) {
    // alert(pointesAdded + "; 3 to 6");
    document.getElementById("demo").innerHTML = "R220 to R250";
  }
  else if (pointesAdded >=6 && pointesAdded <=9 ) {
    // alert(pointesAdded + "; 6 to 9");
    document.getElementById("demo").innerHTML = "R251 to R280";
  }
  else if (pointesAdded >=10 && pointesAdded <=12 ) {
    // alert(pointesAdded + "; 10 to 12");
    document.getElementById("demo").innerHTML = "R281 to R310";
  }
  else if (pointesAdded >=13 && pointesAdded <=16 ) {
    // alert(pointesAdded + "; 13 to 16");
    document.getElementById("demo").innerHTML = "R311 to R340";
  }
  else if (pointesAdded >=17 && pointesAdded <=20 ) {
    // alert(pointesAdded + "; 17 to 20");
    document.getElementById("demo").innerHTML = "R341 to R400";
  }

  // document.getElementById(target).style.display = 'block';
// alert(pointesAdded);
// function BMI(height, weight) {
//     return (weight / (height * height));
// }
};
