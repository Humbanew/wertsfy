let wertsfy = {

  sections: {

    nextGenApisSection: {

      rcalcApplication: {

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
            
            let res = [x1, x2]; 
            
            return res; 
          },

          terceiroGrau: (a = 0, b = 0, c = 0) => { 
            let res = 0; 
            
            let delta = (b ** 2) - (4 * a * c); 
            
            let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
            
            let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
            
            let res = [x1, x2, 0]; 
            
            return res; 
          },

          quartoGrau: (a = 0, b = 0, c = 0) => { 
            let res = 0; 
            
            let delta = (b ** 2) - (4 * a * c); 
            
            let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
            
            let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
            
            let res = [x1, -1 * x1, x2, -1 * x2]; 
            
            return res; 
          },

          quintoGrau: (a = 0, b = 0, c = 0) => { 
            let res = 0, delta = (b ** 2) - (4 * a * c); 
            
            let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
            
            let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a); 
            
            let res = [x1, -1 * x1, x2, -1 * x2, 0]; 
            
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

          //n areaPoligonoDe5Lados: (comp = 0, larg = 0) => { return comp == larg ? 5 * ((comp * comp * Math.sqrt(3)) / 4) : 5 * (comp * larg / 2); },
          areaDeUmPoligonoQualquer: () => { },

          areaDeUmTrapezioQualquer: (ladoMenor = 0, ladoMaior = 0, altura = 0) => { 
            return ((ladoMaior + ladoMenor) * altura) / 2; 
          },

          areaDeUmParalelogramoQualquer: (lado = 0, altura = 0) => { 
            return lado * altura; 
          },

          areaDeUmLosangoQualquer: (diagonalMaior = 0, diagonalMenor = 0) => { 
            return (diagonalMaior * diagonalMenor) / 2; 
          },

          //n areaLateralDeUmPrismaDe3LadosQualquer: (comp = 0, larg = 0) => { return 3 * (comp * larg); },
          areaLateralDeUmPrismaQualquer: () => { }

        }

      }

    },

    webConstructorSection: {

      lydrocApplication: {

        functions: {

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

        attrs: class Attributes {

          constructor(element=HTMLElement, enabledAttrs=[{attrName: "", attrArgument=""}]) {

            this.element = element;
            this.enabledAttrs = enabledAttrs;

          }

          //w Código Base: (elemento=HTMLElement, acceptArgument="") => { elemento.accept = acceptArgument; },
          accept(acceptArgument="") { this.element.accept = acceptArgument; }
          
          //w Código Base: (elemento=HTMLElement, acceptCharsetArgument="") => { elemento.acceptCharset = acceptCharsetArgument; },
          acceptCharset(acceptCharsetArgument="") { this.element.acceptCharset = acceptCharsetArgument; }
          
          //w Código Base: (elemento=HTMLElement, accessKeyArgument="") => { elemento.accessKey = accessKeyArgument; },
          accessKey(accessKeyArgument="") { this.element.accessKey = accessKeyArgument; }
          
          //w Código Base: (elemento=HTMLElement, actionArgument="") => { elemento.action = actionArgument; },
          action(actionArgument="") { this.element.action = actionArgument; }
          
          //w Código Base: (elemento=HTMLElement, alignArgument="") => { elemento.align = alignArgument; },
          align(alignArgument="") { this.element.align = alignArgument; }
          
          //w Código Base: (elemento=HTMLElement, allowArgument="") => { elemento.allow = allowArgument; },
          allow(allowArgument="") { this.element.allow = allowArgument; }
          
          //w Código Base: (elemento=HTMLElement, altArgument="") => { elemento.alt = altArgument; },
          alt(altArgument="") { this.element.alt = altArgument; }
          
          //w Código Base: (elemento=HTMLElement, asyncArgument="") => { elemento.async = asyncArgument; },
          async(asyncArgument="") { this.element.async = asyncArgument; }
          
          //w Código Base: (elemento=HTMLElement, autocaptalizeArgument="") => { elemento.autocaptalize = autocaptalizeArgument; },
          autocaptalize(autocaptalizeArgument="") { this.element.autocaptalize = autocaptalizeArgument; }
          
          //w Código Base: (elemento=HTMLElement, autocompleteArgument="") => { elemento.autocomplete = autocompleteArgument; },
          autocomplete(autocompleteArgument="") { this.element.autocomplete = autocompleteArgument; }
          
          //w Código Base: (elemento=HTMLElement, autofocusArgument="") => { elemento.autofocus = autofocusArgument; },
          autofocus(autofocusArgument="") { this.element.autofocus = autofocusArgument; }
          
          //w Código Base: (elemento=HTMLElement, autoplayArgument="") => { elemento.autoplay = autoplayArgument; },
          autoplay(autoplayArgument="") { this.element.autoplay = autoplayArgument; }
          
          //w Código Base: (elemento=HTMLElement, bgcolorArgument="") => { elemento.bgcolor = bgcolorArgument; },
          bgcolor(bgcolorArgument="") { this.element.bgcolor = bgcolorArgument; }
          
          //w Código Base: (elemento=HTMLElement, borderArgument="") => { elemento.border = borderArgument; },
          border(borderArgument="") { this.element.border = borderArgument; }
          
          //w Código Base: (elemento=HTMLElement, bufferedArgument="") => { elemento.buffered = bufferedArgument; },
          buffered(bufferedArgument="") { this.element.buffered = bufferedArgument; }
          
          //w Código Base: (elemento=HTMLElement, challengeArgument="") => { elemento.challenge = challengeArgument; },
          challenge(challengeArgument="") { this.element.challenge = challengeArgument; }
          
          //w Código Base: (elemento=HTMLElement, charsetArgument="") => { elemento.charset = charsetArgument; },
          charset(charsetArgument="") { this.element.charset = charsetArgument; }
          
          //w Código Base: (elemento=HTMLElement, checkedArgument="") => { elemento.checked = checkedArgument; },
          checked(checkedArgument="") { this.element.checked = checkedArgument; }
          
          //w Código Base: (elemento=HTMLElement, citeArgument="") => { elemento.cite = citeArgument; },
          cite(citeArgument="") { this.element.cite = citeArgument; }
          
          //w Código Base: (elemento=HTMLElement, classArgument="") => { elemento.class = classArgument; },
          class(classArgument="") { this.element.class = classArgument; }
          
          //w Código Base: (elemento=HTMLElement, codeArgument="") => { elemento.code = codeArgument; },
          code(codeArgument="") { this.element.code = codeArgument; }
          
          //w Código Base: (elemento=HTMLElement, codebaseArgument="") => { elemento.codebase = codebaseArgument; },
          codebase(codebaseArgument="") { this.element.codebase = codebaseArgument; }
          
          //w Código Base: (elemento=HTMLElement, colorArgument="") => { elemento.color = colorArgument; },
          color(colorArgument="") { this.element.color = colorArgument; }
          
          //w Código Base: (elemento=HTMLElement, colsArgument="") => { elemento.cols = colsArgument; },
          cols(colsArgument="") { this.element.cols = colsArgument; }
          
          //w Código Base: (elemento=HTMLElement, colspanArgument="") => { elemento.colspan = colspanArgument; },
          colspan(colspanArgument="") { this.element.colspan = colspanArgument; }
          
          //w Código Base: (elemento=HTMLElement, contentArgument="") => { elemento.content = contentArgument; },
          content(contentArgument="") { this.element.content = contentArgument; }
          
          //w Código Base: (elemento=HTMLElement, contenteditableArgument="") => { elemento.contenteditable = contenteditableArgument; },
          contenteditable(contenteditableArgument="") { this.element.contenteditable = contenteditableArgument; }
          
          //w Código Base: (elemento=HTMLElement, contextmenuArgument="") => { elemento.contextmenu = contextmenuArgument; },
          contextmenu(contextmenuArgument="") { this.element.contextmenu = contextmenuArgument; }
          
          //w Código Base: (elemento=HTMLElement, controlsArgument="") => { elemento.controls = controlsArgument; },
          controls(controlsArgument="") { this.element.controls = controlsArgument; }
          
          //w Código Base: (elemento=HTMLElement, coordsArgument="") => { elemento.coords = coordsArgument; },
          coords(coordsArgument="") { this.element.coords = coordsArgument; }
          
          //w Código Base: (elemento=HTMLElement, crossoriginArgument="") => { elemento.crossorigin = crossoriginArgument; },
          crossorigin(crossoriginArgument="") { this.element.crossorigin = crossoriginArgument; }
          
          //w Código Base: (elemento=HTMLElement, capArgument="") => { elemento.cap = capArgument; },
          cap(capArgument="") { this.element.cap = capArgument; }
          
          //w Código Base: (elemento=HTMLElement, dataArgument="") => { elemento.data = dataArgument; },
          data(dataArgument="") { this.element.data = dataArgument; }
          
          //w Código Base: (elemento=HTMLElement, datetimeArgument="") => { elemento.datetime = datetimeArgument; },
          datetime(datetimeArgument="") { this.element.datetime = datetimeArgument; }
          
          //w Código Base: (elemento=HTMLElement, decodingArgument="") => { elemento.decoding = decodingArgument; },
          decoding(decodingArgument="") { this.element.decoding = decodingArgument; }
          
          //w Código Base: (elemento=HTMLElement, defaultArgument="") => { elemento.default = defaultArgument; },
          default(defaultArgument="") { this.element.default = defaultArgument; }
          
          //w Código Base: (elemento=HTMLElement, deferArgument="") => { elemento.defer = deferArgument; },
          defer(deferArgument="") { this.element.defer = deferArgument; }
          
          //w Código Base: (elemento=HTMLElement, dirArgument="") => { elemento.dir = dirArgument; },
          dir(dirArgument="") { this.element.dir = dirArgument; }
          
          //w Código Base: (elemento=HTMLElement, dirnameArgument="") => { elemento.dirname = dirnameArgument; },
          dirname(dirnameArgument="") { this.element.dirname = dirnameArgument; }
          
          //w Código Base: (elemento=HTMLElement, disabledArgument="") => { elemento.disabled = disabledArgument; },
          disabled(disabledArgument="") { this.element.disabled = disabledArgument; }
          
          //w Código Base: (elemento=HTMLElement, downloadArgument="") => { elemento.download = downloadArgument; },
          download(downloadArgument="") { this.element.download = downloadArgument; }
          
          //w Código Base: (elemento=HTMLElement, draggableArgument="") => { elemento.draggable = draggableArgument; },
          draggable(draggableArgument="") { this.element.draggable = draggableArgument; }
          
          //w Código Base: (elemento=HTMLElement, enctypeArgument="") => { elemento.enctype = enctypeArgument; },
          enctype(enctypeArgument="") { this.element.enctype = enctypeArgument; }
          
          //w Código Base: (elemento=HTMLElement, enterkeyhintArgument="") => { elemento.enterkeyhint = enterkeyhintArgument; },
          enterkeyhint(enterkeyhintArgument="") { this.element.enterkeyhint = enterkeyhintArgument; }
          
          //w Código Base: (elemento=HTMLElement, forArgument="") => { elemento.for = forArgument; },
          for(forArgument="") { this.element.for = forArgument; }
          
          //w Código Base: (elemento=HTMLElement, formArgument="") => { elemento.form = formArgument; },
          form(formArgument="") { this.element.form = formArgument; }
          
          //w Código Base: (elemento=HTMLElement, formactionArgument="") => { elemento.formaction = formactionArgument; },
          formaction(formactionArgument="") { this.element.formaction = formactionArgument; }
          
          //w Código Base: (elemento=HTMLElement, formenctypeArgument="") => { elemento.formenctype = formenctypeArgument; },
          formenctype(formenctypeArgument="") { this.element.formenctype = formenctypeArgument; }
          
          //w Código Base: (elemento=HTMLElement, formmethodArgument="") => { elemento.formmethod = formmethodArgument; },
          formmethod(formmethodArgument="") { this.element.formmethod = formmethodArgument; }
          
          //w Código Base: (elemento=HTMLElement, formnovalidateArgument="") => { elemento.formnovalidate = formnovalidateArgument; },
          formnovalidate(formnovalidateArgument="") { this.element.formnovalidate = formnovalidateArgument; }
          
          //w Código Base: (elemento=HTMLElement, formtargetArgument="") => { elemento.formtarget = formtargetArgument; },
          formtarget(formtargetArgument="") { this.element.formtarget = formtargetArgument; }
          
          //w Código Base: (elemento=HTMLElement, headersArgument="") => { elemento.headers = headersArgument; },
          headers(headersArgument="") { this.element.headers = headersArgument; }
          
          //w Código Base: (elemento=HTMLElement, heightArgument="") => { elemento.height = heightArgument; },
          height(heightArgument="") { this.element.height = heightArgument; }
          
          //w Código Base: (elemento=HTMLElement, hiddenArgument="") => { elemento.hidden = hiddenArgument; },
          hidden(hiddenArgument="") { this.element.hidden = hiddenArgument; }
          
          //w Código Base: (elemento=HTMLElement, highArgument="") => { elemento.high = highArgument; },
          high(highArgument="") { this.element.high = highArgument; }
          
          //w Código Base: (elemento=HTMLElement, hrefArgument="") => { elemento.href = hrefArgument; },
          href(hrefArgument="") { this.element.href = hrefArgument; }
          
          //w Código Base: (elemento=HTMLElement, hreflangArgument="") => { elemento.hreflang = hreflangArgument; },
          hreflang(hreflangArgument="") { this.element.hreflang = hreflangArgument; }
          
          //w Código Base: (elemento=HTMLElement, httpEquivArgument="") => { elemento.httpEquiv = httpEquivArgument; },
          httpEquiv(httpEquivArgument="") { this.element.httpEquiv = httpEquivArgument; }
          
          //w Código Base: (elemento=HTMLElement, iconArgument="") => { elemento.icon = iconArgument; },
          icon(iconArgument="") { this.element.icon = iconArgument; }
          
          //w Código Base: (elemento=HTMLElement, idArgument="") => { elemento.id = idArgument; },
          id(idArgument="") { this.element.id = idArgument; }
          
          //w Código Base: (elemento=HTMLElement, importanceArgument="") => { elemento.importance = importanceArgument; },
          importance(importanceArgument="") { this.element.importance = importanceArgument; }
          
          //w Código Base: (elemento=HTMLElement, integrityArgument="") => { elemento.integrity = integrityArgument; },
          integrity(integrityArgument="") { this.element.integrity = integrityArgument; }
          
          //w Código Base: (elemento=HTMLElement, intrinsicsizeArgument="") => { elemento.intrinsicsize = intrinsicsizeArgument; },
          intrinsicsize(intrinsicsizeArgument="") { this.element.intrinsicsize = intrinsicsizeArgument; }
          
          //w Código Base: (elemento=HTMLElement, inputmodeArgument="") => { elemento.inputmode = inputmodeArgument; },
          inputmode(inputmodeArgument="") { this.element.inputmode = inputmodeArgument; }
          
          //w Código Base: (elemento=HTMLElement, ismapArgument="") => { elemento.ismap = ismapArgument; },
          ismap(ismapArgument="") { this.element.ismap = ismapArgument; }
          
          //w Código Base: (elemento=HTMLElement, itempropArgument="") => { elemento.itemprop = itempropArgument; },
          itemprop(itempropArgument="") { this.element.itemprop = itempropArgument; }
          
          //w Código Base: (elemento=HTMLElement, keytypeArgument="") => { elemento.keytype = keytypeArgument; },
          keytype(keytypeArgument="") { this.element.keytype = keytypeArgument; }
          
          //w Código Base: (elemento=HTMLElement, kindArgument="") => { elemento.kind = kindArgument; },
          kind(kindArgument="") { this.element.kind = kindArgument; }
          
          //w Código Base: (elemento=HTMLElement, labelArgument="") => { elemento.label = labelArgument; },
          label(labelArgument="") { this.element.label = labelArgument; }
          
          //w Código Base: (elemento=HTMLElement, langArgument="") => { elemento.lang = langArgument; },
          lang(langArgument="") { this.element.lang = langArgument; }
          
          //w Código Base: (elemento=HTMLElement, languageArgument="") => { elemento.language = languageArgument; },
          language(languageArgument="") { this.element.language = languageArgument; }
          
          //w Código Base: (elemento=HTMLElement, listArgument="") => { elemento.list = listArgument; },
          list(listArgument="") { this.element.list = listArgument; }
          
          //w Código Base: (elemento=HTMLElement, loopArgument="") => { elemento.loop = loopArgument; },
          loop(loopArgument="") { this.element.loop = loopArgument; }
          
          //w Código Base: (elemento=HTMLElement, lowArgument="") => { elemento.low = lowArgument; },
          low(lowArgument="") { this.element.low = lowArgument; }
          
          //w Código Base: (elemento=HTMLElement, manifestArgument="") => { elemento.manifest = manifestArgument; },
          manifest(manifestArgument="") { this.element.manifest = manifestArgument; }
          
          //w Código Base: (elemento=HTMLElement, maxArgument="") => { elemento.max = maxArgument; },
          max(maxArgument="") { this.element.max = maxArgument; }
          
          //w Código Base: (elemento=HTMLElement, maxlengthArgument="") => { elemento.maxlength = maxlengthArgument; },
          maxlength(maxlengthArgument="") { this.element.maxlength = maxlengthArgument; }
          
          //w Código Base: (elemento=HTMLElement, minlengthArgument="") => { elemento.minlength = minlengthArgument; },
          minlength(minlengthArgument="") { this.element.minlength = minlengthArgument; }
          
          //w Código Base: (elemento=HTMLElement, mediaArgument="") => { elemento.media = mediaArgument; },
          media(mediaArgument="") { this.element.media = mediaArgument; }
          
          //w Código Base: (elemento=HTMLElement, methodArgument="") => { elemento.method = methodArgument; },
          method(methodArgument="") { this.element.method = methodArgument; }
          
          //w Código Base: (elemento=HTMLElement, minArgument="") => { elemento.min = minArgument; },
          min(minArgument="") { this.element.min = minArgument; }
          
          //w Código Base: (elemento=HTMLElement, multipleArgument="") => { elemento.multiple = multipleArgument; },
          multiple(multipleArgument="") { this.element.multiple = multipleArgument; }
          
          //w Código Base: (elemento=HTMLElement, mutedArgument="") => { elemento.muted = mutedArgument; },
          muted(mutedArgument="") { this.element.muted = mutedArgument; }
          
          //w Código Base: (elemento=HTMLElement, nameArgument="") => { elemento.name = nameArgument; },
          name(nameArgument="") { this.element.name = nameArgument; }
          
          //w Código Base: (elemento=HTMLElement, novalidateArgument="") => { elemento.novalidate = novalidateArgument; },
          novalidate(novalidateArgument="") { this.element.novalidate = novalidateArgument; }
          
          //w Código Base: (elemento=HTMLElement, openArgument="") => { elemento.open = openArgument; },
          open(openArgument="") { this.element.open = openArgument; }
          
          //w Código Base: (elemento=HTMLElement, optimumArgument="") => { elemento.optimum = optimumArgument; },
          optimum(optimumArgument="") { this.element.optimum = optimumArgument; }
          
          //w Código Base: (elemento=HTMLElement, patternArgument="") => { elemento.pattern = patternArgument; },
          pattern(patternArgument="") { this.element.pattern = patternArgument; }
          
          //w Código Base: (elemento=HTMLElement, pingArgument="") => { elemento.ping = pingArgument; },
          ping(pingArgument="") { this.element.ping = pingArgument; }
          
          //w Código Base: (elemento=HTMLElement, placeholderArgument="") => { elemento.placeholder = placeholderArgument; },
          placeholder(placeholderArgument="") { this.element.placeholder = placeholderArgument; }
          
          //w Código Base: (elemento=HTMLElement, posterArgument="") => { elemento.poster = posterArgument; },
          poster(posterArgument="") { this.element.poster = posterArgument; }
          
          //w Código Base: (elemento=HTMLElement, preloadArgument="") => { elemento.preload = preloadArgument; },
          preload(preloadArgument="") { this.element.preload = preloadArgument; }
          
          //w Código Base: (elemento=HTMLElement, radiogroupArgument="") => { elemento.radiogroup = radiogroupArgument; },
          radiogroup(radiogroupArgument="") { this.element.radiogroup = radiogroupArgument; }
          
          //w Código Base: (elemento=HTMLElement, readonlyArgument="") => { elemento.readonly = readonlyArgument; },
          readonly(readonlyArgument="") { this.element.readonly = readonlyArgument; }
          
          //w Código Base: (elemento=HTMLElement, relArgument="") => { elemento.rel = relArgument; },
          rel(relArgument="") { this.element.rel = relArgument; }
          
          //w Código Base: (elemento=HTMLElement, requiredArgument="") => { elemento.required = requiredArgument; },
          required(requiredArgument="") { this.element.required = requiredArgument; }
          
          //w Código Base: (elemento=HTMLElement, reversedArgument="") => { elemento.reversed = reversedArgument; },
          reversed(reversedArgument="") { this.element.reversed = reversedArgument; }
          
          //w Código Base: (elemento=HTMLElement, rowsArgument="") => { elemento.rows = rowsArgument; },
          rows(rowsArgument="") { this.element.rows = rowsArgument; }
          
          //w Código Base: (elemento=HTMLElement, rowspanArgument="") => { elemento.rowspan = rowspanArgument; },
          rowspan(rowspanArgument="") { this.element.rowspan = rowspanArgument; }
          
          //w Código Base: (elemento=HTMLElement, sandboxArgument="") => { elemento.sandbox = sandboxArgument; },
          sandbox(sandboxArgument="") { this.element.sandbox = sandboxArgument; }
          
          //w Código Base: (elemento=HTMLElement, scopeArgument="") => { elemento.scope = scopeArgument; },
          scope(scopeArgument="") { this.element.scope = scopeArgument; }
          
          //w Código Base: (elemento=HTMLElement, scopedArgument="") => { elemento.scoped = scopedArgument; },
          scoped(scopedArgument="") { this.element.scoped = scopedArgument; }
          
          //w Código Base: (elemento=HTMLElement, selectedArgument="") => { elemento.selected = selectedArgument; },
          selected(selectedArgument="") { this.element.selected = selectedArgument; }
          
          //w Código Base: (elemento=HTMLElement, shapeArgument="") => { elemento.shape = shapeArgument; },
          shape(shapeArgument="") { this.element.shape = shapeArgument; }
          
          //w Código Base: (elemento=HTMLElement, sizeArgument="") => { elemento.size = sizeArgument; },
          size(sizeArgument="") { this.element.size = sizeArgument; }
          
          //w Código Base: (elemento=HTMLElement, sizesArgument="") => { elemento.sizes = sizesArgument; },
          sizes(sizesArgument="") { this.element.sizes = sizesArgument; }
          
          //w Código Base: (elemento=HTMLElement, slotArgument="") => { elemento.slot = slotArgument; },
          slot(slotArgument="") { this.element.slot = slotArgument; }
          
          //w Código Base: (elemento=HTMLElement, spanArgument="") => { elemento.span = spanArgument; },
          span(spanArgument="") { this.element.span = spanArgument; }
          
          //w Código Base: (elemento=HTMLElement, spellcheckArgument="") => { elemento.spellcheck = spellcheckArgument; },
          spellcheck(spellcheckArgument="") { this.element.spellcheck = spellcheckArgument; }
          
          //w Código Base: (elemento=HTMLElement, srcArgument="") => { elemento.src = srcArgument; },
          src(srcArgument="") { this.element.src = srcArgument; }
          
          //w Código Base: (elemento=HTMLElement, srcdocArgument="") => { elemento.srcdoc = srcdocArgument; },
          srcdoc(srcdocArgument="") { this.element.srcdoc = srcdocArgument; }
          
          //w Código Base: (elemento=HTMLElement, srclangArgument="") => { elemento.srclang = srclangArgument; },
          srclang(srclangArgument="") { this.element.srclang = srclangArgument; }
          
          //w Código Base: (elemento=HTMLElement, srcsetArgument="") => { elemento.srcset = srcsetArgument; },
          srcset(srcsetArgument="") { this.element.srcset = srcsetArgument; }
          
          //w Código Base: (elemento=HTMLElement, startArgument="") => { elemento.start = startArgument; },
          start(startArgument="") { this.element.start = startArgument; }
          
          //w Código Base: (elemento=HTMLElement, stepArgument="") => { elemento.step = stepArgument; },
          step(stepArgument="") { this.element.step = stepArgument; }
          
          //w Código Base: (elemento=HTMLElement, styleArgument="") => { elemento.style = styleArgument; },
          style(styleArgument="") { this.element.style = styleArgument; }
          
          //w Código Base: (elemento=HTMLElement, summaryArgument="") => { elemento.summary = summaryArgument; },
          summary(summaryArgument="") { this.element.summary = summaryArgument; }
          
          //w Código Base: (elemento=HTMLElement, tabindexArgument="") => { elemento.tabindex = tabindexArgument; },
          tabindex(tabindexArgument="") { this.element.tabindex = tabindexArgument; }
          
          //w Código Base: (elemento=HTMLElement, targetArgument="") => { elemento.target = targetArgument; },
          target(targetArgument="") { this.element.target = targetArgument; }
          
          //w Código Base: (elemento=HTMLElement, titleArgument="") => { elemento.title = titleArgument; },
          title(titleArgument="") { this.element.title = titleArgument; }
          
          //w Código Base: (elemento=HTMLElement, translateArgument="") => { elemento.translate = translateArgument; },
          translate(translateArgument="") { this.element.translate = translateArgument; }
          
          //w Código Base: (elemento=HTMLElement, typeArgument="") => { elemento.type = typeArgument; },
          type(typeArgument="") { this.element.type = typeArgument; }
          
          //w Código Base: (elemento=HTMLElement, usemapArgument="") => { elemento.usemap = usemapArgument; },
          usemap(usemapArgument="") { this.element.usemap = usemapArgument; }
          
          //w Código Base: (elemento=HTMLElement, valueArgument="") => { elemento.value = valueArgument; },
          value(valueArgument="") { this.element.value = valueArgument; }
          
          //w Código Base: (elemento=HTMLElement, widthArgument="") => { elemento.width = widthArgument; },
          width(widthArgument="") { this.element.width = widthArgument; }
          
          //w Código Base: (elemento=HTMLElement, wrapArgument="") => { elemento.wrap = wrapArgument; }
          wrap(wrapArgument="") { this.element.wrap = wrapArgument; }
          
        }



      }

    }

  }

}


