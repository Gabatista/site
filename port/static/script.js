/* abre e fecha menu lateral no modo mobile */

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

/* uso de callback -> função dentro de outra */
/* se conter lista -> troca pro x e vice versa */
menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains('bi-list') 
    ? menuMobile.classList.replace('bi-list','bi-x') 
    : menuMobile.classList.replace('bi-x','bi-list');
    
    body.classList.toggle('menu-nav-active')
});

/* fecha o menu quando clicar em qualquer item do menu lateral */
const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener('click', () => {
        if (body.classList.contains('menu-nav-active')) {
            body.classList.remove('menu-nav-active')
            menuMobile.classList.replace('bi-x', 'bi-list');
        }
    })
})

/* animando atributos com data-anime */

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    /*obtendo topo da página */
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach(element => {
        if (windowTop > element.offsetTop){
            element.classList.add("animate");
        } else{
            element.classList.remove("animate");
        }
    });
};

animeScroll();

window.addEventListener("scroll", () => {
    animeScroll();
})

/* ativa carregamento do botão de formulário */

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')

btnEnviar.addEventListener("click", () => {
    btnEnviarLoader.style.display = 'block';
    btnEnviar.style.display = 'none';
})

setTimeout(() => {
    document.querySelector("#alerta-flash").style.display = 'none'
}, 5000);