//pegar o imput
//se for sim, mostra as categorias didisponiveis, pergunta qual categoria ela escolhe
//se não, mostra todos os livros em ordem crescente pela quantidade de páginas

const livros = require('./database')

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N:')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categoras disponíveis:');
    console.log('Livro de autoajuda', '/Produtividade e financas', '/Desenvolvimento', '/Desenvolvimento pessoal', '/Autoajuda', '/Produtividade e estilo de vida')
    
    const entradaCategoria = readline.question('Qual categoria você escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados =  livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Essas são todos os livros disponíveis: ');
    console.table(livrosOrdenados);
}
