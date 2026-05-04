// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// let numero = parseInt(prompt("Inserir Número"));

// for (let i = 1; i <= 10; i++){
//     let resultado = numero * i;
//     console.log(numero + "X" + i + " = " + resultado);
// }
// for (let i = 1; i <= 5; i++){
//    if (i == 3){
//     break;
//    }
//    console.log(i);
// }
// let repetir = true;
// while (repetir){
//     console.log('Ao infinito e....Além!');
// }
let numero = 0;
do {
    //Repetimos com do...while enquanto o usuário não inserir um número
    numero = prompt("Inserir um número");
    console.log(numero);
} while (parseInt(numero));

