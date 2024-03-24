$(document).ready(function () {
    const url = 'https://lucasbyte.github.io/api-estudos/cadastros.json';
    let dados = []; // Inicializando como array vazio

    // Função para gerar a tabela de cadastros
    function gerarTabela(cadastros) {
        const tableBody = $("#Cadastros").find("tbody");
        tableBody.empty(); // Limpa o corpo da tabela antes de inserir os dados

        cadastros.forEach((candidato, index) => {
            const linha = `
                <tr>
                    <td>${candidato.nome}</td>
                    <td>${candidato.idade}</td>
                    <td class="cargo">${candidato.cargo}</td>
                    <td class="carta truncate" data-index="${index}">${candidato.apresentacao}</td>
                </tr>`;
            tableBody.append(linha);
        });
    }

    $('body').on("click", '.carta', function () {
        const index = $(this).data('index');
        $('.carta').eq(index).toggleClass('truncate');
    });
    

    // Função de comparação para ordenar por nome
    function compararPorNome(a, b) {
        const nomeA = a.nome.toUpperCase();
        const nomeB = b.nome.toUpperCase();

        if (nomeA < nomeB) {
            return -1;
        }
        if (nomeA > nomeB) {
            return 1;
        }
        return 0;
    }

    // Função de comparação para ordenar por idade
    function compararPorIdade(a, b) {
        return a.idade - b.idade;
    }

    // Função de comparação para ordenar por cargo
    function compararPorCargo(a, b) {
        const cargoA = a.cargo.toUpperCase();
        const cargoB = b.cargo.toUpperCase();

        if (cargoA < cargoB) {
            return -1;
        }
        if (cargoA > cargoB) {
            return 1;
        }
        return 0;
    }

    // Função principal para ordenar e gerar a tabela conforme a escolha do usuário
    function ordenarECriarTabela(ordem) {
        let cadastrosOrdenados = [];

        switch (ordem) {
            case 'nome':
                cadastrosOrdenados = dados.slice().sort(compararPorNome);
                break;
            case 'idade':
                cadastrosOrdenados = dados.slice().sort(compararPorIdade);
                break;
            case 'cargo':
                cadastrosOrdenados = dados.slice().sort(compararPorCargo);
                break;
            default:
                cadastrosOrdenados = dados.slice(); // Caso a ordem não seja especificada, mantém a ordem original
                break;
        }

        gerarTabela(cadastrosOrdenados);
    }

    $(".OderByName").on("click", function () {
        // Requisição AJAX para obter os dados
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                dados = data; // Armazena os dados na variável dados

                // Exemplo de uso: chame a função ordenarECriarTabela('nome') para ordenar por nome, 'idade' para ordenar por idade, ou 'cargo' para ordenar por cargo
                ordenarECriarTabela('nome'); // Chamando a função inicialmente para ordenar por nome
            },
            error: function (error) {
                console.log('Erro ao carregar os dados:', error)
            }
        })
    })

    $(".OderByAge").on("click", function () {
        // Requisição AJAX para obter os dados
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                dados = data; // Armazena os dados na variável dados

                // Exemplo de uso: chame a função ordenarECriarTabela('nome') para ordenar por nome, 'idade' para ordenar por idade, ou 'cargo' para ordenar por cargo
                ordenarECriarTabela('idade'); // Chamando a função inicialmente para ordenar por nome
            },
            error: function (error) {
                console.log('Erro ao carregar os dados:', error)
            }
        })
    })

    $(".OderByProf").on("click", function () {
        // Requisição AJAX para obter os dados
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                dados = data; // Armazena os dados na variável dados

                // Exemplo de uso: chame a função ordenarECriarTabela('nome') para ordenar por nome, 'idade' para ordenar por idade, ou 'cargo' para ordenar por cargo
                ordenarECriarTabela('cargo'); // Chamando a função inicialmente para ordenar por nome
            },
            error: function (error) {
                console.log('Erro ao carregar os dados:', error)
            }
        })
    })

});