// //b Funções de Testes
// testes: {

//   //c Funções de Testes com Jasmine
//   jasmine: {

//     //d Gerando função Describe
//     describe: function() { },

//     //d Gerando função It
//     it: function() { },

//     //d Gerando função Expect
//     expect: {
//       function() { },

//       //e Gerando Tipos da função Expect
//       tipos: {

//         //f Gerando Tipo Nothing
//         nothing: function() { },

//         //f Gerando Tipo ToBeNotTo
//         toBeNotTo: function() { },

//         //f Gerando Tipo ToBeDefined
//         toBeDefined: function() { },

//         //f Gerando Tipo ToBeInstanceOf
//         toBeInstanceOf: function() { },

//         //f Gerando Tipo ToBeFalse
//         toBeFalse: function() { },

//         //f Gerando Tipo ToBeFalsy
//         toBeFalsy: function() { },

//         //f Gerando Tipo ToBeGreaterThan
//         toBeGreaterThan: function() { },

//         //f Gerando Tipo ToBeGreaterThanOrEqual
//         toBeGreaterThanOrEqual: function() { },

//         //f Gerando Tipo ToBeLessThan
//         toBeLessThan: function() { },

//         //f Gerando Tipo ToBeLessThanOrEqual
//         toBeLessThanOrEqual: function() { },

