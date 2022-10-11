const nome = "Pedro Catarina";
let nome2 = "";
let pessoaDefault = {
    nome: "Pedro Catarina",
    idade: "23",
    trabalho: "Desenvolvedor" 
}

let nomes = ["Pedro Catarina","Francisco","Billy"]
let pessoas = [
    {
        nome: "Victoria",
        idade: "23",
        trabalho: "Desenvolvedor"  
    },
    {
        nome: "Francisco",
        idade: "18",
        trabalho: "Vendas"
    },
    {
        nome: "Billy",
        idade: "28",
        trabalho: "Professora"
    }
]

function alterarnome() {
    nome2 = "Maria"
    console.log("Valor alterado:")
    console.log(nome2)
}

function recebeEalteranome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);  
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho); 
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Paola",
    idade: "18",
    trabalho: "Não Trabalha"
});

imprimirPessoas();