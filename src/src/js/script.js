
let combustivel = prompt("Digite o tipo de combustivel");
if(combustivel == "gasolina"){
    alert('O veículo se move á gasolina');  
}
else if(combustivel == 'alcool'){
    alert('o veiculo se move à alcool');
}
else if(combustivel == 'disel'){
    alert('o veiculo se move à disel');
}
else{
    alert('o veiculo só pode ser eletrico');
}

let umNum = parseInt(prompt("Insira um número de 1 a 5: "));

if(umNum == '1'){
    alert(`digitou o nº um`);
}
else if(umNum == '2'){
    alert(`digitou o nº dois`);
}
else if(umNum == '3'){
    alert(`digitou o nº três`);
}
else if(umNum == '4'){
    alert(`digitou o nº quatro`);
}
else if(umNum == '5'){
    alert(`digitou o nº cinco`);
}
else((umNum >= '1') || (umNum <= '5'));{
    alert(`número invalido`)
};

let num = parseInt(prompt('Digite um numeo entre 1 e 100'));
if(num <= '10'){
    alert(` numero digitado: ${num} está entre 1 e 10` )
}
else if(num <= '20'){
    alert(`o numero digitado: ${num} esta entre 11 e 20`)
}
else if(num <= '30'){
    alert(`o numero digitado: ${num} esta entre 21 e 30`)
}
else if(num <= '40'){
    alert(`o numero digitado: ${num} esta entre 31 e 40`)
}
else if(num <= '50'){
    alert(`o numero digitado: ${num} esta entre 41 e 50`)
}
else if(num <= '60'){
    alert(`o numero digitado: ${num} esta entre 51 e 60`)
}
else if(num <= '70'){
    alert(`o numero digitado: ${num} esta entre 61 e 70`)
}
else if(num <= '80'){
    alert(`o numero digitado: ${num} esta entre 71 e 80`)
}
else if(num <= '90'){
    alert(`o numero digitado: ${num} esta entre 81 e 90`)
}
else if(num <= '100'){
    alert(`o numero digitado: ${num} esta entre 91 e 100`)
}else if(num > '100'){
    alert(`o numero digitado é maior`)
}
console.log(`${num}`)

var nome = prompt("Inserir nome");
if((nome == "ANNA") || (nome == "anna") || (nome =="Anna"));{
    alert('O nome inserido é Anna');
} else{
    alert('O nome inserido NÃO é Anna');
}

var nome = prompt("Inserir nome: ");
var eVazio = nome == "";
if (!Vazio){
    alert("Nome: " + nome);
} else{
    alert("Nome é vazio");
}

var idade = prompt("Inserir idade");
if(idade < '18'){
    alert("É jobem");
}
else if((idade>= '18') && (idade < '60')){
    alert('é adulto');
}
else{
    alert("é idoso");
}