//         //f Gerando Tipo ToBeNaN
//         toBeNaN: function() { },

//         //f Gerando Tipo ToBeNegativeInfinity
//         toBeNegativeInfinity: function() { },

//         //f Gerando Tipo ToBeNull
//         toBeNull: function() { },

//         //f Gerando Tipo ToBePositiveInfinity
//         toBePositiveInfinity: function() { },

//         //f Gerando Tipo ToBeTrue
//         toBeTrue: function() { },

//         //f Gerando Tipo ToBeTruthy
//         toBeTruthy: function() { },

//         //f Gerando Tipo ToBeUndefined
//         toBeUndefined: function() { },

//         //f Gerando Tipo ToContain
//         toContain: function() { },

//         //f Gerando Tipo ToHaveSize
//         toHaveSize: function() { },

//         //f Gerando Tipo ToHaveBeenCalled
//         toHaveBeenCalled: function() { },

//         //f Gerando Tipo ToHaveBeenCalledBefore
//         toHaveBeenCalledBefore: function() { },

//         //f Gerando Tipo ToHaveBeenCalledOnceWith
//         toHaveBeenCalledOnceWith: function() { },

//         //f Gerando Tipo ToHaveBeenCalledTimes
//         toHaveBeenCalledTimes: function() { },

//         //f Gerando Tipo ToHaveBeenCalledWith
//         toHaveBeenCalledWith: function() { },

