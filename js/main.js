const iconoMenu = document.querySelector('#icono-menu');
const menu = document.getElementById('nav-menu');

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


/*------------------------------Carrito de compras--------------------------------------*/

const botonAgregarCarrito = document.querySelectorAll('.products__button');
botonAgregarCarrito.forEach(botonCarrito => {
    botonCarrito.addEventListener('click', clickBotonCarrito);
});

function clickBotonCarrito (event){
    const button = event.target;
    const item = button.closest('.products__card')
    
    const itemTitle = item.querySelector('.products__name').textContent;
    const itemPrice = item.querySelector('.products__price').textContent;
    console.log("🚀 ~ file: main.js ~ line 40 ~ clickBotonCarrito ~ itemPrice", itemPrice)
    
    
}
