// calcula a derivada de uma função
function derivada(f: any, x: number) {
    return (f(x + 0.001) - f(x)) / 0.001;
}

// calcula a integral de uma função
function integral(f: any, a: number, b: number) {
    let h = 0.00001;
    let sum = 0;
    for (let x = a; x < b; x += h) {
        sum += f(x) * h;
    }
    return sum;
}

// calcula o limite de uma função
function limite(f: any, a: number, b: number) {
    return f(a) - f(b);
}

// Divisibilidade por 2
// Um número é divisível por 2 se ele é par, ou seja, termina em 0, 2, 4, 6 ou 8.
// Exemplos: O número 5634 é divisível por 2, pois o seu último algarismo é 4, mas 135 não é divisível por 2,
//     pois é um número terminado com o algarismo 5 que não é par.
function divisibilidadePor2(num: number) {
    return num % 2 == 0;
}

//  Divisibilidade por 3
// Um número é divisível por 3 se a soma de seus algarismos é divisível por 3.
// Exemplos:
// 18 é divisível por 3 pois 1 + 8=9 que é divisível por 3,
//     576 é divisível por 3 pois: 5 + 7 + 6=18 que é divisível por 3,
//         134 não é divisível por 3, pois 1 + 3 + 4=8 que não é divisível por 3.
function divisibilidadePor3(num: number) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum % 3 == 0;
}

//  Divisibilidade por 4
// Um número é divisível por 4 se o número formado pelos seus dois últimos algarismos é divisível por 4.
// Exemplos:
// 4312 é divisível por 4, pois 12 é divisível por 4
// 1635 não é divisível por 4 pois 35 não é divisível por 4.
// 1800 é divisível por 4, pois termina em 00.
// 4116 é divisível por 4, pois 16 é divisível por 4.
// 8
// 1324 é divisível por 4, pois 24 é divisível por 4.
// 3850 não é divisível por 4, pois não termina em 00 e 50 não é divisível por 4.
function divisibilidadePor4(num: number) {
    let last2 = num % 100;
    return last2 % 4 == 0;
}

//  Divisibilidade por 5
// Um número é divisível por 5 se o seu último algarismo é 0(zero) ou 5.
// Exemplos:
// 75 é divisível por 5 pois termina com o algarismo 5
// 107 não é divisível por 5 pois o seu último algarismo não é 0(zero) nem 5.
function divisibilidadePor5(num: number) {
    return num % 10 == 0 || num % 10 == 5;
}

//  Divisibilidade por 6
// Um número é divisível por 6 se é par e a soma de seus algarismos é divisível por 3.
// Exemplos: 756 é divisível por 6, pois 756 é par e a soma de seus algarismos: 7 + 5 + 6=18 é divisível por 3, 527
// não é divisível por 6, pois não é par e 872 é par mas não é divisível por 6 pois a soma de seus algarismos:
// 8 + 7 + 2=17 não é divisível por 3.
function divisibilidadePor6(num: number) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return num % 2 == 0 && sum % 3 == 0;
}

//  Divisibilidade por 7
// Um número é divisível por 7 se o dobro do último algarismo, subtraído do número sem o último algarismo,
//     resultar um número divisível por 7. Se o número obtido ainda for grande, repete - se o processo até que se possa
// verificar a divisão por 7.
// Exemplo: 165928 é divisível por 7 pois:
// 16592 Número sem o último algarismo
//     - 16 Dobro de 8(último algarismo)
// 16576 Diferença
// Repete - se o processo com este último número.
// 1657 Número sem o último algarismo
//     - 12 Dobro de 6(último algarismo)
// 1645 Diferença
// Repete - se o processo com este último número.
// 164 Número sem o último algarismo
//     - 10 Dobro de 5(último algarismo)
// 154 Diferença
// Repete - se o processo com este último número.
// 15 Número sem o último algarismo
//     - 8 Dobro de 4(último algarismo)
// 7 Diferença
// A diferença é divisível por 7, logo o número dado inicialmente também é divisível por 7.
// Exemplo: 4261 não é divisível por 7, pois:
// 9
// 426 Número sem o último algarismo
//     - 2 Dobro do último algarismo
// 424 Diferença
// Repete - se o processo com este último número.
// 42 Número sem o último algarismo
//     - 8 Dobro do último algarismo
// 34 Diferença
// A última diferença é 34 que não é divisível por 7, logo o número 4261, dado inicialmente, não é divisível por 7.
function divisibilidadePor7(num: number) {
    let last = num % 10;
    let num2 = Math.floor(num / 10);
    let sum = 0;
    while (num2 > 0) {
        sum += num2 % 10;
        num2 = Math.floor(num2 / 10);
    }
    return last * 2 - sum % 7 == 0;
}