//         //f Gerando Tipo ToHaveClass
//         toHaveClass: function() { },

//         //f Gerando Tipo ToMatch
//         toMatch: function() { },

//         //f Gerando Tipo Throw
//         throw: function() { },

//         //f Gerando Tipo ThrowError
//         throwError: function() { },

//         //f Gerando Tipo ThrowMatching
//         throwMatching: function() { },

//         //f Gerando Tipo ToBe
//         toBe: function() { },

//         //f Gerando Tipo ToEqual
//         toEqual: function() { },

//         //f Gerando Tipo Not
//         not: function() { },
//       }

//     },

//     //d Gerando função Pending
//     pending: function() { },

//   },

//   //c Funções de Testes com Jest
//   jest: {

//     //d Gerando função Describe
//     describe: function() { },

//     //d Gerando função It
//     it: function() { },

//     //d Gerando função Expect
//     expect: {
//       function() { },

//       //e Gerando Tipos da função Expect
//       tipos: {

//         //f Gerando Tipo ToBe
//         toBe: function() { },

//         //f Gerando Tipo ToEqual
//         toEqual: function() { },

//         //f Gerando Tipo ToBeNull
//         toBeNull: function() { },

//         //f Gerando Tipo ToBeDefined
//         toBeDefined: function() { },

