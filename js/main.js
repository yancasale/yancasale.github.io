// Loader

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

// Navbar Stickytop 

window.onscroll = function () {
    myFunction()
  };
  
  let navbar = document.getElementById("stickytop");
  let sticky = navbar.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
      navbar.classList.add("redbg")
    } else {
      navbar.classList.remove("sticky")
      navbar.classList.remove("redbg")
    }
  }

// Hamburger Menu 

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
    const nav = document.getElementById('stickytop')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)

// Acessibilidade 

$(document).on('click', '.acessibilidadeMenu__item.bold', function (event) {
    $(this).toggleClass('active');
    $('body').toggleClass('bodyBold');
  });
  
  $(document).on('click', '.acessibilidadeMenu__item.largerFont', function (event) {
    $(this).toggleClass('active');
    $('body').toggleClass('largerFont');
  });
  
  
  $(document).on('click', '.acessibilidadeMenu__item.contraste', function (event) {
    $(this).toggleClass('active');
    $('body').toggleClass('contraste');
  });

// Geolocalização 

const encuentrame = () => {
    const success = (position) => {
        const divCoordenadas = document.getElementById("coordenadas");
        const divMapa = document.getElementById("mapa");
        console.log(position);
        const { latitude , longitude } = position.coords;
        console.log(latitude, longitude);

        divCoordenadas.innerHTML = `lat: ${latitude}, lng: ${longitude}`;
    
        const mapa = new Image();
        mapa.src = `https://www.mapquestapi.com/staticmap/v5/map?key=	q1SPCGzNnDMhMA32HfmJ1kKGduSknKKR&locations=${latitude},${longitude}&size=400,300`;
        divMapa.appendChild(mapa);
    };

    const errorPosicion = (error) => {
        const divCoordenadas = document.getElementById("coordenadas");
        divCoordenadas.innerHTML = `Erro ao obter localização:<br> Error ${error.code}: ${error.message}`;
    };

    navigator.geolocation.getCurrentPosition( success , errorPosicion );
};

const verificarGeo = () => {
    if(!navigator.geolocation){

    const divCoordenadas = document.getElementById("coordenadas");
    divCoordenadas.innerHTML ="<p>localização não suportada pelo navegador</>";
    return;
    }

  encuentrame();
};

verificarGeo();
  