export class wertsfyCore { exportedTools() { return wertsfy; } }

let wertsfy = {

  sessoes: {

    

    nextGenApisSessao: {

      rcalcAplicacao: {

        functions: {

          soma: (x1 = 0, x2 = 0) => { 
            return x1 + x2; 
          },

          subtracao: (x1 = 0, x2 = 0) => {
            return x1 - x2; 
          },

          multiplicacao: (x1 = 0, x2 = 0) => {
            return x1 * x2; 
          },

          divisao: (x1 = 0, x2 = 0) => {
            return x1 / x2; 
          },

          potencia: (x1 = 0, x2 = 0) => {
            return Math.pow(x1, x2); 
          },

          modulo: (x1 = 0, x2 = 0) => {
            return x1 % x2; 
          },

          potenciaDePotencia: (x1 = 0, x2 = [0]) => { 
            var x3 = 0; 
          
            for (let i = 0; i < x2.length; i++) { 
              x3 += x2[i] 
            }; 
          
            return Math.pow(x1, x3); 
          },

          raizQuadrada: (x1 = 0) => { 
            return Math.sqrt(x1); 
          },

          raizCubica: (x1 = 0) => { 
            return Math.cbrt(x1); 
          },

          raizBiquadrada: (x1 = 0) => { 
            return Math.sqrt(Math.sqrt(x1)); 
          },

          raizBicubica: (x1 = 0) => { 
            return Math.cbrt(Math.cbrt(x1)); 
          },

          seno: (x1 = 0) => { 
            return Math.sin(x1); 
          },

          cosseno: (x1 = 0) => { 
            return Math.cos(x1); 
          },

          tangente: (x1 = 0) => { 
            return Math.tan(x1); 
          },

          secante: (x1 = 0) => { 
            return 1 / Math.cos(x1); 
          },

          cosecante: (x1 = 0) => { 
            return 1 / Math.sin(x1); 
          },

          cotangente: (x1 = 0) => { 
            return 1 / Math.tan(x1); 
          },

          senoInverso: (x1 = 0) => { 
            return Math.asin(x1); 
          },

          cossenoInverso: (x1 = 0) => { 
            return Math.acos(x1); 
          },

          tangenteInverso: (x1 = 0) => { 
            return Math.atan(x1); 
          },

          secanteInverso: (x1 = 0) => { 
            return Math.acos(1 / x1); 
          },

          cosecanteInverso: (x1 = 0) => { 
            return Math.asin(1 / x1); 
          },

          cotangenteInverso: (x1 = 0) => { 
            return Math.atan(1 / x1); 
          },

          senoHiperbolico: (x1 = 0) => { 
            return Math.sinh(x1); 
          },

          cossenoHiperbolico: (x1 = 0) => { 
            return Math.cosh(x1); 
          },

          tangenteHiperbolico: (x1 = 0) => { 
            return Math.tanh(x1); 
          },

          secanteHiperbolico: (x1 = 0) => { 
            return 1 / Math.cosh(x1); 
          },

          cosecanteHiperbolico: (x1 = 0) => { 
            return 1 / Math.sinh(x1); 
          },

          cotangenteHiperbolico: (x1 = 0) => { 
            return 1 / Math.tanh(x1); 
          },

          senoHiperbolicoInverso: (x1 = 0) => { 
            return Math.asinh(x1); 
          },

          cossenoHiperbolicoInverso: (x1 = 0) => { 
            return Math.acosh(x1); 
          },

          tangenteHiperbolicoInverso: (x1 = 0) => { 
            return Math.atanh(x1); 
          },

          secanteHiperbolicoInverso: (x1 = 0) => { 
            return Math.acosh(1 / x1); 
          },

          cosecanteHiperbolicoInverso: (x1 = 0) => { 
            return Math.asinh(1 / x1); 
          },

          cotangenteHiperbolicoInverso: (x1 = 0) => { 
            return Math.atanh(1 / x1); 
          },

          arcoSeno: (x1 = 0) => { 
            return Math.asin(x1); 
          },

          arcoCosseno: (x1 = 0) => { 
            return Math.acos(x1); 
          },

          arcoTangente: (x1 = 0) => { 
            return Math.atan(x1); 
          },

          arcoSecante: (x1 = 0) => { 
            return Math.acos(1 / x1); 
          },

          arcoCosecante: (x1 = 0) => { 
            return Math.asin(1 / x1); 
          },

          arcoCotangente: (x1 = 0) => { 
            return Math.atan(1 / x1); 
          },

          arcoSenoHiperbolico: (x1 = 0) => { 
            return Math.asinh(x1); 
          },

          arcoCossenoHiperbolico: (x1 = 0) => { 
            return Math.acosh(x1); 
          },

          arcoTangenteHiperbolico: (x1 = 0) => { 
            return Math.atanh(x1); 
          },

          arcoSecanteHiperbolico: (x1 = 0) => { 
            return Math.acosh(1 / x1); 
          },

          arcoCosecanteHiperbolico: (x1 = 0) => { 
            return Math.asinh(1 / x1); 
          },

          arcoCotangenteHiperbolico: (x1 = 0) => { 
            return Math.atanh(1 / x1); 
          },

          arcoSenoInverso: (x1 = 0) => { 
            return Math.asin(x1); 
          },

          arcoCossenoInverso: (x1 = 0) => { 
            return Math.acos(x1); 
          },

          arcoTangenteInverso: (x1 = 0) => { 
            return Math.atan(x1); 
          },

          arcoSecanteInverso: (x1 = 0) => { 
            return Math.acos(1 / x1); 
          },

          arcoCosecanteInverso: (x1 = 0) => { 
            return Math.asin(1 / x1); 
          },

          arcoCotangenteInverso: (x1 = 0) => { 
            return Math.atan(1 / x1); 
          },

          arcoSenoHiperbolicoInverso: (x1 = 0) => { 
            return Math.asinh(x1); 
          },

          arcoCossenoHiperbolicoInverso: (x1 = 0) => { 
            return Math.acosh(x1); 
          },

          arcoTangenteHiperbolicoInverso: (x1 = 0) => { 
            return Math.atanh(x1); 
          },

          arcoSecanteHiperbolicoInverso: (x1 = 0) => { 
            return Math.acosh(1 / x1); 
          },

          arcoCosecanteHiperbolicoInverso: (x1 = 0) => { 
            return Math.asinh(1 / x1); 
          },

          arcoCotangenteHiperbolicoInverso: (x1 = 0) => { 
            return Math.atanh(1 / x1); 
          },

          logaritmoNatural: (x1 = 0) => { 
            return Math.log(x1); 
          },

          logaritmoBase10: (x1 = 0) => {
            return Math.log10(x1); 
          },

          logaritmoBase2: (x1 = 0) => {
            return Math.log2(x1); 
          },

          logaritmoBaseEuler: (x1 = 0) => {
            return Math.log(x1) / Math.LN10;
          },

          logaritmoBaseEulerInverso: (x1 = 0) => {
            return Math.pow(10, x1); 
          },

          logaritmoBaseEulerHiperbolico: (x1 = 0) => { 
            return Math.log(x1) / Math.LN10; 
          },

          logaritmoBaseEulerHiperbolicoInverso: (x1 = 0) => {
            return Math.pow(10, x1);
          },

          logaritmoBase2Hiperbolico: (x1 = 0) => {
            return Math.log2(x1);
          },

          logaritmoBase2HiperbolicoInverso: (x1 = 0) => {
            return Math.pow(2, x1);
          },

          logaritmoBase2Inverso: (x1 = 0) => {
            return Math.pow(2, x1);
          },

          logaritmoBase10Hiperbolico: (x1 = 0) => {
            return Math.log10(x1); 
          },

          logaritmoBase10HiperbolicoInverso: (x1 = 0) => {
            return Math.pow(10, x1); 
          },

          logaritmoBase10Inverso: (x1 = 0) => { 
            return Math.pow(10, x1); 
          },

          logaritmoBaseQualquer: (x1 = 0, x2 = 0) => { 
            return Math.log(x1) / Math.log(x2); 
          },

          logaritmoNaturalMaisUm: (x1 = 0) => { 
            return Math.log1p(x1); 
          },

          logaritmoNaturalMaisUmInverso: (x1 = 0) => { 
            return Math.expm1(x1); 
          },

          logaritmoNaturalHiperbolicoMaisUm: (x1 = 0) => { 
            return 1 / Math.log1p(x1); 
          },

          logaritmoNaturalHiperbolicoMaisUmInverso: (x1 = 0) => { 
            return 1 / Math.expm1(x1); 
          },

          logaritmoNaturalMaisQualquer: (x1 = 0) => { 
            return Math.log1p(x1); 
          },

          logaritmoNaturalMaisQualquerInverso: (x1 = 0) => { 
            return Math.expm1(x1); 
          },

          logaritmoNaturalHiperbolicoMaisQualquer: (x1 = 0) => { 
            return 1 / Math.log1p(x1); 
          },

          logaritmoNaturalHiperbolicoMaisQualquerInverso: (x1 = 0) => { 
            return 1 / Math.expm1(x1); 
          },

          antilogaritmoNatural: (x1 = 0) => { 
            let base = 2.7182818284590452353602874; 
            
            x1 = base ** Math.log(valor); 
            
            return x1; 
          },

          antilogaritmoBase10: (x1 = 0) => { 
            let base = 10; 
            
            x1 = base ** Math.log10(valor); 
            
            return x1; 
          },

          antilogaritmoBase2: (x1 = 0) => { 
            let base = 2; 
            
            x1 = base ** Math.log2(valor); 
            
            return x1; 
          },

          antilogaritmoBaseEuler: (x1 = 0) => { 
            let base = Math.E; 
            
            x1 = base ** Math.log(valor); 
            
            return x1; 
          },

          antilogaritmoBaseEulerHiperbolico: (x1 = 0) => { 
            let base = 1 / Math.E; 
            
            x1 = base ** Math.log(valor); 
            
            return x1; 
          },

          antilogaritmoBase2Hiperbolico: (x1 = 0) => { 
            let base = 1 / Math.E; 
            
            x1 = base ** Math.log2(valor); 
            
            return x1; 
          },

          antilogaritmoBase2Inverso: (x1 = 0) => { 
            let base = 1 / Math.E; 
            
            x1 = base ** (1 / Math.log2(valor)); 
            
            return x1; 
          },

          antilogaritmoBase10Hiperbolico: (x1 = 0) => { 
            let base = 1 / Math.E; 
            
            x1 = base ** Math.log10(valor); 
            
            return x1; 
          },

          antilogaritmoBase10Inverso: (x1 = 0) => { 
            let base = 1 / Math.E; 
            
            x1 = base ** (1 / Math.log10(valor)); 
            
            return x1; 
          },

          antilogaritmoBaseQualquer: (x1 = 0, x2 = 0) => { 
            let base = x2; 
            
            x1 = base ** Math.log(valor); 
            
            return x1; 
          },

          antilogaritmoNaturalMaisUm: (x1 = 0) => { 
            let base = 2.7182818284590452353602874; 
            
            x1 = base ** Math.log1p(valor); 
            
            return x1; 
          },

          antilogaritmoNaturalMaisUmInverso: (x1 = 0) => { 
            let base = 1 / 2.7182818284590452353602874; 
            
            x1 = base ** Math.expm1(valor); 
            
            return x1; 
          },

          antilogaritmoNaturalHiperbolicoMaisUm: (x1 = 0) => { 
            let base = 1 / 2.7182818284590452353602874; 
            
            x1 = base ** Math.log1p(valor); 
            
            return x1; 
          },

          antilogaritmoNaturalHiperbolicoMaisUmInverso: (x1 = 0) => {
            let base = 2.7182818284590452353602874; 
            
            x1 = base ** Math.expm1(valor); 
            
            return x1; 
          },

          antilogaritmoNaturalMaisQualquer: (x1 = 0) => { 
            let base = 2.7182818284590452353602874; 
            
            x1 = base ** Math.log1p(valor); 
            
            return x1; 
          },

          antilogaritmoNaturalMaisQualquerInverso: (x1 = 0) => {
            let base = 1 / 2.7182818284590452353602874; 
            
            x1 = base ** Math.expm1(valor); 
            
            return x1;
          },

          antilogaritmoNaturalHiperbolicoMaisQualquer: (x1 = 0) => {
            let base = 1 / 2.7182818284590452353602874; 
            
            x1 = base ** Math.log1p(valor); 
            
            return x1; 
          },

          antilogaritmoNaturalHiperbolicoMaisQualquerInverso: (x1 = 0) => {
            let base = 2.7182818284590452353602874; 
            
            x1 = base ** Math.expm1(valor); 
            
            return x1; 
          },

          cologaritmoNatural: (x1 = 0) => { 
            return Math.log(x1) * -1; 
          },

          cologaritmoBase10: (x1 = 0) => { 
            return Math.log10(x1) * -1; 
          },

          cologaritmoBase2: (x1 = 0) => { 
            return Math.log2(x1) * -1; 
          },

          cologaritmoBaseEuler: (x1 = 0) => { 
            return Math.log(x1) * -1; 
          },

          cologaritmoBaseEulerHiperbolico: (x1 = 0) => { 
            return 1 / (1 / Math.log(x1)) * -1; 
          },

          cologaritmoBase2Hiperbolico: (x1 = 0) => { 
            return 1 / (1 / Math.log2(x1)) * -1; 
          },

          cologaritmoBase2Inverso: (x1 = 0) => { 
            return 1 / Math.log2(x1) * -1;
          },

          cologaritmoBase10Hiperbolico: (x1 = 0) => { 
            return 1 / (1 / Math.log10(x1)) * -1; 
          },

          cologaritmoBase10Inverso: (x1 = 0) => {
            return 1 / Math.log10(x1) * -1; 
          },

          cologaritmoBaseQualquer: (x1 = 0) => { 
            return Math.log(x1) * -1; 
          },

          primeiroGrau: (exp = '') => { 
            let res = 0;
            
            let verif = /([0-9]+(\.[0-9]+)?x((\-)?(\+)?)[0-9]+(\.[0-9]+)?=[0-9]+(\.[0-9]+)?)/gi; 
            
            let p1 = /([0-9]+(\.[0-9]+)?x)/gi;
            
            let p2 = /(((\-)?(\+)?)[0-9]+(\.[0-9]+)?)/gi; 
            
            let p3 = /(=[0-9]+(\.[0-9]+)?)/gi; 
            
            if (exp.match(verif) == null) { 
              return console.error("A expressão inserida não é uma função do 1º Grau!"); 
            } else { 
              res = (parseFloat(exp.match(p2)) - parseFloat(exp.match(p3))) / parseFloat(exp.match(p1)); 
            } 
            
            return res; 
          },

          segundoGrau: (a = 0, b = 0, c = 0) => { 
            let res = 0; 
            
            let delta = (b ** 2) - (4 * a * c); 
            
            let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
            
            let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
            
            res = [x1, x2]; 
            
            return res; 
          },

          terceiroGrau: (a = 0, b = 0, c = 0) => { 
            let res = 0; 
            
            let delta = (b ** 2) - (4 * a * c); 
            
            let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
            
            let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
            
            res = [x1, x2, 0]; 
            
            return res; 
          },

          quartoGrau: (a = 0, b = 0, c = 0) => { 
            let res = 0; 
            
            let delta = (b ** 2) - (4 * a * c); 
            
            let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
            
            let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
            
            res = [x1, -1 * x1, x2, -1 * x2]; 
            
            return res; 
          },

          quintoGrau: (a = 0, b = 0, c = 0) => { 
            let res = 0, delta = (b ** 2) - (4 * a * c); 
            
            let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
            
            let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
            
            res = [x1, -1 * x1, x2, -1 * x2, 0]; 
            
            return res; 
          },

          areaTrianguloQualquer: (comp = 0, larg = 0) => { 
            return comp == larg ? (comp * comp * Math.sqrt(3)) / 4 : comp * larg / 2; 
          },

          areaQuadradoQualquer: (lado = 0) => { 
            return lado * lado; 
          },

          areaRetanguloQualquer: (comp = 0, larg = 0) => { 
            return comp * larg; 
          },

          areaCirculoQualquer: (raio = 0) => { 
            return Math.PI * (raio ** 2); 
          },

          areaElipseQualquer: (raio = 0, altura = 0) => { 
            return Math.PI * (raio ** 2) * altura; 
          },

          areaPiramideQualquer: (base = 0, altura = 0) => { 
            return (base * altura) / 3; 
          },

          areaCuboQualquer: (aresta = 0) => { 
            return aresta * aresta * aresta; 
          },

          areaParalelepipedoQualquer: (aresta = 0, altura = 0, largura = 0) => { 
            return aresta * altura * largura; 
          },

          areaEsferaQualquer: (raio = 0) => { 
            return 4 * Math.PI * (raio ** 2); 
          },

          areaCilindroQualquer: (raio = 0, altura = 0) => { 
            return Math.PI * (raio ** 2) * altura; 
          },

          areaConeQualquer: (raio = 0, altura = 0) => { 
            return Math.PI * (raio ** 2) * (altura / 3); 
          },

          areaDeUmPoligonoQualquer: (comp = 0, larg = 0, nLados=0) => {
            return comp == larg ? nLados * ((comp * comp * Math.sqrt(3)) / 4) : nLados * (comp * larg / 2);
          },

          areaDeUmTrapezioQualquer: (ladoMenor = 0, ladoMaior = 0, altura = 0) => { 
            return ((ladoMaior + ladoMenor) * altura) / 2; 
          },

          areaDeUmParalelogramoQualquer: (lado = 0, altura = 0) => { 
            return lado * altura; 
          },

          areaDeUmLosangoQualquer: (diagonalMaior = 0, diagonalMenor = 0) => { 
            return (diagonalMaior * diagonalMenor) / 2; 
          },

          areaLateralDeUmPrismaQualquer: (comp = 0, larg = 0, nLados=0) => {
            return nLados * (comp * larg);
          },

          formulaDeGirard: (expressao = "") => {
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
          },

          calculoDoTeoremaDeTalesDeMileto: (valorMultiplicadoPorX = 0, valorNormal = 0) => {
            let resultado = valorNormal / valorMultiplicadoPorX;

            return resultado;
          },

          calculoDoTeoremaDePitagoras: (a = 0, b = 0) => {
            let resultado = Math.sqrt(((a ** 2) + (b ** 2)));

            return resultado;
          },

          calculoDaRelacaoPitagoricaT1: (m = 0, n = 0) => {
            let resultado = Math.sqrt(m * n);

            return resultado;
          },

          calculoDaRelacaoPitagoricaT2: (a = 0, n = 0) => {
            let resultado = Math.sqrt(a * n);

            return resultado;
          },

          calculoDaRelacaoPitagoricaT3: (h = 0, b = 0, c = 0) => {
            let resultado = (b * c) / h;

            return resultado;
          },

          calculoDoFatorial: (valor = 0) => {
            let resultado = 1;

            for (let i = valor; i > 0; i--) { resultado = i * resultado; };

            return resultado; 
          },

          calculoDaCombinacao: (total = 0, divisor = 0) => {
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
          },

          calculoDoArranjo: (total = 0, divisor = 0) => {
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
          },

          calculoDaProbabilidade: (valor = 0, valorTotal = 0) => {
            let resultado = valor / valorTotal;

            return resultado;
          },

          calculoDoConjugadoDeUmNumeroComplexo: (expressao = "") => {
            let resultado = 0, verificaSinal = /^(\-)/gi;

            if (verificaSinal != null) { expressao.replace("-", ''); }

            resultado = expressao;

            return resultado;
          },

          calculoDaRelacaoDeEuler: (vertices = 0, arestas = 0, faces = 0) => {
            let resultado = (vertices - (arestas + faces)) - 2;

            return resultado;
          },

          calculoDasPotenciasDeI: (valor = 0) => {
            let resultado = '', divisor = valor % 4;

            if (divisor == 0) { resultado = 'i'; }

            if (divisor == 1) { resultado = '-1'; }

            if (divisor == 2) { resultado = '-i'; }

            if (divisor == 3) { resultado = '1'; }

            return resultado;
          },

          calculoDaPorcentagem: (valorParte = 0, valorTotal = 0) => {
            let resultado = valorParte / valorTotal;

            return resultado;
          },

          calculoDaDeterminante2x2: (a00 = 0, a01 = 0, a10 = 0, a11 = 0) => {
            let resultado = 0, vetorPrimario = a00 * a11, vetorSecundario = a01 * a10;

            resultado = vetorPrimario - vetorSecundario;

            return resultado;
          },

          calculoDaDeterminante3x3: (a00 = 0, a01 = 0, a02 = 0, a10 = 0, a11 = 0, a12 = 0, a20 = 0, a21 = 0, a22 = 0) => {
            let resultado = 0;

            // 00 01 02  00 01
            // 10 11 12  10 11
            // 20 21 22  20 21

            let vetorPrincipal1 = a00 * a11 * a22, vetorPrincipal2 = a01 * a12 * a20, vetorPrincipal3 = a02 * a10 * a21;

            let vetorSecundario1 = a02 * a11 * a20, vetorSecundario2 = a00 * a12 * a21, vetorSecundario3 = a01 * a10 * a22;

            resultado = (vetorPrincipal1 + vetorPrincipal2 + vetorPrincipal3) - (vetorSecundario1 + vetorSecundario2 + vetorSecundario3);

            return resultado;
          },

          calculoDaVelocidade: (espaco = 0, tempo = 0) => {
            let resultado = espaco / tempo;

            return resultado;
          },

          calculoDoEspaco: (velocidade = 0, tempo = 0) => {
            let resultado = velocidade * tempo;

            return resultado;
          },

          calculoDoTempo: (velocidade = 0, espaco = 0) => {
            let resultado = espaco / velocidade;

            return resultado;
          },

          calculoDaAceleracao: (velocidade = 0, tempo = 0) => {
            let resultado = velocidade / tempo;

            return resultado;
          },

          calculoDaEqHorariaDoTempo: (tempo = 0, tempoInicial = 0, velocidade = 0, aceleracao = 0) => {
            let resultado = tempoInicial + (velocidade * tempo) + (aceleracao * (tempo ** 2));

            return resultado;
          },

          calculoDaEqHorariaDoEspaco: (espaco = 0, espacoInicial = 0, aceleracao = 0) => {
            let resultado = espacoInicial + aceleracao * espaco;

            return resultado;
          },

          calculoDaEnergiaCinetica: (massa = 0, velocidade = 0) => {
            let resultado = (massa * velocidade ** 2) / 2;

            return resultado;
          },

          calculoDaEnergiaPotencialElastica: (constanteElastica = 0, distancia = 0) => {
            let resultado = (constanteElastica * distancia ** 2) / 2;

            return resultado;
          },

          calculoDaEnergiaPotencialGravitacional: (massa = 0, gravidade = 0, altura = 0) => {
            let resultado = massa * gravidade * altura;

            return resultado;
          },

          calculoDoPotencialMecanico: (velocidade = 0, constanteElastica = 0, distancia = 0, massa = 0, gravidade = 0, altura = 0, energPotElas = true, energPotGrav = true) => {
            let resultado = 0;

            if (energPotElas == true) { resultado = this.calculoDaEnergiaCinetica(massa, velocidade) + this.calculoDaEnergiaPotencialElastica(constanteElastica, distancia); }

            if (energPotGrav == true) { resultado = this.calculoDaEnergiaCinetica(massa, velocidade) + this.calculoDaEnergiaPotencialGravitacional(massa, gravidade, altura); }

            return resultado;
          },

          calculoDoPotencialElastico: (constanteElastica = 0, distancia = 0) => {
            let resultado = this.calculoDaEnergiaPotencialElastica(constanteElastica, distancia);

            return resultado;
          },

          calculoDoPlanoInclinadoSemAtrito: (massa = 0, gravidade = 0) => {
            let resultado = massa * gravidade;

            return resultado;
          },

          calculoDoPlanoInclinadoComAtrito: (forcaDeAtrito = 0, massa = 0, gravidade = 0, angulo = 0) => {
            let resultado = forcaDeAtrito * massa * gravidade * angulo;

            return resultado;
          },

          calculoDaAceleracaoNoPlanoInclinadoEixoX: (massa = 0, gravidade = 0, angulo = 0) => {
            let resultado = massa * gravidade * Math.sin(angulo);

            return resultado;
          },

          calculoDaAceleracaoNoPlanoInclinadoEixoY: (massa = 0, gravidade = 0, angulo = 0) => {
            let resultado = massa * gravidade * Math.cos(angulo);

            return resultado;
          },

          calculoDoLancamentoHorizontal: (gravidade = 0, tempo = 0) => {
            let resultado = (gravidade * tempo ** 2) / 2;

            return resultado;
          },

          calculoDaEquacaoDeTorricelli: (velocidadeInicial = 0, aceleracao = 0, espacoInicial = 0, espacoFinal = 0) => {
            let resultado = Math.sqrt((velocidadeInicial ** 2) + 2 * aceleracao * (espacoFinal - espacoInicial));

            return resultado;
          },

          calculoDaAlturaMaximaDeUmLancamentoVertical: (velocidadeInicial = 0, gravidade = 0, angulo = 0) => {
            let resultado = (velocidadeInicial ** 2) * ((Math.sin(angulo) ** 2) / 2) * gravidade;

            return resultado;
          },

          calculoDoAlcanceDeUmLancamentoVertical: (velocidade = 0, tempo = 0, angulo = 0) => {
            let resultado = velocidade * Math.cos(angulo) * tempo;

            return resultado;
          },

          calculoDoAlcanceMaximoDeUmLancamentoVertical: (velocidade = 0, tempo = 0, gravidade = 0) => {
            let resultado = (velocidade ** 2 * (Math.sin(angulo) ** 2)) / gravidade;

            return resultado;
          },

          calculoDoCalorSensivel: (massa = 0, calorEspecifico = 0, temperaturaInicial = 0, temperaturaFinal = 0) => {
            let resultado = massa * calorEspecifico * (temperaturaFinal - temperaturaInicial);

            return resultado;
          },

          calculoDoCalorLatente: (quantidadeDeCalor = 0, massa = 0) => {
            let resultado = quantidadeDeCalor / massa;

            return resultado;
          },

          calculoDasLeisDeNewton: (massa = 0, aceleracao = 0) => {
            let resultado = massa * aceleracao;

            return resultado;
          },

          calculoDoTrabalho: (massa = 0, gravidade = 0, altura = 0) => {
            let resultado = massa * gravidade * altura;

            return resultado;
          },

          calculoDoConsumoDeEnergia: (tempo = 0, correnteEletrica = 0, ddp = 0) => {
            let resultado = correnteEletrica * ddp * tempo;

            return resultado;
          },

          calculoDoTeoremaDePascal: (forca1 = 0, forca2 = 0, area1 = 0, area2 = 0, forca1Inexistente = true, forca2Inexistente = true, area1Inexistente = true, area2Inexistente = true) => {
            let resultado = 0;

            if (forca1Inexistente == true) { resultado = (area1 * forca2) / area2; }

            if (forca2Inexistente == true) { resultado = (area2 * forca1) / area1; }

            if (area1Inexistente == true) { resultado = (forca1 * area2) / forca2; }

            if (area2Inexistente == true) { resultado = (forca2 * area1) / forca1; }

            return resultado;
          },

          calculoDoTeoremaDeStevin: (densidade = 0, gravidade = 0, alturaInicial = 0, alturaFinal = 0) => {
            let resultado = densidade * gravidade * (alturaFinal - alturaInicial);

            return resultado;
          },

          calculoDaForcaGravitacional: (gravidade = 0, massaPlaneta = 0, distancia = 0) => {
            let resultado = gravidade * (massaPlaneta / distancia ** 2);

            return resultado;
          },

          calculoDoAceleracaoCentripetaMovimentoCircularUniforme: (velocidade = 0, raio = 0) => {
            let resultado = (velocidade ** 2) / raio;

            return resultado;
          },

          calculoDoVelocidadeAngularMovimentoCircularUniforme: (anguloInicial = 0, anguloFinal = 0, tempoInicial = 0, tempoFinal = 0) => {
            let resultado = (anguloFinal - anguloInicial) / (anguloFinal - anguloInicial);

            return resultado;
          },

          calculoDoVelocidadeLinearMovimentoCircularUniforme: (frequencia = 0, raio = 0) => {
            let resultado = (2 * Math.PI * frequencia) * raio;

            return resultado;
          },

          calculoDaEquacaoHorariaDoTempoMovimentoCircularUnifVariado: (velocidadeAngularInicial = 0, aceleracaoAngular = 0, tempo = 0) => {
            let resultado = velocidadeAngularInicial + aceleracaoAngular * tempo;

            return resultado;
          },

          calculoDaEquacaoHorariaDoEspacoMovimentoCircularUnifVariado: (posicaoAngularInicial = 0, velocidadeAngularInicial = 0, aceleracaoAngular = 0, tempo = 0) => {
            let resultado = posicaoAngularInicial + (velocidadeAngularInicial * tempo) + (aceleracaoAngular * tempo ** 2) / 2;

            return resultado;
          },

          calculoDeToricelliMovimentoCircularUnifVariado: (velocidadeAngularInicial = 0, aceleracaoAngular = 0, deslocamentoAngularInicial = 0, deslocamentoAngularFinal = 0) => {
            let resultado = Math.sqrt(velocidadeAngularInicial + 2 * aceleracaoAngular * (deslocamentoAngularFinal - deslocamentoAngularInicial));

            return resultado;
          },

          calculoDaAceleracaoAngularMovimentoCircularUnifVariado: (velocidadeAngularInicial = 0, velocidadeAngularFinal = 0, tempoInicial = 0, tempoFinal = 0) => {
            let resultado = (velocidadeAngularFinal - velocidadeAngularInicial) / (tempoFinal - tempoInicial);

            return resultado;
          },

          calculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples: (velocidadeAngular = 0, amplitude = 0, tempo = 0, faseInicial = 0) => {
            let resultado = velocidadeAngular * amplitude * Math.cos(tempo + faseInicial);

            return resultado;
          },

          calculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples: (velocidadeAngular = 0, amplitude = 0, tempo = 0, faseInicial = 0) => {
            let resultado = -1 * velocidadeAngular * amplitude * Math.sin(tempo + faseInicial);

            return resultado;
          },

          calculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples: (velocidadeAngular = 0, amplitude = 0, tempo = 0, faseInicial = 0) => {
            let resultado = -1 * velocidadeAngular ** 2 * amplitude * Math.cos(tempo + faseInicial);

            return resultado;
          },

          calculoDoPeriodo: (frequencia = 0) => {
            let resultado = 1 / frequencia;

            return resultado;
          },

          calculoDaFrequencia: (periodo = 0) => {
            let resultado = 1 / periodo;

            return resultado;
          },
          
          calculoDaTemperatura: (valor = 0, deCelsiusParaKelvin = true, deCelsiusParaFahrenheit = true, deKelvinParaCelsius = true, deKelvinParaFahrenheit = true, deFahrenheitParaKelvin = true, deFahrenheitParaCelsius = true) => {
            let resultado = 0;

            if (deCelsiusParaFahrenheit == true) { resultado = (1.8 * valor) + 32; }

            if (deCelsiusParaKelvin == true) { resultado = valor - 273; }

            if (deFahrenheitParaCelsius == true) { resultado = (valor - 32) / 1.8; }

            if (deFahrenheitParaKelvin == true) { resultado = ((valor - 32) * 5) / 9 + 273; }

            if (deKelvinParaCelsius == true) { resultado = valor + 273; }

            if (deKelvinParaFahrenheit == true) { resultado = (valor - 273) * 1.8 + 32; }

            return resultado;
          },

          calculoDaDilatacaoLinear: (comprimentoInicial = 0, coeficienteDeDilatacaoLinear = 0, temperaturaInicial = 0, temperaturaFinal = 0) => {
            let resultado = comprimentoInicial * coeficienteDeDilatacaoLinear * (temperaturaFinal - temperaturaInicial);

            return resultado;
          },

          calculoDaDilatacaoSuperficial: (areaInicial = 0, coeficienteDeDilatacaoSuperficial = 0, temperaturaInicial = 0, temperaturaFinal = 0) => {
            let resultado = areaInicial * coeficienteDeDilatacaoSuperficial * (temperaturaFinal - temperaturaInicial);

            return resultado;
          },

          calculoDaDilatacaoVolumetrica: (volumeInicial = 0, coeficienteDeDilatacaoVolumetrica = 0, temperaturaInicial = 0, temperaturaFinal = 0) => {
            let resultado = volumeInicial * coeficienteDeDilatacaoVolumetrica * (temperaturaFinal - temperaturaInicial);

            return resultado;
          },

          calculoDoPrincipioFundamentalDaHidroestaticaHidrodinamica: (densidade = 0, gravidade = 0, alturaInicial = 0, alturaFinal = 0) => {
            let resultado = densidade * gravidade * (alturaFinal - alturaInicial);

            return resultado;
          },

          calculoDoEmpuxoDaHidroestaticaHidrodinamica: (densidade = 0, gravidade = 0, volume = 0) => {
            let resultado = densidade * gravidade * volume;

            return resultado;
          },

          calculoDoPesoAparenteDaHidroestaticaHidrodinamica: (peso = 0, densidade = 0, gravidade = 0, volume = 0) => {
            let resultado = peso - this.calculoDoEmpuxoDaHidroestatica(densidade, gravidade, volume);

            return resultado;
          },

          calculoDoAtrito: (coeficienteDeAtrito = 0, massa = 0) => {
            let resultado = coeficienteDeAtrito * massa;

            return resultado;
          },

          calculoDaLeiDeCoulomb: (carga1 = 0, carga2 = 0, distancia = 0) => {
            let resultado = (9 * 10 ** 9) * (carga1 * carga2 / distancia ** 2);

            return resultado;
          },

          calculoDaLeiDeOhm: (resistencia = 0, corrente = 0) => {
            let resultado = resistencia * corrente;

            return resultado;
          },

          calculoDoEfeitoJoule: (corrente = 0, resistencia = 0, tempo = 0) => {
            let resultado = (corrente ** 2) * resistencia * tempo;

            return resultado;
          },

          calculoDaLeiDeLenz: (intensidadeDoCampoMagnetico = 0, areaDaSuperficie = 0, cosAngulo = 0) => {
            let resultado = intensidadeDoCampoMagnetico * areaDaSuperficie * Math.cos(cosAngulo);

            return resultado;
          },

          calculoDaForcaEletromotriz: (potenciaTotalGerador = 0, intensidadeDaCorrente = 0) => {
            let resultado = potenciaTotalGerador / intensidadeDaCorrente;

            return resultado;
          },

          calculoDaContraForcaEletromotriz: (potenciaTotalGerador = 0, intensidadeDaCorrente = 0) => {
            let resultado = -1 * this.calculoDaForcaEletromotriz;

            return resultado;
          },

          calculoDoEfeitoFotoeletrico: (frequenciaDaLuz = 0) => {
            let resultado = (6.662 * 10 ** -34) * frequenciaDaLuz;

            return resultado;
          },

          calculoDaDensidade: (massa = 0, volume = 0) => {
            let resultado = massa / volume;

            return resultado;
          },

          calculoDaTitulacao: (massaBase = 0, massaAcido = 0, volumeBase = 0, volumeAcido = 0, naoTemMassaBase = true, naoTemMassaAcido = true, naoTemVolumeBase = true, naoTemVolumeAcido = true) => {
            let resultado = 0;

            if (naoTemMassaAcido == true) { resultado = massaBase * volumeBase / volumeAcido; }
            
            if (naoTemMassaBase == true) { resultado = massaAcido * volumeAcido / volumeBase; }
            
            if (naoTemVolumeAcido == true) { resultado = massaBase * volumeBase / massaAcido; }
            
            if (naoTemVolumeBase == true) { resultado = massaAcido * volumeAcido / massaBase; }
            
            return resultado;
          },

          calculoDaConcentracao: (massaSoluto = 0, volume = 0) => {
            let resultado = massaSoluto / volume;

            return resultado;
          },

          calculoDoRendimento: (valorParte = 0, valorTotal = 0) => {
            let resultado = this.calculoDaPorcentagem(valorParte, valorTotal);

            return resultado;
          },

          calculoDaLeiGeralDosGases: (pressao1 = 0, pressao2 = 0, volume1 = 0, volume2 = 0, temperatura1 = 0, temperatura2 = 0) => {
            let verificacao = /([a-zA-Z])/gi;
            let resultado = 0;

            if (pressao1.match(verificacao) != null) { resultado = (volume1 * temperatura2) / (pressao2 * volume2 * temperatura1); }

            if (pressao2.match(verificacao) != null) { resultado = (pressao1 * volume1 * temperatura2) / (volume2 * temperatura1); }

            if (volume1.match(verificacao) != null) { resultado = (pressao1 * temperatura2) / (pressao2 * volume2 * temperatura1); }

            if (volume2.match(verificacao) != null) { resultado = (pressao1 * volume1 * temperatura2) / (pressao2 * temperatura1); }

            if (temperatura1.match(verificacao) != null) { resultado = (pressao1 * volume1 * temperatura2) / (pressao2 * volume2); }

            if (temperatura2.match(verificacao) != null) { resultado = (pressao1 * volume1) / (pressao2 * volume2 * temperatura1); }
            
            return resultado;
          },

          calculoDaEscalaGeografica: (tamanhoReal = 0, tamanhoFicticio = 0) => {
            let resultado = tamanhoReal / tamanhoFicticio;

            return resultado;
          },

          calculoDeIDH: (saude = 0, educacao = 0, renda = 0, populacao = 0, ppc = 0) => {
            resultado = (saude + educacao + renda) / (populacao + ppc);

            return resultado;
          },

          calculoDeGINI: (pnb = 0, populacao = 0) => {
            resultado = pnb / populacao;

            return resultado;
          },

          calculoDeIMC: (peso = 0, altura = 0) => {
            resultado = peso / altura ** 2;

            return resultado;
          },

          calculoDeDensidadePopulacional: (espaco = 0, populacao = 0) => {
            resultado = espaco / populacao;

            return resultado;
          },

          sistemaDeEquacoes: (expressao1 = '', expressao2 = '') => {
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
          },

          sistemaDeInequacoes: (expressao1 = '', expressao2 = '') => {
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
          },

          sistemasLineares: (expressoes = []) => {
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
          },

          somaNumerosComplexos: (valores = [""]) => {
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
          },

          subtracaoNumerosComplexos: (valorTotal = "", valores = [""]) => {
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
          },

          multiplicacaoNumerosComplexos: (valores = [""]) => {
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
          },

          divisaoNumerosComplexos: (valorTotal = "", valores = [""]) => {
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
          },

          multiplicacaoNumerosComplexosTrigonometricos: (valor1 = "", valor2 = "") => {
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
          },

          divisaoNumerosComplexosTrigonometricos: (valor1 = "", valor2 = "") => {
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
          },

          potenciaNumerosComplexosTrigonometricos: (valor1 = "", pot = 0) => {
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
          },

          regrasDeTres: class regraDeTres {

            regraDeTresSimples(valor1=0, valor2=0, valor3=0, localDaVariavel=("A"||"B"||"C")) {

              if(localDaVariavel == "a") { localDaVariavel = "A"; }
              if(localDaVariavel == "b") { localDaVariavel = "B"; }
              if(localDaVariavel == "c") { localDaVariavel = "C"; }

              let resultado = 0;

              switch(localDaVariavel) { 
                case "A": resultado = valor1 * valor2 / valor3; break;

                case "B": resultado = valor1 * valor3 / valor2; break;

                case "C": resultado = valor2 * valor3 / valor1; break;
              }

              return resultado;

            }

            regraDeTresComposta(valor1=0, valor2=0, valor3=0, valor4=0, valor5=0, valor6=0, valor7=0, localDaVariavel=("A"||"B"||"C"||"D"||"E"||"F"||"G")) {

              if(localDaVariavel == "a") { localDaVariavel = "A"; }
              if(localDaVariavel == "b") { localDaVariavel = "B"; }
              if(localDaVariavel == "c") { localDaVariavel = "C"; }
              if(localDaVariavel == "d") { localDaVariavel = "D"; }
              if(localDaVariavel == "e") { localDaVariavel = "E"; }
              if(localDaVariavel == "f") { localDaVariavel = "F"; }
              if(localDaVariavel == "g") { localDaVariavel = "G"; }

              let resultado = 0;

              switch(localDaVariavel) { 
                case "A": resultado = valor1 * valor2 / valor3; break;

                case "B": resultado = valor1 * valor3 / valor2; break;

                case "C": resultado = valor2 * valor3 / valor1; break;

                case "D": resultado = valor4 * valor5 / valor6; break;

                case "E": resultado = valor4 * valor6 / valor5; break;

                case "F": resultado = valor5 * valor6 / valor4; break;

                case "G": resultado = valor7 * valor5 / valor6; break;
              }

              return resultado;

            }

          },

          conversoesDeBases: class conversaoDeBases {

            chaves = {
              basesAngulares: ["~graus", "~radianos", ["01", "02"]],

              basesGrandezas: [ ],

              basesTecnologicas: ["~decimal", "~binario", "~octal", "~hexadecimal", ["01", "02", "03", "04"]],

            }



          }



        }

      },

      xcolorsAplicacao: {
        formats: {
          
          rgby: class RGBYSchema {
          
            definicoes(cor="", intensidade=0) {
              
              let schema = [];
              
              switch(intensidade) {
                case 0: schema = [cor, "#FFFF0000"]; break;
                case 1: schema = [cor, "#FFFF0011"]; break;
                case 2: schema = [cor, "#FFFF0022"]; break;
                case 3: schema = [cor, "#FFFF0033"]; break;
                case 4: schema = [cor, "#FFFF0044"]; break;
                case 5: schema = [cor, "#FFFF0055"]; break;
                case 6: schema = [cor, "#FFFF0066"]; break;
                case 7: schema = [cor, "#FFFF0077"]; break;
                case 8: schema = [cor, "#FFFF0088"]; break;
                case 9: schema = [cor, "#FFFF0099"]; break;
                case 10: schema = [cor, "#FFFF00AA"]; break;
                case 11: schema = [cor, "#FFFF00BB"]; break;
                case 12: schema = [cor, "#FFFF00CC"]; break;
                default: console.log(`Não é possível implementar o recurso.`);
              }


            } 
          
          },
         
        }
      }

    },

    webConstructorSessao: {

      lydrocAplicacao: {

        funcoes: {

          html: () => {
            let elemento = document.createElement('html');
            return elemento;
          },

          base: () => {
            let elemento = document.createElement('base');
            return elemento;
          },

          head: () => {
            let elemento = document.createElement('head');
            return elemento;
          },

          link: () => {
            let elemento = document.createElement('link');
            return elemento;
          },

          meta: () => {
            let elemento = document.createElement('meta');
            return elemento;
          },

          style: () => {
            let elemento = document.createElement('style');
            return elemento;
          },

          title: () => {
            let elemento = document.createElement('title');
            return elemento;
          },

          address: () => {
            let elemento = document.createElement('address');
            return elemento;
          },

          article: () => {
            let elemento = document.createElement('article');
            return elemento;
          },

          aside: () => {
            let elemento = document.createElement('aside');
            return elemento;
          },

          footer: () => {
            let elemento = document.createElement('footer');
            return elemento;
          },

          header: () => {
            let elemento = document.createElement('header');
            return elemento;
          },

          h1: () => {
            let elemento = document.createElement('h1');
            return elemento;
          },

          h2: () => {
            let elemento = document.createElement('h2');
            return elemento;
          },

          h3: () => {
            let elemento = document.createElement('h3');
            return elemento;
          },

          h4: () => {
            let elemento = document.createElement('h4');
            return elemento;
          },

          h5: () => {
            let elemento = document.createElement('h5');
            return elemento;
          },

          h6: () => {
            let elemento = document.createElement('h6');
            return elemento;
          },

          main: () => {
            let elemento = document.createElement('main');
            return elemento;
          },

          nav: () => {
            let elemento = document.createElement('nav');
            return elemento;
          },

          section: () => {
            let elemento = document.createElement('section');
            return elemento;
          },

          blockquote: () => {
            let elemento = document.createElement('blockquote');
            return elemento;
          },

          dd: () => {
            let elemento = document.createElement('dd');
            return elemento;
          },

          div: () => {
            let elemento = document.createElement('div');
            return elemento;
          },

          dl: () => {
            let elemento = document.createElement('dl');
            return elemento;
          },

          dt: () => {
            let elemento = document.createElement('dt');
            return elemento;
          },

          figcaption: () => {
            let elemento = document.createElement('figcaption');
            return elemento;
          },

          figure: () => {
            let elemento = document.createElement('figure');
            return elemento;
          },

          hr: () => {
            let elemento = document.createElement('hr');
            return elemento;
          },

          li: () => {
            let elemento = document.createElement('li');
            return elemento;
          },

          ol: () => {
            let elemento = document.createElement('ol');
            return elemento;
          },

          paragraph: () => {
            let elemento = document.createElement('paragraph');
            return elemento;
          },

          pre: () => {
            let elemento = document.createElement('pre');
            return elemento;
          },

          ul: () => {
            let elemento = document.createElement('ul');
            return elemento;
          },

          anchor: () => {
            let elemento = document.createElement('anchor');
            return elemento;
          },

          abbr: () => {
            let elemento = document.createElement('abbr');
            return elemento;
          },

          b: () => {
            let elemento = document.createElement('b');
            return elemento;
          },

          bdi: () => {
            let elemento = document.createElement('bdi');
            return elemento;
          },

          bdo: () => {
            let elemento = document.createElement('bdo');
            return elemento;
          },

          br: () => {
            let elemento = document.createElement('br');
            return elemento;
          },

          cite: () => {
            let elemento = document.createElement('cite');
            return elemento;
          },

          code: () => {
            let elemento = document.createElement('code');
            return elemento;
          },

          data: () => {
            let elemento = document.createElement('data');
            return elemento;
          },

          dfn: () => {
            let elemento = document.createElement('dfn');
            return elemento;
          },

          em: () => {
            let elemento = document.createElement('em');
            return elemento;
          },

          i: () => {
            let elemento = document.createElement('i');
            return elemento;
          },

          kbd: () => {
            let elemento = document.createElement('kbd');
            return elemento;
          },

          mark: () => {
            let elemento = document.createElement('mark');
            return elemento;
          },

          q: () => {
            let elemento = document.createElement('q');
            return elemento;
          },

          rp: () => {
            let elemento = document.createElement('rp');
            return elemento;
          },

          rt: () => {
            let elemento = document.createElement('rt');
            return elemento;
          },

          ruby: () => {
            let elemento = document.createElement('ruby');
            return elemento;
          },

          s: () => {
            let elemento = document.createElement('s');
            return elemento;
          },

          samp: () => {
            let elemento = document.createElement('samp');
            return elemento;
          },

          small: () => {
            let elemento = document.createElement('small');
            return elemento;
          },

          span: () => {
            let elemento = document.createElement('span');
            return elemento;
          },

          strong: () => {
            let elemento = document.createElement('strong');
            return elemento;
          },

          sub: () => {
            let elemento = document.createElement('sub');
            return elemento;
          },

          sup: () => {
            let elemento = document.createElement('sup');
            return elemento;
          },

          time: () => {
            let elemento = document.createElement('time');
            return elemento;
          },

          u: () => {
            let elemento = document.createElement('u');
            return elemento;
          },

          var: () => {
            let elemento = document.createElement('var');
            return elemento;
          },

          wbr: () => {
            let elemento = document.createElement('wbr');
            return elemento;
          },

          area: () => {
            let elemento = document.createElement('area');
            return elemento;
          },

          audio: () => {
            let elemento = document.createElement('audio');
            return elemento;
          },

          img: () => {
            let elemento = document.createElement('img');
            return elemento;
          },

          map: () => {
            let elemento = document.createElement('map');
            return elemento;
          },

          track: () => {
            let elemento = document.createElement('track');
            return elemento;
          },

          video: () => {
            let elemento = document.createElement('video');
            return elemento;
          },

          embed: () => {
            let elemento = document.createElement('embed');
            return elemento;
          },

          iframe: () => {
            let elemento = document.createElement('iframe');
            return elemento;
          },

          object: () => {
            let elemento = document.createElement('object');
            return elemento;
          },

          param: () => {
            let elemento = document.createElement('param');
            return elemento;
          },

          picture: () => {
            let elemento = document.createElement('picture');
            return elemento;
          },

          portal: () => {
            let elemento = document.createElement('portal');
            return elemento;
          },

          source: () => {
            let elemento = document.createElement('source');
            return elemento;
          },

          canvas: () => {
            let elemento = document.createElement('canvas');
            return elemento;
          },

          noscript: () => {
            let elemento = document.createElement('noscript');
            return elemento;
          },

          script: () => {
            let elemento = document.createElement('script');
            return elemento;
          },

          del: () => {
            let elemento = document.createElement('del');
            return elemento;
          },

          ins: () => {
            let elemento = document.createElement('ins');
            return elemento;
          },

          caption: () => {
            let elemento = document.createElement('caption');
            return elemento;
          },

          col: () => {
            let elemento = document.createElement('col');
            return elemento;
          },

          colgroup: () => {
            let elemento = document.createElement('colgroup');
            return elemento;
          },

          table: () => {
            let elemento = document.createElement('table');
            return elemento;
          },

          tbody: () => {
            let elemento = document.createElement('tbody');
            return elemento;
          },

          td: () => {
            let elemento = document.createElement('td');
            return elemento;
          },

          tfoot: () => {
            let elemento = document.createElement('tfoot');
            return elemento;
          },

          th: () => {
            let elemento = document.createElement('th');
            return elemento;
          },

          thead: () => {
            let elemento = document.createElement('thead');
            return elemento;
          },

          tr: () => {
            let elemento = document.createElement('tr');
            return elemento;
          },

          button: () => {
            let elemento = document.createElement('button');
            return elemento;
          },

          datalist: () => {
            let elemento = document.createElement('datalist');
            return elemento;
          },

          fieldset: () => {
            let elemento = document.createElement('fieldset');
            return elemento;
          },

          form: () => {
            let elemento = document.createElement('form');
            return elemento;
          },

          input: () => {
            let elemento = document.createElement('input');
            return elemento;
          },

          label: () => {
            let elemento = document.createElement('label');
            return elemento;
          },

          legend: () => {
            let elemento = document.createElement('legend');
            return elemento;
          },

          meter: () => {
            let elemento = document.createElement('meter');
            return elemento;
          },

          optgroup: () => {
            let elemento = document.createElement('ortgroup');
            return elemento;
          },

          option: () => {
            let elemento = document.createElement('option');
            return elemento;
          },

          output: () => {
            let elemento = document.createElement('output');
            return elemento;
          },

          progress: () => {
            let elemento = document.createElement('progress');
            return elemento;
          },

          select: () => {
            let elemento = document.createElement('select');
            return elemento;
          },

          textarea: () => {
            let elemento = document.createElement('textarea');
            return elemento;
          },

          details: () => {
            let elemento = document.createElement('details');
            return elemento;
          },

          dialog: () => {
            let elemento = document.createElement('dialog');
            return elemento;
          },

          menu: () => {
            let elemento = document.createElement('menu');
            return elemento;
          },

          summary: () => {
            let elemento = document.createElement('summary');
            return elemento;
          },

          content: () => {
            let elemento = document.createElement('content');
            return elemento;
          },

          shadow: () => {
            let elemento = document.createElement('shadow');
            return elemento;
          },

          slot: () => {
            let elemento = document.createElement('slot');
            return elemento;
          },

          template: () => {
            let elemento = document.createElement('template');
            return elemento;
          },

          acronym: () => {
            let elemento = document.createElement('acronym');
            return elemento;
          },

          applet: () => {
            let elemento = document.createElement('applet');
            return elemento;
          },

          basefont: () => {
            let elemento = document.createElement('basefont');
            return elemento;
          },

          bgsound: () => {
            let elemento = document.createElement('bgsound');
            return elemento;
          },

          big: () => {
            let elemento = document.createElement('big');
            return elemento;
          },

          blink: () => {
            let elemento = document.createElement('blink');
            return elemento;
          },

          center: () => {
            let elemento = document.createElement('center');
            return elemento;
          },

          dir: () => {
            let elemento = document.createElement('dir');
            return elemento;
          },

          font: () => {
            let elemento = document.createElement('font');
            return elemento;
          },

          frame: () => {
            let elemento = document.createElement('frame');
            return elemento;
          },

          frameset: () => {
            let elemento = document.createElement('frameset');
            return elemento;
          },

          hgroup: () => {
            let elemento = document.createElement('hgroup');
            return elemento;
          },

          image: () => {
            let elemento = document.createElement('image');
            return elemento;
          },

          keygen: () => {
            let elemento = document.createElement('keygen');
            return elemento;
          },

          marquee: () => {
            let elemento = document.createElement('marquee');
            return elemento;
          },

          menuitem: () => {
            let elemento = document.createElement('menuitem');
            return elemento;
          },

          nobr: () => {
            let elemento = document.createElement('nobr');
            return elemento;
          },

          noembed: () => {
            let elemento = document.createElement('noembed');
            return elemento;
          },

          noframes: () => {
            let elemento = document.createElement('noframes');
            return elemento;
          },

          plaintext: () => {
            let elemento = document.createElement('plaintext');
            return elemento;
          },

          rb: () => {
            let elemento = document.createElement('rb');
            return elemento;
          },

          rtc: () => {
            let elemento = document.createElement('rtc');
            return elemento;
          },

          spacer: () => {
            let elemento = document.createElement('spacer');
            return elemento;
          },

          strike: () => {
            let elemento = document.createElement('strike');
            return elemento;
          },

          tt: () => {
            let elemento = document.createElement('tt');
            return elemento;
          },

          xmp: () => {
            let elemento = document.createElement('xmp');
            return elemento;
          },

        },


      }

    }

  }

}