//         //f Gerando Tipo ToBeUndefined
//         toBeUndefined: function() { },

//         //f Gerando Tipo ToBeTruthy
//         toBeTruthy: function() { },

//         //f Gerando Tipo ToBeFalsy
//         toBeFalsy: function() { },

//         //f Gerando Tipo ToBeGreaterThan
//         toBeGreaterThan: function() { },

//         //f Gerando Tipo ToBeGreaterThanOrEqual
//         toBeGreaterThanOrEqual: function() { },

//         //f Gerando Tipo ToBeLessThan
//         toBeLessThan: function() { },

//         //f Gerando Tipo ToBeLessThanOrEqual
//         toBeLessThanOrEqual: function() { },

//         //f Gerando Tipo ToMatch
//         toMatch: function() { },

//         //f Gerando Tipo ToContain
//         toContain: function() { },

//         //f Gerando Tipo ToThrow
//         toThrow: function() { },

//         //f Gerando Tipo Extend
//         extend: function() { },

//         //f Gerando Tipo Anything
//         anything: function() { },

//         //f Gerando Tipo Any
//         any: function() { },

//         //f Gerando Tipo ArrayContaining
//         arrayContaining: function() { },

//         //f Gerando Tipo Assertions
//         assertions: function() { },

//         //f Gerando Tipo HasAssertions
//         hasAssertions: function() { },

