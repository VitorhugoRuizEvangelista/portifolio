// ================================
// PORTFÓLIO VT CORPIS
// Arquivo: assets/program.js
// ================================


// ================================
// ANO AUTOMÁTICO NO FOOTER
// ================================

const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}


// ================================
// BOTÃO VOLTAR AO TOPO
// ================================

const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        btnTopo.classList.add("ativo");
    } else {
        btnTopo.classList.remove("ativo");
    }
});

btnTopo.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ================================
// FECHAR MENU MOBILE AO CLICAR
// EM UM LINK DA NAVBAR
// ================================

const linksMenu = document.querySelectorAll(".navbar-nav .nav-link");
const menuNavbar = document.getElementById("menuNavbar");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {

        if (window.innerWidth < 992) {
            const menuBootstrap =
                bootstrap.Collapse.getInstance(menuNavbar);

            if (menuBootstrap) {
                menuBootstrap.hide();
            }
        }

    });
});


// ================================
// NAVBAR COM EFEITO AO ROLAR
// ================================

const navbar = document.querySelector(".navbar-industrial");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }

});


// ================================
// ANIMAÇÃO AO APARECER NA TELA
// ================================

const elementosReveal = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {
                entrada.target.classList.add("ativo");
            }

        });

    },
    {
        threshold: 0.15
    }
);

elementosReveal.forEach(function (elemento) {
    observer.observe(elemento);
});


// ================================
// LINK ATIVO NA NAVBAR
// ================================

const secoes = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let posicaoAtual = window.scrollY + 150;

    secoes.forEach(function (secao) {

        const topoSecao = secao.offsetTop;
        const alturaSecao = secao.offsetHeight;
        const idSecao = secao.getAttribute("id");

        if (
            posicaoAtual >= topoSecao &&
            posicaoAtual < topoSecao + alturaSecao
        ) {

            linksMenu.forEach(function (link) {
                link.classList.remove("active");

                if (
                    link.getAttribute("href") === "#" + idSecao
                ) {
                    link.classList.add("active");
                }
            });

        }

    });

});


// ================================
// ROLAGEM SUAVE PARA LINKS INTERNOS
// ================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (evento) {

        const destino = this.getAttribute("href");

        if (destino === "#") {
            return;
        }

        const elementoDestino =
            document.querySelector(destino);

        if (elementoDestino) {

            evento.preventDefault();

            const alturaNavbar =
                navbar ? navbar.offsetHeight : 0;

            const posicao =
                elementoDestino.offsetTop - alturaNavbar;

            window.scrollTo({
                top: posicao,
                behavior: "smooth"
            });

        }

    });

});


// ================================
// EFEITO NOS CARDS
// ================================

const cards = document.querySelectorAll(
    ".industrial-card, .tech-card, .skill-card, .future-card"
);

cards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {
        this.classList.add("card-hover");
    });

    card.addEventListener("mouseleave", function () {
        this.classList.remove("card-hover");
    });

});


// ================================
// MENSAGEM NO CONSOLE
// ================================

console.log(
    "%cVT CORPIS | PORTFÓLIO",
    "font-size: 20px; font-weight: bold;"
);

console.log(
    "Portfólio de Vitor Hugo - Métodos e Processos"
);