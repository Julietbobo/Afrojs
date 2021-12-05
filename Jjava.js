var myImage = document.querySelector('img');

function myFunction() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firebal.jpg') {
      myImage.setAttribute('src','images/firebal2.png');
    } else {
      myImage.setAttribute('src','images/firebal.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function userName(){
  var put = prompt('insert your name');
  if(!put){userName();
  }
  else{
  localStorage.setItem('name', put);
  myHeading.textContent = 'Mozilla is cool, ' + put;
  }
}
if(!localStorage.getItem('name')) {
  userName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
