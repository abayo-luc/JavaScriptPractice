function nextImage() {
  var pointer;
  var figures = document.getElementById('carousel').getElementsByTagName('figure');
  for(i=0; i < figures.length; ++i) {
    if(figures[i].className == 'visible'){
      figures[i].className = '';
      pointer = ++i;
    };
  };
  if(pointer == figures.length) {
    pointer = 0;
  }
  figures[pointer].className = 'visible'
}

function prevImage(){
  var pointer;
  var figures = document.getElementById('carousel').getElementsByTagName('figure');
  for(i=0; i < figures.length; ++i) {
    if(figures[i].className == 'visible'){
      figures[i].className = '';
      pointer = i - 1;
    };
  };
  if(pointer < 0) {
    pointer = figures.length - 1;
  }
  figures[pointer].className = 'visible'
}

function nextSlide(){
  nextImage();
}

function prevSlide(){
  prevImage();
}
