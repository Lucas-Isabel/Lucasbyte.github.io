exemplo = [
    {
        "nome": "Danilo",
        "idade": 18,
        "cep": "12345-678",
        "cargo": "Desenvolvedor",
        "apresentacao": "Me chamo Danilo e tenho 2 anos de experiencia com desenvolvimento front-end"
    }
]

const url = 'https://lucasbyte.github.io/api-estudos/cadastros.json';
$.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: function(data) {
        running(data)
    }
});

function insereCadastro(Candidato) {
    var tableBody = $("#Cadastros").find("tbody");
    nome = Candidato["nome"]
    console.log(nome)
    idade = Candidato["idade"]
    cep = Candidato["cep"]
    cargo = Candidato["cargo"]
    apresentacao = Candidato["apresentacao"]

    linha = "<tr>"+
                "<td>" + nome           + "</td>"+
                "<td>" + idade          + "</td>"+
                "<td>" + cep            + "</td>"+
                "<td>" + cargo          + "</td>"+
                "<td>" + apresentacao   + "</td>"+
            "</tr>";
    tableBody.append(linha);
}

function running(data){
data.forEach(pessoa => {
    console.log(pessoa)
    insereCadastro(pessoa)
});
}