//  Divisibilidade por 8
// Um número é divisível por 8 se o número formado pelos seus três últimos algarismos é divisível por 8.
// Exemplos: 45128 é divisível por 8 pois 128 dividido por 8 fornece 16, mas 45321 não é divisível por 8 pois
// 321 não é divisível por 8.
function divisibilidadePor8(num: number) {
    let last3 = num % 1000;
    return last3 % 8 == 0;
}

//  Divisibilidade por 9
// Um número é divisível por 9 se a soma dos seus algarismos é um número divisível por 9.
// Exemplos: 1935 é divisível por 9 pois: 1 + 9 + 3 + 5=18 que é divisível por 9, mas 5381 não é divisível por 9 pois:
// 5 + 3 + 8 + 1=17 que não é divisível por 9.
function divisibilidadePor9(num: number) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum % 9 == 0;
}

//  Divisibilidade por 10
// Um número é divisível por 10 se termina com o algarismo 0(zero).
//     Exemplos: 5420 é divisível por 10 pois termina em 0(zero), mas 6342 não termina em 0(zero).
function divisibilidadePor10(num: number) {
    return num % 10 == 0;
}

//  Divisibilidade por 11
// Um número é divisível por 11 se a soma dos algarismos de ordem par Sp menos a soma dos algarismos de
// ordem ímpar Si é um número divisível por 11. Como um caso particular, se Sp – Si = 0 ou se Si – SP = 0, então
// o número é divisível por 11.
// Exemplo: 1353 é divisível por 11, pois:
// Número 1 3 5 3
// Ordem ímpar par ímpar par
// O primeiro e o terceiro algarismos têm ordem impar e a sua soma é: Si = 1 + 5 = 6, o segundo e o quarto
// algarismos têm ordem par e a sua soma é: SP = 3 + 3 = 6, assim a soma dos algarismos de ordem par Sp é igual
// à soma dos algarismos de ordem ímpar Si, logo o número é divisível por 11.
// Exemplo: 29458 é divisível por 11, pois:
// Número 2 9 4 5 8
// Ordem ímpar par ímpar par ímpar
// A soma dos algarismos de ordem ímpar, Si = 2 + 4 + 8 = 14, a soma dos algarismos de ordem par, SP = 9 + 5 =
// 14 e como ambas as somas são iguais, o número 29458 é divisível por 11.
// 10
// Exemplo: 2543 não é divisível por 11, pois:
// Número 2 5 4 3
// Ordem ímpar par ímpar par
// A soma dos algarismos de ordem impar é Si = 2 + 4=6, a soma dos algarismos e ordem par é Sp = 5 + 3=8 e como a
// diferença Si - Sp não é divisível por 11, o número original também não é divisível por 11.
// Exemplo: 65208 é divisível por 11, pois:
// Número 6 5 2 0 8
// Ordem ímpar par ímpar par ímpar
// A soma dos algarismos de ordem impar é Si = 6 + 2 + 8 = 16, a soma dos algarismos de ordem par é SP = 5 + 0
// = 5. Como a diferença Si - Sp=11, o número 65208 é divisível por 11
function divisibilidadePor11(num: number) {
    let sum = 0;
    let sum2 = 0;
    while (num > 0) {
        if (num % 2 == 0) {
            sum += num % 10;
        } else {
            sum2 += num % 10;
        }
        num = Math.floor(num / 10);
    }
    return sum - sum2 % 11 == 0 || sum2 - sum % 11 == 0;
}

