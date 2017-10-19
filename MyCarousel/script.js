
function moveFoward(){
  var next;
  var x = document.getElementById('carousel').getElementsByTagName('figure');
  for(i=0; i< x.length; ++i) {
    if(x[i].className == 'visible'){
      x[i].className = '';
      next = ++i;
    };
  };
  if(next == x.length){
    next = 0;
  }
  x[next].className = 'visible';
  setTimeout(moveFoward, 3500);
}

function setNextImg(){
  setTimeout(moveFoward, 3500);
}
setNextImg();