//         //f Gerando Tipo ObjectContaining
//         objectContaning: function() { },

//         //f Gerando Tipo StringContaining
//         stringContaining: function() { },

//         //f Gerando Tipo StringMatching
//         stringMatching: function() { },

//         //f Gerando Tipo AddSnapshotSerializer
//         addSnapshotSerializer: function() { },

//         //f Gerando Tipo ToHaveBeenCalled
//         toHaveBeenCalled: function() { },

//         //f Gerando Tipo ToHaveBeenCalledTimes
//         toHaveBeenCalledTimes: function() { },

//         //f Gerando Tipo ToHaveBeenCalledWith
//         toHaveBeenCalledWith: function() { },

//         //f Gerando Tipo ToHaveBeenLastCalledWith
//         toHaveBeenLastCalledWith: function() { },

//         //f Gerando Tipo ToHaveBeenNthCalledWith
//         toHaveBeenNthCalledWith: function() { },

//         //f Gerando Tipo ToHaveReturned
//         toHaveReturned: function() { },

//         //f Gerando Tipo ToHaveReturnedTimes
//         toHaveReturnedTimes: function() { },

//         //f Gerando Tipo ToHaveReturnedWith
//         toHaveReturnedWith: function() { },

//         //f Gerando Tipo ToHaveLastReturnedWith
//         toHaveLastReturnedWith: function() { },

//         //f Gerando Tipo ToHaveNthReturnedWith
//         toHaveNthReturnedWith: function() { },

//         //f Gerando Tipo ToHaveLength
//         toHaveLength: function() { },

//         //f Gerando Tipo ToHaveProperty
//         toHaveProperty: function() { },

//         //f Gerando Tipo ToBeCloseTo
//         toBeCloseTo: function() { },

//         //f Gerando Tipo ToBeNaN
//         toBeNaN: function() { },

//         //f Gerando Tipo ToContainEqual
//         toContainEqual: function() { },

//         //f Gerando Tipo ToMatchObject
//         toMatchObject: function() { },

//         //f Gerando Tipo ToMatchSnapshot
//         toMatchSnapshot: function() { },

//         //f Gerando Tipo ToMatchInlineSnapshot
//         toMatchInlineSnapshot: function() { },

//         //f Gerando Tipo ToStrictEqual
//         toStrictEqual: function() { },

//         //f Gerando Tipo ToThrowErrorMatchingSnapshot
//         toThrowErrorMatchingSnapshot: function() { },

//         //f Gerando Tipo ToThrowErrorMatchingInlineSnapshot
//         toThrowErrorMatchingInlineSnapshot: function() { },

//         //f Gerando Tipo Not
//         not: function() { },

//         //f Gerando Tipo Rejects
//         rejects: function() { },

//         //f Gerando Tipo Resolves
//         resolves: function() { }

//       }

//     }

//   },

//   //c Funções de Testes com Mocha
//   mocha: {

//     //d Gerando função describe
//     describe: function() { },

//     //d Gerando função it
//     it: function() { },

//     //d Gerando estrutura complexical
//     complexical: {

//       //e Gerando função Expect
//       expect: function() { },

//       //e Gerando função Expected
//       expected: function() { },

//       //e Gerando função Satisfy
//       satisfy: function() { },

//       //e Gerando função Destroy
//       destroy: function() { },

//       //e Gerando função PromiseResolve
//       promiseResolve: function() { },

//       //e Gerando função Init
//       init: function() { },

//       //e Gerando função HookBefore
//       hookBefore: function() { },

//       //e Gerando função HookAfter
//       hookAfter: function() { },

//       //e Gerando função HookBeforeEach 
//       hookBeforeEach: function() { },

//       //e Gerando função HookAfterEach
//       hookAfterEach: function() { },

//       //e Gerando os tipos das funções acima
//       tipos: {

//         //f Gerando Tipo SetImmediate
//         setImmediate: function() { },

//         //f Gerando Tipo Save
//         save: function() { },

//         //f Gerando Tipo Done
//         done: function() { },

//         //f Gerando Tipo Find
//         find: function() { },

//         //f Gerando Tipo Clear
//         clear: function() { },

//         //f Gerando Tipo IndexOf
//         indexOf: function() { },

//         //f Gerando Tipo Equal
//         equal: function() { },

//         //f Gerando Tipo Ok
//         ok: function() { },

//         //f Gerando Tipo StrictEqual
//         strictEqual: function() { },

//         //f Gerando Tipo Only
//         only: function() { },

//         //f Gerando Tipo Skip
//         skip: function() { },

//         //f Gerando Tipo Retries
//         retries: function() { },

//         //f Gerando Tipo IsDisplayed
//         isDisplayed: function() { },

//         //f Gerando Tipo Reduce
//         reduce: function() { },

//         //f Gerando Tipo Timeout
//         timeout: function() { },

//         //f Gerando Tipo Setup
//         setup: function() { },

//         //f Gerando Tipo Test
//         test: function() { },

//         //f Gerando Tipo Suite
//         suite: function() { },

//         //f Gerando Tipo TestCase
//         testCase: function() { },

//         //f Gerando Tipo Assertions
//         assertions: function() { },

//         //f Gerando Tipo Exactly
//         exactly: function() { },

//         //f Gerando Tipo Should
//         should: function() { },

//         //f Gerando Tipo Have
//         have: function() { },

//         //f Gerando Tipo To
//         to: function() { },

//         //f Gerando Tipo Eventually
//         eventually: function() { },

//         //f Gerando Tipo True
//         true: function() { },

//         //f Gerando Tipo False
//         false: function() { },

//         //f Gerando Tipo And
//         and: function() { },

//         //f Gerando Tipo A
//         a: function() { },

//         //f Gerando Tipo Be
//         be: function() { },

//         //f Gerando Tipo Which
//         which: function() { },

//         //f Gerando Tipo Is
//         is: function() { },

//         //f Gerando Tipo An
//         an: function() { }

//       }

//     }

//   },

//   //c Funções de Testes com Cypress
//   cypress: {

//     //d Gerando estrutura complexical
//     complexical: {

//       //e Gerando função Except
//       except: function() { },

//       //e Gerando função Assert
//       assert: function() { },

//       //e Gerando tipos das funções acima
//       tipos: {

