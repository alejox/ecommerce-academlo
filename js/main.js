const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menu y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'img/open-menu.svg'){
        e.target.setAttribute('src','img/open-menu2.svg');
    }else{
        e.target.setAttribute('src','img/open-menu.svg');
    }
});


window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('abajo', this.window.scrollY>0);
})