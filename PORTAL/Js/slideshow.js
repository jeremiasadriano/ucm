var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
  // Apply to all slideshows that you define with the markup wrote
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Buscar um array(lista) de imgs para o slide 

    var indice = 0, time = 3500;
    slides[indice].classList.add('active');  
    
    setInterval( () => {
      slides[indice].classList.remove('active');
      
      //Atravessar todo o slide, atraves do indice de cada imagem
      indice++;
      
      //Se percorrer todas as imagens do slideshow, o indice volta ser zero de modo a mostrar o primeiro slide outra vez
      if (indice === slides.length) indice = 0; 
      
      slides[indice].classList.add('active');

    }, time);
  } 