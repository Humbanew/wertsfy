export declare function $formulaDeGirard(expressao: string): void | any[];
export declare function $calculoDoTeoremaDeTalesDeMileto(valorMultiplicadoPorX: number, valorNormal: number): number;
export declare function $calculoDoTeoremaDePitagoras(a: number, b: number): number;
export declare function $calculoDaRelacaoPitagoricaT1(m: number, n: number): number;
export declare function $calculoDaRelacaoPitagoricaT2(a: number, n: number): number;
export declare function $calculoDaRelacaoPitagoricaT3(h: number, b: number, c: number): number;
export declare function $calculoDoFatorial(valor: number): number;
export declare function $calculoDaCombinacao(total: number, divisor: number): number;
export declare function $calculoDoArranjo(total: number, divisor: number): number;
export declare function $calculoDaProbabilidade(valor: number, valorTotal: number): number;
export declare function $calculoDoConjugadoDeUmNumeroComplexo(expressao: string): string;
export declare function $calculoDoTeoremaDeStirling(valor: number): number;
export declare function $calculoDaRelacaoDeEuler(vertices: number, arestas: number, faces: number): number;
export declare function $calculoDasPotenciasDeI(valor: number): string;
export declare function $calculoDaPorcentagem(valorParte: number, valorTotal: number): number;
export declare function $calculoDaDeterminante2x2(a00: number, a01: number, a10: number, a11: number): number;
export declare function $calculoDaDeterminante3x3(a00: number, a01: number, a02: number, a10: number, a11: number, a12: number, a20: number, a21: number, a22: number): number;
export declare function $somaPolinomios(polinomio1: string, polinomio2: string): string;
export declare function $subtracaoPolinomios(polinomio1: string, polinomio2: string): string;
export declare function $multiplicacaoPolinomios(polinomio1: string, polinomio2: string): string;
export declare function $divisaoPolinomios(polinomio1: string, polinomio2: string): string;
export declare function $somaMatrizes(matriz: [][], matriz2: [][]): any[];
export declare function $subtracaoMatrizes(matriz: [][], matriz2: [][]): any[];
export declare function $multiplicacaoMatrizes(matriz: [][], matriz2: [][]): any[] | "Matrizes não podem ser multiplicadas";
export declare function $divisaoMatrizes(matriz: [][], matriz2: [][]): any[];
export declare function $calculoDaVelocidade(espaco: number, tempo: number): number;
export declare function $calculoDoEspaco(velocidade: number, tempo: number): number;
export declare function $calculoDoTempo(velocidade: number, espaco: number): number;
export declare function $calculoDaAceleracao(velocidade: number, tempo: number): number;
export declare function $calculoDaEqHorariaDoTempo(tempo: number, tempoInicial: number, velocidade: number, aceleracao: number): number;
export declare function $calculoDaEqHorariaDoEspaco(espaco: number, espacoInicial: number, aceleracao: number): number;
export declare function $calculoDaEqHorariaDaVelocidade(velocidade: number, tempo: number, aceleracao: number): number;
export declare function $calculoDaEqHorariaDaAceleracao(aceleracao: number, tempo: number, velocidade: number): number;
export declare function $calculoDaEqHorariaDaForca(forca: number, tempo: number, aceleracao: number): number;
export declare function $calculoDaEqHorariaDoTempoEspaco(tempo: number, espaco: number, tempoInicial: number, espacoInicial: number, velocidade: number, aceleracao: number): number;
export declare function $calculoDaEnergiaCinetica(massa: number, velocidade: number): number;
export declare function $calculoDaEnergiaPotencialElastica(constanteElastica: number, distancia: number): number;
export declare function $calculoDaEnergiaPotencialGravitacional(massa: number, gravidade: number, altura: number): number;
export declare function $calculoDoPotencialMecanico(velocidade: number, constanteElastica: number, distancia: number, massa: number, gravidade: number, altura: number, energPotElas: boolean, energPotGrav: boolean): number;
export declare function $calculoDoPotencialElastico(constanteElastica: number, distancia: number): any;
export declare function $calculoDoPlanoInclinadoSemAtrito(massa: number, gravidade: number): number;
export declare function $calculoDoPlanoInclinadoComAtrito(forcaDeAtrito: number, massa: number, gravidade: number, angulo: number): number;
export declare function $calculoDaAceleracaoNoPlanoInclinadoEixoX(massa: number, gravidade: number, angulo: number): number;
export declare function $calculoDaAceleracaoNoPlanoInclinadoEixoY(massa: number, gravidade: number, angulo: number): number;
export declare function $calculoDoLancamentoHorizontal(gravidade: number, tempo: number): number;
export declare function $calculoDaEquacaoDeTorricelli(velocidadeInicial: number, aceleracao: number, espacoInicial: number, espacoFinal: number): number;
export declare function $calculoDaAlturaMaximaDeUmLancamentoVertical(velocidadeInicial: number, gravidade: number, angulo: number): number;
export declare function $calculoDoAlcanceDeUmLancamentoVertical(velocidade: number, tempo: number, angulo: number): number;
export declare function $calculoDoAlcanceMaximoDeUmLancamentoVertical(velocidade: number, angulo: number, gravidade: number): number;
export declare function $calculoDoCalorSensivel(massa: number, calorEspecifico: number, temperaturaInicial: number, temperaturaFinal: number): number;
export declare function $calculoDoCalorLatente(quantidadeDeCalor: number, massa: number): number;
export declare function $calculoDasLeisDeNewton(massa: number, aceleracao: number): number;
export declare function $calculoDoTrabalho(massa: number, gravidade: number, altura: number): number;
export declare function $calculoDoConsumoDeEnergia(tempo: number, correnteEletrica: number, ddp: number): number;
export declare function $calculoDoTeoremaDePascal(forca1: number, forca2: number, area1: number, area2: number, forca1Inexistente: boolean, forca2Inexistente: boolean, area1Inexistente: boolean, area2Inexistente: boolean): number;
export declare function $calculoDoTeoremaDeStevin(densidade: number, gravidade: number, alturaInicial: number, alturaFinal: number): number;
export declare function $calculoDoTeoremaDeBoltzmann(temperatura: number, constante: number): number;
export declare function $calculoDoTeoremaDeCoulomb(correnteEletrica: number, distancia: number): number;
export declare function $calculoDoTeoremaDePlanck(energia: number, constante: number): number;
export declare function $calculoDaForcaGravitacional(gravidade: number, massaPlaneta: number, distancia: number): number;
export declare function $calculoDoAceleracaoCentripetaMovimentoCircularUniforme(velocidade: number, raio: number): number;
export declare function $calculoDoVelocidadeAngularMovimentoCircularUniforme(anguloInicial: number, anguloFinal: number, tempoInicial: number, tempoFinal: number): number;
export declare function $calculoDoVelocidadeLinearMovimentoCircularUniforme(frequencia: number, raio: number): number;
export declare function $calculoDaEquacaoHorariaDoTempoMovimentoCircularUnifVariado(velocidadeAngularInicial: number, aceleracaoAngular: number, tempo: number): number;
export declare function $calculoDaEquacaoHorariaDoEspacoMovimentoCircularUnifVariado(posicaoAngularInicial: number, velocidadeAngularInicial: number, aceleracaoAngular: number, tempo: number): number;
export declare function $calculoDeToricelliMovimentoCircularUnifVariado(velocidadeAngularInicial: number, aceleracaoAngular: number, deslocamentoAngularInicial: number, deslocamentoAngularFinal: number): number;
export declare function $calculoDaAceleracaoAngularMovimentoCircularUnifVariado(velocidadeAngularInicial: number, velocidadeAngularFinal: number, tempoInicial: number, tempoFinal: number): number;
export declare function $calculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples(velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number): number;
export declare function $calculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples(velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number): number;
export declare function $calculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples(velocidadeAngular: number, amplitude: number, tempo: number, faseInicial: number): number;
export declare function $calculoDoPeriodo(frequencia: number): number;
export declare function $calculoDaFrequencia(periodo: number): number;
export declare function $calculoDaTemperatura(valor: number, deCelsiusParaKelvin: boolean, deCelsiusParaFahrenheit: boolean, deKelvinParaCelsius: boolean, deKelvinParaFahrenheit: boolean, deFahrenheitParaKelvin: boolean, deFahrenheitParaCelsius: boolean): number;
export declare function $calculoDaDilatacaoLinear(comprimentoInicial: number, coeficienteDeDilatacaoLinear: number, temperaturaInicial: number, temperaturaFinal: number): number;
export declare function $calculoDaDilatacaoSuperficial(areaInicial: number, coeficienteDeDilatacaoSuperficial: number, temperaturaInicial: number, temperaturaFinal: number): number;
export declare function $calculoDaDilatacaoVolumetrica(volumeInicial: number, coeficienteDeDilatacaoVolumetrica: number, temperaturaInicial: number, temperaturaFinal: number): number;
export declare function $calculoDoPrincipioFundamentalDaHidroestaticaHidrodinamica(densidade: number, gravidade: number, alturaInicial: number, alturaFinal: number): number;
export declare function $calculoDoEmpuxoDaHidroestaticaHidrodinamica(densidade: number, gravidade: number, volume: number): number;
export declare function $calculoDoPesoAparenteDaHidroestaticaHidrodinamica(peso: number, densidade: number, gravidade: number, volume: number): number;
export declare function $calculoDaEquacaoDeLagrange(x: number, y: number, xi: number, yi: number, xii: number, yii: number, xiii: number, yiii: number): number;
export declare function $calculoDoAtrito(coeficienteDeAtrito: number, massa: number): number;
export declare function $calculoDaLeiDeCoulomb(carga1: number, carga2: number, distancia: number): number;
export declare function $calculoDaLeiDeOhm(resistencia: number, corrente: number): number;
export declare function $calculoDoEfeitoJoule(corrente: number, resistencia: number, tempo: number): number;
export declare function $calculoDaLeiDeLenz(intensidadeDoCampoMagnetico: number, areaDaSuperficie: number, cosAngulo: number): number;
export declare function $calculoDaForcaEletromotriz(potenciaTotalGerador: number, intensidadeDaCorrente: number): number;
export declare function $calculoDaContraForcaEletromotriz(potenciaTotalGerador: number, intensidadeDaCorrente: number): number;
export declare function $calculoDoEfeitoFotoeletrico(frequenciaDaLuz: number): number;
export declare function $calculoDaDensidade(massa: number, volume: number): number;
export declare function $calculoDaTitulacao(massaBase: number, massaAcido: number, volumeBase: number, volumeAcido: number, naoTemMassaBase: boolean, naoTemMassaAcido: boolean, naoTemVolumeBase: boolean, naoTemVolumeAcido: boolean): number;
export declare function $calculoDaConcentracao(massaSoluto: number, volume: number): number;
export declare function $calculoDoRendimento(valorParte: number, valorTotal: number): any;
export declare function $calculoDaLeiGeralDosGases(pressao1: string, pressao2: string, volume1: string, volume2: string, temperatura1: string, temperatura2: string): number;
export declare function $regraDeTresSimples(valor1: number, valor2: number, valor3: number, localDaVariavel?: string): number;
export declare function $regraDeTresComposta(valor1: number, valor2: number, valor3: number, valor4: number, valor5: number, valor6: number, valor7: number, localDaVariavel?: string): number;
export declare function $sistemaDeEquacoes(expressao1: string, expressao2: string): string | void;
export declare function $sistemaDeInequacoes(expressao1: string, expressao2: string): string | void;
export declare function $sistemasLineares(expressoes: string[]): void | any[];
export declare function $somaNumerosComplexos(valores: string[]): string | void;
export declare function $subtracaoNumerosComplexos(valorTotal: string, valores: string[]): string | void;
export declare function $multiplicacaoNumerosComplexos(valorTotal: string, valores: string[]): string | void;
export declare function $divisaoNumerosComplexos(valorTotal: string, valores: string[]): string | void;
export declare function $potenciaNumerosComplexos(valorTotal: string, valores: string[], potencia: number): string | void;
export declare function $jurosSimples(valor: number, taxa: number, tempo: number): number;
export declare function $jurosCompostos(valor: number, taxa: number, tempo: number, vezes: number): number;
export declare function $vetorDaDistanciaEntreDoisPontosR2(x1: number, x2: number, y1: number, y2: number): any[];
export declare function $vetorDaDistanciaEntreDoisPontosR3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): any[];
export declare function $moduloDeUmVetorR2(x: number, y: number): number;
export declare function $moduloDeUmVetorR3(x: number, y: number, z: number): number;
export declare function $versorDeUmVetorR2(x: number, y: number): any[];
export declare function $versorDeUmVetorR3(x: number, y: number, z: number): any[];
export declare function $projecaoDeUmVetorSobreOutroVetorR2(x1: number, x2: number, y1: number, y2: number): number[];
export declare function $projecaoDeUmVetorSobreOutroVetorR3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): number[];
export declare function $somaDeVetoresR2(x1: number, x2: number, y1: number, y2: number): number[];
export declare function $somaDeVetoresR3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): number[];
export declare function $subtracaoDeVetoresR2(x1: number, x2: number, y1: number, y2: number): number[];
export declare function $subtracaoDeVetoresR3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): number[];
export declare function $produtoEscalarDeVetoresR2(x1: number, x2: number, y1: number, y2: number): number;
export declare function $produtoEscalarDeVetoresR3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): number;
export declare function $divisaoDeVetoresR2(x1: number, x2: number, y1: number, y2: number): number[];
export declare function $divisaoDeVetoresR3(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): number[];
export declare function $pontoMedioDeUmVetorR2(x: number, y: number): number[];
export declare function $pontoMedioDeUmVetorR3(x: number, y: number, z: number): number[];
export declare function $cossenosDiretoresDeUmVetorR2(x: number, y: number): number[];
export declare function $cossenosDiretoresDeUmVetorR3(x: number, y: number, z: number): number[];
export declare function $sinalizacaoQuadrantes(x: number, y: number): string;
export declare function $sinalizacaoOctantes(x: number, y: number, z: number): string;
export declare function $quadradoDePunnet(genotipo1: string, genotipo2: string): string[];
export declare function $quadradoDePunnetExpandido(genotipo1: string, genotipo2: string): string[];
//# sourceMappingURL=funcoes-algebricas.d.ts.map