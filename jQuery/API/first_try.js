function makeRequests(){
  $.ajax({
    url: 'http://httpbin.org/get',
    method: 'GET',
    dataType: 'json'
  })
  .done(function(response){
    $('p').text(
      JSON.stringify(response)
    );
  })
  .fail(function(){
    alert('The API not found');
  })
}

$(document).ready(function(){
  makeRequests();
})
