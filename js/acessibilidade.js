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
  
 