//         //f Gerando Tipos BDD das funções acima
//         BDD: {

//           //g Gerando Tipo Not
//           not: function() { },

//           //g Gerando Tipo Deep
//           deep: function() { },

//           //g Gerando Tipo Nested
//           nested: function() { },

//           //g Gerando Tipo Ordered
//           ordered: function() { },

//           //g Gerando Tipo Any
//           any: function() { },

//           //g Gerando Tipo All
//           all: function() { },

//           //g Gerando Tipo A
//           a: function() { },

//           //g Gerando Tipo Include
//           include: function() { },

//           //g Gerando Tipo Ok
//           ok: function() { },

//           //g Gerando Tipo True
//           true: function() { },

//           //g Gerando Tipo False
//           false: function() { },

//           //g Gerando Tipo Null
//           null: function() { },

//           //g Gerando Tipo Undefined
//           undefined: function() { },

//           //g Gerando Tipo Exist
//           exist: function() { },

//           //g Gerando Tipo Empty
//           empty: function() { },

//           //g Gerando Tipo Arguments
//           arguments: function() { },

//           //g Gerando Tipo Equal
//           equal: function() { },

//           //g Gerando Tipo DeepEqual
//           deepEqual: function() { },

//           //g Gerando Tipo Eql
//           eql: function() { },

//           //g Gerando Tipo GreaterThan
//           greaterThan: function() { },

//           //g Gerando Tipo Least
//           least: function() { },

//           //g Gerando Tipo LessThan
//           lessThan: function() { },

//           //g Gerando Tipo Most
//           most: function() { },

//           //g Gerando Tipo Within
//           within: function() { },

//           //g Gerando Tipo Instanceof
//           instanceOf: function() { },

//           //g Gerando Tipo Property
//           property: function() { },

//           //g Gerando Tipo DeepProperty
//           deepProperty: function() { },

//           //g Gerando Tipo OwnProperty
//           ownProperty: function() { },

//           //g Gerando Tipo OwnPropertyDiscriptor
//           ownPropertyDiscriptor: function() { },

//           //g Gerando Tipo LengthOf
//           lengthOf: function() { },

//           //g Gerando Tipo Match
//           match: function() { },

//           //g Gerando Tipo String
//           string: function() { },

//           //g Gerando Tipo Keys
//           keys: function() { },

//           //g Gerando Tipo Throw
//           throw: function() { },

//           //g Gerando Tipo RespondTo
//           respondTo: function() { },

//           //g Gerando Tipo ItSelf
//           itSelf: function() { },

//           //g Gerando Tipo Satisfy
//           satisfy: function() { },

//           //g Gerando Tipo CloseTo
//           closeTo: function() { },

//           //g Gerando Tipo Members
//           members: function() { },

//           //g Gerando Tipo OneOf
//           oneOf: function() { },

//           //g Gerando Tipo Change
//           change: function() { },

//           //g Gerando Tipo Increase
//           increase: function() { },

//           //g Gerando Tipo Decrease
//           decrease: function() { },

//           //g Gerando Tipo To
//           to: function() { },

//           //g Gerando Tipo Be
//           be: function() { },

//           //g Gerando Tipo Been
//           been: function() { },

//           //g Gerando Tipo Is
//           is: function() { },

//           //g Gerando Tipo That
//           that: function() { },

//           //g Gerando Tipo Which
//           which: function() { },

//           //g Gerando Tipo And
//           and: function() { },

//           //g Gerando Tipo Has
//           has: function() { },

//           //g Gerando Tipo Have
//           have: function() { },

//           //g Gerando Tipo With
//           with: function() { },

//           //g Gerando Tipo At
//           at: function() { },

//           //g Gerando Tipo Of
//           of: function() { },

//           //g Gerando Tipo Same
//           same: function() { }

//         },

//         //f Gerando Tipos TDD das funções acima
//         TDD: {

//           //g Gerando Tipo IsOk
//           isOk: function() { },

//           //g Gerando Tipo IsNotOk
//           isNotOk: function() { },

//           //g Gerando Tipo Equal
//           equal: function() { },

//           //g Gerando Tipo NotEqual
//           notEqual: function() { },

//           //g Gerando Tipo StrictEqual
//           strictEqual: function() { },

//           //g Gerando Tipo NotStrictEqual
//           notStrictEqual: function() { },

//           //g Gerando Tipo DeepEqual
//           deepEqual: function() { },

//           //g Gerando Tipo NotDeepEqual
//           notDeepEqual: function() { },

//           //g Gerando Tipo IsAbove
//           isAbove: function() { },

//           //g Gerando Tipo IsAsLeast
//           isAsLeast: function() { },

//           //g Gerando Tipo IsBelow
//           isBelow: function() { },

//           //g Gerando Tipo IsAtMost
//           isAtMost: function() { },

//           //g Gerando Tipo IsTrue
//           isTrue: function() { },

//           //g Gerando Tipo IsNotTrue
//           isNotTrue: function() { },

//           //g Gerando Tipo IsFalse
//           isFalse: function() { },

//           //g Gerando Tipo IsNotFalse
//           isNotFalse: function() { },

//           //g Gerando Tipo IsNull
//           isNull: function() { },

//           //g Gerando Tipo IsNotNull
//           isNotNull: function() { },

//           //g Gerando Tipo IsNaN
//           isNaN: function() { },

//           //g Gerando Tipo IsNotNaN
//           isNotNaN: function() { },

//           //g Gerando Tipo Exists
//           exists: function() { },

//           //g Gerando Tipo IsNotExists
//           isNotExists: function() { },

//           //g Gerando Tipo IsUndefined
//           isUndefined: function() { },

//           //g Gerando Tipo IsDefined
//           isDefined: function() { },

//           //g Gerando Tipo IsFunction
//           isFunction: function() { },

//           //g Gerando Tipo IsNotFunction
//           isNotFunction: function() { },

//           //g Gerando Tipo IsObject
//           isObject: function() { },

//           //g Gerando Tipo IsArray
//           isArray: function() { },

//           //g Gerando Tipo IsNotObject
//           isNotObject: function() { },

//           //g Gerando Tipo IsNumber
//           isNumber: function() { },

//           //g Gerando Tipo IsNotNumber
//           isNotNumber: function() { },

//           //g Gerando Tipo IsInfinite
//           isInfinite: function() { },

//           //g Gerando Tipo IsBoolean
//           isBoolean: function() { },

