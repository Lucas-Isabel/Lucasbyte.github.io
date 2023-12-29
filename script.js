document.addEventListener('DOMContentLoaded', function () {
    var produtoCarousel = document.getElementById('produtoCarousel');
    
    if (produtoCarousel) {
        // Adicione um listener para o evento de clique nos botões de navegação
        produtoCarousel.addEventListener('click', function (event) {
            if (event.target.classList.contains('button-prev')) {
                moverCarousel(-1);
            } else if (event.target.classList.contains('button-next')) {
                moverCarousel(1);
            }
        });

        // Função para mover o carrossel
        function moverCarousel(direction) {
            var produtos = produtoCarousel.querySelectorAll('.produto');
            var tamanhoProduto = produtos[0].offsetWidth + 16; // Considere a largura do produto e a margem

            // Calcule a nova posição do carrossel
            var novaPosicao = produtoCarousel.scrollLeft + direction * tamanhoProduto;

            // Anima a rolagem suave
            produtoCarousel.scrollTo({
                left: novaPosicao,
                behavior: 'smooth'
            });

            // Se atingiu o final do carrossel, volte ao início
            if (direction === 1 && novaPosicao >= produtoCarousel.scrollWidth - produtoCarousel.clientWidth) {
                produtoCarousel.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            } else if (direction === -1 && novaPosicao <= 0) {
                // Se estiver no início, vá para o final do carrossel
                produtoCarousel.scrollTo({
                    left: produtoCarousel.scrollWidth,
                    behavior: 'smooth'
                });
            }
        }
    }
});