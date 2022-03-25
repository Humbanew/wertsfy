class RcalcModulos {
    
  soma(valores=[""]) {
    let total = 0;
    for (let v = 0; v < valores.length; v++) {
      if (valores[v] == "") {
          total = total + 0;
      }
      else {
          total = total + parseFloat(valores[v]);
      }
    }

    if (isNaN(total) == true) {
      total = 0;
    }

    switch (total) {
      case null:
        total = 0;
        break;
      case Infinity:
        total = 0;
        break;
      case -Infinity:
        total = 0;
        break;
    }

    return total;
  }

  subtracao(valoresASubtrair=[""], valoresSubtracao=[""]) {
    let total = 0;
    let totalSubtracao = 0;
    for (let r = 0; r < valoresSubtracao.length; r++) {
        if (valoresSubtracao[r] == "") {
            total = total + 0;
        }
        else {
            totalSubtracao = totalSubtracao + parseFloat(valoresSubtracao[r]);
        }
    }
    for (let v = 0; v < valoresASubtrair.length; v++) {
        if (valoresASubtrair[v] == "") {
            total = total + 0;
        }
        else {
            total = total + parseFloat(valoresASubtrair[v]);
        }
    }

    let resultado = totalSubtracao - total;

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  multiplicacao(valoresAMultiplicar=[""]) {
    let total = 1;
    for (let v = 0; v < valoresAMultiplicar.length; v++) {
      if (valoresAMultiplicar[v] == "") {
        total = total * 1;
      }
      else {
        total = total * parseFloat(valoresAMultiplicar[v]);
      }
    }

    if (isNaN(total) == true) {
      total = 1;
    }

    switch (total) {
      case null:
        total = 0;
        break;
      case Infinity:
        total = 0;
        break;
      case -Infinity:
        total = 0;
        break;
    }

    return total;
  }

  divisao(valoresADividir=[""], valoresDivisao=[""]) {
    let total = 0;
    let totalDivisao = 0;
    for (let r = 0; r < valoresDivisao.length; r++) {
        if (valoresDivisao[r] == "") {
            totalDivisao = totalDivisao + 0;
        }
        else {
            totalDivisao = totalDivisao + parseFloat(valoresDivisao[r]);
        }
    }
    for (let v = 0; v < valoresADividir.length; v++) {
        if (valoresADividir[v] == "") {
            total = total + 0;
        }
        else {
            total = total + parseFloat(valoresADividir[v]);
        }
    }
    let resultado;

    if(total == 0) {
      resultado = totalDivisao;
    }else {
      resultado = totalDivisao / total;
    }

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  potencia(valorBase="", valoresAPotencializar=[""]) {
    let total = 0;
    let resultado = 0;
    for (let v = 0; v < valoresAPotencializar.length; v++) {
        if (valoresAPotencializar[v] == "") {
            total = total + 0;
        }
        else {
            total = total + parseFloat(valoresAPotencializar[v]);
        }
    }
    resultado = Math.pow(parseFloat(valorBase), total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  potenciaDePotencia(valorBase="", potNvl1=[""], potNvl2=[""], potNvl3=[""], potNvl4=[""], potNvl5=[""]) {
    let valoresPotenciacao = [potNvl1, potNvl2, potNvl3, potNvl4, potNvl5]  
    for(let i = 0; i < valoresPotenciacao.length; i++) {
        if(valorBase == "") {valorBase = 1;}
        if(valoresPotenciacao[i][0] == "") {valoresPotenciacao[i][0] = 1;}
        valoresPotenciacao[i][0] = parseFloat(valoresPotenciacao[i][0]);
    }

    let resultado = Math.pow(Math.pow(Math.pow(Math.pow(Math.pow(parseFloat(valorBase), valoresPotenciacao[0][0]), valoresPotenciacao[1][0]), valoresPotenciacao[2][0]), valoresPotenciacao[3][0]), valoresPotenciacao[4][0]);    

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  raizQuadrada(valoresARadiciar=[""]) {
    let total = 0;
    for (let r = 0; r < valoresARadiciar.length; r++) {
        if (valoresARadiciar[r] == "") {
          total = total + 0;
        } 
        else {
          total = total + parseFloat(valoresARadiciar[r]);
        }
    }
    let resultado = Math.sqrt(total);

    if(total < 0) {
      resultado = null;
    }

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  raizCubica(valoresARadiciarCubicamente=[""]) {
    let total = 0;
    for (let r = 0; r < valoresARadiciarCubicamente.length; r++) {
        if (valoresARadiciarCubicamente[r] == "") {
            total = total + 0;
        }
        else {
            total = total + parseFloat(valoresARadiciarCubicamente[r]);
        }
    }
    let resultado = Math.cbrt(total);

    if(total < 0) {
        resultado = null;
    }

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  raizBiquadrada(valoresARadiciar2=[""]) {
    let total = 0;
    for (let r = 0; r < valoresARadiciar2.length; r++) {
        if (valoresARadiciar2[r] == "") {
            total = total + 0;
        }
        else {
            total = total + parseFloat(valoresARadiciar2[r]);
        }
    }
    let resultado = Math.sqrt(Math.sqrt(total));

    if(total < 0) {
        resultado = null;
    }

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  raizBicubica(valoresARadiciarCubicamente2=[""]) {
    let total = 0;
    for (let r = 0; r < valoresARadiciarCubicamente2.length; r++) {
        if (valoresARadiciarCubicamente2[r] == "") {
            total = total + 0;
        }
        else {
            total = total + parseFloat(valoresARadiciarCubicamente2[r]);
        }
    }
    let resultado = Math.cbrt(Math.cbrt(total));

    if(total < 0) {
        resultado = null;
    }

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return total;
  }

  seno(valoresParaRealizarSeno=[""]) {
    let total = 0;

    let resultado = 0;
    
    for (let g = 0; g < valoresParaRealizarSeno.length; g++) {
        if(valoresParaRealizarSeno[g] == "") {
          return resultado = 0;
        }

        if (valoresParaRealizarSeno[g] != "") {
            total = total + parseFloat(valoresParaRealizarSeno[g]);
        }
    }

    resultado = Math.sin(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  cosseno(valoresParaRealizarCosseno=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarCosseno.length; g++) {
      if (valoresParaRealizarCosseno[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarCosseno[g] != "") {
        total = total + parseFloat(valoresParaRealizarCosseno[g]);
      }
    }

    resultado = Math.cos(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  tangente(valoresParaRealizarTangente=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarTangente.length; g++) {
      if (valoresParaRealizarTangente[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarTangente[g] != "") {
        total = total + parseFloat(valoresParaRealizarTangente[g]);
      }
    }

    resultado = Math.tan(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  secante(valoresParaRealizarSecante=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarSecante.length; g++) {
      if (valoresParaRealizarSecante[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarSecante[g] != "") {
        total = total + parseFloat(valoresParaRealizarSecante[g]);
      }
    }

    resultado = 1 / Math.cos(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;    
  }

  cossecante(valoresParaRealizarCossecante=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarCossecante.length; g++) {
      if (valoresParaRealizarCossecante[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarCossecante[g] != "") {
        total = total + parseFloat(valoresParaRealizarCossecante[g]);
      }
    }

    resultado = 1 / Math.sin(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  cotangente(valoresParaRealizarCotangente=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarCotangente.length; g++) {
      if (valoresParaRealizarCotangente[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarCotangente[g] != "") {
        total = total + parseFloat(valoresParaRealizarCotangente[g]);
      }
    }

    resultado = 1 / Math.tan(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  senoHiper(valoresParaRealizarSenoHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarSenoHiper.length; g++) {
      if (valoresParaRealizarSenoHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarSenoHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarSenoHiper[g]);
      }
    }

    resultado = Math.sinh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    
    return resultado;

  }

  cossenoHiper(valoresParaRealizarCossenoHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarCossenoHiper.length; g++) {
      if (valoresParaRealizarCossenoHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarCossenoHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarCossenoHiper[g]);
      }
    }

    resultado = Math.cosh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    
    return resultado;    
  }

  tangenteHiper(valoresParaRealizarTangenteHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarTangenteHiper.length; g++) {
      if (valoresParaRealizarTangenteHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarTangenteHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarTangenteHiper[g]);
      }    
    }

    resultado = Math.tanh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    
    return resultado;
  }

  secanteHiper(valoresParaRealizarSecanteHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarSecanteHiper.length; g++) {
      if (valoresParaRealizarSecanteHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarSecanteHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarSecanteHiper[g]);
      }
    }

    resultado = 1 / Math.cosh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    
    return resultado;
  }

  cossecanteHiper(valoresParaRealizarCossecanteHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarCossecanteHiper.length; g++) {
      if (valoresParaRealizarCossecanteHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarCossecanteHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarCossecanteHiper[g]);
      }
    }

    resultado = 1 / Math.sinh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    
    return resultado;
  }

  cotangenteHiper(valoresParaRealizarCotangenteHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarCotangenteHiper.length; g++) {
      if (valoresParaRealizarCotangenteHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarCotangenteHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarCotangenteHiper[g]);
      }
    }

    resultado = 1 / Math.tanh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  arcoSeno(valoresParaRealizarArcoSeno=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoSeno.length; g++) {
      if (valoresParaRealizarArcoSeno[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoSeno[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoSeno[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    resultado = Math.asin(total);

    if(isNaN(resultado) == true) {
      resultado = total;
    }

    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoCosseno(valoresParaRealizarArcoCosseno=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoCosseno.length; g++) {
      if (valoresParaRealizarArcoCosseno[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoCosseno[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoCosseno[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    resultado = Math.acos(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    
    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoTangente(valoresParaRealizarArcoTangente=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoTangente.length; g++) {
      if (valoresParaRealizarArcoTangente[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoTangente[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoTangente[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    resultado = Math.atan(total);
    
    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoSecante(valoresParaRealizarArcoSecante=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoSecante.length; g++) {
      if (valoresParaRealizarArcoSecante[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoSecante[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoSecante[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    resultado = 1 / Math.acos(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoCossecante(valoresParaRealizarArcoCossecante=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoCossecante.length; g++) {
      if (valoresParaRealizarArcoCossecante[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoCossecante[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoCossecante[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    resultado = 1 / Math.asin(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoCotangente(valoresParaRealizarArcoCotangente=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoCotangente.length; g++) {
      if (valoresParaRealizarArcoCotangente[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoCotangente[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoCotangente[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    resultado = 1 / Math.atan(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoSenoHiper(valoresParaRealizarArcoSenoHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoSenoHiper.length; g++) {
      if (valoresParaRealizarArcoSenoHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoSenoHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoSenoHiper[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    resultado = Math.asinh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoCossenoHiper(valoresParaRealizarArcoCossenoHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoCossenoHiper.length; g++) {
      if (valoresParaRealizarArcoCossenoHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoCossenoHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoCossenoHiper[g]);
      }
    }

          // Limite Mávalorimo para valores numéricos = 10 ** 16.
      if(total > 1 && total < 10 ** 1) {
        total = total / 10 ** 1;
      }

      if(total > 10 ** 1 && total < 10 ** 2) {
        total = total / 10 ** 2;
      }

      if(total > 10 ** 2 && total < 10 ** 3) {
        total = total / 10 ** 3;
      }

      if(total > 10 ** 3 && total < 10 ** 4) {
        total = total / 10 ** 4;
      }

      if(total > 10 ** 4 && total < 10 ** 5) {
        total = total / 10 ** 5;
      }

      if(total > 10 ** 5 && total < 10 ** 6) {
        total = total / 10 ** 6;
      }

      if(total > 10 ** 6 && total < 10 ** 7) {
        total = total / 10 ** 7;
      }

      if(total > 10 ** 7 && total < 10 ** 8) {
        total = total / 10 ** 8;
      }

      if(total > 10 ** 8 && total < 10 ** 9) {
        total = total / 10 ** 9;
      }

      if(total > 10 ** 9 && total < 10 ** 10) {
        total = total / 10 ** 10;
      }

      if(total > 10 ** 10 && total < 10 ** 11) {
        total = total / 10 ** 11;
      }

      if(total > 10 ** 11 && total < 10 ** 12) {
        total = total / 10 ** 12;
      }

      if(total > 10 ** 12 && total < 10 ** 13) {
        total = total / 10 ** 13;
      }

      if(total > 10 ** 13 && total < 10 ** 14) {
        total = total / 10 ** 14;
      }

      if(total > 10 ** 14 && total < 10 ** 15) {
        total = total / 10 ** 15;
      }

      if(total > 10 ** 15 && total < 10 ** 16) {
        total = total / 10 ** 16;
      }

    resultado = Math.acosh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoTangenteHiper(valoresParaRealizarArcoTangenteHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoTangenteHiper.length; g++) {
      if (valoresParaRealizarArcoTangenteHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoTangenteHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoTangenteHiper[g]);
      }
    }
        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    resultado = Math.atanh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoSecanteHiper(valoresParaRealizarArcoSecanteHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoSecanteHiper.length; g++) {
      if (valoresParaRealizarArcoSecanteHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoSecanteHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoSecanteHiper[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    resultado = 1 / Math.acosh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoCossecanteHiper(valoresParaRealizarArcoCossecanteHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoCossecanteHiper.length; g++) {
      if (valoresParaRealizarArcoCossecanteHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoCossecanteHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoCossecanteHiper[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }

    resultado = 1 / Math.asinh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }

    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  arcoCotangenteHiper(valoresParaRealizarArcoCotangenteHiper=[""]) {
    let total = 0;

    let resultado = 0;

    for (let g = 0; g < valoresParaRealizarArcoCotangenteHiper.length; g++) {
      if (valoresParaRealizarArcoCotangenteHiper[g] == "") {
        return resultado = 0;
      }

      if (valoresParaRealizarArcoCotangenteHiper[g] != "") {
        total = total + parseFloat(valoresParaRealizarArcoCotangenteHiper[g]);
      }
    }

        // Limite Mávalorimo para valores numéricos = 10 ** 16.
    if(total > 1 && total < 10 ** 1) {
      total = total / 10 ** 1;
    }

    if(total > 10 ** 1 && total < 10 ** 2) {
      total = total / 10 ** 2;
    }

    if(total > 10 ** 2 && total < 10 ** 3) {
      total = total / 10 ** 3;
    }

    if(total > 10 ** 3 && total < 10 ** 4) {
      total = total / 10 ** 4;
    }

    if(total > 10 ** 4 && total < 10 ** 5) {
      total = total / 10 ** 5;
    }

    if(total > 10 ** 5 && total < 10 ** 6) {
      total = total / 10 ** 6;
    }

    if(total > 10 ** 6 && total < 10 ** 7) {
      total = total / 10 ** 7;
    }

    if(total > 10 ** 7 && total < 10 ** 8) {
      total = total / 10 ** 8;
    }

    if(total > 10 ** 8 && total < 10 ** 9) {
      total = total / 10 ** 9;
    }

    if(total > 10 ** 9 && total < 10 ** 10) {
      total = total / 10 ** 10;
    }

    if(total > 10 ** 10 && total < 10 ** 11) {
      total = total / 10 ** 11;
    }

    if(total > 10 ** 11 && total < 10 ** 12) {
      total = total / 10 ** 12;
    }

    if(total > 10 ** 12 && total < 10 ** 13) {
      total = total / 10 ** 13;
    }

    if(total > 10 ** 13 && total < 10 ** 14) {
      total = total / 10 ** 14;
    }

    if(total > 10 ** 14 && total < 10 ** 15) {
      total = total / 10 ** 15;
    }

    if(total > 10 ** 15 && total < 10 ** 16) {
      total = total / 10 ** 16;
    }
    
    resultado = 1 / Math.atanh(total);

    if (isNaN(resultado) == true) {
      resultado = total;
    }
    
    switch(resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }
    
    return resultado;
  }

  convBasesTechno(valor=[""], input=0, output=0) {
    let resultado = 0;
    let valorf = 0;
  
    for(let i = 0; i < valor.length; i++) {
      valorf = valorf + parseFloat(valor[i]);
    }

    let formulas = [
      [valorf * 8, valorf / 8],
      [(valorf * 8) * 1024, (valorf / 8) / 1024],
      [(valorf * 8) * 1024 ** 2, (valorf / 8) / 1024 ** 2],
      [(valorf * 8) * 1024 ** 3, (valorf / 8) / 1024 ** 3],
      [(valorf * 8) * 1024 ** 4, (valorf / 8) / 1024 ** 4],
      [(valorf * 8) * 1024 ** 5, (valorf / 8) / 1024 ** 5],
      [(valorf * 8) * 1024 ** 6, (valorf / 8) / 1024 ** 6],
      [(valorf * 8) * 1024 ** 7, (valorf / 8) / 1024 ** 7],
      [(valorf * 8) * 1024 ** 8, (valorf / 8) / 1024 ** 8],
      [(valorf * 8) * 1024 ** 9, (valorf / 8) / 1024 ** 9],
      [(valorf * 8) * 1024 ** 10, (valorf / 8) / 1024 ** 10],
      [(valorf * 8) * 1024 ** 11, (valorf / 8) / 1024 ** 11],
      [(valorf * 8) * 1024 ** 12, (valorf / 8) / 1024 ** 12],
      [valorf * 1024, valorf / 1024],
      [valorf * 1024 ** 2, valorf / 1024 ** 2],
      [valorf * 1024 ** 3, valorf / 1024 ** 3],
      [valorf * 1024 ** 4, valorf / 1024 ** 4],
      [valorf * 1024 ** 5, valorf / 1024 ** 5],
      [valorf * 1024 ** 6, valorf / 1024 ** 6],
      [valorf * 1024 ** 7, valorf / 1024 ** 7],
      [valorf * 1024 ** 8, valorf / 1024 ** 8],
      [valorf * 1024 ** 9, valorf / 1024 ** 9],
      [valorf * 1024 ** 10, valorf / 1024 ** 10],
      [valorf * 1024 ** 11, valorf / 1024 ** 11],
      [valorf * 1024 ** 12, valorf / 1024 ** 12],
    ]
    
    let chaves = ['t01_bits', 't02_bytes', 't03_kilobytes', 't04_megabytes', 't05_gigabytes', 't06_terabytes', 't07_petabytes', 't08_exabytes', 't09_yottabytes', 't10_zettabytes', 't11_brontobytes', 't12_geopbytes', 't13_saganbytes', 't14_jotabytes'];
    
    let combinacao = [[], []];

    switch(input) {
      case 1:
        input = chaves[0];
        break;
      case 2:
        input = chaves[1];
        break;
      case 3:
        input = chaves[2];
        break;
      case 4:
        input = chaves[3];
        break;
      case 5:
        input = chaves[4];
        break;
      case 6:
        input = chaves[5];
        break;
      case 7:
        input = chaves[6];
        break;
      case 8:
        input = chaves[7];
        break;
      case 9:
        input = chaves[8];
        break;
      case 10:
        input = chaves[9];
        break;
      case 11:
        input = chaves[10];
        break;
      case 12:
        input = chaves[11];
        break;
      case 13:
        input = chaves[12];
        break;
      case 14:
        input = chaves[13];
        break;
    }

    switch(output) {
      case 1:
        output = chaves[0];
        break;
      case 2:
        output = chaves[1];
        break;
      case 3:
        output = chaves[2];
        break;
      case 4:
        output = chaves[3];
        break;
      case 5:
        output = chaves[4];
        break;
      case 6:
        output = chaves[5];
        break;
      case 7:
        output = chaves[6];
        break;
      case 8:
        output = chaves[7];
        break;
      case 9:
        output = chaves[8];
        break;
      case 10:
        output = chaves[9];
        break;
      case 11:
        output = chaves[10];
        break;
      case 12:
        output = chaves[11];
        break;
      case 13:
        output = chaves[12];
        break;
      case 14:
        output = chaves[13];
        break;
    }

    combinacao = [[input], [output]];

    switch(combinacao[0][0]) {
      case 't01_bits':
        switch(combinacao[1][0]) {
          case 't02_bytes':
            resultado = formulas[0][1];
            break;
          case 't03_kilobytes':
            resultado = formulas[1][1];
            break;
          case 't04_megabytes':
            resultado = formulas[2][1];
            break;
          case 't05_gigabytes':
            resultado = formulas[3][1];
            break;
          case 't06_terabytes':
            resultado = formulas[4][1];
            break;
          case 't07_petabytes':
            resultado = formulas[5][1];
            break;
          case 't08_exabytes':
            resultado = formulas[6][1];
            break;
          case 't09_yottabytes':
            resultado = formulas[7][1];
            break;
          case 't10_zettabytes':
            resultado = formulas[8][1];
            break;
          case 't11_brontobytes':
            resultado = formulas[9][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[10][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[11][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[12][1];
            break;
        }
        break;
      case 't02_bytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[0][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[13][1];
            break;
          case 't04_megabytes':
            resultado = formulas[14][1];
            break;
          case 't05_gigabytes':
            resultado = formulas[15][1];
            break;
          case 't06_terabytes':
            resultado = formulas[16][1];
            break;
          case 't07_petabytes':
            resultado = formulas[17][1];
            break;
          case 't08_exabytes':
            resultado = formulas[18][1];
            break;
          case 't09_yottabytes':
            resultado = formulas[19][1];
            break;
          case 't10_zettabytes':
            resultado = formulas[20][1];
            break;
          case 't11_brontobytes':
            resultado = formulas[21][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't03_kilobytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[1][0];
            break;
          case 't02_bytes':
            resultado = formulas[13][0];
            break;
          case 't04_megabytes':
            resultado = formulas[14][1];
            break;
          case 't05_gigabytes':
            resultado = formulas[15][1];
            break;
          case 't06_terabytes':
            resultado = formulas[16][1];
            break;
          case 't07_petabytes':
            resultado = formulas[17][1];
            break;
          case 't08_exabytes':
            resultado = formulas[18][1];
            break;
          case 't09_yottabytes':
            resultado = formulas[19][1];
            break;
          case 't10_zettabytes':
            resultado = formulas[20][1];
            break;
          case 't11_brontobytes':
            resultado = formulas[21][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't04_megabytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[2][0];
            break;
          case 't02_bytes':
            resultado = formulas[14][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[13][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[15][1];
            break;
          case 't06_terabytes':
            resultado = formulas[16][1];
            break;
          case 't07_petabytes':
            resultado = formulas[17][1];
            break;
          case 't08_exabytes':
            resultado = formulas[18][1];
            break;
          case 't09_yottabytes':
            resultado = formulas[19][1];
            break;
          case 't10_zettabytes':
            resultado = formulas[20][1];
            break;
          case 't11_brontobytes':
            resultado = formulas[21][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't05_gigabytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[3][0];
            break;
          case 't02_bytes':
            resultado = formulas[15][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[14][0];
            break;
          case 't04_megabytes':
            resultado = formulas[13][0];
            break;
          case 't06_terabytes':
            resultado = formulas[16][1];
            break;
          case 't07_petabytes':
            resultado = formulas[17][1];
            break;
          case 't08_exabytes':
            resultado = formulas[18][1];
            break;
          case 't09_yottabytes':
            resultado = formulas[19][1];
            break;
          case 't10_zettabytes':
            resultado = formulas[20][1];
            break;
          case 't11_brontobytes':
            resultado = formulas[21][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't06_terabytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[4][0];
            break;
          case 't02_bytes':
            resultado = formulas[16][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[15][0];
            break;
          case 't04_megabytes':
            resultado = formulas[14][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[13][0];
            break;
          case 't07_petabytes':
            resultado = formulas[17][1];
            break;
          case 't08_exabytes':
            resultado = formulas[18][1];
            break;
          case 't09_yottabytes':
            resultado = formulas[19][1];
            break;
          case 't10_zettabytes':
            resultado = formulas[20][1];
            break;
          case 't11_brontobytes':
            resultado = formulas[21][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't07_petabytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[5][0];
            break;
          case 't02_bytes':
            resultado = formulas[17][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[16][0];
            break;
          case 't04_megabytes':
            resultado = formulas[15][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[14][0];
            break;
          case 't06_terabytes':
            resultado = formulas[13][0];
            break;
          case 't08_exabytes':
            resultado = formulas[18][1];
            break;
          case 't09_yottabytes':
            resultado = formulas[19][1];
            break;
          case 't10_zettabytes':
            resultado = formulas[20][1];
            break;
          case 't11_brontobytes':
            resultado = formulas[21][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't08_exabytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[6][0];
            break;
          case 't02_bytes':
            resultado = formulas[18][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[17][0];
            break;
          case 't04_megabytes':
            resultado = formulas[16][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[15][0];
            break;
          case 't06_terabytes':
            resultado = formulas[14][0];
            break;
          case 't07_petabytes':
            resultado = formulas[13][0];
            break;
          case 't09_yottabytes':
            resultado = formulas[19][1];
            break;
          case 't10_zettabytes':
            resultado = formulas[20][1];
            break;
          case 't11_brontobytes':
            resultado = formulas[21][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't09_yottabytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[7][0];
            break;
          case 't02_bytes':
            resultado = formulas[19][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[18][0];
            break;
          case 't04_megabytes':
            resultado = formulas[17][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[16][0];
            break;
          case 't06_terabytes':
            resultado = formulas[15][0];
            break;
          case 't07_petabytes':
            resultado = formulas[14][0];
            break;
          case 't08_exabytes':
            resultado = formulas[13][0];
            break;
          case 't10_zettabytes':
            resultado = formulas[20][1];
            break;
          case 't11_brontobytes':
            resultado = formulas[21][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't10_zettabytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[8][0];
            break;
          case 't02_bytes':
            resultado = formulas[20][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[19][0];
            break;
          case 't04_megabytes':
            resultado = formulas[18][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[17][0];
            break;
          case 't06_terabytes':
            resultado = formulas[16][0];
            break;
          case 't07_petabytes':
            resultado = formulas[15][0];
            break;
          case 't08_exabytes':
            resultado = formulas[14][0];
            break;
          case 't09_yottabytes':
            resultado = formulas[13][0];
            break;
          case 't11_brontobytes':
            resultado = formulas[21][1];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't11_brontobytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[9][0];
            break;
          case 't02_bytes':
            resultado = formulas[21][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[20][0];
            break;
          case 't04_megabytes':
            resultado = formulas[19][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[18][0];
            break;
          case 't06_terabytes':
            resultado = formulas[17][0];
            break;
          case 't07_petabytes':
            resultado = formulas[16][0];
            break;
          case 't08_exabytes':
            resultado = formulas[15][0];
            break;
          case 't09_yottabytes':
            resultado = formulas[14][0];
            break;
          case 't10_zettabytes':
            resultado = formulas[13][0];
            break;
          case 't12_geopbytes':
            resultado = formulas[22][1];
            break;
          case 't13_saganbytes':
            resultado = formulas[23][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't12_geopbytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[10][0];
            break;
          case 't02_bytes':
            resultado = formulas[22][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[21][0];
            break;
          case 't04_megabytes':
            resultado = formulas[20][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[19][0];
            break;
          case 't06_terabytes':
            resultado = formulas[18][0];
            break;
          case 't07_petabytes':
            resultado = formulas[17][0];
            break;
          case 't08_exabytes':
            resultado = formulas[16][0];
            break;
          case 't09_yottabytes':
            resultado = formulas[15][0];
            break;
          case 't10_zettabytes':
            resultado = formulas[14][0];
            break;
          case 't11_brontobytes':
            resultado = formulas[13][0];
            break;
          case 't13_saganbytes':
            resultado = formulas[13][1];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't13_saganbytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[11][0];
            break;
          case 't02_bytes':
            resultado = formulas[23][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[22][0];
            break;
          case 't04_megabytes':
            resultado = formulas[21][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[20][0];
            break;
          case 't06_terabytes':
            resultado = formulas[19][0];
            break;
          case 't07_petabytes':
            resultado = formulas[18][0];
            break;
          case 't08_exabytes':
            resultado = formulas[17][0];
            break;
          case 't09_yottabytes':
            resultado = formulas[16][0];
            break;
          case 't10_zettabytes':
            resultado = formulas[15][0];
            break;
          case 't11_brontobytes':
            resultado = formulas[14][0];
            break;
          case 't12_geopbytes':
            resultado = formulas[13][0];
            break;
          case 't14_jotabytes':
            resultado = formulas[24][1];
            break;
        }
        break;
      case 't14_jotabytes':
        switch (combinacao[1][0]) {
          case 't01_bits':
            resultado = formulas[12][0];
            break;
          case 't02_bytes':
            resultado = formulas[24][0];
            break;
          case 't03_kilobytes':
            resultado = formulas[23][0];
            break;
          case 't04_megabytes':
            resultado = formulas[22][0];
            break;
          case 't05_gigabytes':
            resultado = formulas[21][0];
            break;
          case 't06_terabytes':
            resultado = formulas[20][0];
            break;
          case 't07_petabytes':
            resultado = formulas[19][0];
            break;
          case 't08_exabytes':
            resultado = formulas[18][0];
            break;
          case 't09_yottabytes':
            resultado = formulas[17][0];
            break;
          case 't10_zettabytes':
            resultado = formulas[16][0];
            break;
          case 't11_brontobytes':
            resultado = formulas[15][0];
            break;
          case 't12_geopbytes':
            resultado = formulas[14][0];
            break;
          case 't13_saganbytes':
            resultado = formulas[13][0];
            break;
        }
        break;
    }

    if (isNaN(resultado) == true) {
      resultado = 0;
    }

    if(resultado < 0) {
      resultado = 0;
    }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  // Conversores de Bases
  convBasesTechnoNumericos(valor=typeof(""||0), input=0, output=0) {

    function formulaBinarioDecimal(valor = '') {
      let resultado = 0, numBinarioDesm = [], verificacao = /[2-9]/g;

      if (verificacao.exec(valor) == "2" || verificacao.exec(valor) == "3" || verificacao.exec(valor) == "4" || verificacao.exec(valor) == "5" || verificacao.exec(valor) == "6" || verificacao.exec(valor) == "7" || verificacao.exec(valor) == "8" || verificacao.exec(valor) == "9") {
        return console.error("O valor inserido não condiz com um valor de base binária!");
      }

      for (let a = 0, srt = 0, fnl = 1; a < valor.length; a++, srt++, fnl++) { numBinarioDesm.push(valor.slice(srt, fnl)); }

      for (let a = 0, b = numBinarioDesm.length - 1; a < numBinarioDesm.length, b > -1; a++, b--) {
        numBinarioDesm[a] = numBinarioDesm[a] * 2 ** b;
        resultado = resultado + numBinarioDesm[a];
      }

      return resultado;
    }

    function formulaBinarioOctadecimal(valor = '') {
      let resultado = 0, numBinarioDesm = [], verificacao = /[2-9]/g, verificacaoResultado = /[8-9]/g;

      if (verificacao.exec(valor) == "2" || verificacao.exec(valor) == "3" || verificacao.exec(valor) == "4" || verificacao.exec(valor) == "5" || verificacao.exec(valor) == "6" || verificacao.exec(valor) == "7" || verificacao.exec(valor) == "8" || verificacao.exec(valor) == "9") {
        return console.error("O valor inserido não condiz com um valor de base binária!");
      }

      for (let a = 0, srt = 0, fnl = 1; a < valor.length; a++, srt++, fnl++) { numBinarioDesm.push(valor.slice(srt, fnl)); }

      for (let a = 0, b = numBinarioDesm.length - 1; a < numBinarioDesm.length, b > -1; a++, b--) {
        numBinarioDesm[a] = numBinarioDesm[a] * 2 ** b;
        resultado = resultado + numBinarioDesm[a];
      }

      let analise = verificacaoResultado.exec(resultado.toString());
      
      if (analise == null) { resultado = resultado; }

      if (analise == '8') { resultado = resultado + 1; }

      if (analise == '9') { resultado = resultado + 2; }

      return resultado;
    }

    function formulaBinarioHexadecimal(valor = '') {
      let resultado = '', verificacao = /[2-9]/g;

      if (verificacao.exec(valor) == "2" || verificacao.exec(valor) == "3" || verificacao.exec(valor) == "4" || verificacao.exec(valor) == "5" || verificacao.exec(valor) == "6" || verificacao.exec(valor) == "7" || verificacao.exec(valor) == "8" || verificacao.exec(valor) == "9") {
        return console.error("O valor inserido não condiz com um valor de base binária!");
      }

      if (valor == '0') { resultado = resultado + '0'; }
      if (valor == '1') { resultado = resultado + '1'; }
      if (valor == '00') { resultado = resultado + '0'; }
      if (valor == '01') { resultado = resultado + '1'; }
      if (valor == '10') { resultado = resultado + '2'; }
      if (valor == '11') { resultado = resultado + '3'; }
      if (valor == '100') { resultado = resultado + '4'; }
      if (valor == '101') { resultado = resultado + '5'; }
      if (valor == '110') { resultado = resultado + '6'; }
      if (valor == '111') { resultado = resultado + '7'; }

      if (valor == '0000') { resultado = resultado + '0'; }
      if (valor == '0001') { resultado = resultado + '1'; }
      if (valor == '0010') { resultado = resultado + '2'; }
      if (valor == '0011') { resultado = resultado + '3'; }
      if (valor == '0100') { resultado = resultado + '4'; }
      if (valor == '0101') { resultado = resultado + '5'; }
      if (valor == '0110') { resultado = resultado + '6'; }
      if (valor == '0111') { resultado = resultado + '7'; }
      if (valor == '1000') { resultado = resultado + '8'; }
      if (valor == '1001') { resultado = resultado + '9'; }
      if (valor == '1010') { resultado = resultado + 'A'; }
      if (valor == '1011') { resultado = resultado + 'B'; }
      if (valor == '1100') { resultado = resultado + 'C'; }
      if (valor == '1101') { resultado = resultado + 'D'; }
      if (valor == '1110') { resultado = resultado + 'E'; }
      if (valor == '1111') { resultado = resultado + 'F'; }

      return resultado;
    }

    function formulaDecimalBinario(valor = 0) {
      let resultado = '', numBinarioCons = [];

      while (valor > 0) {
        let resto = valor % 2; valor = valor / 2;

        if (resto == 0) { numBinarioCons.push('0'); }
        if (resto == 1) { numBinarioCons.push('1'); valor = parseInt(valor); }
      }

      for (let a = numBinarioCons.length; a > 0; a--) {
        resultado = resultado + numBinarioCons[a - 1];
      }

      return resultado;
    }

    function formulaDecimalOctadecimal(valor = 0) {
      let resultado = '', numBinarioCons = [];

      while (valor > 0) {
        let resto = valor % 8; valor = valor / 8;

        if (resto == 0) { numBinarioCons.push('0'); }
        if (resto == 1) { numBinarioCons.push('1'); valor = parseInt(valor); }
        if (resto == 2) { numBinarioCons.push('2'); valor = parseInt(valor); }
        if (resto == 3) { numBinarioCons.push('3'); valor = parseInt(valor); }
        if (resto == 4) { numBinarioCons.push('4'); valor = parseInt(valor); }
        if (resto == 5) { numBinarioCons.push('5'); valor = parseInt(valor); }
        if (resto == 6) { numBinarioCons.push('6'); valor = parseInt(valor); }
        if (resto == 7) { numBinarioCons.push('7'); valor = parseInt(valor); }
      }

      for (let a = numBinarioCons.length; a > 0; a--) {
        resultado = resultado + numBinarioCons[a - 1];
      }

      return resultado;
    }

    function formulaDecimalHexadecimal(valor = 0) {
      let resultado = '', numBinarioCons = [];

      while (valor > 0) {
        let resto = valor % 16; valor = valor / 16;

        if (resto == 0) { numBinarioCons.push('0'); }
        if (resto == 1) { numBinarioCons.push('1'); valor = parseInt(valor); }
        if (resto == 2) { numBinarioCons.push('2'); valor = parseInt(valor); }
        if (resto == 3) { numBinarioCons.push('3'); valor = parseInt(valor); }
        if (resto == 4) { numBinarioCons.push('4'); valor = parseInt(valor); }
        if (resto == 5) { numBinarioCons.push('5'); valor = parseInt(valor); }
        if (resto == 6) { numBinarioCons.push('6'); valor = parseInt(valor); }
        if (resto == 7) { numBinarioCons.push('7'); valor = parseInt(valor); }
        if (resto == 8) { numBinarioCons.push('8'); valor = parseInt(valor); }
        if (resto == 9) { numBinarioCons.push('9'); valor = parseInt(valor); }
        if (resto == 10) { numBinarioCons.push('A'); valor = parseInt(valor); }
        if (resto == 11) { numBinarioCons.push('B'); valor = parseInt(valor); }
        if (resto == 12) { numBinarioCons.push('C'); valor = parseInt(valor); }
        if (resto == 13) { numBinarioCons.push('D'); valor = parseInt(valor); }
        if (resto == 14) { numBinarioCons.push('E'); valor = parseInt(valor); }
        if (resto == 15) { numBinarioCons.push('F'); valor = parseInt(valor); }
      }

      for (let a = numBinarioCons.length; a > 0; a--) {
        resultado = resultado + numBinarioCons[a - 1];
      }

      return resultado;
    }

    function formulaOctadecimalBinario(valor = 0) {
      let resultado = '', numBinarioCons = [], verificacao = /[8-9]$/g;

      let teste = verificacao.exec(valor);

      if (teste == "8" || teste == "9") { return console.error('O valor inserido não condiz com um número de base octadecimal!'); }

      for (let a = 0; a < valor.toString().length; a++) {
        numBinarioCons.push(valor.toString().slice(a, a + 1));

        if (numBinarioCons[a] == '0') { resultado = resultado + '000'; }
        if (numBinarioCons[a] == '1') { resultado = resultado + '001'; }
        if (numBinarioCons[a] == '2') { resultado = resultado + '010'; }
        if (numBinarioCons[a] == '3') { resultado = resultado + '011'; }
        if (numBinarioCons[a] == '4') { resultado = resultado + '100'; }
        if (numBinarioCons[a] == '5') { resultado = resultado + '101'; }
        if (numBinarioCons[a] == '6') { resultado = resultado + '110'; }
        if (numBinarioCons[a] == '7') { resultado = resultado + '111'; }

      }

      resultado = resultado.match(/[1]+([0-1]+)?/g).toString();

      return resultado;
    }

    function formulaOctadecimalDecimal(valor = 0) {
      let resultado = 0, numBinarioDesm = [], verificacao = /[8-9]$/g;

      let teste = verificacao.exec(valor);

      if (teste == "8" || teste == "9") { return console.error('O valor inserido não condiz com um número de base octadecimal!'); }

      for (let a = 0; a < valor.toString().length; a++) {
        numBinarioDesm.push(valor.toString().slice(a, a + 1));
      }

      for (let a = 0, b = numBinarioDesm.length - 1; a < numBinarioDesm.length, b > -1; a++, b--) {
        numBinarioDesm[a] = numBinarioDesm[a] * 8 ** b;
        resultado = resultado + numBinarioDesm[a];
      }

      return resultado;
    }

    function formulaOctadecimalHexadecimal(valor = 0) {
      let resultado = '', numBinarioCons = [], passoIntermediario = [], passoIntermediarioResultado = '', passoFinal = [], verificacao = /[8-9]$/g;

      let teste = verificacao.exec(valor);

      if (teste == "8" || teste == "9") { return console.error('O valor inserido não condiz com um número de base octadecimal!'); }

      for (let a = 0; a < valor.toString().length; a++) {

        numBinarioCons.push(valor.toString().slice(a, a + 1));

        if (numBinarioCons[a] == '0') { passoIntermediario.push('000'); }
        if (numBinarioCons[a] == '1') { passoIntermediario.push('001'); }
        if (numBinarioCons[a] == '2') { passoIntermediario.push('010'); }
        if (numBinarioCons[a] == '3') { passoIntermediario.push('011'); }
        if (numBinarioCons[a] == '4') { passoIntermediario.push('100'); }
        if (numBinarioCons[a] == '5') { passoIntermediario.push('101'); }
        if (numBinarioCons[a] == '6') { passoIntermediario.push('110'); }
        if (numBinarioCons[a] == '7') { passoIntermediario.push('111'); }

        passoIntermediarioResultado = passoIntermediarioResultado + passoIntermediario[a];
      }

      passoIntermediarioResultado = passoIntermediarioResultado.match(/[1]+([0-1]+)?/g).toString();

      let divHex = passoIntermediarioResultado.length / 4;
      divHex = Math.round(divHex);

      if(passoIntermediarioResultado.length == 1) { divHex = 1; }
      
      for (let a = 0, b = 0, c = 4; a < divHex; a++, b = b + 4, c = c + 4) {
        passoFinal.push(passoIntermediarioResultado.slice(b, c));
      }

      for (let a = 0; a < passoFinal.length; a++) {

        if (passoFinal[a] == '0') { resultado = resultado + '0'; }
        if (passoFinal[a] == '00') { resultado = resultado + '0'; }
        if (passoFinal[a] == '000') { resultado = resultado + '0'; }
        if (passoFinal[a] == '0000') { resultado = resultado + '0'; }

        if (passoFinal[a] == '1') { resultado = resultado + '1'; }
        if (passoFinal[a] == '01') { resultado = resultado + '1'; }
        if (passoFinal[a] == '001') { resultado = resultado + '1'; }
        if (passoFinal[a] == '0001') { resultado = resultado + '1'; }

        if (passoFinal[a] == '10') { resultado = resultado + '2'; }
        if (passoFinal[a] == '010') { resultado = resultado + '2'; }
        if (passoFinal[a] == '0010') { resultado = resultado + '2'; }

        if (passoFinal[a] == '11') { resultado = resultado + '3'; }
        if (passoFinal[a] == '011') { resultado = resultado + '3'; }
        if (passoFinal[a] == '0011') { resultado = resultado + '3'; }

        if (passoFinal[a] == '100') { resultado = resultado + '4'; }
        if (passoFinal[a] == '0100') { resultado = resultado + '4'; }

        if (passoFinal[a] == '101') { resultado = resultado + '5'; }
        if (passoFinal[a] == '0101') { resultado = resultado + '5'; }

        if (passoFinal[a] == '110') { resultado = resultado + '6'; }
        if (passoFinal[a] == '0110') { resultado = resultado + '6'; }

        if (passoFinal[a] == '111') { resultado = resultado + '7'; }
        if (passoFinal[a] == '0111') { resultado = resultado + '7'; }

        if (passoFinal[a] == '1000') { resultado = resultado + '8'; }

        if (passoFinal[a] == '1001') { resultado = resultado + '9'; }

        if (passoFinal[a] == '1010') { resultado = resultado + 'A'; }

        if (passoFinal[a] == '1011') { resultado = resultado + 'B'; }

        if (passoFinal[a] == '1100') { resultado = resultado + 'C'; }

        if (passoFinal[a] == '1101') { resultado = resultado + 'D'; }

        if (passoFinal[a] == '1110') { resultado = resultado + 'E'; }

        if (passoFinal[a] == '1111') { resultado = resultado + 'F'; }

      }

      return resultado;
    }

    function formulaHexadecimalBinario(valor = '') {
      let resultado = '', numHexDesm = [], verificacaoHex = /[g-zG-Z]/g;

      if (valor.match(verificacaoHex) == 'g' || valor.match(verificacaoHex) == 'h' || valor.match(verificacaoHex) == 'i' || valor.match(verificacaoHex) == 'j' || valor.match(verificacaoHex) == 'k' || valor.match(verificacaoHex) == 'l' || valor.match(verificacaoHex) == 'm' || valor.match(verificacaoHex) == 'n' || valor.match(verificacaoHex) == 'o' || valor.match(verificacaoHex) == 'p' || valor.match(verificacaoHex) == 'q' || valor.match(verificacaoHex) == 'r' || valor.match(verificacaoHex) == 's' || valor.match(verificacaoHex) == 't' || valor.match(verificacaoHex) == 'u' || valor.match(verificacaoHex) == 'v' || valor.match(verificacaoHex) == 'w' || valor.match(verificacaoHex) == 'x' || valor.match(verificacaoHex) == 'y' || valor.match(verificacaoHex) == 'z' || valor.match(verificacaoHex) == 'G' || valor.match(verificacaoHex) == 'H' || valor.match(verificacaoHex) == 'I' || valor.match(verificacaoHex) == 'J' || valor.match(verificacaoHex) == 'K' || valor.match(verificacaoHex) == 'L' || valor.match(verificacaoHex) == 'M' || valor.match(verificacaoHex) == 'N' || valor.match(verificacaoHex) == 'O' || valor.match(verificacaoHex) == 'P' || valor.match(verificacaoHex) == 'Q' || valor.match(verificacaoHex) == 'R' || valor.match(verificacaoHex) == 'S' || valor.match(verificacaoHex) == 'T' || valor.match(verificacaoHex) == 'U' || valor.match(verificacaoHex) == 'V' || valor.match(verificacaoHex) == 'W' || valor.match(verificacaoHex) == 'X' || valor.match(verificacaoHex) == 'Y' || valor.match(verificacaoHex) == 'Z') {
        return console.error("O valor inserido não condiz com um valor da base hexadecimal!");
      }

      for (let a = 0; a < valor.length; a++) { numHexDesm.push(valor.slice(a, a + 1)); }

      for (let a = 0; a < numHexDesm.length; a++) {

        if (numHexDesm[a] == '0') { resultado = resultado + '0000'; }
        if (numHexDesm[a] == '1') { resultado = resultado + '0001'; }
        if (numHexDesm[a] == '2') { resultado = resultado + '0010'; }
        if (numHexDesm[a] == '3') { resultado = resultado + '0011'; }
        if (numHexDesm[a] == '4') { resultado = resultado + '0100'; }
        if (numHexDesm[a] == '5') { resultado = resultado + '0101'; }
        if (numHexDesm[a] == '6') { resultado = resultado + '0110'; }
        if (numHexDesm[a] == '7') { resultado = resultado + '0111'; }
        if (numHexDesm[a] == '8') { resultado = resultado + '1000'; }
        if (numHexDesm[a] == '9') { resultado = resultado + '1001'; }

        if (numHexDesm[a] == 'a') { resultado = resultado + '1010'; }
        if (numHexDesm[a] == 'A') { resultado = resultado + '1010'; }

        if (numHexDesm[a] == 'b') { resultado = resultado + '1011'; }
        if (numHexDesm[a] == 'B') { resultado = resultado + '1011'; }

        if (numHexDesm[a] == 'c') { resultado = resultado + '1100'; }
        if (numHexDesm[a] == 'C') { resultado = resultado + '1100'; }

        if (numHexDesm[a] == 'd') { resultado = resultado + '1101'; }
        if (numHexDesm[a] == 'D') { resultado = resultado + '1101'; }

        if (numHexDesm[a] == 'e') { resultado = resultado + '1110'; }
        if (numHexDesm[a] == 'E') { resultado = resultado + '1110'; }

        if (numHexDesm[a] == 'f') { resultado = resultado + '1111'; }
        if (numHexDesm[a] == 'F') { resultado = resultado + '1111'; }
      }

      resultado = resultado.match(/[1]+([0-1]+)?/g).toString();

      return resultado;
    }

    function formulaHexadecimalDecimal(valor = '') {
      let resultado = 0, numHexDesm = [], verificacaoHex = /[g-zG-Z]/g;

      if (valor.match(verificacaoHex) == 'g' || valor.match(verificacaoHex) == 'h' || valor.match(verificacaoHex) == 'i' || valor.match(verificacaoHex) == 'j' || valor.match(verificacaoHex) == 'k' || valor.match(verificacaoHex) == 'l' || valor.match(verificacaoHex) == 'm' || valor.match(verificacaoHex) == 'n' || valor.match(verificacaoHex) == 'o' || valor.match(verificacaoHex) == 'p' || valor.match(verificacaoHex) == 'q' || valor.match(verificacaoHex) == 'r' || valor.match(verificacaoHex) == 's' || valor.match(verificacaoHex) == 't' || valor.match(verificacaoHex) == 'u' || valor.match(verificacaoHex) == 'v' || valor.match(verificacaoHex) == 'w' || valor.match(verificacaoHex) == 'x' || valor.match(verificacaoHex) == 'y' || valor.match(verificacaoHex) == 'z' || valor.match(verificacaoHex) == 'G' || valor.match(verificacaoHex) == 'H' || valor.match(verificacaoHex) == 'I' || valor.match(verificacaoHex) == 'J' || valor.match(verificacaoHex) == 'K' || valor.match(verificacaoHex) == 'L' || valor.match(verificacaoHex) == 'M' || valor.match(verificacaoHex) == 'N' || valor.match(verificacaoHex) == 'O' || valor.match(verificacaoHex) == 'P' || valor.match(verificacaoHex) == 'Q' || valor.match(verificacaoHex) == 'R' || valor.match(verificacaoHex) == 'S' || valor.match(verificacaoHex) == 'T' || valor.match(verificacaoHex) == 'U' || valor.match(verificacaoHex) == 'V' || valor.match(verificacaoHex) == 'W' || valor.match(verificacaoHex) == 'X' || valor.match(verificacaoHex) == 'Y' || valor.match(verificacaoHex) == 'Z') {
        return console.error("O valor inserido não condiz com um valor da base hexadecimal!");
      }

      for (let a = 0; a < valor.length; a++) { numHexDesm.push(valor.slice(a, a + 1)); }

      for (let a = 0, b = numHexDesm.length - 1; a < numHexDesm.length, b > -1; a++, b--) {

        if (numHexDesm[a] == 'a') { numHexDesm[a] = 10; }
        if (numHexDesm[a] == 'A') { numHexDesm[a] = 10; }

        if (numHexDesm[a] == 'b') { numHexDesm[a] = 11; }
        if (numHexDesm[a] == 'B') { numHexDesm[a] = 11; }

        if (numHexDesm[a] == 'c') { numHexDesm[a] = 12; }
        if (numHexDesm[a] == 'C') { numHexDesm[a] = 12; }

        if (numHexDesm[a] == 'd') { numHexDesm[a] = 13; }
        if (numHexDesm[a] == 'D') { numHexDesm[a] = 13; }

        if (numHexDesm[a] == 'e') { numHexDesm[a] = 14; }
        if (numHexDesm[a] == 'E') { numHexDesm[a] = 14; }

        if (numHexDesm[a] == 'f') { numHexDesm[a] = 15; }
        if (numHexDesm[a] == 'F') { numHexDesm[a] = 15; }

        numHexDesm[a] = parseInt(numHexDesm[a]) * 16 ** b;
        resultado = resultado + numHexDesm[a];
      }

      return resultado;
    }

    function formulaHexadecimalOctadecimal(valor = '') {
      let resultado = '', numHexDesm = [], numOctCons = [], verificacaoHex = /[g-zG-Z]/g;

      if (valor.match(verificacaoHex) == 'g' || valor.match(verificacaoHex) == 'h' || valor.match(verificacaoHex) == 'i' || valor.match(verificacaoHex) == 'j' || valor.match(verificacaoHex) == 'k' || valor.match(verificacaoHex) == 'l' || valor.match(verificacaoHex) == 'm' || valor.match(verificacaoHex) == 'n' || valor.match(verificacaoHex) == 'o' || valor.match(verificacaoHex) == 'p' || valor.match(verificacaoHex) == 'q' || valor.match(verificacaoHex) == 'r' || valor.match(verificacaoHex) == 's' || valor.match(verificacaoHex) == 't' || valor.match(verificacaoHex) == 'u' || valor.match(verificacaoHex) == 'v' || valor.match(verificacaoHex) == 'w' || valor.match(verificacaoHex) == 'x' || valor.match(verificacaoHex) == 'y' || valor.match(verificacaoHex) == 'z' || valor.match(verificacaoHex) == 'G' || valor.match(verificacaoHex) == 'H' || valor.match(verificacaoHex) == 'I' || valor.match(verificacaoHex) == 'J' || valor.match(verificacaoHex) == 'K' || valor.match(verificacaoHex) == 'L' || valor.match(verificacaoHex) == 'M' || valor.match(verificacaoHex) == 'N' || valor.match(verificacaoHex) == 'O' || valor.match(verificacaoHex) == 'P' || valor.match(verificacaoHex) == 'Q' || valor.match(verificacaoHex) == 'R' || valor.match(verificacaoHex) == 'S' || valor.match(verificacaoHex) == 'T' || valor.match(verificacaoHex) == 'U' || valor.match(verificacaoHex) == 'V' || valor.match(verificacaoHex) == 'W' || valor.match(verificacaoHex) == 'X' || valor.match(verificacaoHex) == 'Y' || valor.match(verificacaoHex) == 'Z') {
        return console.error("O valor inserido não condiz com um valor da base hexadecimal!");
      }

      for (let a = 0; a < valor.length; a++) { numHexDesm.push(valor.slice(a, a + 1)); }

      for (let a = 0, b = numHexDesm.length - 1; a < numHexDesm.length, b > -1; a++, b--) {

        if (numHexDesm[a] == 'a') { numHexDesm[a] = 10; }
        if (numHexDesm[a] == 'A') { numHexDesm[a] = 10; }

        if (numHexDesm[a] == 'b') { numHexDesm[a] = 11; }
        if (numHexDesm[a] == 'B') { numHexDesm[a] = 11; }

        if (numHexDesm[a] == 'c') { numHexDesm[a] = 12; }
        if (numHexDesm[a] == 'C') { numHexDesm[a] = 12; }

        if (numHexDesm[a] == 'd') { numHexDesm[a] = 13; }
        if (numHexDesm[a] == 'D') { numHexDesm[a] = 13; }

        if (numHexDesm[a] == 'e') { numHexDesm[a] = 14; }
        if (numHexDesm[a] == 'E') { numHexDesm[a] = 14; }

        if (numHexDesm[a] == 'f') { numHexDesm[a] = 15; }
        if (numHexDesm[a] == 'F') { numHexDesm[a] = 15; }

        numHexDesm[a] = parseInt(numHexDesm[a]) * 16 ** b;

        while (numHexDesm[a] > 0) {
          let resto = numHexDesm[a] % 8; numHexDesm[a] = numHexDesm[a] / 8;

          if (resto == 0) { numOctCons.push('0'); }
          if (resto == 1) { numOctCons.push('1'); numHexDesm[a] = parseInt(numHexDesm[a]); }
          if (resto == 2) { numOctCons.push('2'); numHexDesm[a] = parseInt(numHexDesm[a]); }
          if (resto == 3) { numOctCons.push('3'); numHexDesm[a] = parseInt(numHexDesm[a]); }
          if (resto == 4) { numOctCons.push('4'); numHexDesm[a] = parseInt(numHexDesm[a]); }
          if (resto == 5) { numOctCons.push('5'); numHexDesm[a] = parseInt(numHexDesm[a]); }
          if (resto == 6) { numOctCons.push('6'); numHexDesm[a] = parseInt(numHexDesm[a]); }
          if (resto == 7) { numOctCons.push('7'); numHexDesm[a] = parseInt(numHexDesm[a]); }
        }

        for (let a = numOctCons.length; a > 0; a--) {
          resultado = resultado + numOctCons[a - 1];
        }
      }
      resultado = parseInt(resultado);

      return resultado;
    }


    let chaves = ['t01_binário', 't02_decimal', 't03_octadecimal', 't04_hexadecimal'];

    switch(input) {
      case 1:
        input = chaves[0];
        break;
      case 2:
        input = chaves[1];
        break;
      case 3:
        input = chaves[2];
        break;
      case 4:
        input = chaves[3];
        break;
    }

    switch(output) {
      case 1:
        output = chaves[0];
        break;
      case 2:
        output = chaves[1];
        break;
      case 3:
        output = chaves[2];
        break;
      case 4:
        output = chaves[3];
        break;
    }

    let combinacao = [[input], [output]];

    switch(combinacao[0][0]) {
      case 't01_binário':
        switch(combinacao[1][0]) {
          case 't02_decimal':
            return formulaBinarioDecimal(valor);
          case 't03_octadecimal':
            return formulaBinarioOctadecimal(valor);
          case 't04_hexadecimal':
            return formulaBinarioHexadecimal(valor);
        }
        break;
      case 't02_decimal':
        switch(combinacao[1][0]) {
          case 't01_binário':
            return formulaDecimalBinario(valor);
          case 't03_octadecimal':
            return formulaDecimalOctadecimal(valor);
          case 't04_hexadecimal':
            return formulaDecimalHexadecimal(valor);
        }
        break;
      case 't03_octadecimal':
        switch(combinacao[1][0]) {
          case 't01_binário':
            return formulaOctadecimalBinario(valor);
          case 't02_decimal':
            return formulaOctadecimalDecimal(valor);
          case 't04_hexadecimal':
            return formulaOctadecimalHexadecimal(valor);
        }
        break;
      case 't04_hexadecimal':
        switch(combinacao[1][0]) {
          case 't01_binário':
            return formulaHexadecimalBinario(valor);
          case 't02_decimal':
            return formulaHexadecimalDecimal(valor);
          case 't03_octadecimal':
            return formulaHexadecimalOctadecimal(valor);
        }
        break;
    }
  }


  // Logaritmas
  logBase2(valor = 0) {
    let resultado = Math.log2(valor);

    if (isNaN(resultado) == true) { resultado = 0; }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  logBase10(valor = 0) {
    let resultado = Math.log10(valor);

    if (isNaN(resultado) == true) { resultado = 0; }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  logBaseX(valor = 0, base = 0, aproxInt = (true || false), aproxFloat1Casa = (true || false), aproxFloat2Casas = (true || false), aproxFloat3Casas = (true || false)) {
    let resultado = 0, box = valor;

    while (valor > 1) {
      valor = valor / base;
      resultado++;

      if (valor > 0 && valor < 1) { resultado--; }

      if (valor > 0 && valor < 1 && aproxFloat1Casa == true) {

        if (base ** (resultado + 0.1) > box) {
          resultado = resultado + 0.1;
        } else if (base ** (resultado + 0.2) > box) {
          resultado = resultado + 0.2;
        } else if (base ** (resultado + 0.3) > box) {
          resultado = resultado + 0.3;
        } else if (base ** (resultado + 0.4) > box) {
          resultado = resultado + 0.4;
        } else if (base ** (resultado + 0.5) > box) {
          resultado = resultado + 0.5;
        } else if (base ** (resultado + 0.6) > box) {
          resultado = resultado + 0.6;
        } else if (base ** (resultado + 0.7) > box) {
          resultado = resultado + 0.7;
        } else if (base ** (resultado + 0.8) > box) {
          resultado = resultado + 0.8;
        } else if (base ** (resultado + 0.9) > box) {
          resultado = resultado + 0.9;
        }

        if (base ** resultado > box) { resultado = resultado - 0.1; }
      }

      if (valor > 0 && valor < 1 && aproxFloat2Casas == true) {

        if (base ** (resultado + 0.01) > box) {
          resultado = resultado + 0.01;
        } else if (base ** (resultado + 0.10) > box) {
          resultado = resultado + 0.10;
        } else if (base ** (resultado + 0.11) > box) {
          resultado = resultado + 0.11;

        } else if (base ** (resultado + 0.02) > box) {
          resultado = resultado + 0.02;
        } else if (base ** (resultado + 0.12) > box) {
          resultado = resultado + 0.12;
        } else if (base ** (resultado + 0.20) > box) {
          resultado = resultado + 0.20;
        } else if (base ** (resultado + 0.21) > box) {
          resultado = resultado + 0.21;
        } else if (base ** (resultado + 0.22) > box) {
          resultado = resultado + 0.22;

        } else if (base ** (resultado + 0.03) > box) {
          resultado = resultado + 0.03;
        } else if (base ** (resultado + 0.13) > box) {
          resultado = resultado + 0.13;
        } else if (base ** (resultado + 0.23) > box) {
          resultado = resultado + 0.23;
        } else if (base ** (resultado + 0.30) > box) {
          resultado = resultado + 0.30;
        } else if (base ** (resultado + 0.31) > box) {
          resultado = resultado + 0.31;
        } else if (base ** (resultado + 0.32) > box) {
          resultado = resultado + 0.32;
        } else if (base ** (resultado + 0.33) > box) {
          resultado = resultado + 0.33;

        } else if (base ** (resultado + 0.04) > box) {
          resultado = resultado + 0.04;
        } else if (base ** (resultado + 0.14) > box) {
          resultado = resultado + 0.14;
        } else if (base ** (resultado + 0.24) > box) {
          resultado = resultado + 0.24;
        } else if (base ** (resultado + 0.34) > box) {
          resultado = resultado + 0.34;
        } else if (base ** (resultado + 0.40) > box) {
          resultado = resultado + 0.40;
        } else if (base ** (resultado + 0.41) > box) {
          resultado = resultado + 0.41;
        } else if (base ** (resultado + 0.42) > box) {
          resultado = resultado + 0.42;
        } else if (base ** (resultado + 0.43) > box) {
          resultado = resultado + 0.43;
        } else if (base ** (resultado + 0.44) > box) {
          resultado = resultado + 0.44;

        } else if (base ** (resultado + 0.05) > box) {
          resultado = resultado + 0.05;
        } else if (base ** (resultado + 0.15) > box) {
          resultado = resultado + 0.15;
        } else if (base ** (resultado + 0.25) > box) {
          resultado = resultado + 0.25;
        } else if (base ** (resultado + 0.35) > box) {
          resultado = resultado + 0.35;
        } else if (base ** (resultado + 0.45) > box) {
          resultado = resultado + 0.45;
        } else if (base ** (resultado + 0.50) > box) {
          resultado = resultado + 0.50;
        } else if (base ** (resultado + 0.51) > box) {
          resultado = resultado + 0.51;
        } else if (base ** (resultado + 0.52) > box) {
          resultado = resultado + 0.52;
        } else if (base ** (resultado + 0.53) > box) {
          resultado = resultado + 0.53;
        } else if (base ** (resultado + 0.54) > box) {
          resultado = resultado + 0.54;
        } else if (base ** (resultado + 0.55) > box) {
          resultado = resultado + 0.55;

        } else if (base ** (resultado + 0.06) > box) {
          resultado = resultado + 0.06;
        } else if (base ** (resultado + 0.16) > box) {
          resultado = resultado + 0.16;
        } else if (base ** (resultado + 0.26) > box) {
          resultado = resultado + 0.26;
        } else if (base ** (resultado + 0.36) > box) {
          resultado = resultado + 0.36;
        } else if (base ** (resultado + 0.46) > box) {
          resultado = resultado + 0.46;
        } else if (base ** (resultado + 0.56) > box) {
          resultado = resultado + 0.56;
        } else if (base ** (resultado + 0.60) > box) {
          resultado = resultado + 0.60;
        } else if (base ** (resultado + 0.61) > box) {
          resultado = resultado + 0.61;
        } else if (base ** (resultado + 0.62) > box) {
          resultado = resultado + 0.62;
        } else if (base ** (resultado + 0.63) > box) {
          resultado = resultado + 0.63;
        } else if (base ** (resultado + 0.64) > box) {
          resultado = resultado + 0.64;
        } else if (base ** (resultado + 0.65) > box) {
          resultado = resultado + 0.65;
        } else if (base ** (resultado + 0.66) > box) {
          resultado = resultado + 0.66;

        } else if (base ** (resultado + 0.07) > box) {
          resultado = resultado + 0.07;
        } else if (base ** (resultado + 0.17) > box) {
          resultado = resultado + 0.17;
        } else if (base ** (resultado + 0.27) > box) {
          resultado = resultado + 0.27;
        } else if (base ** (resultado + 0.37) > box) {
          resultado = resultado + 0.37;
        } else if (base ** (resultado + 0.47) > box) {
          resultado = resultado + 0.47;
        } else if (base ** (resultado + 0.57) > box) {
          resultado = resultado + 0.57;
        } else if (base ** (resultado + 0.67) > box) {
          resultado = resultado + 0.67;
        } else if (base ** (resultado + 0.70) > box) {
          resultado = resultado + 0.70;
        } else if (base ** (resultado + 0.71) > box) {
          resultado = resultado + 0.71;
        } else if (base ** (resultado + 0.72) > box) {
          resultado = resultado + 0.72;
        } else if (base ** (resultado + 0.73) > box) {
          resultado = resultado + 0.73;
        } else if (base ** (resultado + 0.74) > box) {
          resultado = resultado + 0.74;
        } else if (base ** (resultado + 0.75) > box) {
          resultado = resultado + 0.75;
        } else if (base ** (resultado + 0.76) > box) {
          resultado = resultado + 0.76;
        } else if (base ** (resultado + 0.77) > box) {
          resultado = resultado + 0.77;

        } else if (base ** (resultado + 0.08) > box) {
          resultado = resultado + 0.08;
        } else if (base ** (resultado + 0.18) > box) {
          resultado = resultado + 0.18;
        } else if (base ** (resultado + 0.28) > box) {
          resultado = resultado + 0.28;
        } else if (base ** (resultado + 0.38) > box) {
          resultado = resultado + 0.38;
        } else if (base ** (resultado + 0.48) > box) {
          resultado = resultado + 0.48;
        } else if (base ** (resultado + 0.58) > box) {
          resultado = resultado + 0.58;
        } else if (base ** (resultado + 0.68) > box) {
          resultado = resultado + 0.68;
        } else if (base ** (resultado + 0.78) > box) {
          resultado = resultado + 0.78;
        } else if (base ** (resultado + 0.80) > box) {
          resultado = resultado + 0.80;
        } else if (base ** (resultado + 0.81) > box) {
          resultado = resultado + 0.81;
        } else if (base ** (resultado + 0.82) > box) {
          resultado = resultado + 0.82;
        } else if (base ** (resultado + 0.83) > box) {
          resultado = resultado + 0.83;
        } else if (base ** (resultado + 0.84) > box) {
          resultado = resultado + 0.84;
        } else if (base ** (resultado + 0.85) > box) {
          resultado = resultado + 0.85;
        } else if (base ** (resultado + 0.86) > box) {
          resultado = resultado + 0.86;
        } else if (base ** (resultado + 0.87) > box) {
          resultado = resultado + 0.87;
        } else if (base ** (resultado + 0.88) > box) {
          resultado = resultado + 0.88;

        } else if (base ** (resultado + 0.09) > box) {
          resultado = resultado + 0.09;
        } else if (base ** (resultado + 0.19) > box) {
          resultado = resultado + 0.19;
        } else if (base ** (resultado + 0.29) > box) {
          resultado = resultado + 0.29;
        } else if (base ** (resultado + 0.39) > box) {
          resultado = resultado + 0.39;
        } else if (base ** (resultado + 0.49) > box) {
          resultado = resultado + 0.49;
        } else if (base ** (resultado + 0.59) > box) {
          resultado = resultado + 0.59;
        } else if (base ** (resultado + 0.69) > box) {
          resultado = resultado + 0.69;
        } else if (base ** (resultado + 0.79) > box) {
          resultado = resultado + 0.79;
        } else if (base ** (resultado + 0.89) > box) {
          resultado = resultado + 0.89;
        } else if (base ** (resultado + 0.90) > box) {
          resultado = resultado + 0.90;
        } else if (base ** (resultado + 0.91) > box) {
          resultado = resultado + 0.91;
        } else if (base ** (resultado + 0.92) > box) {
          resultado = resultado + 0.92;
        } else if (base ** (resultado + 0.93) > box) {
          resultado = resultado + 0.93;
        } else if (base ** (resultado + 0.94) > box) {
          resultado = resultado + 0.94;
        } else if (base ** (resultado + 0.95) > box) {
          resultado = resultado + 0.95;
        } else if (base ** (resultado + 0.96) > box) {
          resultado = resultado + 0.96;
        } else if (base ** (resultado + 0.97) > box) {
          resultado = resultado + 0.97;
        } else if (base ** (resultado + 0.98) > box) {
          resultado = resultado + 0.98;
        } else if (base ** (resultado + 0.99) > box) {
          resultado = resultado + 0.99;
        }

        if (base ** resultado > box) { resultado = resultado - 0.01; }
      }

      if (valor > 0 && valor < 1 && aproxFloat3Casas == true) {

        if (base ** (resultado + 0.001) > box) {
          resultado = resultado + 0.001;
        } else if (base ** (resultado + 0.002) > box) {
          resultado = resultado + 0.002;
        } else if (base ** (resultado + 0.003) > box) {
          resultado = resultado + 0.003;
        } else if (base ** (resultado + 0.004) > box) {
          resultado = resultado + 0.004;
        } else if (base ** (resultado + 0.005) > box) {
          resultado = resultado + 0.005;
        } else if (base ** (resultado + 0.006) > box) {
          resultado = resultado + 0.006;
        } else if (base ** (resultado + 0.007) > box) {
          resultado = resultado + 0.007;
        } else if (base ** (resultado + 0.008) > box) {
          resultado = resultado + 0.008;
        } else if (base ** (resultado + 0.009) > box) {
          resultado = resultado + 0.009;
        }

        if (base ** resultado > box) { resultado = resultado - 0.001; }
      }

      if (valor < 1 && aproxInt == true) { break; }
    }

    if (isNaN(resultado) == true) { resultado = 0; }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  logNatural(valor = 0) {
    let resultado = Math.log(valor);

    if (isNaN(resultado) == true) { resultado = 0; }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  logNaturalMais1(valor = 0) {
    let resultado = Math.log1p(valor);

    if (isNaN(resultado) == true) { resultado = 0; }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  logNaturalMaisX(valor = 0, incremento = 0) {
    let resultado = Math.log1p(valor - 1 + incremento);

    if (isNaN(resultado) == true) { resultado = 0; }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  // Antilogaritmas
  antilogBase2(valor = 0) {
    let base = 2, resultado = base ** Math.log2(valor);

    if (isNaN(resultado) == true) { resultado = 0; }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  antilogBase10(valor = 0) {
    let base = 10, resultado = base ** Math.log10(valor);

    if (isNaN(resultado) == true) { resultado = 0; }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  antilogBaseX(valor = 0, base = 0) {
    let resultado = 0, box = valor;

    while (valor > 1) {
      valor = valor / base;
      resultado++;

      if (valor > 0 && valor < 1) { resultado--; }

      if (valor > 0 && valor < 1 && aproxFloat1Casa == true) {

        if (base ** (resultado + 0.1) > box) {
          resultado = resultado + 0.1;
        } else if (base ** (resultado + 0.2) > box) {
          resultado = resultado + 0.2;
        } else if (base ** (resultado + 0.3) > box) {
          resultado = resultado + 0.3;
        } else if (base ** (resultado + 0.4) > box) {
          resultado = resultado + 0.4;
        } else if (base ** (resultado + 0.5) > box) {
          resultado = resultado + 0.5;
        } else if (base ** (resultado + 0.6) > box) {
          resultado = resultado + 0.6;
        } else if (base ** (resultado + 0.7) > box) {
          resultado = resultado + 0.7;
        } else if (base ** (resultado + 0.8) > box) {
          resultado = resultado + 0.8;
        } else if (base ** (resultado + 0.9) > box) {
          resultado = resultado + 0.9;
        }

        if (base ** resultado > box) { resultado = resultado - 0.1; }
      }

      if (valor > 0 && valor < 1 && aproxFloat2Casas == true) {

        if (base ** (resultado + 0.01) > box) {
          resultado = resultado + 0.01;
        } else if (base ** (resultado + 0.10) > box) {
          resultado = resultado + 0.10;
        } else if (base ** (resultado + 0.11) > box) {
          resultado = resultado + 0.11;

        } else if (base ** (resultado + 0.02) > box) {
          resultado = resultado + 0.02;
        } else if (base ** (resultado + 0.12) > box) {
          resultado = resultado + 0.12;
        } else if (base ** (resultado + 0.20) > box) {
          resultado = resultado + 0.20;
        } else if (base ** (resultado + 0.21) > box) {
          resultado = resultado + 0.21;
        } else if (base ** (resultado + 0.22) > box) {
          resultado = resultado + 0.22;

        } else if (base ** (resultado + 0.03) > box) {
          resultado = resultado + 0.03;
        } else if (base ** (resultado + 0.13) > box) {
          resultado = resultado + 0.13;
        } else if (base ** (resultado + 0.23) > box) {
          resultado = resultado + 0.23;
        } else if (base ** (resultado + 0.30) > box) {
          resultado = resultado + 0.30;
        } else if (base ** (resultado + 0.31) > box) {
          resultado = resultado + 0.31;
        } else if (base ** (resultado + 0.32) > box) {
          resultado = resultado + 0.32;
        } else if (base ** (resultado + 0.33) > box) {
          resultado = resultado + 0.33;

        } else if (base ** (resultado + 0.04) > box) {
          resultado = resultado + 0.04;
        } else if (base ** (resultado + 0.14) > box) {
          resultado = resultado + 0.14;
        } else if (base ** (resultado + 0.24) > box) {
          resultado = resultado + 0.24;
        } else if (base ** (resultado + 0.34) > box) {
          resultado = resultado + 0.34;
        } else if (base ** (resultado + 0.40) > box) {
          resultado = resultado + 0.40;
        } else if (base ** (resultado + 0.41) > box) {
          resultado = resultado + 0.41;
        } else if (base ** (resultado + 0.42) > box) {
          resultado = resultado + 0.42;
        } else if (base ** (resultado + 0.43) > box) {
          resultado = resultado + 0.43;
        } else if (base ** (resultado + 0.44) > box) {
          resultado = resultado + 0.44;

        } else if (base ** (resultado + 0.05) > box) {
          resultado = resultado + 0.05;
        } else if (base ** (resultado + 0.15) > box) {
          resultado = resultado + 0.15;
        } else if (base ** (resultado + 0.25) > box) {
          resultado = resultado + 0.25;
        } else if (base ** (resultado + 0.35) > box) {
          resultado = resultado + 0.35;
        } else if (base ** (resultado + 0.45) > box) {
          resultado = resultado + 0.45;
        } else if (base ** (resultado + 0.50) > box) {
          resultado = resultado + 0.50;
        } else if (base ** (resultado + 0.51) > box) {
          resultado = resultado + 0.51;
        } else if (base ** (resultado + 0.52) > box) {
          resultado = resultado + 0.52;
        } else if (base ** (resultado + 0.53) > box) {
          resultado = resultado + 0.53;
        } else if (base ** (resultado + 0.54) > box) {
          resultado = resultado + 0.54;
        } else if (base ** (resultado + 0.55) > box) {
          resultado = resultado + 0.55;

        } else if (base ** (resultado + 0.06) > box) {
          resultado = resultado + 0.06;
        } else if (base ** (resultado + 0.16) > box) {
          resultado = resultado + 0.16;
        } else if (base ** (resultado + 0.26) > box) {
          resultado = resultado + 0.26;
        } else if (base ** (resultado + 0.36) > box) {
          resultado = resultado + 0.36;
        } else if (base ** (resultado + 0.46) > box) {
          resultado = resultado + 0.46;
        } else if (base ** (resultado + 0.56) > box) {
          resultado = resultado + 0.56;
        } else if (base ** (resultado + 0.60) > box) {
          resultado = resultado + 0.60;
        } else if (base ** (resultado + 0.61) > box) {
          resultado = resultado + 0.61;
        } else if (base ** (resultado + 0.62) > box) {
          resultado = resultado + 0.62;
        } else if (base ** (resultado + 0.63) > box) {
          resultado = resultado + 0.63;
        } else if (base ** (resultado + 0.64) > box) {
          resultado = resultado + 0.64;
        } else if (base ** (resultado + 0.65) > box) {
          resultado = resultado + 0.65;
        } else if (base ** (resultado + 0.66) > box) {
          resultado = resultado + 0.66;

        } else if (base ** (resultado + 0.07) > box) {
          resultado = resultado + 0.07;
        } else if (base ** (resultado + 0.17) > box) {
          resultado = resultado + 0.17;
        } else if (base ** (resultado + 0.27) > box) {
          resultado = resultado + 0.27;
        } else if (base ** (resultado + 0.37) > box) {
          resultado = resultado + 0.37;
        } else if (base ** (resultado + 0.47) > box) {
          resultado = resultado + 0.47;
        } else if (base ** (resultado + 0.57) > box) {
          resultado = resultado + 0.57;
        } else if (base ** (resultado + 0.67) > box) {
          resultado = resultado + 0.67;
        } else if (base ** (resultado + 0.70) > box) {
          resultado = resultado + 0.70;
        } else if (base ** (resultado + 0.71) > box) {
          resultado = resultado + 0.71;
        } else if (base ** (resultado + 0.72) > box) {
          resultado = resultado + 0.72;
        } else if (base ** (resultado + 0.73) > box) {
          resultado = resultado + 0.73;
        } else if (base ** (resultado + 0.74) > box) {
          resultado = resultado + 0.74;
        } else if (base ** (resultado + 0.75) > box) {
          resultado = resultado + 0.75;
        } else if (base ** (resultado + 0.76) > box) {
          resultado = resultado + 0.76;
        } else if (base ** (resultado + 0.77) > box) {
          resultado = resultado + 0.77;

        } else if (base ** (resultado + 0.08) > box) {
          resultado = resultado + 0.08;
        } else if (base ** (resultado + 0.18) > box) {
          resultado = resultado + 0.18;
        } else if (base ** (resultado + 0.28) > box) {
          resultado = resultado + 0.28;
        } else if (base ** (resultado + 0.38) > box) {
          resultado = resultado + 0.38;
        } else if (base ** (resultado + 0.48) > box) {
          resultado = resultado + 0.48;
        } else if (base ** (resultado + 0.58) > box) {
          resultado = resultado + 0.58;
        } else if (base ** (resultado + 0.68) > box) {
          resultado = resultado + 0.68;
        } else if (base ** (resultado + 0.78) > box) {
          resultado = resultado + 0.78;
        } else if (base ** (resultado + 0.80) > box) {
          resultado = resultado + 0.80;
        } else if (base ** (resultado + 0.81) > box) {
          resultado = resultado + 0.81;
        } else if (base ** (resultado + 0.82) > box) {
          resultado = resultado + 0.82;
        } else if (base ** (resultado + 0.83) > box) {
          resultado = resultado + 0.83;
        } else if (base ** (resultado + 0.84) > box) {
          resultado = resultado + 0.84;
        } else if (base ** (resultado + 0.85) > box) {
          resultado = resultado + 0.85;
        } else if (base ** (resultado + 0.86) > box) {
          resultado = resultado + 0.86;
        } else if (base ** (resultado + 0.87) > box) {
          resultado = resultado + 0.87;
        } else if (base ** (resultado + 0.88) > box) {
          resultado = resultado + 0.88;

        } else if (base ** (resultado + 0.09) > box) {
          resultado = resultado + 0.09;
        } else if (base ** (resultado + 0.19) > box) {
          resultado = resultado + 0.19;
        } else if (base ** (resultado + 0.29) > box) {
          resultado = resultado + 0.29;
        } else if (base ** (resultado + 0.39) > box) {
          resultado = resultado + 0.39;
        } else if (base ** (resultado + 0.49) > box) {
          resultado = resultado + 0.49;
        } else if (base ** (resultado + 0.59) > box) {
          resultado = resultado + 0.59;
        } else if (base ** (resultado + 0.69) > box) {
          resultado = resultado + 0.69;
        } else if (base ** (resultado + 0.79) > box) {
          resultado = resultado + 0.79;
        } else if (base ** (resultado + 0.89) > box) {
          resultado = resultado + 0.89;
        } else if (base ** (resultado + 0.90) > box) {
          resultado = resultado + 0.90;
        } else if (base ** (resultado + 0.91) > box) {
          resultado = resultado + 0.91;
        } else if (base ** (resultado + 0.92) > box) {
          resultado = resultado + 0.92;
        } else if (base ** (resultado + 0.93) > box) {
          resultado = resultado + 0.93;
        } else if (base ** (resultado + 0.94) > box) {
          resultado = resultado + 0.94;
        } else if (base ** (resultado + 0.95) > box) {
          resultado = resultado + 0.95;
        } else if (base ** (resultado + 0.96) > box) {
          resultado = resultado + 0.96;
        } else if (base ** (resultado + 0.97) > box) {
          resultado = resultado + 0.97;
        } else if (base ** (resultado + 0.98) > box) {
          resultado = resultado + 0.98;
        } else if (base ** (resultado + 0.99) > box) {
          resultado = resultado + 0.99;
        }

        if (base ** resultado > box) { resultado = resultado - 0.01; }
      }

      if (valor > 0 && valor < 1 && aproxFloat3Casas == true) {

        if (base ** (resultado + 0.001) > box) {
          resultado = resultado + 0.001;
        } else if (base ** (resultado + 0.002) > box) {
          resultado = resultado + 0.002;
        } else if (base ** (resultado + 0.003) > box) {
          resultado = resultado + 0.003;
        } else if (base ** (resultado + 0.004) > box) {
          resultado = resultado + 0.004;
        } else if (base ** (resultado + 0.005) > box) {
          resultado = resultado + 0.005;
        } else if (base ** (resultado + 0.006) > box) {
          resultado = resultado + 0.006;
        } else if (base ** (resultado + 0.007) > box) {
          resultado = resultado + 0.007;
        } else if (base ** (resultado + 0.008) > box) {
          resultado = resultado + 0.008;
        } else if (base ** (resultado + 0.009) > box) {
          resultado = resultado + 0.009;
        }

        if (base ** resultado > box) { resultado = resultado - 0.001; }
      }

      if (valor < 1 && aproxInt == true) { break; }
    }

    if (isNaN(resultado) == true) { resultado = 0; }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    let resultado2 = base ** resultado;

    if (isNaN(resultado2) == true) { resultado2 = 0; }

    switch (resultado2) {
      case null:
        resultado2 = 0;
        break;
      case Infinity:
        resultado2 = 0;
        break;
      case -Infinity:
        resultado2 = 0;
        break;
    }

    return resultado2;
  }

  antilogNatural(valor = 0) {
    let base = 2.7182818284590452353602874, resultado = base ** Math.log(valor);

    if (isNaN(resultado) == true) { resultado = 0; }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  antilogNaturalMais1(valor = 0) {
    let base = 2.7182818284590452353602874, resultado = base ** Math.log1p(valor);

    if (isNaN(resultado) == true) { resultado = 0; }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  antilogNaturalMaisX(valor = 0, incremento = 0) {
    let base = 2.7182818284590452353602874, resultado = base ** Math.log1p(valor - 1 + incremento);

    if (isNaN(resultado) == true) { resultado = 0; }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  // Cologaritmas
  cologBase2(valor = 0) {
    let resultado = Math.log2(valor) * -1;

    if (isNaN(resultado) == true) { resultado = 0; }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  cologBase10(valor = 0) {
    let resultado = Math.log10(valor) * -1;

    if (isNaN(resultado) == true) { resultado = 0; }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  cologBaseX(valor = 0, base = 0, aproxInt = (true || false), aproxFloat1Casa = (true || false), aproxFloat2Casas = (true || false), aproxFloat3Casas = (true || false)) {
    let resultado = 0, box = valor;

    while (valor > 1) {
      valor = valor / base;
      resultado++;

      if (valor > 0 && valor < 1) { resultado--; }

      if (valor > 0 && valor < 1 && aproxFloat1Casa == true) {

        if (base ** (resultado + 0.1) > box) {
          resultado = resultado + 0.1;
        } else if (base ** (resultado + 0.2) > box) {
          resultado = resultado + 0.2;
        } else if (base ** (resultado + 0.3) > box) {
          resultado = resultado + 0.3;
        } else if (base ** (resultado + 0.4) > box) {
          resultado = resultado + 0.4;
        } else if (base ** (resultado + 0.5) > box) {
          resultado = resultado + 0.5;
        } else if (base ** (resultado + 0.6) > box) {
          resultado = resultado + 0.6;
        } else if (base ** (resultado + 0.7) > box) {
          resultado = resultado + 0.7;
        } else if (base ** (resultado + 0.8) > box) {
          resultado = resultado + 0.8;
        } else if (base ** (resultado + 0.9) > box) {
          resultado = resultado + 0.9;
        }

        if (base ** resultado > box) { resultado = resultado - 0.1; }
      }

      if (valor > 0 && valor < 1 && aproxFloat2Casas == true) {

        if (base ** (resultado + 0.01) > box) {
          resultado = resultado + 0.01;
        } else if (base ** (resultado + 0.10) > box) {
          resultado = resultado + 0.10;
        } else if (base ** (resultado + 0.11) > box) {
          resultado = resultado + 0.11;

        } else if (base ** (resultado + 0.02) > box) {
          resultado = resultado + 0.02;
        } else if (base ** (resultado + 0.12) > box) {
          resultado = resultado + 0.12;
        } else if (base ** (resultado + 0.20) > box) {
          resultado = resultado + 0.20;
        } else if (base ** (resultado + 0.21) > box) {
          resultado = resultado + 0.21;
        } else if (base ** (resultado + 0.22) > box) {
          resultado = resultado + 0.22;

        } else if (base ** (resultado + 0.03) > box) {
          resultado = resultado + 0.03;
        } else if (base ** (resultado + 0.13) > box) {
          resultado = resultado + 0.13;
        } else if (base ** (resultado + 0.23) > box) {
          resultado = resultado + 0.23;
        } else if (base ** (resultado + 0.30) > box) {
          resultado = resultado + 0.30;
        } else if (base ** (resultado + 0.31) > box) {
          resultado = resultado + 0.31;
        } else if (base ** (resultado + 0.32) > box) {
          resultado = resultado + 0.32;
        } else if (base ** (resultado + 0.33) > box) {
          resultado = resultado + 0.33;

        } else if (base ** (resultado + 0.04) > box) {
          resultado = resultado + 0.04;
        } else if (base ** (resultado + 0.14) > box) {
          resultado = resultado + 0.14;
        } else if (base ** (resultado + 0.24) > box) {
          resultado = resultado + 0.24;
        } else if (base ** (resultado + 0.34) > box) {
          resultado = resultado + 0.34;
        } else if (base ** (resultado + 0.40) > box) {
          resultado = resultado + 0.40;
        } else if (base ** (resultado + 0.41) > box) {
          resultado = resultado + 0.41;
        } else if (base ** (resultado + 0.42) > box) {
          resultado = resultado + 0.42;
        } else if (base ** (resultado + 0.43) > box) {
          resultado = resultado + 0.43;
        } else if (base ** (resultado + 0.44) > box) {
          resultado = resultado + 0.44;

        } else if (base ** (resultado + 0.05) > box) {
          resultado = resultado + 0.05;
        } else if (base ** (resultado + 0.15) > box) {
          resultado = resultado + 0.15;
        } else if (base ** (resultado + 0.25) > box) {
          resultado = resultado + 0.25;
        } else if (base ** (resultado + 0.35) > box) {
          resultado = resultado + 0.35;
        } else if (base ** (resultado + 0.45) > box) {
          resultado = resultado + 0.45;
        } else if (base ** (resultado + 0.50) > box) {
          resultado = resultado + 0.50;
        } else if (base ** (resultado + 0.51) > box) {
          resultado = resultado + 0.51;
        } else if (base ** (resultado + 0.52) > box) {
          resultado = resultado + 0.52;
        } else if (base ** (resultado + 0.53) > box) {
          resultado = resultado + 0.53;
        } else if (base ** (resultado + 0.54) > box) {
          resultado = resultado + 0.54;
        } else if (base ** (resultado + 0.55) > box) {
          resultado = resultado + 0.55;

        } else if (base ** (resultado + 0.06) > box) {
          resultado = resultado + 0.06;
        } else if (base ** (resultado + 0.16) > box) {
          resultado = resultado + 0.16;
        } else if (base ** (resultado + 0.26) > box) {
          resultado = resultado + 0.26;
        } else if (base ** (resultado + 0.36) > box) {
          resultado = resultado + 0.36;
        } else if (base ** (resultado + 0.46) > box) {
          resultado = resultado + 0.46;
        } else if (base ** (resultado + 0.56) > box) {
          resultado = resultado + 0.56;
        } else if (base ** (resultado + 0.60) > box) {
          resultado = resultado + 0.60;
        } else if (base ** (resultado + 0.61) > box) {
          resultado = resultado + 0.61;
        } else if (base ** (resultado + 0.62) > box) {
          resultado = resultado + 0.62;
        } else if (base ** (resultado + 0.63) > box) {
          resultado = resultado + 0.63;
        } else if (base ** (resultado + 0.64) > box) {
          resultado = resultado + 0.64;
        } else if (base ** (resultado + 0.65) > box) {
          resultado = resultado + 0.65;
        } else if (base ** (resultado + 0.66) > box) {
          resultado = resultado + 0.66;

        } else if (base ** (resultado + 0.07) > box) {
          resultado = resultado + 0.07;
        } else if (base ** (resultado + 0.17) > box) {
          resultado = resultado + 0.17;
        } else if (base ** (resultado + 0.27) > box) {
          resultado = resultado + 0.27;
        } else if (base ** (resultado + 0.37) > box) {
          resultado = resultado + 0.37;
        } else if (base ** (resultado + 0.47) > box) {
          resultado = resultado + 0.47;
        } else if (base ** (resultado + 0.57) > box) {
          resultado = resultado + 0.57;
        } else if (base ** (resultado + 0.67) > box) {
          resultado = resultado + 0.67;
        } else if (base ** (resultado + 0.70) > box) {
          resultado = resultado + 0.70;
        } else if (base ** (resultado + 0.71) > box) {
          resultado = resultado + 0.71;
        } else if (base ** (resultado + 0.72) > box) {
          resultado = resultado + 0.72;
        } else if (base ** (resultado + 0.73) > box) {
          resultado = resultado + 0.73;
        } else if (base ** (resultado + 0.74) > box) {
          resultado = resultado + 0.74;
        } else if (base ** (resultado + 0.75) > box) {
          resultado = resultado + 0.75;
        } else if (base ** (resultado + 0.76) > box) {
          resultado = resultado + 0.76;
        } else if (base ** (resultado + 0.77) > box) {
          resultado = resultado + 0.77;

        } else if (base ** (resultado + 0.08) > box) {
          resultado = resultado + 0.08;
        } else if (base ** (resultado + 0.18) > box) {
          resultado = resultado + 0.18;
        } else if (base ** (resultado + 0.28) > box) {
          resultado = resultado + 0.28;
        } else if (base ** (resultado + 0.38) > box) {
          resultado = resultado + 0.38;
        } else if (base ** (resultado + 0.48) > box) {
          resultado = resultado + 0.48;
        } else if (base ** (resultado + 0.58) > box) {
          resultado = resultado + 0.58;
        } else if (base ** (resultado + 0.68) > box) {
          resultado = resultado + 0.68;
        } else if (base ** (resultado + 0.78) > box) {
          resultado = resultado + 0.78;
        } else if (base ** (resultado + 0.80) > box) {
          resultado = resultado + 0.80;
        } else if (base ** (resultado + 0.81) > box) {
          resultado = resultado + 0.81;
        } else if (base ** (resultado + 0.82) > box) {
          resultado = resultado + 0.82;
        } else if (base ** (resultado + 0.83) > box) {
          resultado = resultado + 0.83;
        } else if (base ** (resultado + 0.84) > box) {
          resultado = resultado + 0.84;
        } else if (base ** (resultado + 0.85) > box) {
          resultado = resultado + 0.85;
        } else if (base ** (resultado + 0.86) > box) {
          resultado = resultado + 0.86;
        } else if (base ** (resultado + 0.87) > box) {
          resultado = resultado + 0.87;
        } else if (base ** (resultado + 0.88) > box) {
          resultado = resultado + 0.88;

        } else if (base ** (resultado + 0.09) > box) {
          resultado = resultado + 0.09;
        } else if (base ** (resultado + 0.19) > box) {
          resultado = resultado + 0.19;
        } else if (base ** (resultado + 0.29) > box) {
          resultado = resultado + 0.29;
        } else if (base ** (resultado + 0.39) > box) {
          resultado = resultado + 0.39;
        } else if (base ** (resultado + 0.49) > box) {
          resultado = resultado + 0.49;
        } else if (base ** (resultado + 0.59) > box) {
          resultado = resultado + 0.59;
        } else if (base ** (resultado + 0.69) > box) {
          resultado = resultado + 0.69;
        } else if (base ** (resultado + 0.79) > box) {
          resultado = resultado + 0.79;
        } else if (base ** (resultado + 0.89) > box) {
          resultado = resultado + 0.89;
        } else if (base ** (resultado + 0.90) > box) {
          resultado = resultado + 0.90;
        } else if (base ** (resultado + 0.91) > box) {
          resultado = resultado + 0.91;
        } else if (base ** (resultado + 0.92) > box) {
          resultado = resultado + 0.92;
        } else if (base ** (resultado + 0.93) > box) {
          resultado = resultado + 0.93;
        } else if (base ** (resultado + 0.94) > box) {
          resultado = resultado + 0.94;
        } else if (base ** (resultado + 0.95) > box) {
          resultado = resultado + 0.95;
        } else if (base ** (resultado + 0.96) > box) {
          resultado = resultado + 0.96;
        } else if (base ** (resultado + 0.97) > box) {
          resultado = resultado + 0.97;
        } else if (base ** (resultado + 0.98) > box) {
          resultado = resultado + 0.98;
        } else if (base ** (resultado + 0.99) > box) {
          resultado = resultado + 0.99;
        }

        if (base ** resultado > box) { resultado = resultado - 0.01; }
      }

      if (valor > 0 && valor < 1 && aproxFloat3Casas == true) {

        if (base ** (resultado + 0.001) > box) {
          resultado = resultado + 0.001;
        } else if (base ** (resultado + 0.002) > box) {
          resultado = resultado + 0.002;
        } else if (base ** (resultado + 0.003) > box) {
          resultado = resultado + 0.003;
        } else if (base ** (resultado + 0.004) > box) {
          resultado = resultado + 0.004;
        } else if (base ** (resultado + 0.005) > box) {
          resultado = resultado + 0.005;
        } else if (base ** (resultado + 0.006) > box) {
          resultado = resultado + 0.006;
        } else if (base ** (resultado + 0.007) > box) {
          resultado = resultado + 0.007;
        } else if (base ** (resultado + 0.008) > box) {
          resultado = resultado + 0.008;
        } else if (base ** (resultado + 0.009) > box) {
          resultado = resultado + 0.009;
        }

        if (base ** resultado > box) { resultado = resultado - 0.001; }
      }

      if (valor < 1 && aproxInt == true) { break; }
    }

    resultado = resultado * -1;

    if (isNaN(resultado) == true) { resultado = 0; }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  cologNatural(valor = 0) {
    let resultado = Math.log(valor) * -1;

    if (isNaN(resultado) == true) { resultado = 0; }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  cologNaturalMais1(valor = 0) {
    let resultado = Math.log1p(valor) * -1;

    if (isNaN(resultado) == true) { resultado = 0; }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  cologNaturalMaisX(valor = 0, incremento = 0) {
    let resultado = Math.log1p(valor - 1 + incremento) * -1;

    if (isNaN(resultado) == true) { resultado = 0; }

    switch (resultado) {
      case null:
        resultado = 0;
        break;
      case Infinity:
        resultado = 0;
        break;
      case -Infinity:
        resultado = 0;
        break;
    }

    return resultado;
  }

  // Complexas
  somaNumerosComplexos(valores = [""]) {
    let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
    let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;

    let resultado = "";
    let resultadoPartImaginarias = 0;
    let resultadoPartImaginariasPuras = 0;
    let partesImaginarias = [];
    let partesImaginariasPuras = [];

    for (let i = 0; i < valores.length; i++) {
      if (valores[i].match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }

      partesImaginarias.push(valores[i].match(separadorT1).toString());
      partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
    }

    for (let i = 0; i < partesImaginarias.length; i++) {
      resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
    }

    for (let i = 0; i < partesImaginariasPuras.length; i++) {
      resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
    }

    if (resultadoPartImaginarias < 0 && resultadoPartImaginariasPuras < 0) { resultado = `${resultadoPartImaginarias}${resultadoPartImaginariasPuras}i`; }
    if (resultadoPartImaginarias > 0 && resultadoPartImaginariasPuras < 0) { resultado = `${resultadoPartImaginarias}${resultadoPartImaginariasPuras}i`; }
    if (resultadoPartImaginarias < 0 && resultadoPartImaginariasPuras > 0) { resultado = `${resultadoPartImaginarias}+${resultadoPartImaginariasPuras}i`; }
    if (resultadoPartImaginarias > 0 && resultadoPartImaginariasPuras > 0) { resultado = `${resultadoPartImaginarias}+${resultadoPartImaginariasPuras}i`; }

    return resultado;
  }

  subtracaoNumerosComplexos(valorTotal = "", valores = [""]) {
    let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
    let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;

    let resultado = "";
    let valorTotalPartImaginarias = 0;
    let valorTotalPartImaginariasPuras = 0;
    let resultadoPartImaginarias = 0;
    let resultadoPartImaginariasPuras = 0;
    let resultadoParcImaginario = 0;
    let resultadoParcImaginarioPuro = 0;
    let partesImaginarias = [];
    let partesImaginariasPuras = [];

    for (let i = 0; i < valores.length; i++) {
      if (valores[i].match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }

      partesImaginarias.push(valores[i].match(separadorT1).toString());
      partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
    }

    if (valorTotal.match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }

    valorTotalPartImaginarias = valorTotal.match(separadorT1).toString();
    valorTotalPartImaginariasPuras = valorTotal.match(separadorT2).toString();

    for (let i = 0; i < partesImaginarias.length; i++) {
      resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
    }

    for (let i = 0; i < partesImaginariasPuras.length; i++) {
      resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
    }

    resultadoParcImaginario = parseFloat(valorTotalPartImaginarias) - resultadoPartImaginarias;
    resultadoParcImaginarioPuro = parseFloat(valorTotalPartImaginariasPuras) - resultadoPartImaginariasPuras;

    if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
    if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
    if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }
    if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }

    return resultado;
  }

  multiplicacaoNumerosComplexos(valores = [""]) {
    let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
    let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;

    let resultado = "";
    let resultadoPartImaginarias = 1;
    let resultadoPartImaginariasPuras = 1;
    let partesImaginarias = [];
    let partesImaginariasPuras = [];

    for (let i = 0; i < valores.length; i++) {
      if (valores[i].match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }

      partesImaginarias.push(valores[i].match(separadorT1).toString());
      partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
    }

    for (let i = 0; i < partesImaginarias.length; i++) {
      resultadoPartImaginarias = resultadoPartImaginarias * parseFloat(partesImaginarias[i]);
    }

    for (let i = 0; i < partesImaginariasPuras.length; i++) {
      resultadoPartImaginariasPuras = resultadoPartImaginariasPuras * parseFloat(partesImaginariasPuras[i]);
    }

    if (resultadoPartImaginarias < 0 && resultadoPartImaginariasPuras < 0) { resultado = `${resultadoPartImaginarias}${resultadoPartImaginariasPuras}i`; }
    if (resultadoPartImaginarias > 0 && resultadoPartImaginariasPuras < 0) { resultado = `${resultadoPartImaginarias}${resultadoPartImaginariasPuras}i`; }
    if (resultadoPartImaginarias < 0 && resultadoPartImaginariasPuras > 0) { resultado = `${resultadoPartImaginarias}+${resultadoPartImaginariasPuras}i`; }
    if (resultadoPartImaginarias > 0 && resultadoPartImaginariasPuras > 0) { resultado = `${resultadoPartImaginarias}+${resultadoPartImaginariasPuras}i`; }

    return resultado;
  }

  divisaoNumerosComplexos(valorTotal = "", valores = [""]) {
    let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
    let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;

    let resultado = "";
    let valorTotalPartImaginarias = 0;
    let valorTotalPartImaginariasPuras = 0;
    let resultadoPartImaginarias = 0;
    let resultadoPartImaginariasPuras = 0;
    let resultadoParcImaginario = 1;
    let resultadoParcImaginarioPuro = 1;
    let partesImaginarias = [];
    let partesImaginariasPuras = [];

    for (let i = 0; i < valores.length; i++) {
      if (valores[i].match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }

      partesImaginarias.push(valores[i].match(separadorT1).toString());
      partesImaginariasPuras.push(valores[i].match(separadorT2).toString());
    }

    if (valorTotal.match(verif) == null) { return console.error("Não foi possível realizar o cálculo! Valor adicionado inválido."); }

    valorTotalPartImaginarias = valorTotal.match(separadorT1).toString();
    valorTotalPartImaginariasPuras = valorTotal.match(separadorT2).toString();

    for (let i = 0; i < partesImaginarias.length; i++) {
      resultadoPartImaginarias = resultadoPartImaginarias + parseFloat(partesImaginarias[i]);
    }

    for (let i = 0; i < partesImaginariasPuras.length; i++) {
      resultadoPartImaginariasPuras = resultadoPartImaginariasPuras + parseFloat(partesImaginariasPuras[i]);
    }

    resultadoParcImaginario = (parseFloat(valorTotalPartImaginarias) * (-1 * resultadoPartImaginarias)) / (resultadoPartImaginarias * (-1 * resultadoPartImaginarias));
    resultadoParcImaginarioPuro = (parseFloat(valorTotalPartImaginariasPuras) * (-1 * resultadoPartImaginariasPuras)) / (resultadoPartImaginariasPuras * (-1 * resultadoPartImaginariasPuras));

    if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
    if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro < 0) { resultado = `${resultadoParcImaginario}${resultadoParcImaginarioPuro}i`; }
    if (resultadoParcImaginario < 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }
    if (resultadoParcImaginario > 0 && resultadoParcImaginarioPuro > 0) { resultado = `${resultadoParcImaginario}+${resultadoParcImaginarioPuro}i`; }

    return resultado;
  }

  // Complexas Trigonométricas
  multiplicacaoNumerosComplexosTrigonometricos(valor1 = "", valor2 = "") {
    let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
    let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;

    if (valor1.match(verif) == null) { return console.error("O valor não é válido para realizar o cálculo!"); }
    if (valor2.match(verif) == null) { return console.error("O valor não é válido para realizar o cálculo!"); }

    let resultado = 0, valor1Dividido = [], valor2Dividido = [];

    valor1Dividido.push(valor1.match(separadorT1).toString(), valor1.match(separadorT2).toString());
    valor2Dividido.push(valor2.match(separadorT1).toString(), valor2.match(separadorT2).toString());

    let moduloValor1 = Math.sqrt((parseFloat(valor1Dividido[0]) ** 2) + (parseFloat(valor1Dividido[1]) ** 2));
    let moduloValor2 = Math.sqrt((parseFloat(valor2Dividido[0]) ** 2) + (parseFloat(valor2Dividido[1]) ** 2));
    let argumentoSenoValor1 = parseFloat(valor1Dividido[1]) / moduloValor1;
    let argumentoCossenoValor1 = parseFloat(valor1Dividido[0]) / moduloValor1;
    let argumentoSenoValor2 = parseFloat(valor2Dividido[1]) / moduloValor2;
    let argumentoCossenoValor2 = parseFloat(valor2Dividido[0]) / moduloValor2;

    let moduloFinal = moduloValor1 * moduloValor2;
    let argumentoCossenoFinal = argumentoCossenoValor1 + argumentoCossenoValor2;
    let argumentoSenoFinal = argumentoSenoValor1 + argumentoSenoValor2;

    if (argumentoCossenoFinal > 0 && argumentoSenoFinal > 0) { resultado = `${moduloFinal} x ${argumentoCossenoFinal}+${argumentoSenoFinal}i`; }
    if (argumentoCossenoFinal > 0 && argumentoSenoFinal < 0) { resultado = `${moduloFinal} x ${argumentoCossenoFinal}-${argumentoSenoFinal}i`; }
    if (argumentoCossenoFinal < 0 && argumentoSenoFinal > 0) { resultado = `-${moduloFinal} x ${argumentoCossenoFinal}+${argumentoSenoFinal}i`; }
    if (argumentoCossenoFinal < 0 && argumentoSenoFinal < 0) { resultado = `-${moduloFinal} x ${argumentoCossenoFinal}-${argumentoSenoFinal}i`; }

    return resultado;
  }

  divisaoNumerosComplexosTrigonometricos(valor1 = "", valor2 = "") {
    let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
    let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;

    if (valor1.match(verif) == null) { return console.error("O valor não é válido para realizar o cálculo!"); }
    if (valor2.match(verif) == null) { return console.error("O valor não é válido para realizar o cálculo!"); }

    let resultado = 0, valor1Dividido = [], valor2Dividido = [];

    valor1Dividido.push(valor1.match(separadorT1).toString(), valor1.match(separadorT2).toString());
    valor2Dividido.push(valor2.match(separadorT1).toString(), valor2.match(separadorT2).toString());

    let moduloValor1 = Math.sqrt((parseFloat(valor1Dividido[0]) ** 2) + (parseFloat(valor1Dividido[1]) ** 2));
    let moduloValor2 = Math.sqrt((parseFloat(valor2Dividido[0]) ** 2) + (parseFloat(valor2Dividido[1]) ** 2));
    let argumentoSenoValor1 = parseFloat(valor1Dividido[1]) / moduloValor1;
    let argumentoCossenoValor1 = parseFloat(valor1Dividido[0]) / moduloValor1;
    let argumentoSenoValor2 = parseFloat(valor2Dividido[1]) / moduloValor2;
    let argumentoCossenoValor2 = parseFloat(valor2Dividido[0]) / moduloValor2;

    let moduloFinal = moduloValor1 / moduloValor2;
    let argumentoCossenoFinal = argumentoCossenoValor1 - argumentoCossenoValor2;
    let argumentoSenoFinal = argumentoSenoValor1 - argumentoSenoValor2;

    if (argumentoCossenoFinal > 0 && argumentoSenoFinal > 0) { resultado = `${moduloFinal} x ${argumentoCossenoFinal}+${argumentoSenoFinal}i`; }
    if (argumentoCossenoFinal > 0 && argumentoSenoFinal < 0) { resultado = `${moduloFinal} x ${argumentoCossenoFinal}-${argumentoSenoFinal}i`; }
    if (argumentoCossenoFinal < 0 && argumentoSenoFinal > 0) { resultado = `-${moduloFinal} x ${argumentoCossenoFinal}+${argumentoSenoFinal}i`; }
    if (argumentoCossenoFinal < 0 && argumentoSenoFinal < 0) { resultado = `-${moduloFinal} x ${argumentoCossenoFinal}-${argumentoSenoFinal}i`; }

    return resultado;
  }

  potenciaNumerosComplexosTrigonometricos(valor1 = "", pot = 0) {
    let verif = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;
    let separadorT1 = /^(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)/gim;
    let separadorT2 = /(((\+)?(\-)?)([0-9]+)(\.[0-9]+)?)([i])/gim;

    if (valor1.match(verif) == null) { return console.error("O valor não é válido para realizar o cálculo!"); }

    let resultado = 0, valor1Dividido = [];

    valor1Dividido.push(valor1.match(separadorT1).toString(), valor1.match(separadorT2).toString());

    let moduloValor1 = Math.sqrt((parseFloat(valor1Dividido[0]) ** 2) + (parseFloat(valor1Dividido[1]) ** 2));
    let argumentoSenoValor1 = parseFloat(valor1Dividido[1]) / moduloValor1;
    let argumentoCossenoValor1 = parseFloat(valor1Dividido[0]) / moduloValor1;

    let moduloFinal = moduloValor1 ** pot;
    let argumentoCossenoFinal = argumentoCossenoValor1 * pot;
    let argumentoSenoFinal = argumentoSenoValor1 * pot;

    if (argumentoCossenoFinal > 0 && argumentoSenoFinal > 0) { resultado = `${moduloFinal} x ${argumentoCossenoFinal}+${argumentoSenoFinal}i`; }
    if (argumentoCossenoFinal > 0 && argumentoSenoFinal < 0) { resultado = `${moduloFinal} x ${argumentoCossenoFinal}-${argumentoSenoFinal}i`; }
    if (argumentoCossenoFinal < 0 && argumentoSenoFinal > 0) { resultado = `-${moduloFinal} x ${argumentoCossenoFinal}+${argumentoSenoFinal}i`; }
    if (argumentoCossenoFinal < 0 && argumentoSenoFinal < 0) { resultado = `-${moduloFinal} x ${argumentoCossenoFinal}-${argumentoSenoFinal}i`; }

    console.log(resultado);
    return resultado;
  }

  // Conversão de Bases
  convBasesAngulares(valor = "", input = 0, output = 0) {
    let chaves = ['t01-graus', 't02-radianos'];

    let formulas = [
      [valor / 360, valor * 360]
    ];

    let resultado = 0;

    switch (input) {
      case 1:
        input = chaves[0];
        break;
      case 2:
        input = chaves[1];
        break;
    }

    switch (output) {
      case 1:
        output = chaves[0];
        break;
      case 2:
        output = chaves[1];
        break;
    }

    let combinacao = [[input], [output]];

    switch (combinacao[0][0]) {
      case 't01-graus':
        switch (combinacao[1][0]) {
          case 't02-radianos':
            resultado = formulas[0][0];
            break;
        }
        break;
      case 't02-radianos':
        switch (combinacao[1][0]) {
          case 't01-graus':
            resultado = formulas[0][1];
            break;
        }
        break;
    }

    return resultado;
  }
  // ^ começar a fazer dps da parte "Fórmulas";
  convBasesGrandezas(
    valor = "",
    input = 0,
    output = 0,

    unidadesPeso = true,
    unidadesComprimento = true,
    unidadesVelocidade = true,
    unidadesCombustivel = true,
    unidadesMoeda = true,
    unidadesCozinhando = true,
    unidadesArea = true,
    unidadesQuantidade = true,
    unidadesPrefixo = true,
    unidadesVolume = true,
    unidades4Dimensoes = true,
    unidades5Dimensoes = true,
    unidades6Dimensoes = true,
    unidadesTemperatura = true,
    unidadesAngulo = true,
    unidadesPressao = true,
    unidadesForca = true,
    unidadesTorque = true,
    unidadesSom = true,
    unidadesDensidade = true,
    unidadesDensidadeDeCalor = true,
    unidadesInercia = true,
    unidadesCapacidadeDeCalor = true,
    unidadesEficienciaDoCombustivel = true,
    unidadesDensidadeAtual = true,
    unidadesAnguloDeVelocidade = true,
    unidadesAceleracao = true,
    unidadesViscosidade = true,
    unidadesFluxo = true,
    unidadesConcentracao = true,
    unidadesPermeabilidade = true,
    unidadesTensao = true,
    unidadesLiquido = true,
    unidadesPoder = true,
    unidadesEletricidade = true,
    unidadesResistencia = true,
    unidadesCapacitancia = true,
    unidadesCondutancia = true,
    unidadesIndutancia = true,
    unidadesEletrico = true,
    unidadesCondutividade = true,
    unidadesPotencial = true,
    unidadesResistividade = true,
    unidadesForcaDoCampo = true,
    unidadesImagem = true,
    unidadesComputador = true,
    unidadesResolucao = true,
    unidadesLuminancia = true,
    unidadesFrequencia = true,
    unidadesIluminacao = true,
    unidadesIntensidade = true,
    unidadesTempo = true,
    unidadesMagnetico = true,
    unidadesRadiacao = true,
    unidadesAtividadeNuclear = true,
    unidadesAbsorcaoNuclear = true,
    unidadesExposicaoNuclear = true,
    unidadesAlbumina = true,
    unidadesCalcio = true,
    unidadesColesterol = true,
    unidadesCreatinine = true,
    unidadesFerritin = true,
    unidadesEnzimas = true,
    unidadesGlicose = true,
    unidadesHemoglobina = true,
    unidadesUreia = true,
    unidadesCalor = true,
    unidadesFluxoDeCalor = true,
    unidadesTransferenciaDeCalor = true,

  ) {
    resultado = 0;

    if (unidadesPeso == true) { }

    if (unidadesComprimento == true) { }

    if (unidadesVelocidade == true) { }

    if (unidadesCombustivel == true) { }

    if (unidadesMoeda == true) { }

    if (unidadesCozinhando == true) { }

    if (unidadesArea == true) { }

    if (unidadesQuantidade == true) { }

    if (unidadesPrefixo == true) { }

    if (unidadesVolume == true) { }

    if (unidades4Dimensoes == true) { }

    if (unidades5Dimensoes == true) { }

    if (unidades6Dimensoes == true) { }

    if (unidadesTemperatura == true) { }

    if (unidadesAngulo == true) { }

    if (unidadesPressao == true) { }

    if (unidadesForca == true) { }

    if (unidadesTorque == true) { }

    if (unidadesSom == true) { }

    if (unidadesDensidade == true) { }

    if (unidadesDensidadeDeCalor == true) { }

    if (unidadesInercia == true) { }

    if (unidadesCapacidadeDeCalor == true) { }

    if (unidadesEficienciaDoCombustivel == true) { }

    if (unidadesDensidadeAtual == true) { }

    if (unidadesAnguloDeVelocidade == true) { }

    if (unidadesAceleracao == true) { }

    if (unidadesViscosidade == true) { }

    if (unidadesFluxo == true) { }

    if (unidadesConcentracao == true) { }

    if (unidadesPermeabilidade == true) { }

    if (unidadesTensao == true) { }

    if (unidadesLiquido == true) { }

    if (unidadesPoder == true) { }

    if (unidadesEletricidade == true) { }

    if (unidadesResistencia == true) { }

    if (unidadesCapacitancia == true) { }

    if (unidadesCondutancia == true) { }

    if (unidadesIndutancia == true) { }

    if (unidadesEletrico == true) { }

    if (unidadesCondutividade == true) { }

    if (unidadesPotencial == true) { }

    if (unidadesResistividade == true) { }

    if (unidadesForcaDoCampo == true) { }

    if (unidadesImagem == true) { }

    if (unidadesComputador == true) { }

    if (unidadesResolucao == true) { }

    if (unidadesLuminancia == true) { }

    if (unidadesFrequencia == true) { }

    if (unidadesIluminacao == true) { }

    if (unidadesIntensidade == true) { }

    if (unidadesTempo == true) { }

    if (unidadesMagnetico == true) { }

    if (unidadesRadiacao == true) { }

    if (unidadesAtividadeNuclear == true) { }

    if (unidadesAbsorcaoNuclear == true) { }

    if (unidadesExposicaoNuclear == true) { }

    if (unidadesAlbumina == true) { }

    if (unidadesCalcio == true) { }

    if (unidadesColesterol == true) { }

    if (unidadesCreatinine == true) { }

    if (unidadesFerritin == true) { }

    if (unidadesEnzimas == true) { }

    if (unidadesGlicose == true) { }

    if (unidadesHemoglobina == true) { }

    if (unidadesUreia == true) { }

    if (unidadesCalor == true) { }

    if (unidadesFluxoDeCalor == true) { }

    if (unidadesTransferenciaDeCalor == true) { }

  }

  // Calculistas
  funcoes(valores = 0) { }

  sistemas(valores = 0) { }

  formulas(valores = 0) { }

  matrizes(valores = 0) { }

  polinomios(valores = 0) { }

  geometricos(valores = 0) { }

  experimentais(valores = 0) { }

  diarios(valores = 0) { }

  avancados(valores = 0) { }

  // ? Código Regra de Três 
  _formulaDaRegraDeTres(numeroVariaveis = "", numerosNormais = [""], autoInputNumerosNaturais = (true || false), usarMaisGrandezas = (true || false), numeroDeGrandezas = 0) {
    let somaVariaveis = 0;

    let resultado = [[], somaVariaveis];

    let vars = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      n: 0,
      m: 0,
      o: 0,
      p: 0,
      q: 0,
      r: 0,
      s: 0,
      t: 0,
      u: 0,
      v: 0,
      w: 0,
      x: 0,
      y: 0,
      z: 0,
      a1: 0,
      b1: 0,
      c1: 0,
      d1: 0,
      e1: 0,
      f1: 0,
      g1: 0,
      h1: 0,
      i1: 0,
      j1: 0,
      k1: 0,
      l1: 0,
      n1: 0,
      m1: 0,
      o1: 0,
      p1: 0,
      q1: 0,
      r1: 0,
      s1: 0,
      t1: 0,
      u1: 0,
      v1: 0,
      w1: 0,
      x1: 0,
      y1: 0,
      z1: 0,
      a2: 0,
      b2: 0,
      c2: 0,
      d2: 0,
      e2: 0,
      f2: 0,
      g2: 0,
      h2: 0,
      i2: 0,
      j2: 0,
      k2: 0,
      l2: 0,
      n2: 0,
      m2: 0,
      o2: 0,
      p2: 0,
      q2: 0,
      r2: 0,
      s2: 0,
      t2: 0,
      u2: 0,
      v2: 0,
      w2: 0,
      x2: 0,
      y2: 0,
      z2: 0,
      a3: 0,
      b3: 0,
      c3: 0,
      d3: 0,
      e3: 0,
      f3: 0,
      g3: 0,
      h3: 0,
      i3: 0,
      j3: 0,
      k3: 0,
      l3: 0,
      n3: 0,
      m3: 0,
      o3: 0,
      p3: 0,
      q3: 0,
      r3: 0,
      s3: 0,
      t3: 0,
      u3: 0,
      v3: 0
    };

    let varsEnfileiradas = [];

    varsEnfileiradas.push(vars.a, vars.b, vars.c, vars.d, vars.e, vars.f, vars.g, vars.h, vars.i, vars.j, vars.k, vars.l, vars.m, vars.n, vars.o, vars.p, vars.q, vars.r, vars.s, vars.t, vars.u, vars.v, vars.w, vars.x, vars.y, vars.z, vars.a1, vars.b1, vars.c1, vars.d1, vars.e1, vars.f1, vars.g1, vars.h1, vars.i1, vars.j1, vars.k1, vars.l1, vars.m1, vars.n1, vars.o1, vars.p1, vars.q1, vars.r1, vars.s1, vars.t1, vars.u1, vars.v1, vars.w1, vars.x1, vars.y1, vars.z1, vars.a2, vars.b2, vars.c2, vars.d2, vars.e2, vars.f2, vars.g2, vars.h2, vars.i2, vars.j2, vars.k2, vars.l2, vars.m2, vars.n2, vars.o2, vars.p2, vars.q2, vars.r2, vars.s2, vars.t2, vars.u2, vars.v2, vars.w2, vars.x2, vars.y2, vars.z2, vars.a3, vars.b3, vars.c3, vars.d3, vars.e3, vars.f3, vars.g3, vars.h3, vars.i3, vars.j3, vars.k3, vars.l3, vars.m3, vars.n3, vars.o3, vars.p3, vars.q3, vars.r3, vars.s3, vars.t3, vars.u3, vars.v3);

    function empurraUmValorALista() {
      numerosNormais.push(Math.random() * 100);
    }

    function empurraDoisValoresALista() {
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
    }

    function empurraTresValoresALista() {
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
    }

    function empurraQuatroValoresALista() {
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
    }

    function empurraCincoValoresALista() {
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
    }

    function empurraSeisValoresALista() {
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
    }

    function empurraSeteValoresALista() {
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
      numerosNormais.push(Math.random() * 100);
    }


    numeroVariaveis = parseFloat(numeroVariaveis);

    for (let i = 0; i < numerosNormais.length; i++) {
      numerosNormais[i] = parseFloat(numerosNormais[i]);
    }

    if (numeroVariaveis >= 1 && autoInputNumerosNaturais == true) {

      for (let v = 1, var1 = 1, var2 = 2, var3 = 3; v <= numeroVariaveis; v++, var1 = var1 + 3, var2 = var2 + 3, var3 = var3 + 3) {

        switch (numeroVariaveis) {
          case v:
            if (numerosNormais.length < var1) { for (let w = 0; w < v; w++) { empurraTresValoresALista(numerosNormais); } }

            if (numerosNormais.length < var2) { for (let w = 0; w < v; w++) { empurraDoisValoresALista(numerosNormais); } }

            if (numerosNormais.length < var3) { for (let w = 0; w < v; w++) { empurraUmValorALista(numerosNormais); } }
            break;

        }
      }

    }

    if (numeroVariaveis >= 1 && usarMaisGrandezas == true && numeroDeGrandezas == 3 && autoInputNumerosNaturais == true) {

      for (let v = 1, var1 = 1, var2 = 2, var3 = 3, var4 = 4, var5 = 5; v <= numeroVariaveis; v++, var1 = var1 + 5, var2 = var2 + 5, var3 = var3 + 5, var4 = var4 + 5, var5 = var5 + 5) {

        switch (numeroVariaveis) {
          case v:
            if (numerosNormais.length < var1) { for (let w = 0; w < v; w++) { empurraCincoValoresALista(numerosNormais); } }

            if (numerosNormais.length < var2) { for (let w = 0; w < v; w++) { empurraQuatroValoresALista(numerosNormais); } }

            if (numerosNormais.length < var3) { for (let w = 0; w < v; w++) { empurraTresValoresALista(numerosNormais); } }

            if (numerosNormais.length < var4) { for (let w = 0; w < v; w++) { empurraDoisValoresALista(numerosNormais); } }

            if (numerosNormais.length < var5) { for (let w = 0; w < v; w++) { empurraUmValorALista(numerosNormais); } }
            break;
        }
      }

    }

    if (numeroVariaveis >= 1 && usarMaisGrandezas == true && numeroDeGrandezas == 4 && autoInputNumerosNaturais == true) {

      for (let v = 1, var1 = 1, var2 = 2, var3 = 3, var4 = 4, var5 = 5, var6 = 6, var7 = 7; v <= numeroVariaveis; v++, var1 = var1 + 7, var2 = var2 + 7, var3 = var3 + 7, var4 = var4 + 7, var5 = var5 + 7, var6 = var6 + 7, var7 = var7 + 7) {

        switch (numeroVariaveis) {
          case v:
            if (numerosNormais.length < var1) { for (let w = 0; w < v; w++) { empurraSeteValoresALista(numerosNormais); } }

            if (numerosNormais.length < var2) { for (let w = 0; w < v; w++) { empurraSeisValoresALista(numerosNormais); } }

            if (numerosNormais.length < var3) { for (let w = 0; w < v; w++) { empurraCincoValoresALista(numerosNormais); } }

            if (numerosNormais.length < var4) { for (let w = 0; w < v; w++) { empurraQuatroValoresALista(numerosNormais); } }

            if (numerosNormais.length < var5) { for (let w = 0; w < v; w++) { empurraTresValoresALista(numerosNormais); } }

            if (numerosNormais.length < var6) { for (let w = 0; w < v; w++) { empurraDoisValoresALista(numerosNormais); } }

            if (numerosNormais.length < var7) { for (let w = 0; w < v; w++) { empurraUmValorALista(numerosNormais); } }
            break;
        }
      }

    }

    for (let i = 0; i < numeroVariaveis; i++) {

      // mexer aqui
      if (numeroVariaveis >= 1 && usarMaisGrandezas == true && numeroDeGrandezas == 3) {
        // modelo: // v1 = v2 * v3 // v4 = x * v5 

        for (let v = 0, ft = 5, var1 = 0, var2 = 1, var3 = 2, var4 = 3, var5 = 4; v < numeroVariaveis; v++, ft = ft + 5, var1 = var1 + 5, var2 = var2 + 5, var3 = var3 + 5, var4 = var4 + 5, var5 = var5 + 5) {

          switch (i) {
            case v:
              if (numerosNormais.length < ft && autoInputNumerosNaturais == false) {
                if (numerosNormais[var1] == 0 || numerosNormais[var2] == 0 || numerosNormais[var3] == 0 || numerosNormais[var4] == 0 || numerosNormais[var5] == 0 || isNaN(numerosNormais[var1]) == true || isNaN(numerosNormais[var2]) == true || isNaN(numerosNormais[var3]) == true || isNaN(numerosNormais[var4]) == true || isNaN(numerosNormais[var5]) == true) { return (resultado[1] = 0); }
                return (resultado[1] = 0, console.error("Números Normais Insuficientes!, Tente Novamente."));
              }

              varsEnfileiradas[v] = ((numerosNormais[var4] * numerosNormais[var2] * numerosNormais[var3]) / numerosNormais[var1]) / numerosNormais[var5];

              if (isNaN(varsEnfileiradas[v]) == true) {
                return resultado[0].push(0);
              }

              switch (varsEnfileiradas[v]) {
                case null:
                  varsEnfileiradas[v] = 0;
                  break;
                case Infinity:
                  varsEnfileiradas[v] = 0;
                  break;
                case -Infinity:
                  varsEnfileiradas[v] = 0;
                  break;
              }

              somaVariaveis = somaVariaveis + varsEnfileiradas[v];
              resultado[0].push(varsEnfileiradas[v]);
              resultado[1] = somaVariaveis;
              break;
          }
        }
      } else if (numeroVariaveis >= 1 && usarMaisGrandezas == true && numeroDeGrandezas == 4) {

        // modelo: // v1 = v2 * v3 * v4 // v5 = x * v6 * v7

        for (let v = 0, ft = 5, var1 = 0, var2 = 1, var3 = 2, var4 = 3, var5 = 4, var6 = 5, var7 = 6; v < numeroVariaveis; v++, ft = ft + 7, var1 = var1 + 7, var2 = var2 + 7, var3 = var3 + 7, var4 = var4 + 7, var5 = var5 + 7, var6 = var6 + 7, var7 = var7 + 7) {

          switch (i) {
            case v:
              if (numerosNormais.length < ft && autoInputNumerosNaturais == false) {
                if (numerosNormais[var1] == 0 || numerosNormais[var2] == 0 || numerosNormais[var3] == 0 || numerosNormais[var4] == 0 || numerosNormais[var5] == 0 || numerosNormais[var6] == 0 || numerosNormais[var7] == 0 || isNaN(numerosNormais[var1]) == true || isNaN(numerosNormais[var2]) == true || isNaN(numerosNormais[var3]) == true || isNaN(numerosNormais[var4]) == true || isNaN(numerosNormais[var5]) == true || isNaN(numerosNormais[var6]) == true || isNaN(numerosNormais[var7]) == true) { return (resultado[1] = 0); }
                return (resultado[1] = 0, console.error("Números Normais Insuficientes!, Tente Novamente."));
              }

              varsEnfileiradas[v] = ((numerosNormais[var5] * numerosNormais[var2] * numerosNormais[var3] * numerosNormais[var4]) / numerosNormais[var1]) / numerosNormais[var6] * numerosNormais[var7];

              if (isNaN(varsEnfileiradas[v]) == true) {
                return resultado[0].push(0);
              }

              switch (varsEnfileiradas[v]) {
                case null:
                  varsEnfileiradas[v] = 0;
                  break;
                case Infinity:
                  varsEnfileiradas[v] = 0;
                  break;
                case -Infinity:
                  varsEnfileiradas[v] = 0;
                  break;
              }

              somaVariaveis = somaVariaveis + varsEnfileiradas[v];
              resultado[0].push(varsEnfileiradas[v]);
              resultado[1] = somaVariaveis;
              break;
          }
        }
      } else {

        for (let v = 0, ft = 3, var1 = 0, var2 = 1, var3 = 2; v < numeroVariaveis; v++, ft = ft + 3, var1 = var1 + 3, var2 = var2 + 3, var3 = var3 + 3) {

          // modelo  // v1 * v2 // v3 * x

          switch (i) {
            case v:
              if (numerosNormais.length < ft && autoInputNumerosNaturais == false) {
                if (numerosNormais[var1] == 0 || numerosNormais[var2] == 0 || numerosNormais[var3] == 0 || isNaN(numerosNormais[var1]) == true || isNaN(numerosNormais[var2]) == true || isNaN(numerosNormais[var3]) == true) { return (resultado[1] = 0); }
                return (resultado[1] = 0, console.error("Números Normais Insuficientes!, Tente Novamente."));
              }

              varsEnfileiradas[v] = (numerosNormais[var1] * numerosNormais[var2]) / numerosNormais[var3];

              if (isNaN(varsEnfileiradas[v]) == true) {
                return resultado[0].push(0);
              }

              switch (varsEnfileiradas[v]) {
                case null:
                  varsEnfileiradas[v] = 0;
                  break;
                case Infinity:
                  varsEnfileiradas[v] = 0;
                  break;
                case -Infinity:
                  varsEnfileiradas[v] = 0;
                  break;
              }

              somaVariaveis = somaVariaveis + varsEnfileiradas[v];
              resultado[0].push(varsEnfileiradas[v]);
              resultado[1] = somaVariaveis;
              break;
          }
        }

      }
    }

    return resultado;
  }

  // ~ Funções
  _funcPrimeiroGrau(expressao = '') {
    let resultado = 0;
    let verificacao = /([0-9]+(\.[0-9]+)?x((\-)?(\+)?)[0-9]+(\.[0-9]+)?=[0-9]+(\.[0-9]+)?)/gi;
    let pegaParteA = /([0-9]+(\.[0-9]+)?x)/gi;
    let pegaParteB = /(((\-)?(\+)?)[0-9]+(\.[0-9]+)?)/gi;
    let pegaParteC = /(=[0-9]+(\.[0-9]+)?)/gi;

    if (expressao.match(verificacao) == null) { return console.error("A expressão inserida não é uma função do 1º Grau!"); }

    resultado = (parseFloat(expressao.match(pegaParteB)) - parseFloat(expressao.match(pegaParteC))) / parseFloat(expressao.match(pegaParteA));

    return resultado;
  }

  _funcSegundoGrau(a = 0, b = 0, c = 0) {
    let resultado = 0, delta = (b ** 2) - (4 * a * c);

    let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a);

    resultado = [x1, x2];

    return resultado;
  }

  _funcTerceiroGrau(a = 0, b = 0, c = 0) {
    let resultado = 0, delta = (b ** 2) - (4 * a * c);

    let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a);

    resultado = [x1, x2, 0];

    return resultado;
  }

  _funcQuartoGrau(a = 0, b = 0, c = 0) {
    let resultado = 0, delta = (b ** 2) - (4 * a * c);

    let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a);

    resultado = [x1, -1 * x1, x2, -1 * x2];

    return resultado;
  }

  // ~ Sistemas 
  _sistemaDeEquacoes(expressao1 = '', expressao2 = '') {
    let resultado = 0, verificacao = /((\-)?([0-9]+)(\.[0-9]+)?[x])(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])((\=)(\-)?([0-9]+)(\.[0-9]+)?)/gi;

    if (expressao1.match(verificacao) == null || expressao2.match(verificacao) == null) { return console.error("A expressão inserida não é válida"); }

    let pegaParteA = /((\-)?([0-9]+)(\.[0-9]+)?[x])/gi,
      pegaParteB = /(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])/gi,
      pegaParteC = /((\-)?([0-9]+)(\.[0-9]+)?)/gi;

    let parteA = parseFloat(expressao1.match(pegaParteA)) + parseFloat(expressao2.match(pegaParteA)),
      parteB = parseFloat(expressao1.match(pegaParteB)) + parseFloat(expressao2.match(pegaParteB)),
      parteC = parseFloat(expressao1.match(pegaParteC)) + parseFloat(expressao2.match(pegaParteC));

    resultado = `${parteA}x${parteB}y=${parteC}`;

    if (parteB > 0) { resultado = `${parteA}x+${parteB}y=${parteC}`; }

    return resultado;
  }

  _sistemaDeInequacoes(expressao1 = '', expressao2 = '') {
    let resultado = 0, verificacao = /((\-)?([0-9]+)(\.[0-9]+)?[x])(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])((\<\=)?(\>\=)?(\<)?(\>)?(\-)?([0-9]+)(\.[0-9]+)?)/gi;

    if (expressao1.match(verificacao) == null || expressao2.match(verificacao) == null) { return console.error("A expressão inserida não é válida"); }

    let pegaParteA = /((\-)?([0-9]+)(\.[0-9]+)?[x])/gi,
      pegaParteB = /(((\-)?(\+)?)([0-9]+)(\.[0-9]+)?[y])/gi,
      pegaParteC = /((\-)?([0-9]+)(\.[0-9]+)?)/gi;

    let parteA = parseFloat(expressao1.match(pegaParteA)) + parseFloat(expressao2.match(pegaParteA)),
      parteB = parseFloat(expressao1.match(pegaParteB)) + parseFloat(expressao2.match(pegaParteB)),
      parteC = parseFloat(expressao1.match(pegaParteC)) + parseFloat(expressao2.match(pegaParteC));

    resultado = `${parteA}x${parteB}y=${parteC}`;

    if (parteB > 0) { resultado = `${parteA}x+${parteB}y=${parteC}`; }

    if (parteA < parteC && parteB < parteC) { resultado = `${parteA}x+${parteB}y<${parteC}`; }
    if (parteA > parteC && parteB > parteC) { resultado = `${parteA}x+${parteB}y>${parteC}`; }
    if (parteA > parteC && parteB > parteC && parteB - parteA > parteC) { resultado = `${parteA}x+${parteB}y>${parteC}`; }
    if (parteA > parteC && parteB > parteC && parteB - parteA < parteC) { resultado = `${parteA}x+${parteB}y<${parteC}`; }

    return resultado;
  }

  _sistemasLineares(expressoes = []) {
    let resultado = [], expressaoPartida = [], verificacao = /(((\+)?(\-)?(\=)?)?(\-)?([0-9]+)(\.[0-9]+)?([a-z])?)/gi,
      verificacao2 = /(((\+)?(\-)?)?(\-)?([0-9]+)(\.[0-9]+)?([a-z])?)/gi;

    let somatorio = [], aux = 0, calculo = 0;

    for (let i = 0; i < expressoes.length; i++) {
      if (expressoes[i].match(verificacao) == null) { return console.error("A expressão inserida não é válida!"); }
      expressaoPartida.push(expressoes[i].match(verificacao2));
    }

    for (let i = 0; i < expressaoPartida.length; i++) {
      for (let h = 0; h < expressaoPartida[i].length; h++) {
        expressaoPartida[i][h] = parseFloat(expressaoPartida[i][h]);
      }
    }

    for (let u = 0; u < expressaoPartida.length; u++) {
      for (let v = 0; v < u; v++) {

      }
    }

    let x = 0;

    while (x != expressaoPartida[0].length) {

      for (let w = 0; w < expressaoPartida.length; w++) {
        calculo = calculo + expressaoPartida[w][x];
      }

      somatorio.push(calculo);
      x++;
    }

    for (let q = 1; q < somatorio.length; q++) {
      if (q % 2 == 0) { resultado.push(somatorio[q] / somatorio[0]); }

      if (q % 2 == 1) { resultado.push((-1 * somatorio[q]) / somatorio[0]); }
    }

    return resultado;
  }

  // ~ Formulas #888
  _formulaDeGirard(expressao = "") {
    let resultado = [], valores = [];
    let verificacao = /(([0-9]+(\.[0-9]+)?)([a-zA-Z])?([0-9])?)((\+)?(\-)?)/gi;
    let pegaTermosComIcognita = /([0-9]+(\.[0-9]+)?)([a-zA-Z])/gi;
    let pegaTergosSemIcognita = /([0-9]+(\.[0-9]+)?)(\=)/gi;
    let valoresConvertidos = [];

    if (verificacao == null) { return console.error("Expressão Adicionada é Inválida ou está incorreta!"); }

    valores.push(expressao.match(pegaTermosComIcognita), expressao.match(pegaTergosSemIcognita).toString());

    for (let i = 0; i < valores[0].length; i++) {
      valores[0][i] = parseFloat(valores[0][i]);
      valoresConvertidos.push(valores[0][i]);
    }

    valores[1] = parseFloat(valores[1]);
    valoresConvertidos.push(valores[1]);

    for (let i = 1; i <= valoresConvertidos.length - 1; i++) {
      let verificadorSinal = i % 2;

      if (verificadorSinal == 0) { resultado.push(valoresConvertidos[i] / valoresConvertidos[0]); }

      if (verificadorSinal == 1) { resultado.push(-1 * (valoresConvertidos[i] / valoresConvertidos[0])); }
    }

    return resultado;
  }

  _formulaDoTeoremaDeTalesDeMileto(valorMultiplicadoPorX = 0, valorNormal = 0) {
    let resultado = valorNormal / valorMultiplicadoPorX;

    return resultado;
  }

  _formulaDoTeoremaDePitagoras(a = 0, b = 0) {
    let resultado = Math.sqrt(((a ** 2) + (b ** 2)));

    return resultado;
  }

  _formulaDaRelacaoPitagoricaT1(m = 0, n = 0) {
    let resultado = Math.sqrt(m * n);

    return resultado;
  }

  _formulaDaRelacaoPitagoricaT2(a = 0, n = 0) {
    let resultado = Math.sqrt(a * n);

    return resultado;
  }

  _formulaDaRelacaoPitagoricaT3(h = 0, b = 0, c = 0) {
    let resultado = (b * c) / h;

    return resultado;
  }

  _formulaDoBinomioDeNewton(total = 0, divisor = 0) {
    let resultado = 0;
  }

  _formulaDoFatorial(valor = 0) {
    let resultado = 1;

    for (let i = valor; i > 0; i--) { resultado = i * resultado; };

    return resultado;
  }

  _formulaDaCombinacao(total = 0, divisor = 0) {
    let resultado = 0;

    let totalConvertido = 1, divisorConvertido = 1;

    for (let i = total; i > 0; i--) {
      totalConvertido = totalConvertido * i;
    }

    for (let j = divisor; j > 0; j--) {
      divisorConvertido = divisorConvertido * j;
    }

    resultado = totalConvertido / (divisorConvertido * (totalConvertido - divisorConvertido));

    return resultado;
  }

  _formulaDoArranjo(total = 0, divisor = 0) {
    let resultado = 0;

    let totalConvertido = 1, divisorConvertido = 1;


    for (let i = total; i > 0; i--) {
      totalConvertido = totalConvertido * i;
    }

    for (let j = divisor; j > 0; j--) {
      divisorConvertido = divisorConvertido * j;
    }

    resultado = totalConvertido / (totalConvertido - divisorConvertido);

    return resultado;
  }

  _formulaDaProbabilidade(valor = 0, valorTotal = 0) {
    let resultado = valor / valorTotal;

    return resultado;
  }

  _formulaDeUmaProgressaoAritmetica() {
    let resultado = 0;
  }

  _formulaDeUmaProgressaoGeometrica() {
    let resultado = 0;
  }

  _formulaDoConjugadoDeUmNumeroComplexo(expressao = "") {
    let resultado = 0, verificaSinal = /^(\-)/gi;

    if (verificaSinal != null) { expressao.replace("-", ''); }

    resultado = expressao;

    return resultado;
  }

  _formulaDaRelacaoDeEuler(vertices = 0, arestas = 0, faces = 0) {
    let resultado = (vertices - (arestas + faces)) - 2;

    return resultado;
  }

  _formulaDasPotenciasDeI(valor = 0) {
    let resultado = '', divisor = valor % 4;

    if (divisor == 0) { resultado = 'i'; }

    if (divisor == 1) { resultado = '-1'; }

    if (divisor == 2) { resultado = '-i'; }

    if (divisor == 3) { resultado = '1'; }

    return resultado;
  }

  _formulaDaPorcentagem(valorParte = 0, valorTotal = 0) {
    let resultado = valorParte / valorTotal;

    return resultado;
  }

  _formulaDaDeterminante2x2(a00 = 0, a01 = 0, a10 = 0, a11 = 0) {
    let resultado = 0, vetorPrimario = a00 * a11, vetorSecundario = a01 * a10;

    resultado = vetorPrimario - vetorSecundario;

    return resultado;
  }

  _formulaDaDeterminante3x3(a00 = 0, a01 = 0, a02 = 0, a10 = 0, a11 = 0, a12 = 0, a20 = 0, a21 = 0, a22 = 0) {
    let resultado = 0;

    // 00 01 02  00 01
    // 10 11 12  10 11
    // 20 21 22  20 21

    let vetorPrincipal1 = a00 * a11 * a22, vetorPrincipal2 = a01 * a12 * a20, vetorPrincipal3 = a02 * a10 * a21;

    let vetorSecundario1 = a02 * a11 * a20, vetorSecundario2 = a00 * a12 * a21, vetorSecundario3 = a01 * a10 * a22;

    resultado = (vetorPrincipal1 + vetorPrincipal2 + vetorPrincipal3) - (vetorSecundario1 + vetorSecundario2 + vetorSecundario3);

    return resultado;
  }

  _formulaDaVelocidade(espaco = 0, tempo = 0) {
    let resultado = espaco / tempo;

    return resultado;
  }

  _formulaDoEspaco(velocidade = 0, tempo = 0) {
    let resultado = velocidade * tempo;

    return resultado;
  }

  _formulaDoTempo(velocidade = 0, espaco = 0) {
    let resultado = espaco / velocidade;

    return resultado;
  }

  _formulaDaAceleracao(velocidade = 0, tempo = 0) {
    let resultado = velocidade / tempo;

    return resultado;
  }

  _formulaDaEqHorariaDoTempo(tempo = 0, tempoInicial = 0, velocidade = 0, aceleracao = 0) {
    let resultado = tempoInicial + (velocidade * tempo) + (aceleracao * (tempo ** 2));

    return resultado;
  }

  _formulaDaEqHorariaDoEspaco(espaco = 0, espacoInicial = 0, aceleracao = 0) {
    let resultado = espacoInicial + aceleracao * espaco;

    return resultado;
  }

  _formulaDaEnergiaCinetica(massa = 0, velocidade = 0) {
    let resultado = (massa * velocidade ** 2) / 2;

    return resultado;
  }

  _formulaDaEnergiaPotencialElastica(constanteElastica = 0, distancia = 0) {
    let resultado = (constanteElastica * distancia ** 2) / 2;

    return resultado;
  }

  _formulaDaEnergiaPotencialGravitacional(massa = 0, gravidade = 0, altura = 0) {
    let resultado = massa * gravidade * altura;

    return resultado;
  }

  _formulaDoPotencialMecanico(velocidade = 0, constanteElastica = 0, distancia = 0, massa = 0, gravidade = 0, altura = 0, energPotElas = true, energPotGrav = true) {
    let resultado = 0;

    if (energPotElas == true) { resultado = this._formulaDaEnergiaCinetica(massa, velocidade) + this._formulaDaEnergiaPotencialElastica(constanteElastica, distancia); }

    if (energPotGrav == true) { resultado = this._formulaDaEnergiaCinetica(massa, velocidade) + this._formulaDaEnergiaPotencialGravitacional(massa, gravidade, altura); }

    return resultado;
  }

  _formulaDoPotencialElastico(constanteElastica = 0, distancia = 0) {
    let resultado = this._formulaDaEnergiaPotencialElastica(constanteElastica, distancia);

    return resultado;
  }

  _formulaDoPlanoInclinadoSemAtrito(massa = 0, gravidade = 0) {
    let resultado = massa * gravidade;

    return resultado;
  }

  _formulaDoPlanoInclinadoComAtrito(forcaDeAtrito = 0, massa = 0, gravidade = 0, angulo = 0) {
    let resultado = forcaDeAtrito * massa * gravidade * angulo;

    return resultado;
  }

  _formulaDaAceleracaoNoPlanoInclinadoEixoX(massa = 0, gravidade = 0, angulo = 0) {
    let resultado = massa * gravidade * Math.sin(angulo);

    return resultado;
  }

  _formulaDaAceleracaoNoPlanoInclinadoEixoY(massa = 0, gravidade = 0, angulo = 0) {
    let resultado = massa * gravidade * Math.cos(angulo);

    return resultado;
  }

  _formulaDoLancamentoHorizontal(gravidade = 0, tempo = 0) {
    let resultado = (gravidade * tempo ** 2) / 2;

    return resultado;
  }

  _formulaDaEquacaoDeTorricelli(velocidadeInicial = 0, aceleracao = 0, espacoInicial = 0, espacoFinal = 0) {
    let resultado = Math.sqrt((velocidadeInicial ** 2) + 2 * aceleracao * (espacoFinal - espacoInicial));

    return resultado;
  }

  _formulaDaAlturaMaximaDeUmLancamentoVertical(velocidadeInicial = 0, gravidade = 0, angulo = 0) {
    let resultado = (velocidadeInicial ** 2) * ((Math.sin(angulo) ** 2) / 2) * gravidade;

    return resultado;
  }

  _formulaDoAlcanceDeUmLancamentoVertical(velocidade = 0, tempo = 0, angulo = 0) {
    let resultado = velocidade * Math.cos(angulo) * tempo;

    return resultado;
  }

  _formulaDoAlcanceMaximoDeUmLancamentoVertical(velocidade = 0, tempo = 0, gravidade = 0) {
    let resultado = (velocidade ** 2 * (Math.sin(angulo) ** 2)) / gravidade;

    return resultado;
  }

  _formulaDoCalorSensivel(massa = 0, calorEspecifico = 0, temperaturaInicial = 0, temperaturaFinal = 0) {
    let resultado = massa * calorEspecifico * (temperaturaFinal - temperaturaInicial);

    return resultado;
  }

  _formulaDoCalorLatente(quantidadeDeCalor = 0, massa = 0) {
    let resultado = quantidadeDeCalor / massa;

    return resultado;
  }

  _formulaDasLeisDeNewton(massa = 0, aceleracao = 0) {
    let resultado = massa * aceleracao;

    return resultado;
  }

  _formulaDoTrabalho(massa = 0, gravidade = 0, altura = 0) {
    let resultado = massa * gravidade * altura;

    return resultado;
  }

  _formulaDoConsumoDeEnergia(tempo = 0, correnteEletrica = 0, ddp = 0) {
    let resultado = correnteEletrica * ddp * tempo;

    return resultado;
  }

  _formulaDoTeoremaDePascal(forca1 = 0, forca2 = 0, area1 = 0, area2 = 0, forca1Inexistente = true, forca2Inexistente = true, area1Inexistente = true, area2Inexistente = true) {
    let resultado = 0;

    if (forca1Inexistente == true) { resultado = (area1 * forca2) / area2; }

    if (forca2Inexistente == true) { resultado = (area2 * forca1) / area1; }

    if (area1Inexistente == true) { resultado = (forca1 * area2) / forca2; }

    if (area2Inexistente == true) { resultado = (forca2 * area1) / forca1; }

    return resultado;
  }

  _formulaDoTeoremaDeStevin(densidade = 0, gravidade = 0, alturaInicial = 0, alturaFinal = 0) {
    let resultado = densidade * gravidade * (alturaFinal - alturaInicial);

    return resultado;
  }

  _formulaDaForcaGravitacional(gravidade = 0, massaPlaneta = 0, distancia = 0) {
    let resultado = gravidade * (massaPlaneta / distancia ** 2);

    return resultado;
  }

  _formulaDoAceleracaoCentripetaMovimentoCircularUniforme(velocidade = 0, raio = 0) {
    let resultado = (velocidade ** 2) / raio;

    return resultado;
  }

  _formulaDoVelocidadeAngularMovimentoCircularUniforme(anguloInicial = 0, anguloFinal = 0, tempoInicial = 0, tempoFinal = 0) {
    let resultado = (anguloFinal - anguloInicial) / (anguloFinal - anguloInicial);

    return resultado;
  }

  _formulaDoVelocidadeLinearMovimentoCircularUniforme(frequencia = 0, raio = 0) {
    let resultado = (2 * Math.PI * frequencia) * raio;

    return resultado;
  }

  _formulaDaEquacaoHorariaDoTempoMovimentoCircularUnifVariado(velocidadeAngularInicial = 0, aceleracaoAngular = 0, tempo = 0) {
    let resultado = velocidadeAngularInicial + aceleracaoAngular * tempo;

    return resultado;
  }

  _formulaDaEquacaoHorariaDoEspacoMovimentoCircularUnifVariado(posicaoAngularInicial = 0, velocidadeAngularInicial = 0, aceleracaoAngular = 0, tempo = 0) {
    let resultado = posicaoAngularInicial + (velocidadeAngularInicial * tempo) + (aceleracaoAngular * tempo ** 2) / 2;

    return resultado;
  }

  _formulaDeToricelliMovimentoCircularUnifVariado(velocidadeAngularInicial = 0, aceleracaoAngular = 0, deslocamentoAngularInicial = 0, deslocamentoAngularFinal = 0) {
    let resultado = Math.sqrt(velocidadeAngularInicial + 2 * aceleracaoAngular * (deslocamentoAngularFinal - deslocamentoAngularInicial));

    return resultado;
  }

  _formulaDaAceleracaoAngularMovimentoCircularUnifVariado(velocidadeAngularInicial = 0, velocidadeAngularFinal = 0, tempoInicial = 0, tempoFinal = 0) {
    let resultado = (velocidadeAngularFinal - velocidadeAngularInicial) / (tempoFinal - tempoInicial);

    return resultado;
  }

  _formulaDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples(velocidadeAngular = 0, amplitude = 0, tempo = 0, faseInicial = 0) {
    let resultado = velocidadeAngular * amplitude * Math.cos(tempo + faseInicial);

    return resultado;
  }

  _formulaDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples(velocidadeAngular = 0, amplitude = 0, tempo = 0, faseInicial = 0) {
    let resultado = -1 * velocidadeAngular * amplitude * Math.sin(tempo + faseInicial);

    return resultado;
  }

  _formulaDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples(velocidadeAngular = 0, amplitude = 0, tempo = 0, faseInicial = 0) {
    let resultado = -1 * velocidadeAngular ** 2 * amplitude * Math.cos(tempo + faseInicial);

    return resultado;
  }

  _formulaDoPeriodo(frequencia = 0) {
    let resultado = 1 / frequencia;

    return resultado;
  }

  _formulaDaFrequencia(periodo = 0) {
    let resultado = 1 / periodo;

    return resultado;
  }

  _formulaDaTemperatura(valor = 0, deCelsiusParaKelvin = true, deCelsiusParaFahrenheit = true, deKelvinParaCelsius = true, deKelvinParaFahrenheit = true, deFahrenheitParaKelvin = true, deFahrenheitParaCelsius = true) {
    let resultado = 0;

    if (deCelsiusParaFahrenheit == true) { resultado = (1.8 * valor) + 32; }

    if (deCelsiusParaKelvin == true) { resultado = valor - 273; }

    if (deFahrenheitParaCelsius == true) { resultado = (valor - 32) / 1.8; }

    if (deFahrenheitParaKelvin == true) { resultado = ((valor - 32) * 5) / 9 + 273; }

    if (deKelvinParaCelsius == true) { resultado = valor + 273; }

    if (deKelvinParaFahrenheit == true) { resultado = (valor - 273) * 1.8 + 32; }

    return resultado;
  }

  _formulaDaDilatacaoLinear(comprimentoInicial = 0, coeficienteDeDilatacaoLinear = 0, temperaturaInicial = 0, temperaturaFinal = 0) {
    let resultado = comprimentoInicial * coeficienteDeDilatacaoLinear * (temperaturaFinal - temperaturaInicial);

    return resultado;
  }

  _formulaDaDilatacaoSuperficial(areaInicial = 0, coeficienteDeDilatacaoSuperficial = 0, temperaturaInicial = 0, temperaturaFinal = 0) {
    let resultado = areaInicial * coeficienteDeDilatacaoSuperficial * (temperaturaFinal - temperaturaInicial);

    return resultado;
  }

  _formulaDaDilatacaoVolumetrica(volumeInicial = 0, coeficienteDeDilatacaoVolumetrica = 0, temperaturaInicial = 0, temperaturaFinal = 0) {
    let resultado = volumeInicial * coeficienteDeDilatacaoVolumetrica * (temperaturaFinal - temperaturaInicial);

    return resultado;
  }

  _formulaDoPrincipioFundamentalDaHidroestaticaHidrodinamica(densidade = 0, gravidade = 0, alturaInicial = 0, alturaFinal = 0) {
    let resultado = densidade * gravidade * (alturaFinal - alturaInicial);

    return resultado;
  }

  _formulaDoEmpuxoDaHidroestaticaHidrodinamica(densidade = 0, gravidade = 0, volume = 0) {
    let resultado = densidade * gravidade * volume;

    return resultado;
  }

  _formulaDoPesoAparenteDaHidroestaticaHidrodinamica(peso = 0, densidade = 0, gravidade = 0, volume = 0) {
    let resultado = peso - this._formulaDoEmpuxoDaHidroestatica(densidade, gravidade, volume);

    return resultado;
  }

  _formulaDoAtrito(coeficienteDeAtrito = 0, massa = 0) {
    let resultado = coeficienteDeAtrito * massa;

    return resultado;
  }

  _formulaDaLeiDeCoulomb(carga1 = 0, carga2 = 0, distancia = 0) {
    let resultado = (9 * 10 ** 9) * (carga1 * carga2 / distancia ** 2);

    return resultado;
  }

  _formulaDaLeiDeOhm(resistencia = 0, corrente = 0) {
    let resultado = resistencia * corrente;

    return resultado;
  }

  _formulaDoEfeitoJoule(corrente = 0, resistencia = 0, tempo = 0) {
    let resultado = (corrente ** 2) * resistencia * tempo;

    return resultado;
  }

  _formulaDaLeiDeLenz(intensidadeDoCampoMagnetico = 0, areaDaSuperficie = 0, cosAngulo = 0) {
    let resultado = intensidadeDoCampoMagnetico * areaDaSuperficie * Math.cos(cosAngulo);

    return resultado;
  }

  _formulaDaForcaEletromotriz(potenciaTotalGerador = 0, intensidadeDaCorrente = 0) {
    let resultado = potenciaTotalGerador / intensidadeDaCorrente;

    return resultado;
  }

  _formulaDaContraForcaEletromotriz(potenciaTotalGerador = 0, intensidadeDaCorrente = 0) {
    let resultado = -1 * this._formulaDaForcaEletromotriz;

    return resultado;
  }

  _formulaDoEfeitoFotoeletrico(frequenciaDaLuz = 0) {
    let resultado = (6.662 * 10 ** -34) * frequenciaDaLuz;

    return resultado;
  }

  _formulaDaDensidade(massa = 0, volume = 0) {
    let resultado = massa / volume;

    return resultado;
  }

  _formulaDaTitulacao(massaBase = 0, massaAcido = 0, volumeBase = 0, volumeAcido = 0, naoTemMassaBase = true, naoTemMassaAcido = true, naoTemVolumeBase = true, naoTemVolumeAcido = true) {
    let resultado = 0;

    if (naoTemMassaAcido == true) { resultado = massaBase * volumeBase / volumeAcido; }
    if (naoTemMassaBase == true) { resultado = massaAcido * volumeAcido / volumeBase; }
    if (naoTemVolumeAcido == true) { resultado = massaBase * volumeBase / massaAcido; }
    if (naoTemVolumeBase == true) { resultado = massaAcido * volumeAcido / massaBase; }

    return resultado;
  }

  _formulaDaConcentracao(massaSoluto = 0, volume = 0) {
    let resultado = massaSoluto / volume;

    return resultado;
  }

  _formulaDoRendimento(valorParte = 0, valorTotal = 0) {
    let resultado = this._formulaDaPorcentagem(valorParte, valorTotal);

    return resultado;
  }

  _formulaDaLeiGeralDosGases(pressao1 = 0, pressao2 = 0, volume1 = 0, volume2 = 0, temperatura1 = 0, temperatura2 = 0) {
    let verificacao = /([a-zA-Z])/gi;
    let resultado = 0;

    if (pressao1.match(verificacao) != null) { resultado = (volume1 * temperatura2) / (pressao2 * volume2 * temperatura1); }

    if (pressao2.match(verificacao) != null) { resultado = (pressao1 * volume1 * temperatura2) / (volume2 * temperatura1); }

    if (volume1.match(verificacao) != null) { resultado = (pressao1 * temperatura2) / (pressao2 * volume2 * temperatura1); }

    if (volume2.match(verificacao) != null) { resultado = (pressao1 * volume1 * temperatura2) / (pressao2 * temperatura1); }

    if (temperatura1.match(verificacao) != null) { resultado = (pressao1 * volume1 * temperatura2) / (pressao2 * volume2); }

    if (temperatura2.match(verificacao) != null) { resultado = (pressao1 * volume1) / (pressao2 * volume2 * temperatura1); }

    return resultado;
  }

  _formulaDaEscalaGeografica(tamanhoReal = 0, tamanhoFicticio = 0) {
    let resultado = tamanhoReal / tamanhoFicticio;

    return resultado;
  }

  // ^ Mexer no final (Matrizes e Polinômios).

  // ~ Matrizes 
  _matrizesSoma(matrizes = [[]]) { }

  _matrizesSubtracao(matrizes = [[]]) { }

  _matrizesMultiplicacao(matrizes = [[]]) { }

  _matrizesDivisao(matrizes = [[]]) { }

  // ~ Polinômios
  _polinomiosSoma(polinomios = [""]) { }

  _polinomiosSubtracao(polinomios = [""]) { }

  _polinomiosMultiplicacao(polinomios = [""]) { }

  _polinomiosDivisao(polinomios = [""]) { }

  _polinomiosDivisaoSucessiva(polinomios = [""]) { }

  // ~ Geométricos
  _geometricosAreaDeUmTrianguloQualquer(comprimento = 0, largula = 0) {
    let resultado = 0;

    if (comprimento == largula) { resultado = (comprimento * comprimento * Math.sqrt(3)) / 4; }

    resultado = (comprimento * largula) / 2;

    return resultado;
  }

  _geometricosAreaDeUmQuadradoQualquer(lado = 0) {
    let resultado = lado * lado;

    return resultado;
  }

  _geometricosAreaDeUmRetanguloQualquer(comprimento = 0, largula = 0) {
    let resultado = comprimento * largula;

    return resultado;
  }

  _geometricosAreaDeUmaCircunferencia(raio = 0) {
    let resultado = 2 * Math.PI * raio;

    return resultado;
  }

  _geometricosAreaDeUmCirculo(raio = 0) {
    let resultado = Math.PI * raio * raio;

    return resultado;
  }

  _geometricosAreaDeUmPoligonoNLados(comprimento = 0, largula = 0, nLados = 0) {
    let resultado = 0;

    switch (nLados) {
      case 3:
        resultado = this._geometricosAreaDeUmTrianguloQualquer(comprimento, largula);
        break;
      case 4:
        resultado = this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
      case 5:
        resultado = 5 * this._geometricosAreaDeUmTrianguloQualquer(comprimento, largula);
        break;
      case 6:
        resultado = 6 * this._geometricosAreaDeUmTrianguloQualquer(comprimento, largula);
        break;
      case 7:
        resultado = 7 * this._geometricosAreaDeUmTrianguloQualquer(comprimento, largula);
        break;
      case 8:
        resultado = 8 * this._geometricosAreaDeUmTrianguloQualquer(comprimento, largula);
        break;
      case 9:
        resultado = 9 * this._geometricosAreaDeUmTrianguloQualquer(comprimento, largula);
        break;
      case 10:
        resultado = 10 * this._geometricosAreaDeUmTrianguloQualquer(comprimento, largula);
        break;
      case 11:
        resultado = 11 * this._geometricosAreaDeUmTrianguloQualquer(comprimento, largula);
        break;
      case 12:
        resultado = 12 * this._geometricosAreaDeUmTrianguloQualquer(comprimento, largula);
        break;
      case 13:
        resultado = 13 * this._geometricosAreaDeUmTrianguloQualquer(comprimento, largula);
        break;
      case 14:
        resultado = 14 * this._geometricosAreaDeUmTrianguloQualquer(comprimento, largula);
        break;
      case 15:
        resultado = 15 * this._geometricosAreaDeUmTrianguloQualquer(comprimento, largula);
        break;
      case 16:
        resultado = 16 * this._geometricosAreaDeUmTrianguloQualquer(comprimento, largula);
        break;
      case 17:
        resultado = 17 * this._geometricosAreaDeUmTrianguloQualquer(comprimento, largula);
        break;
      case 18:
        resultado = 18 * this._geometricosAreaDeUmTrianguloQualquer(comprimento, largula);
        break;
      case 19:
        resultado = 19 * this._geometricosAreaDeUmTrianguloQualquer(comprimento, largula);
        break;
      case 20:
        resultado = 20 * this._geometricosAreaDeUmTrianguloQualquer(comprimento, largula);
        break;
    }

    return resultado;
  }

  _geometricosAreaDeUmTrapezio(ladoMenor = 0, ladoMaior = 0, altura = 0) {
    let resultado = ((ladoMaior + ladoMenor) * altura) / 2;

    return resultado;
  }

  _geometricosAreaDeUmLozango(diagonalMaior = 0, diagonalMenor = 0) {
    let resultado = (diagonalMaior + diagonalMenor) / 2;

    return resultado;
  }

  _geometricosVolumeDeUmCubo(lado = 0) {
    let resultado = lado * lado * lado;

    return resultado;
  }

  _geometricosVolumeDeUmParalelepípedo(comprimento = 0, largula = 0, altura = 0) {
    let resultado = comprimento * largula * altura;

    return resultado;
  }

  _geometricosAreaLateralDeUmPrisma(comprimento = 0, largula = 0, nLados = 0) {
    let resultado = 0;

    switch (nLados) {
      case 3:
        resultado = 3 * this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
      case 4:
        resultado = 4 * this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
      case 5:
        resultado = 5 * this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
      case 6:
        resultado = 6 * this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
      case 7:
        resultado = 7 * this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
      case 8:
        resultado = 8 * this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
      case 9:
        resultado = 9 * this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
      case 10:
        resultado = 10 * this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
      case 11:
        resultado = 11 * this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
      case 12:
        resultado = 12 * this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
      case 13:
        resultado = 13 * this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
      case 14:
        resultado = 14 * this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
      case 15:
        resultado = 15 * this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
      case 16:
        resultado = 16 * this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
      case 17:
        resultado = 17 * this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
      case 18:
        resultado = 18 * this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
      case 19:
        resultado = 19 * this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
      case 20:
        resultado = 20 * this._geometricosAreaDeUmRetanguloQualquer(comprimento, largula);
        break;
    }

    return resultado;
  }

  _geometricosVolumeDeUmPrisma(comprimento = 0, largula = 0, altura = 0, nLados = 0) {
    let resultado = 0, areaBase = this._geometricosAreaDeUmPoligonoNLados(comprimento, largula, nLados);

    resultado = areaBase * altura;

    return resultado;
  }

  _geometricosAreaTotalDeUmPrisma(comprimento = 0, comprimentoBase = 0, largula = 0, largulaBase = 0, nLados = 0, nLadosBase = 0) {
    let resultado = 0, areaBase = this._geometricosAreaDeUmPoligonoNLados(comprimentoBase, largulaBase, nLadosBase);

    resultado = 2 * areaBase + this._geometricosAreaDeUmPoligonoNLados(comprimento, largula, nLados);

    return resultado;
  }

  _geometricosAreaLateralDeUmCilindro(raio = 0, altura = 0) {
    let resultado = this._geometricosAreaDeUmaCircunferencia(raio) * altura;

    return resultado;
  }

  _geometricosVolumeDeUmCilindro(raio = 0, altura = 0) {
    let resultado = this._geometricosAreaDeUmCirculo(raio) * altura;

    return resultado;
  }

  _geometricosAreaTotalDeUmCilindro(raio = 0, altura = 0) {
    let resultado = this._geometricosAreaLateralDeUmCilindro(raio, altura) + (2 * this._geometricosAreaDeUmCirculo(raio));

    return resultado;
  }

  _geometricosAreaLateralTroncoDeUmCilindro(raio = 0, altura1 = 0, altura2 = 0) {
    let resultado = this._geometricosAreaDeUmaCircunferencia(raio) * ((altura1 + altura2) / 2);

    return resultado;
  }

  _geometricosVolumeTroncoDeUmCilindro(raio = 0, altura1 = 0, altura2 = 0) {
    let resultado = this._geometricosAreaDeUmCirculo(raio) * ((altura1 + altura2) / 2);

    return resultado;
  }

  _geometricosAreaTotalTroncoDeUmCilindro(raio = 0, altura1 = 0, altura2 = 0) {
    let resultado = this._geometricosAreaLateralDeUmCilindro(raio, ((altura1 + altura2) / 2)) + (2 * this._geometricosAreaDeUmCirculo(raio));

    return resultado;
  }

  _geometricosAreaLateralDeUmCone(raio = 0, geratriz = 0) {
    let resultado = Math.PI * geratriz * raio;

    return resultado;
  }

  _geometricosVolumeDeUmCone(raio = 0, altura = 0) {
    let resultado = (this._geometricosAreaDeUmCirculo(raio) * altura) / 3;

    return resultado;
  }

  _geometricosAreaTotalDeUmCone(raio = 0, geratriz = 0) {
    let resultado = this._geometricosAreaDeUmCirculo(raio) + this._geometricosAreaLateralDeUmCone(raio, geratriz);

    return resultado;
  }

  _geometricosAreaLateralTroncoDeUmCone(raioMenor = 0, raioMaior = 0, geratriz = 0) {
    let resultado = Math.PI * geratriz * (raioMenor + raioMaior);

    return resultado;
  }

  _geometricosVolumeTroncoDeUmCone(raioMenor = 0, raioMaior = 0, altura = 0) {
    let resultado = ((Math.PI * altura) / 3) * ((raioMaior ** 2) * (raioMaior * raioMenor) * (raioMenor ** 2));

    return resultado;
  }

  _geometricosAreaTotalTroncoDeUmCone(raioMenor = 0, raioMaior = 0, geratriz = 0) {
    let resultado = this._geometricosAreaDeUmCirculo(raioMenor) + this._geometricosAreaDeUmCirculo(raioMaior) + this._geometricosAreaLateralTroncoDeUmCone(raioMenor, raioMaior, geratriz);

    return resultado;
  }

  _geometricosAreaLateralDeUmaPiramide(comprimento = 0, largula = 0, nLados = 0) {
    let resultado = nLados * this._geometricosAreaDeUmTrianguloQualquer(comprimento, largula);

    return resultado;
  }

  _geometricosVolumeDeUmaPiramide(comprimento = 0, largula = 0, altura = 0, nLados = 0) {
    let resultado = (this._geometricosAreaDeUmPoligonoNLados(comprimento, largula, nLados) * altura) / 3;

    return resultado;
  }

  _geometricosAreaTotalDeUmaPiramide(comprimento = 0, largula = 0, nLados = 0) {
    let resultado = this._geometricosAreaDeUmPoligonoNLados(comprimento, largula, nLados) + this._geometricosAreaLateralDeUmaPiramide(comprimento, largula, nLados);

    return resultado;
  }

  _geometricosAreaLateralTroncoDeUmaPiramide(ladoMaiorTrapezio = 0, ladoMenorTrapezio = 0, altura = 0, nLados = 0) {
    let resultado = nLados * this._geometricosAreaDeUmTrapezio(ladoMaiorTrapezio, ladoMenorTrapezio, altura);

    return resultado;
  }

  _geometricosVolumeTroncoDeUmaPiramide(ladoMaiorTrapezio = 0, ladoMenorTrapezio = 0, altura = 0, alturaPiramide = 0, nLados = 0) {
    let resultado = nLados * this._geometricosAreaDeUmTrapezio(ladoMaiorTrapezio, ladoMenorTrapezio, altura) * alturaPiramide;

    return resultado;
  }

  _geometricosAreaTotalTroncoDeUmaPiramide(ladoMaiorTrapezio = 0, ladoMenorTrapezio = 0, altura = 0, nLados = 0, largulaBaseMenor = 0, comprimentoBaseMenor = 0, largulaBaseMaior = 0, comprimentoBaseMaior = 0) {
    let resultado = this._geometricosAreaLateralTroncoDeUmaPiramide(ladoMaiorTrapezio, ladoMenorTrapezio, altura, nLados) + this._geometricosAreaDeUmPoligonoNLados(comprimentoBaseMenor, largulaBaseMenor, nLados) + this._geometricosAreaDeUmPoligonoNLados(comprimentoBaseMaior, largulaBaseMaior, nLados);

    return resultado;
  }

  _geometricosAreaLateralDeUmaEsfera(raio = 0) {
    let resultado = 4 * Math.PI * raio ** 2;

    return resultado;
  }

  _geometricosVolumeDeUmaEsfera(raio = 0) {
    let resultado = (4 * Math.PI * raio ** 3) / 3;

    return resultado;
  }

  // ~ Experimentais
  _experimentalIDH(saude = 0, educacao = 0, renda = 0, populacao = 0, ppc = 0) {
    resultado = (saude + educacao + renda) / (populacao + ppc);

    return resultado;
  }

  _experimentalGINI(pnb = 0, populacao = 0) {
    resultado = pnb / populacao;

    return resultado;
  }

  _experimentalIMC(peso = 0, altura = 0) {
    resultado = peso / altura ** 2;

    return resultado;
  }

  _experimentalDensidadePopulacional(espaco = 0, populacao = 0) {
    resultado = espaco / populacao;

    return resultado;
  }

  // ! Outros Modos de Uso
  comum() { }
  cientifica() { }
  suprema() { }
  grafica() { }
  programador() { }

  // ! Peças da Calculadora
  _memoria() { }
  _limpar() { }
  _zerar() { }
  _sinal() { }

}