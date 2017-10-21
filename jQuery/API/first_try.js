$(document).ready(function(){
  myRequest();
})

function myRequest(){
  $.getJSON('http://httpbin.org/gzip')
    .done(function(response) {
      alert('The get request is ready, click to proceed!');
      $('body > p').text(response.headers['User-Agent']);
    });
}
