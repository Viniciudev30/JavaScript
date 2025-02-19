console.log(` \n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
);

const idadeComprador = 20;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos possiveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
for (let cont = 0; contador < 3; cont++ ) 
    {
    
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Desculpe tivemos um erro");
}

