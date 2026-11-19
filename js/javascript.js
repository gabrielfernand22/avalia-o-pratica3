document.addEventListener("DOMContentLoaded", function () {

    // =========================================================
    // 1. EFEITO DE TRANSIÇÃO NO MENU AO ROLAR A PÁGINA
    // =========================================================
    const header = document.getElementById("header-principal");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("rolado");
        } else {
            header.classList.remove("rolado");
        }
    });

    // Inicializa o carrossel automático
    startAutoSlide();
    
function startAutoSlide() {
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }

    // =========================================================
    // 2. NAVEGAÇÃO ATIVA NO MENU
    // =========================================================
    const linksMenu = document.querySelectorAll(".link-menu");

    linksMenu.forEach(function (link) {
        link.addEventListener("click", function () {
            linksMenu.forEach(item => item.classList.remove("ativo"));
            this.classList.add("ativo");
        });
    });


    // =========================================================
    // 3. CARROSSEL ANIMADO (BOTÕES, INDICADORES E AUTOMÁTICO)
    // =========================================================
    const slides = document.querySelectorAll(".slide");
    const pontos = document.querySelectorAll(".ponto");
    const btnAvancar = document.getElementById("btn-avancar");
    const btnVoltar = document.getElementById("btn-voltar");

    let indiceAtual = 0;
    let intervaloCarrossel;

    function mostrarSlide(indice) {
        if (indice >= slides.length) {
            indiceAtual = 0;
        } else if (indice < 0) {
            indiceAtual = slides.length - 1;
        } else {
            indiceAtual = indice;
        }

        slides.forEach(slide => slide.classList.remove("ativo"));
        pontos.forEach(ponto => ponto.classList.remove("ativo"));

        slides[indiceAtual].classList.add("ativo");
        if (pontos[indiceAtual]) {
            pontos[indiceAtual].classList.add("ativo");
        }
    }

    if (btnAvancar && btnVoltar && slides.length > 0) {
        btnAvancar.addEventListener("click", function () {
            mostrarSlide(indiceAtual + 1);
            reiniciarTimer();
        });

        btnVoltar.addEventListener("click", function () {
            mostrarSlide(indiceAtual - 1);
            reiniciarTimer();
        });

        pontos.forEach(function (ponto, index) {
            ponto.addEventListener("click", function () {
                mostrarSlide(index);
                reiniciarTimer();
            });
        });

        function iniciarTimer() {
            intervaloCarrossel = setInterval(function () {
                mostrarSlide(indiceAtual + 1);
            }, 5000);
        }

        function reiniciarTimer() {
            clearInterval(intervaloCarrossel);
            iniciarTimer();
        }

        iniciarTimer();
    }


    // =========================================================
    // 4. INTERAÇÃO: BOTÃO "VER PROMOÇÃO" (ATIVIDADE 03 SENAI)
    // =========================================================
    const btnPromocao = document.getElementById("btn-promocao");
    const mensagemPromocao = document.getElementById("mensagem-promocao");
    let promocaoVisivel = false;

    if (btnPromocao && mensagemPromocao) {
        btnPromocao.addEventListener("click", function () {
            if (promocaoVisivel === false) {
                mensagemPromocao.classList.add("visivel");
                btnPromocao.textContent = "Ocultar promoção";
                promocaoVisivel = true;
            } else {
                mensagemPromocao.classList.remove("visivel");
                btnPromocao.textContent = "Ver promoção";
                promocaoVisivel = false;
            }
        });
    }

});