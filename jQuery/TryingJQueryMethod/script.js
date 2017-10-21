$(document).ready(function(){
  manupulateDOM();
}
);

function manupulateDOM(){
  var h1headers = $('h1');
  h1headers.text('Hello World');
  var h3headers = $('h3');
  h3headers.css('color', 'green');
  h3headers.first().css('text-decoration', 'line-through');
  var lasth3header = $('h3:last');
  lasth3header.css('background-color', 'yellow');
}