//  Divisibilidade por 13
// Um número é divisível por 13 se o quádruplo(4 vezes) do último algarismo, somado ao número sem o último
// algarismo, resultar um número divisível por 13. Se o número obtido ainda for grande, repete - se o processo até
// que se possa verificar a divisão por 13. Este critério é semelhante àquele dado antes para a divisibilidade por 7,
//     apenas que no presente caso utilizamos a soma ao invés de subtração.
//         Exemplo: 16562 é divisível por 13 ? Vamos verificar.
// 1656 Número sem o último algarismo
//     + 8 Quatro vezes o último algarismo
// 1664 Soma
// Repete - se o processo com este último número.
// 166 Número sem o último algarismo
//     + 16 Quatro vezes o último algarismo
// 182 Soma
// Repete - se o processo com este último número.
// 18 Número sem o último algarismo
//     + 8 Quatro vezes o último algarismo
// 26 Soma
// Como a última soma é divisível por 13, então o número dado inicialmente também é divisível por 13.
function divisibilidadePor13(num: number) {
    let last = num % 10;
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum % 13 == 0;
}

//  Divisibilidade por 16
// Um número é divisível por 16 se o número formado pelos seus quatro últimos algarismos é divisível por 16.
// Exemplos: 54096 é divisível por 16 pois 4096 dividido por 16 fornece 256, mas 45321 não é divisível por 16
// pois 5321 não é divisível por 16.
function divisibilidadePor16(num: number) {
    return num % 16 == 0;
}

//  Divisibilidade por 17
// Um número é divisível por 17 quando o quíntuplo(5 vezes) do último algarismo, subtraído do número que não
// 11
// contém este último algarismo, proporcionar um número divisível por 17. Se o número obtido ainda for grande,
//     repete - se o processo até que se possa verificar a divisão por 17.
// Exemplo: 18598 é divisível por 17 pois:
// 1859 Número sem o último algarismo
//     - 40 Cinco vezes o último algarismo
// 1819 Diferença
// Repete - se o processo com este último número.
// 181 Número sem o último algarismo
//     - 45 Cinco vezes o último algarismo
// 136 Diferença
// Repete - se o processo com este último número.
// 13 Número sem o último algarismo
//     - 30 Cinco vezes o último algarismo
//         - 17 Diferença
// A diferença, embora negativa, é divisível por 17, logo o número dado inicialmente também é divisível por 17.
function divisibilidadePor17(num: number) {
    let last = num % 10;
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum % 17 == 0;
}

//  Divisibilidade por 19
// Um número é divisível por 19 quando o dobro do último algarismo, somado ao número que não contém este
// último algarismo, proporcionar um número divisível por 19. Se o número obtido ainda for grande, repete - se o
// processo até que se possa verificar a divisão por 19.
// Exemplo: 165928 é divisível por 19 ? Vamos verificar.
// 16592 Número sem o último algarismo
//     + 16 Dobro do último algarismo
// 16608 Soma
// Repete - se o processo com este último número.
// 1660 Número sem o último algarismo
//     + 16 Dobro do último algarismo
// 1676 Soma
// Repete - se o processo com este último número.
// 167 Número sem o último algarismo
//     + 12 Dobro do último algarismo
// 179 Soma
// Repete - se o processo com este último número.
// 17 Número sem o último algarismo
//     + 18 Dobro do último algarismo
// 12
// 35 Soma
// Como a última soma não é divisível por 19, então o número dado inicialmente também não é divisível por 19.
// Exemplo: 4275 é divisível por 19, pois:
// 427 Número sem o último algarismo
//     + 10 Dobro do último algarismo
// 437 Soma
// Repete - se o processo com este último número.
// 43 Número sem o último algarismo
//     + 14 Dobro do último algarismo
// 57 Soma
// Repete - se o processo com este último número.
// 5 Número sem o último algarismo
//     + 14 Dobro do último algarismo
// 19 Soma
// Como a última Soma é o próprio 19, segue que é divisível por 19, então o número 4275, dado inicialmente é
// divisível por 19.
function divisibilidadePor19(num: number) {}

