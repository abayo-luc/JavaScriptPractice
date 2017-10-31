var x = document.getElementById('coordinates');

function userPosition(position) {
  x.innerHTML = "Latitude:" + position.coords.latitude + " <br>Longitude:" + position.coords.longitude
}

function userLocation() {
  navigator.geolocation.getCurrentPosition(userPosition);
}
