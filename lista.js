// Amtigamente
var listaAntiga = Array();

// Novo
let lista = []; 
console.log(lista);

//Adicionado um item
lista.push('carvão')
lista.push(10)
lista.push('ceveja sem alcool')

// Que todo array começa com zero
console.log(lista[0]);

// O pop sempre remove o ultimo item da lista
console.log(lista.pop())
console.log(lista);

//Remover item em posição especifica
console.log(lista.splice(1,0,'alcool'))

console.log(lista)
//filtrando imformação
console.groupCollapsed('ultilizando Filter')
console.log(lista.filter(e => e === 'carvão'))

// Buscando imformação find
console.log('ultilizando find')
console.log(lista.filter(e => e === 'carvão'))
//Adicionar item em posição especifica
console.log(lista); console.log(lista);

// verificar tamanho da lista
console.log('tamanho da lista')
console.log(lista.length)

console.log(lista);

let numeros = [1,2,3,4,5,6,7,8,9,10]
const resultados = numeros.map(Math.sqrt)
console.log('ultilizando Raiz quadrado')
console.log(resultados)