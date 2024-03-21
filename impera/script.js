document.addEventListener("DOMContentLoaded", function () {
    // Configurações do carrossel
    const carouselContainer = document.getElementById("produtoCarousel");
    const produtos = document.querySelectorAll(".produto");
    const intervaloDeTroca = 2500; // Tempo em milissegundos (5 segundos neste exemplo)

    let currentIndex = 0;

    // Função para mostrar o próximo slide
    function mostrarProximoSlide() {
        produtos[currentIndex].classList.remove("ativo");
        currentIndex = (currentIndex + 1) % produtos.length;
        produtos[currentIndex].classList.add("ativo");
    }

    // Inicia o carrossel automático
    setInterval(mostrarProximoSlide, intervaloDeTroca);
});