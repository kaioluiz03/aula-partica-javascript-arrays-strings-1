//1)Calcular a tabuada de multiplicar de 5.
//a)Adicionar o resultado de cada cálculo em um array.
//b)Transformar o array em string.
//c)Exibir no console.

let i = 1;
let valor = 5;
let calculo;

for(i = 1; i < 11; i++){
    calculo = (valor * i);
    let resultados = calculo;
    console.log(resultados.toString());
}

//2)Utilizar a fórmula abaixo para que converter uma temperatura de Fahrenheit para Celsius:
//a)n é o valor da temperatura a ser convertida.
//b)Dado o array  de temperaturas com os valores  54, 78, 56, 98, 0, 12, 11, 37
//c)Exibir no console cada uma das temperaturas convertidas de Fahrenheit para Celsius.

let valorTemperatura = [54, 78, 56, 98, 0, 12, 11, 37];

for(i = 0; i < valorTemperatura.length; i++){
    let n = valorTemperatura[i];
    let valorCelsius = (n - 32) / 1.8;
    console.log(n + "° Fahrenheit são " + valorCelsius.toFixed(0) + "° em Celsius.");
}