//  Divisibilidade por 23
// Um número é divisível por 23 quando o héptuplo(7 vezes) do último algarismo, somado ao número que não
// contém este último algarismo, proporcionar um número divisível por 23. Se o número obtido ainda for grande,
//     repete - se o processo até que se possa verificar a divisão por 23.
// Exemplo: 185909 é divisível por 23 ? Vamos verificar.

// 18590 Número sem o último algarismo
//     + 63 Dobro do último algarismo
// 18653 Soma
// Repete - se o processo com este último número.

// 1865 Número sem o último algarismo
//     + 21 Dobro do último algarismo
// 1886 Soma
// Repete - se o processo com este último número.

// 188 Número sem o último algarismo
//     + 42 Dobro do último algarismo
// 230 Soma

// Como a última soma é divisível por 23, então o número dado inicialmente também é divisível por 23.

// 13
function divisibilidadePor23(num: number) {}

//  Divisibilidade por 29
// Um número é divisível por 29 quando o triplo(3 vezes) do último algarismo, subtraído do número que não
// contém este último algarismo, proporcionar um número divisível por 29. Se o número obtido ainda for grande,
//     repete - se o processo até que se possa verificar a divisão por 29.
// Exemplo: O número 8598 é divisível por 29 ?

//     859 Número sem o último algarismo
//         - 24 Dobro do último algarismo
// 835 Diferença
// Repete - se o processo com este último número.

// 83 Número sem o último algarismo
//     - 15 Dobro do último algarismo
// 68 Diferença
// Repete - se o processo com este último número.

// 6 Número sem o último algarismo
//     - 24 Dobro do último algarismo
//         - 18 Diferença

// A diferença, embora negativa, não é divisível por 29, logo o número dado inicialmente também não é divisível
// por 29.
function divisibilidadePor29(num: number) {}

//  Divisibilidade por 31
// Um número é divisível por 31 quando o triplo(3 vezes) do último algarismo, somado ao número que não
// contém este último algarismo, proporcionar um número divisível por 31. Se o número obtido ainda for grande,
//     repete - se o processo até que se possa verificar a divisão por 31.
// Exemplo: 8598 é divisível por 31 ?

//     859 Número sem o último algarismo
//         + 24 Triplo do último algarismo
// 883 Soma
// Repete - se o processo com este último número.

// 88 Número sem o último algarismo
//     + 9 Triplo do último algarismo
// 97 Soma
// Repete - se o processo com este último número.

// 9 Número sem o último algarismo
//     + 21 Triplo do último algarismo
// 30 Soma

// A soma não é divisível por 31, logo o número dado inicialmente também não é divisível por 31.

// 14
function divisibilidadePor31(num: number) {}

//  Divisibilidade por 49
// Um número é divisível por 49 quando o quíntuplo(5 vezes) do último algarismo, somado ao número que não
// contém este último algarismo, proporcionar um número divisível por 49. Se o número obtido ainda for grande,
//     repete - se o processo até que se possa verificar a divisão por 49.
// Exemplo: 8598 é divisível por 49 ?

//     859 Número sem o último algarismo
//         + 40 Cinco vezes o último algarismo
// 899 Soma
// Repete - se o processo com este último número.

// 89 Número sem o último algarismo
//     + 45 Cinco vezes o último algarismo
// 134 Soma
// Repete - se o processo com este último número.

// 13 Número sem o último algarismo
//     + 20 Cinco vezes o último algarismo
// 33 Soma

// A soma não é divisível por 49, logo o número dado inicialmente também não é divisível por 49.
function divisibilidadePor49(num: number) {}

