var myElements = document.getElementsByTagName('li');

function getUserPosition(position) {
  myElements[0].innerHTML =  position.coords.longitude;
}

function getUserLocation() {
  navigator.geolocation.getCurrentPosition(getUserPosition);
}
