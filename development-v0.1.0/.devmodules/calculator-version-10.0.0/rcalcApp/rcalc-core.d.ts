import { $calculoDaAceleracao, $calculoDaAceleracaoAngularMovimentoCircularUnifVariado, $calculoDaAceleracaoNoPlanoInclinadoEixoX, $calculoDaAceleracaoNoPlanoInclinadoEixoY, $calculoDaAlturaMaximaDeUmLancamentoVertical, $calculoDaCombinacao, $calculoDaConcentracao, $calculoDaContraForcaEletromotriz, $calculoDaDensidade, $calculoDaDeterminante2x2, $calculoDaDeterminante3x3, $calculoDaDilatacaoLinear, $calculoDaDilatacaoSuperficial, $calculoDaDilatacaoVolumetrica, $calculoDaEnergiaCinetica, $calculoDaEnergiaPotencialElastica, $calculoDaEnergiaPotencialGravitacional, $calculoDaEqHorariaDaAceleracao, $calculoDaEqHorariaDaForca, $calculoDaEqHorariaDaVelocidade, $calculoDaEqHorariaDoEspaco, $calculoDaEqHorariaDoTempo, $calculoDaEqHorariaDoTempoEspaco, $calculoDaEquacaoDeLagrange, $calculoDaEquacaoDeTorricelli, $calculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples, $calculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples, $calculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples, $calculoDaEquacaoHorariaDoTempoMovimentoCircularUnifVariado, $calculoDaForcaEletromotriz, $calculoDaForcaGravitacional, $calculoDaFrequencia, $calculoDaLeiDeCoulomb, $calculoDaLeiDeLenz, $calculoDaLeiDeOhm, $calculoDaLeiGeralDosGases, $calculoDaPorcentagem, $calculoDaProbabilidade, $calculoDaRelacaoDeEuler, $calculoDaRelacaoPitagoricaT1, $calculoDaRelacaoPitagoricaT2, $calculoDaRelacaoPitagoricaT3, $calculoDasLeisDeNewton, $calculoDasPotenciasDeI, $calculoDaTemperatura, $calculoDaTitulacao, $calculoDaVelocidade, $calculoDeToricelliMovimentoCircularUnifVariado, $calculoDoAceleracaoCentripetaMovimentoCircularUniforme, $calculoDoAlcanceDeUmLancamentoVertical, $calculoDoAlcanceMaximoDeUmLancamentoVertical, $calculoDoArranjo, $calculoDoAtrito, $calculoDoCalorLatente, $calculoDoCalorSensivel, $calculoDoConjugadoDeUmNumeroComplexo, $calculoDoConsumoDeEnergia, $calculoDoEfeitoFotoeletrico, $calculoDoEfeitoJoule, $calculoDoEmpuxoDaHidroestaticaHidrodinamica, $calculoDoEspaco, $calculoDoFatorial, $calculoDoLancamentoHorizontal, $calculoDoPeriodo, $calculoDoPesoAparenteDaHidroestaticaHidrodinamica, $calculoDoPlanoInclinadoComAtrito, $calculoDoPlanoInclinadoSemAtrito, $calculoDoPotencialElastico, $calculoDoPotencialMecanico, $calculoDoPrincipioFundamentalDaHidroestaticaHidrodinamica, $calculoDoRendimento, $calculoDoTempo, $calculoDoTeoremaDeBoltzmann, $calculoDoTeoremaDeCoulomb, $calculoDoTeoremaDePascal, $calculoDoTeoremaDePitagoras, $calculoDoTeoremaDePlanck, $calculoDoTeoremaDeStevin, $calculoDoTeoremaDeStirling, $calculoDoTeoremaDeTalesDeMileto, $calculoDoTrabalho, $calculoDoVelocidadeAngularMovimentoCircularUniforme, $calculoDoVelocidadeLinearMovimentoCircularUniforme, $cossenosDiretoresDeUmVetorR2, $cossenosDiretoresDeUmVetorR3, $divisaoDeVetoresR2, $divisaoDeVetoresR3, $divisaoMatrizes, $divisaoNumerosComplexos, $divisaoPolinomios, $formulaDeGirard, $jurosCompostos, $jurosSimples, $moduloDeUmVetorR2, $moduloDeUmVetorR3, $multiplicacaoMatrizes, $multiplicacaoNumerosComplexos, $multiplicacaoPolinomios, $pontoMedioDeUmVetorR2, $pontoMedioDeUmVetorR3, $potenciaNumerosComplexos, $produtoEscalarDeVetoresR2, $produtoEscalarDeVetoresR3, $projecaoDeUmVetorSobreOutroVetorR2, $projecaoDeUmVetorSobreOutroVetorR3, $quadradoDePunnet, $quadradoDePunnetExpandido, $regraDeTresComposta, $regraDeTresSimples, $sinalizacaoOctantes, $sinalizacaoQuadrantes, $sistemaDeEquacoes, $sistemaDeInequacoes, $sistemasLineares, $somaDeVetoresR2, $somaDeVetoresR3, $somaMatrizes, $somaNumerosComplexos, $somaPolinomios, $subtracaoDeVetoresR2, $subtracaoDeVetoresR3, $subtracaoMatrizes, $subtracaoNumerosComplexos, $subtracaoPolinomios, $versorDeUmVetorR2, $versorDeUmVetorR3, $vetorDaDistanciaEntreDoisPontosR2, $vetorDaDistanciaEntreDoisPontosR3 } from "./components/funcoes-algebricas";
import { $divisao, $multiplicacao, $potencia, $potenciaDePotencia, $raizBicubica, $raizBiquadrada, $raizCubica, $raizQuadrada, $raizTricubica, $raizTriquadrada, $soma, $subtracao } from "./components/funcoes-basicas";
import { $oitavoGrau, $primeiroGrau, $quartoGrau, $quintoGrau, $segundoGrau, $setimoGrau, $sextoGrau, $terceiroGrau } from "./components/funcoes-cartesianas";
import { $antilogaritmoBase10, $antilogaritmoBase10Hiperbolico, $antilogaritmoBase10Inverso, $antilogaritmoBase10InversoHiperbolico, $antilogaritmoBase2, $antilogaritmoBase2Hiperbolico, $antilogaritmoBase2Inverso, $antilogaritmoBase2InversoHiperbolico, $antilogaritmoBaseQualquer, $antilogaritmoBaseQualquerHiperbolico, $antilogaritmoBaseQualquerHiperbolicoMenosUm, $antilogaritmoBaseQualquerInverso, $antilogaritmoBaseQualquerInversoHiperbolico, $antilogaritmoBaseQualquerInversoHiperbolicoMenosUm, $antilogaritmoBaseQualquerInversoMenosUm, $antilogaritmoBaseQualquerMenosUm, $antilogaritmoNatural, $antilogaritmoNaturalHiperbolico, $antilogaritmoNaturalHiperbolicoMaisUm, $antilogaritmoNaturalInverso, $antilogaritmoNaturalInversoHiperbolico, $antilogaritmoNaturalInversoHiperbolicoMaisUm, $antilogaritmoNaturalInversoMaisUm, $antilogaritmoNaturalMaisUm, $cologaritmoBase10, $cologaritmoBase10Hiperbolico, $cologaritmoBase10Inverso, $cologaritmoBase10InversoHiperbolico, $cologaritmoBase2, $cologaritmoBase2Hiperbolico, $cologaritmoBase2Inverso, $cologaritmoBase2InversoHiperbolico, $cologaritmoBaseQualquer, $cologaritmoBaseQualquerHiperbolico, $cologaritmoBaseQualquerHiperbolicoMaisUm, $cologaritmoBaseQualquerInverso, $cologaritmoBaseQualquerInversoHiperbolico, $cologaritmoBaseQualquerInversoHiperbolicoMaisUm, $cologaritmoBaseQualquerInversoMaisUm, $cologaritmoBaseQualquerMaisUm, $cologaritmoNatural, $cologaritmoNaturalHiperbolico, $cologaritmoNaturalHiperbolicoMaisUm, $cologaritmoNaturalInverso, $cologaritmoNaturalInversoHiperbolico, $cologaritmoNaturalInversoHiperbolicoMaisUm, $cologaritmoNaturalInversoMaisUm, $cologaritmoNaturalMaisUm, $exponencial, $exponencialHiperbolica, $exponencialHiperbolicaInversa, $exponencialHiperbolicaInversaMenosUm, $exponencialHiperbolicaMenosUm, $exponencialInversa, $exponencialInversaMenosUm, $exponencialMenosUm, $logaritmoBase10, $logaritmoBase10Hiperbolico, $logaritmoBase10Inverso, $logaritmoBase10InversoHiperbolico, $logaritmoBase2, $logaritmoBase2Hiperbolico, $logaritmoBase2Inverso, $logaritmoBase2InversoHiperbolico, $logaritmoBaseQualquer, $logaritmoBaseQualquerHiperbolico, $logaritmoBaseQualquerHiperbolicoMenosUm, $logaritmoBaseQualquerInverso, $logaritmoBaseQualquerInversoHiperbolico, $logaritmoBaseQualquerInversoHiperbolicoMenosUm, $logaritmoBaseQualquerInversoMenosUm, $logaritmoBaseQualquerMenosUm, $logaritmoNatural, $logaritmoNaturalHiperbolico, $logaritmoNaturalHiperbolicoMaisUm, $logaritmoNaturalInverso, $logaritmoNaturalInversoHiperbolico, $logaritmoNaturalInversoHiperbolicoMaisUm, $logaritmoNaturalInversoMaisUm, $logaritmoNaturalMaisUm } from "./components/funcoes-cientificas-avancadas";
import { $arccossecante, $arccossecanteHiperbolica, $arccossecanteHiperbolicaInversa, $arccossecanteInversa, $arccosseno, $arccossenoHiperbolico, $arccossenoHiperbolicoInverso, $arccossenoInverso, $arccotangente, $arccotangenteHiperbolica, $arccotangenteHiperbolicaInversa, $arccotangenteInversa, $arcsecante, $arcsecanteHiperbolica, $arcsecanteHiperbolicaInversa, $arcsecanteInversa, $arcseno, $arcsenoHiperbolico, $arcsenoHiperbolicoInverso, $arcsenoInverso, $arctangente, $arctangenteHiperbolica, $arctangenteHiperbolicoInversa, $arctangenteInversa, $cossecante, $cossecanteHiperbolica, $cossecanteHiperbolicaInversa, $cossecanteInversa, $cosseno, $cossenoHiperbolico, $cossenoHiperbolicoInverso, $cossenoInverso, $cotangente, $cotangenteHiperbolica, $cotangenteHiperbolicaInversa, $cotangenteInversa, $secante, $secanteHiperbolica, $secanteHiperbolicaInversa, $secanteInversa, $seno, $senoHiperbolico, $senoHiperbolicoInverso, $senoInverso, $tangente, $tangenteHiperbolica, $tangenteHiperbolicaInversa, $tangenteInversa } from "./components/funcoes-cientificas-basicas";
import { $calculoDaEscalaGeografica, $calculoDeDensidadePopulacional, $calculoDeGINI, $calculoDeIDH, $calculoDeIMC, $calculoDoDiagramaDeVennDe2Grupos, $calculoDoDiagramaDeVennDe3Grupos, $calculoDoDiagramaDeVennDe4Grupos, $calculoDosNumerosImpares, $calculoDosNumerosPares, $calculoDosNumerosPrimos, $criaJogoDaLotoFacil, $criaJogoDaLotoMania, $criaJogoDaMegaSena, $criaJogoDaQuadra, $criaJogoDaQuina, $numeroDeConjuntos } from "./components/funcoes-experimentais";
import { $apotemaDeUmTrianguloQualquer, $areaCilindroQualquer, $areaCirculoQualquer, $areaCircunferenciaQualquer, $areaConeQualquer, $areaDeUmaSuperficieQualquer, $areaDeUmParalelogramoQualquer, $areaDeUmPoligonoQualquer, $areaElipseQualquer, $areaEsferaQualquer, $areaLateralDeUmPrismaQualquer, $areaLozangoQualquer, $areaPiramideQualquer, $areaQuadradoQualquer, $areaRetanguloQualquer, $areaTrapezioQualquer, $areaTrianguloQualquer, $volumeDeUmaSuperficieQualquer, $volumeDeUmCilindroQualquer, $volumeDeUmConeQualquer, $volumeDeUmCuboQualquer, $volumeDeUmDodecaedroQualquer, $volumeDeUmEsferaQualquer, $volumeDeUmIcosaedroQualquer, $volumeDeUmOctaedroQualquer, $volumeDeUmParalelepipedoQualquer, $volumeDeUmPiramideQualquer, $volumeDeUmPoligonoFormatoLozangoQualquer, $volumeDeUmPoligonoFormatoTrapezioQualquer, $volumeDeUmPrismaQualquer, $volumeDeUmRombQualquer, $volumeDeUmTetraedroQualquer } from "./components/funcoes-geometricas";
export declare const rcalcCore: {
    funcoes: {
        basicas: {
            soma: typeof $soma;
            subtracao: typeof $subtracao;
            multiplicacao: typeof $multiplicacao;
            divisao: typeof $divisao;
            potencia: typeof $potencia;
            potenciaDePotencia: typeof $potenciaDePotencia;
            raizQuadrada: typeof $raizQuadrada;
            raizCubica: typeof $raizCubica;
            raizBiquadrada: typeof $raizBiquadrada;
            raizBicubica: typeof $raizBicubica;
            raizTriquadrada: typeof $raizTriquadrada;
            raizTricubica: typeof $raizTricubica;
        };
        cientificasBasicas: {
            seno: typeof $seno;
            cosseno: typeof $cosseno;
            tangente: typeof $tangente;
            secante: typeof $secante;
            cossecante: typeof $cossecante;
            cotangente: typeof $cotangente;
            senoInverso: typeof $senoInverso;
            cossenoInverso: typeof $cossenoInverso;
            tangenteInversa: typeof $tangenteInversa;
            secanteInversa: typeof $secanteInversa;
            cossecanteInversa: typeof $cossecanteInversa;
            cotangenteInversa: typeof $cotangenteInversa;
            senoHiperbolico: typeof $senoHiperbolico;
            cossenoHiperbolico: typeof $cossenoHiperbolico;
            tangenteHiperbolica: typeof $tangenteHiperbolica;
            secanteHiperbolica: typeof $secanteHiperbolica;
            cossecanteHiperbolica: typeof $cossecanteHiperbolica;
            cotangenteHiperbolica: typeof $cotangenteHiperbolica;
            senoHiperbolicoInverso: typeof $senoHiperbolicoInverso;
            cossenoHiperbolicoInverso: typeof $cossenoHiperbolicoInverso;
            tangenteHiperbolicoInverso: typeof $tangenteHiperbolicaInversa;
            secanteHiperbolicaInversa: typeof $secanteHiperbolicaInversa;
            cossecanteHiperbolicaInversa: typeof $cossecanteHiperbolicaInversa;
            cotangenteHiperbolicaInversa: typeof $cotangenteHiperbolicaInversa;
            arcseno: typeof $arcseno;
            arccosseno: typeof $arccosseno;
            arctangente: typeof $arctangente;
            arcsecante: typeof $arcsecante;
            arccossecante: typeof $arccossecante;
            arccotangente: typeof $arccotangente;
            arcsenoInverso: typeof $arcsenoInverso;
            arccossenoInverso: typeof $arccossenoInverso;
            arctangenteInversa: typeof $arctangenteInversa;
            arcsecanteInversa: typeof $arcsecanteInversa;
            arccossecanteInversa: typeof $arccossecanteInversa;
            arccotangenteInversa: typeof $arccotangenteInversa;
            arcsenoHiperbolico: typeof $arcsenoHiperbolico;
            arccossenoHiperbolico: typeof $arccossenoHiperbolico;
            arctangenteHiperbolica: typeof $arctangenteHiperbolica;
            arcsecanteHiperbolica: typeof $arcsecanteHiperbolica;
            arccossecanteHiperbolica: typeof $arccossecanteHiperbolica;
            arccotangenteHiperbolica: typeof $arccotangenteHiperbolica;
            arcsenoHiperbolicoInverso: typeof $arcsenoHiperbolicoInverso;
            arccossenoHiperbolicoInverso: typeof $arccossenoHiperbolicoInverso;
            arctangenteHiperbolicoInversa: typeof $arctangenteHiperbolicoInversa;
            arcsecanteHiperbolicaInversa: typeof $arcsecanteHiperbolicaInversa;
            arccossecanteHiperbolicaInversa: typeof $arccossecanteHiperbolicaInversa;
            arccotangenteHiperbolicaInversa: typeof $arccotangenteHiperbolicaInversa;
        };
        cientificasAvancadas: {
            exponencial: typeof $exponencial;
            exponencialMenosUm: typeof $exponencialMenosUm;
            exponencialInversa: typeof $exponencialInversa;
            exponencialInversaMenosUm: typeof $exponencialInversaMenosUm;
            exponencialHiperbolica: typeof $exponencialHiperbolica;
            exponencialHiperbolicaMenosUm: typeof $exponencialHiperbolicaMenosUm;
            exponencialHiperbolicaInversa: typeof $exponencialHiperbolicaInversa;
            exponencialHiperbolicaInversaMenosUm: typeof $exponencialHiperbolicaInversaMenosUm;
            logaritmoNatural: typeof $logaritmoNatural;
            logaritmoNaturalMaisUm: typeof $logaritmoNaturalMaisUm;
            logaritmoBase10: typeof $logaritmoBase10;
            logaritmoBase2: typeof $logaritmoBase2;
            logaritmoBaseQualquer: typeof $logaritmoBaseQualquer;
            logaritmoBaseQualquerMenosUm: typeof $logaritmoBaseQualquerMenosUm;
            logaritmoNaturalInverso: typeof $logaritmoNaturalInverso;
            logaritmoNaturalInversoMaisUm: typeof $logaritmoNaturalInversoMaisUm;
            logaritmoBase10Inverso: typeof $logaritmoBase10Inverso;
            logaritmoBase2Inverso: typeof $logaritmoBase2Inverso;
            logaritmoBaseQualquerInverso: typeof $logaritmoBaseQualquerInverso;
            logaritmoBaseQualquerInversoMenosUm: typeof $logaritmoBaseQualquerInversoMenosUm;
            logaritmoNaturalHiperbolico: typeof $logaritmoNaturalHiperbolico;
            logaritmoNaturalHiperbolicoMaisUm: typeof $logaritmoNaturalHiperbolicoMaisUm;
            logaritmoBase10Hiperbolico: typeof $logaritmoBase10Hiperbolico;
            logaritmoBase2Hiperbolico: typeof $logaritmoBase2Hiperbolico;
            logaritmoBaseQualquerHiperbolico: typeof $logaritmoBaseQualquerHiperbolico;
            logaritmoBaseQualquerHiperbolicoMenosUm: typeof $logaritmoBaseQualquerHiperbolicoMenosUm;
            logaritmoNaturalInversoHiperbolico: typeof $logaritmoNaturalInversoHiperbolico;
            logaritmoNaturalInversoHiperbolicoMaisUm: typeof $logaritmoNaturalInversoHiperbolicoMaisUm;
            logaritmoBase10InversoHiperbolico: typeof $logaritmoBase10InversoHiperbolico;
            logaritmoBase2InversoHiperbolico: typeof $logaritmoBase2InversoHiperbolico;
            logaritmoBaseQualquerInversoHiperbolico: typeof $logaritmoBaseQualquerInversoHiperbolico;
            logaritmoBaseQualquerInversoHiperbolicoMenosUm: typeof $logaritmoBaseQualquerInversoHiperbolicoMenosUm;
            antilogaritmoNatural: typeof $antilogaritmoNatural;
            antilogaritmoNaturalMaisUm: typeof $antilogaritmoNaturalMaisUm;
            antilogaritmoBase10: typeof $antilogaritmoBase10;
            antilogaritmoBase2: typeof $antilogaritmoBase2;
            antilogaritmoBaseQualquer: typeof $antilogaritmoBaseQualquer;
            antilogaritmoBaseQualquerMenosUm: typeof $antilogaritmoBaseQualquerMenosUm;
            antilogaritmoNaturalInverso: typeof $antilogaritmoNaturalInverso;
            antilogaritmoNaturalInversoMaisUm: typeof $antilogaritmoNaturalInversoMaisUm;
            antilogaritmoBase10Inverso: typeof $antilogaritmoBase10Inverso;
            antilogaritmoBase2Inverso: typeof $antilogaritmoBase2Inverso;
            antilogaritmoBaseQualquerInverso: typeof $antilogaritmoBaseQualquerInverso;
            antilogaritmoBaseQualquerInversoMenosUm: typeof $antilogaritmoBaseQualquerInversoMenosUm;
            antilogaritmoNaturalHiperbolico: typeof $antilogaritmoNaturalHiperbolico;
            antilogaritmoNaturalHiperbolicoMaisUm: typeof $antilogaritmoNaturalHiperbolicoMaisUm;
            antilogaritmoBase10Hiperbolico: typeof $antilogaritmoBase10Hiperbolico;
            antilogaritmoBase2Hiperbolico: typeof $antilogaritmoBase2Hiperbolico;
            antilogaritmoBaseQualquerHiperbolico: typeof $antilogaritmoBaseQualquerHiperbolico;
            antilogaritmoBaseQualquerHiperbolicoMenosUm: typeof $antilogaritmoBaseQualquerHiperbolicoMenosUm;
            antilogaritmoNaturalInversoHiperbolico: typeof $antilogaritmoNaturalInversoHiperbolico;
            antilogaritmoNaturalInversoHiperbolicoMaisUm: typeof $antilogaritmoNaturalInversoHiperbolicoMaisUm;
            antilogaritmoBase10InversoHiperbolico: typeof $antilogaritmoBase10InversoHiperbolico;
            antilogaritmoBase2InversoHiperbolico: typeof $antilogaritmoBase2InversoHiperbolico;
            antilogaritmoBaseQualquerInversoHiperbolico: typeof $antilogaritmoBaseQualquerInversoHiperbolico;
            antilogaritmoBaseQualquerInversoHiperbolicoMenosUm: typeof $antilogaritmoBaseQualquerInversoHiperbolicoMenosUm;
            cologaritmoNatural: typeof $cologaritmoNatural;
            cologaritmoNaturalMaisUm: typeof $cologaritmoNaturalMaisUm;
            cologaritmoBase10: typeof $cologaritmoBase10;
            cologaritmoBase2: typeof $cologaritmoBase2;
            cologaritmoBaseQualquer: typeof $cologaritmoBaseQualquer;
            cologaritmoBaseQualquerMaisUm: typeof $cologaritmoBaseQualquerMaisUm;
            cologaritmoNaturalInverso: typeof $cologaritmoNaturalInverso;
            cologaritmoNaturalInversoMaisUm: typeof $cologaritmoNaturalInversoMaisUm;
            cologaritmoBase10Inverso: typeof $cologaritmoBase10Inverso;
            cologaritmoBase2Inverso: typeof $cologaritmoBase2Inverso;
            cologaritmoBaseQualquerInverso: typeof $cologaritmoBaseQualquerInverso;
            cologaritmoBaseQualquerInversoMaisUm: typeof $cologaritmoBaseQualquerInversoMaisUm;
            cologaritmoNaturalHiperbolico: typeof $cologaritmoNaturalHiperbolico;
            cologaritmoNaturalHiperbolicoMaisUm: typeof $cologaritmoNaturalHiperbolicoMaisUm;
            cologaritmoBase10Hiperbolico: typeof $cologaritmoBase10Hiperbolico;
            cologaritmoBase2Hiperbolico: typeof $cologaritmoBase2Hiperbolico;
            cologaritmoBaseQualquerHiperbolico: typeof $cologaritmoBaseQualquerHiperbolico;
            cologaritmoBaseQualquerHiperbolicoMaisUm: typeof $cologaritmoBaseQualquerHiperbolicoMaisUm;
            cologaritmoNaturalInversoHiperbolico: typeof $cologaritmoNaturalInversoHiperbolico;
            cologaritmoNaturalInversoHiperbolicoMaisUm: typeof $cologaritmoNaturalInversoHiperbolicoMaisUm;
            cologaritmoBase10InversoHiperbolico: typeof $cologaritmoBase10InversoHiperbolico;
            cologaritmoBase2InversoHiperbolico: typeof $cologaritmoBase2InversoHiperbolico;
            cologaritmoBaseQualquerInversoHiperbolico: typeof $cologaritmoBaseQualquerInversoHiperbolico;
            cologaritmoBaseQualquerInversoHiperbolicoMaisUm: typeof $cologaritmoBaseQualquerInversoHiperbolicoMaisUm;
        };
        cartesianas: {
            primeiroGrau: typeof $primeiroGrau;
            segundoGrau: typeof $segundoGrau;
            terceiroGrau: typeof $terceiroGrau;
            quartoGrau: typeof $quartoGrau;
            quintoGrau: typeof $quintoGrau;
            sextoGrau: typeof $sextoGrau;
            setimoGrau: typeof $setimoGrau;
            oitavoGrau: typeof $oitavoGrau;
        };
        geometricas: {
            areaQuadradoQualquer: typeof $areaQuadradoQualquer;
            areaTrianguloQualquer: typeof $areaTrianguloQualquer;
            apotemaDeUmTrianguloQualquer: typeof $apotemaDeUmTrianguloQualquer;
            areaRetanguloQualquer: typeof $areaRetanguloQualquer;
            areaCirculoQualquer: typeof $areaCirculoQualquer;
            areaElipseQualquer: typeof $areaElipseQualquer;
            areaPiramideQualquer: typeof $areaPiramideQualquer;
            areaTrapezioQualquer: typeof $areaTrapezioQualquer;
            areaLozangoQualquer: typeof $areaLozangoQualquer;
            areaDeUmaSuperficieQualquer: typeof $areaDeUmaSuperficieQualquer;
            volumeDeUmaSuperficieQualquer: typeof $volumeDeUmaSuperficieQualquer;
            areaEsferaQualquer: typeof $areaEsferaQualquer;
            areaCilindroQualquer: typeof $areaCilindroQualquer;
            areaConeQualquer: typeof $areaConeQualquer;
            areaDeUmPoligonoQualquer: typeof $areaDeUmPoligonoQualquer;
            volumeDeUmPoligonoFormatoLozangoQualquer: typeof $volumeDeUmPoligonoFormatoLozangoQualquer;
            volumeDeUmPoligonoFormatoTrapezioQualquer: typeof $volumeDeUmPoligonoFormatoTrapezioQualquer;
            areaDeUmParalelogramoQualquer: typeof $areaDeUmParalelogramoQualquer;
            areaLateralDeUmPrismaQualquer: typeof $areaLateralDeUmPrismaQualquer;
            volumeDeUmPrismaQualquer: typeof $volumeDeUmPrismaQualquer;
            volumeDeUmCuboQualquer: typeof $volumeDeUmCuboQualquer;
            volumeDeUmParalelepipedoQualquer: typeof $volumeDeUmParalelepipedoQualquer;
            volumeDeUmPiramideQualquer: typeof $volumeDeUmPiramideQualquer;
            volumeDeUmTetraedroQualquer: typeof $volumeDeUmTetraedroQualquer;
            volumeDeUmOctaedroQualquer: typeof $volumeDeUmOctaedroQualquer;
            volumeDeUmDodecaedroQualquer: typeof $volumeDeUmDodecaedroQualquer;
            volumeDeUmIcosaedroQualquer: typeof $volumeDeUmIcosaedroQualquer;
            volumeDeUmConeQualquer: typeof $volumeDeUmConeQualquer;
            volumeDeUmCilindroQualquer: typeof $volumeDeUmCilindroQualquer;
            volumeDeUmEsferaQualquer: typeof $volumeDeUmEsferaQualquer;
            volumeDeUmRombQualquer: typeof $volumeDeUmRombQualquer;
            areaCircunferenciaQualquer: typeof $areaCircunferenciaQualquer;
        };
        algebricos: {
            formulaDeGirard: typeof $formulaDeGirard;
            calculoDoTeoremaDeTalesDeMileto: typeof $calculoDoTeoremaDeTalesDeMileto;
            calculoDoTeoremaDePitagoras: typeof $calculoDoTeoremaDePitagoras;
            calculoDaRelacaoPitagoricaT1: typeof $calculoDaRelacaoPitagoricaT1;
            calculoDaRelacaoPitagoricaT2: typeof $calculoDaRelacaoPitagoricaT2;
            calculoDaRelacaoPitagoricaT3: typeof $calculoDaRelacaoPitagoricaT3;
            calculoDoFatorial: typeof $calculoDoFatorial;
            calculoDaCombinacao: typeof $calculoDaCombinacao;
            calculoDoArranjo: typeof $calculoDoArranjo;
            calculoDaProbabilidade: typeof $calculoDaProbabilidade;
            calculoDoConjugadoDeUmNumeroComplexo: typeof $calculoDoConjugadoDeUmNumeroComplexo;
            calculoDoTeoremaDeStirling: typeof $calculoDoTeoremaDeStirling;
            calculoDaRelacaoDeEuler: typeof $calculoDaRelacaoDeEuler;
            calculoDasPotenciasDeI: typeof $calculoDasPotenciasDeI;
            calculoDaPorcentagem: typeof $calculoDaPorcentagem;
            calculoDaDeterminante2x2: typeof $calculoDaDeterminante2x2;
            calculoDaDeterminante3x3: typeof $calculoDaDeterminante3x3;
            somaPolinomios: typeof $somaPolinomios;
            subtracaoPolinomios: typeof $subtracaoPolinomios;
            multiplicacaoPolinomios: typeof $multiplicacaoPolinomios;
            divisaoPolinomios: typeof $divisaoPolinomios;
            somaMatrizes: typeof $somaMatrizes;
            subtracaoMatrizes: typeof $subtracaoMatrizes;
            multiplicacaoMatrizes: typeof $multiplicacaoMatrizes;
            divisaoMatrizes: typeof $divisaoMatrizes;
            calculoDaVelocidade: typeof $calculoDaVelocidade;
            calculoDoEspaco: typeof $calculoDoEspaco;
            calculoDoTempo: typeof $calculoDoTempo;
            calculoDaAceleracao: typeof $calculoDaAceleracao;
            calculoDaEqHorariaDoTempo: typeof $calculoDaEqHorariaDoTempo;
            calculoDaEqHorariaDoEspaco: typeof $calculoDaEqHorariaDoEspaco;
            calculoDaEqHorariaDaVelocidade: typeof $calculoDaEqHorariaDaVelocidade;
            calculoDaEqHorariaDaAceleracao: typeof $calculoDaEqHorariaDaAceleracao;
            calculoDaEqHorariaDaForca: typeof $calculoDaEqHorariaDaForca;
            calculoDaEqHorariaDoTempoEspaco: typeof $calculoDaEqHorariaDoTempoEspaco;
            calculoDaEnergiaCinetica: typeof $calculoDaEnergiaCinetica;
            calculoDaEnergiaPotencialElastica: typeof $calculoDaEnergiaPotencialElastica;
            calculoDaEnergiaPotencialGravitacional: typeof $calculoDaEnergiaPotencialGravitacional;
            calculoDoPotencialMecanico: typeof $calculoDoPotencialMecanico;
            calculoDoPotencialElastico: typeof $calculoDoPotencialElastico;
            calculoDoPlanoInclinadoSemAtrito: typeof $calculoDoPlanoInclinadoSemAtrito;
            calculoDoPlanoInclinadoComAtrito: typeof $calculoDoPlanoInclinadoComAtrito;
            calculoDaAceleracaoNoPlanoInclinadoEixoX: typeof $calculoDaAceleracaoNoPlanoInclinadoEixoX;
            calculoDaAceleracaoNoPlanoInclinadoEixoY: typeof $calculoDaAceleracaoNoPlanoInclinadoEixoY;
            calculoDoLancamentoHorizontal: typeof $calculoDoLancamentoHorizontal;
            calculoDaEquacaoDeTorricelli: typeof $calculoDaEquacaoDeTorricelli;
            calculoDaAlturaMaximaDeUmLancamentoVertical: typeof $calculoDaAlturaMaximaDeUmLancamentoVertical;
            calculoDoAlcanceDeUmLancamentoVertical: typeof $calculoDoAlcanceDeUmLancamentoVertical;
            calculoDoAlcanceMaximoDeUmLancamentoVertical: typeof $calculoDoAlcanceMaximoDeUmLancamentoVertical;
            calculoDoCalorSensivel: typeof $calculoDoCalorSensivel;
            calculoDoCalorLatente: typeof $calculoDoCalorLatente;
            calculoDasLeisDeNewton: typeof $calculoDasLeisDeNewton;
            calculoDoTrabalho: typeof $calculoDoTrabalho;
            calculoDoConsumoDeEnergia: typeof $calculoDoConsumoDeEnergia;
            calculoDoTeoremaDePascal: typeof $calculoDoTeoremaDePascal;
            calculoDoTeoremaDeStevin: typeof $calculoDoTeoremaDeStevin;
            calculoDoTeoremaDeBoltzmann: typeof $calculoDoTeoremaDeBoltzmann;
            calculoDoTeoremaDeCoulomb: typeof $calculoDoTeoremaDeCoulomb;
            calculoDoTeoremaDePlanck: typeof $calculoDoTeoremaDePlanck;
            calculoDaForcaGravitacional: typeof $calculoDaForcaGravitacional;
            calculoDoAceleracaoCentripetaMovimentoCircularUniforme: typeof $calculoDoAceleracaoCentripetaMovimentoCircularUniforme;
            calculoDoVelocidadeAngularMovimentoCircularUniforme: typeof $calculoDoVelocidadeAngularMovimentoCircularUniforme;
            calculoDoVelocidadeLinearMovimentoCircularUniforme: typeof $calculoDoVelocidadeLinearMovimentoCircularUniforme;
            calculoDaEquacaoHorariaDoTempoMovimentoCircularUnifVariado: typeof $calculoDaEquacaoHorariaDoTempoMovimentoCircularUnifVariado;
            calculoDeToricelliMovimentoCircularUnifVariado: typeof $calculoDeToricelliMovimentoCircularUnifVariado;
            calculoDaAceleracaoAngularMovimentoCircularUnifVariado: typeof $calculoDaAceleracaoAngularMovimentoCircularUnifVariado;
            calculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples: typeof $calculoDaEquacaoHorariaDePosicaoDoMovimentoHarmonicoSimples;
            calculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples: typeof $calculoDaEquacaoHorariaDeVelocidadeDoMovimentoHarmonicoSimples;
            calculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples: typeof $calculoDaEquacaoHorariaDeAceleracaoDoMovimentoHarmonicoSimples;
            calculoDoPeriodo: typeof $calculoDoPeriodo;
            calculoDaFrequencia: typeof $calculoDaFrequencia;
            calculoDaTemperatura: typeof $calculoDaTemperatura;
            calculoDaDilatacaoLinear: typeof $calculoDaDilatacaoLinear;
            calculoDaDilatacaoSuperficial: typeof $calculoDaDilatacaoSuperficial;
            calculoDaDilatacaoVolumetrica: typeof $calculoDaDilatacaoVolumetrica;
            calculoDoPrincipioFundamentalDaHidroestaticaHidrodinamica: typeof $calculoDoPrincipioFundamentalDaHidroestaticaHidrodinamica;
            calculoDoEmpuxoDaHidroestaticaHidrodinamica: typeof $calculoDoEmpuxoDaHidroestaticaHidrodinamica;
            calculoDoPesoAparenteDaHidroestaticaHidrodinamica: typeof $calculoDoPesoAparenteDaHidroestaticaHidrodinamica;
            calculoDaEquacaoDeLagrange: typeof $calculoDaEquacaoDeLagrange;
            calculoDoAtrito: typeof $calculoDoAtrito;
            calculoDaLeiDeCoulomb: typeof $calculoDaLeiDeCoulomb;
            calculoDaLeiDeOhm: typeof $calculoDaLeiDeOhm;
            calculoDoEfeitoJoule: typeof $calculoDoEfeitoJoule;
            calculoDaLeiDeLenz: typeof $calculoDaLeiDeLenz;
            calculoDaForcaEletromotriz: typeof $calculoDaForcaEletromotriz;
            calculoDaContraForcaEletromotriz: typeof $calculoDaContraForcaEletromotriz;
            calculoDoEfeitoFotoeletrico: typeof $calculoDoEfeitoFotoeletrico;
            calculoDaDensidade: typeof $calculoDaDensidade;
            calculoDaTitulacao: typeof $calculoDaTitulacao;
            calculoDaConcentracao: typeof $calculoDaConcentracao;
            calculoDoRendimento: typeof $calculoDoRendimento;
            calculoDaLeiGeralDosGases: typeof $calculoDaLeiGeralDosGases;
            regraDeTresSimples: typeof $regraDeTresSimples;
            regraDeTresComposta: typeof $regraDeTresComposta;
            sistemaDeEquacoes: typeof $sistemaDeEquacoes;
            sistemaDeInequacoes: typeof $sistemaDeInequacoes;
            sistemasLineares: typeof $sistemasLineares;
            somaNumerosComplexos: typeof $somaNumerosComplexos;
            subtracaoNumerosComplexos: typeof $subtracaoNumerosComplexos;
            multiplicacaoNumerosComplexos: typeof $multiplicacaoNumerosComplexos;
            divisaoNumerosComplexos: typeof $divisaoNumerosComplexos;
            potenciaNumerosComplexos: typeof $potenciaNumerosComplexos;
            jurosSimples: typeof $jurosSimples;
            jurosCompostos: typeof $jurosCompostos;
            vetorDaDistanciaEntreDoisPontosR2: typeof $vetorDaDistanciaEntreDoisPontosR2;
            vetorDaDistanciaEntreDoisPontosR3: typeof $vetorDaDistanciaEntreDoisPontosR3;
            moduloDeUmVetorR2: typeof $moduloDeUmVetorR2;
            moduloDeUmVetorR3: typeof $moduloDeUmVetorR3;
            versorDeUmVetorR2: typeof $versorDeUmVetorR2;
            versorDeUmVetorR3: typeof $versorDeUmVetorR3;
            projecaoDeUmVetorSobreOutroVetorR2: typeof $projecaoDeUmVetorSobreOutroVetorR2;
            projecaoDeUmVetorSobreOutroVetorR3: typeof $projecaoDeUmVetorSobreOutroVetorR3;
            somaDeVetoresR2: typeof $somaDeVetoresR2;
            somaDeVetoresR3: typeof $somaDeVetoresR3;
            subtracaoDeVetoresR2: typeof $subtracaoDeVetoresR2;
            subtracaoDeVetoresR3: typeof $subtracaoDeVetoresR3;
            produtoEscalarDeVetoresR2: typeof $produtoEscalarDeVetoresR2;
            produtoEscalarDeVetoresR3: typeof $produtoEscalarDeVetoresR3;
            divisaoDeVetoresR2: typeof $divisaoDeVetoresR2;
            divisaoDeVetoresR3: typeof $divisaoDeVetoresR3;
            pontoMedioDeUmVetorR2: typeof $pontoMedioDeUmVetorR2;
            pontoMedioDeUmVetorR3: typeof $pontoMedioDeUmVetorR3;
            cossenosDiretoresDeUmVetorR2: typeof $cossenosDiretoresDeUmVetorR2;
            cossenosDiretoresDeUmVetorR3: typeof $cossenosDiretoresDeUmVetorR3;
            sinalizacaoQuadrantes: typeof $sinalizacaoQuadrantes;
            sinalizacaoOctantes: typeof $sinalizacaoOctantes;
            quadradoDePunnet: typeof $quadradoDePunnet;
            quadradoDePunnetExpandido: typeof $quadradoDePunnetExpandido;
        };
        experimentais: {
            calculoDaEscalaGeografica: typeof $calculoDaEscalaGeografica;
            calculoDeIDH: typeof $calculoDeIDH;
            calculoDeGINI: typeof $calculoDeGINI;
            calculoDeIMC: typeof $calculoDeIMC;
            calculoDeDensidadePopulacional: typeof $calculoDeDensidadePopulacional;
            calculoDosNumerosPares: typeof $calculoDosNumerosPares;
            calculoDosNumerosImpares: typeof $calculoDosNumerosImpares;
            numeroDeConjuntos: typeof $numeroDeConjuntos;
            criaJogoDaMegaSena: typeof $criaJogoDaMegaSena;
            criaJogoDaQuina: typeof $criaJogoDaQuina;
            criaJogoDaQuadra: typeof $criaJogoDaQuadra;
            criaJogoDaLotoFacil: typeof $criaJogoDaLotoFacil;
            criaJogoDaLotoMania: typeof $criaJogoDaLotoMania;
            calculoDoDiagramaDeVennDe2Nucleos: typeof $calculoDoDiagramaDeVennDe2Grupos;
            calculoDoDiagramaDeVennDe3Nucleos: typeof $calculoDoDiagramaDeVennDe3Grupos;
            calculoDoDiagramaDeVennDe4Nucleos: typeof $calculoDoDiagramaDeVennDe4Grupos;
            calculoDosNumerosPrimos: typeof $calculoDosNumerosPrimos;
        };
    };
};
//# sourceMappingURL=rcalc-core.d.ts.map