//           //g Gerando Tipo IsNotBoolean
//           isNotBoolean: function() { },

//           //g Gerando Tipo TypeOf
//           typeOf: function() { },

//           //g Gerando Tipo NotTypeOf
//           notTypeOf: function() { }

//         },

//         //f Gerando Tipos ChaiJQuery das funções acima
//         ChaiJQuery: {

//           //g Gerando Tipo Attr
//           attr: function() { },

//           //g Gerando Tipo Prop
//           prop: function() { },

//           //g Gerando Tipo Css
//           css: function() { },

//           //g Gerando Tipo Data
//           data: function() { },

//           //g Gerando Tipo Class
//           class: function() { },

//           //g Gerando Tipo Id
//           id: function() { },

//           //g Gerando Tipo Html
//           html: function() { },

//           //g Gerando Tipo Text
//           text: function() { },

//           //g Gerando Tipo Value
//           value: function() { },

//           //g Gerando Tipo Visible
//           visible: function() { },

//           //g Gerando Tipo Hidden
//           hidden: function() { },

//           //g Gerando Tipo Selected
//           selected: function() { },

//           //g Gerando Tipo Checked
//           checked: function() { },

//           //g Gerando Tipo Focus
//           focus: function() { },

//           //g Gerando Tipo Focused
//           focused: function() { },

//           //g Gerando Tipo Enabled
//           enabled: function() { },

//           //g Gerando Tipo Disabled
//           disabled: function() { },

//           //g Gerando Tipo Empty
//           empty: function() { },

//           //g Gerando Tipo Exist
//           exist: function() { },

//           //g Gerando Tipo Match
//           match: function() { },

//           //g Gerando Tipo Contain
//           contain: function() { },

//           //g Gerando Tipo Descendants
//           descendants: function() { }

//         },

//         //f Gerando Tipos SinonChai das funções acima
//         SinonChai: {

//           //g Gerando Tipo Called
//           called: function() { },

//           //g Gerando Tipo CallCount
//           callCount: function() { },

//           //g Gerando Tipo CalledOnce
//           calledOnce: function() { },

//           //g Gerando Tipo CalledTwice
//           calledTwice: function() { },

//           //g Gerando Tipo CalledThrice
//           calledThrice: function() { },

//           //g Gerando Tipo CalledBefore
//           calledBefore: function() { },

//           //g Gerando Tipo CalledAfter
//           calledAfter: function() { },

//           //g Gerando Tipo CalledWithNew
//           calledWithNew: function() { },

//           //g Gerando Tipo AlwaysCalledWithNew
//           alwaysCalledWithNew: function() { },

//           //g Gerando Tipo CalledOn
//           calledOn: function() { },

//           //g Gerando Tipo AlwaysCalledOn
//           alwaysCalledOn: function() { },

//           //g Gerando Tipo CalledWith
//           calledWith: function() { },

//           //g Gerando Tipo AlwaysCalledWith
//           alwaysCalledWith: function() { },

//           //g Gerando Tipo CalledExactly
//           calledExactly: function() { },

//           //g Gerando Tipo AlwaysCalledExactly
//           alwaysCalledExactly: function() { },

//           //g Gerando Tipo CalledMatch
//           calledMatch: function() { },

//           //g Gerando Tipo AlwaysCalledMatch
//           alwaysCalledMatch: function() { },

//           //g Gerando Tipo Returned
//           returned: function() { },

//           //g Gerando Tipo AlwaysReturned
//           alwaysReturned: function() { },

//           //g Gerando Tipo Threw
//           threw: function() { },

//           //g Gerando Tipo AlwaysThrew
//           alwaysThrew: function() { }

//         },

//         //f Gerando Tipos CommonAssertions das funções acima
//         CommonAssertions: {

//           //g Gerando Tipo Get
//           get: function() { },

//           //g Gerando Tipo Should
//           should: function() { },

//           //g Gerando Tipo Find
//           find: function() { },

//           //g Gerando Tipo Parent
//           parent: function() { },

//           //g Gerando Tipo Invoke
//           invoke: function() { },

//           //g Gerando Tipo Contains
//           contains: function() { },

//           //g Gerando Tipo And
//           and: function() { },

//           //g Gerando Tipo Type
//           type: function() { },

//           //g Gerando Tipo Click
//           click: function() { },

//           //g Gerando Tipo Visit
//           visit: function() { },

//           //g Gerando Tipo Focused
//           focused: function() { },

//           //g Gerando Tipo First
//           first: function() { },

//           //g Gerando Tipo Eq
//           eq: function() { },

//           //g Gerando Tipo Its
//           its: function() { },

//           //g Gerando Tipo Stub
//           stub: function() { },

//           //g Gerando Tipo Spy
//           spy: function() { },

//           //g Gerando Tipo Then
//           then: function() { },

//           //g Gerando Tipo As
//           as: function() { }

//         }

//       }

//     }

//   },

//   //c Funções de Testes com Ava
//   ava: {

//     //d Gerando função Test
//     test: {
//       function() { },

//       //e Gerando tipos da função Test
//       tipos: {

//         //f Gerando Tipo Is
//         is: function() { },

//         //f Gerando Tipo Pass
//         pass: function() { },

//         //f Gerando Tipo Fail
//         fail: function() { },

//         //f Gerando Tipo Assert
//         assert: function() { },

//         //f Gerando Tipo Truthy
//         truthy: function() { },

//         //f Gerando Tipo Falsy
//         falsy: function() { },

//         //f Gerando Tipo True
//         true: function() { },

//         //f Gerando Tipo False
//         false: function() { },

//         //f Gerando Tipo Not
//         not: function() { },

//         //f Gerando Tipo DeepEqual
//         deepEqual: function() { },

//         //f Gerando Tipo notDeepEqual
//         notDeepEqual: function() { },

//         //f Gerando Tipo Like
//         like: function() { },

//         //f Gerando Tipo Throws
//         throws: function() { },

//         //f Gerando Tipo ThrowsASync
//         throwsASync: function() { },

//         //f Gerando Tipo NotThrows
//         notThrows: function() { },

//         //f Gerando Tipo NotThrowsASync
//         notThrowsASync: function() { },

//         //f Gerando Tipo Regex
//         regex: function() { },

//         //f Gerando Tipo NotRegex
//         notRegex: function() { },

//         //f Gerando Tipo Snapshot
//         snapshot: function() { },

//         //f Gerando Tipo Try
//         try: function() { }

//       }

//     }

//   }

// },
