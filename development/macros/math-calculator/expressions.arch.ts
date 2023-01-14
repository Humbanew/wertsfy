import { Macro_math_calculator_exp_calc_aceleracao_method } from "./expressions/calc-aceleracao";
import { Macro_math_calculator_exp_calc_aceleracao_no_plano_inclinado_eixo_x_method } from "./expressions/calc-aceleracao-plano-inclinado-eixo-x";
import { Macro_math_calculator_exp_calc_aceleracao_no_plano_inclinado_eixo_y_method } from "./expressions/calc-aceleracao-plano-inclinado-eixo-y";
import { Macro_math_calculator_exp_calc_alcance_lancamento_vertical_method } from "./expressions/calc-alcance-lancamento-vertical";
import { Macro_math_calculator_exp_calc_alcance_maximo_lancamento_vertical_method } from "./expressions/calc-alcance-maximo-lancamento-vertical";
import { Macro_math_calculator_exp_calc_altura_maxima_lancamento_vertical_method } from "./expressions/calc-altura-max-lancamento-vertical";
import { Macro_math_calculator_exp_calc_arranjo_method } from "./expressions/calc-arranjo";
import { Macro_math_calculator_exp_calc_calor_latente_method } from "./expressions/calc-calor-latente";
import { Macro_math_calculator_exp_calc_calor_sensivel_method } from "./expressions/calc-calor-sensivel";
import { Macro_math_calculator_exp_calc_combinacao_method } from "./expressions/calc-combinacao";
import { Macro_math_calculator_exp_calc_conjugado_numero_complexo_method } from "./expressions/calc-conjugado-num-complex";
import { Macro_math_calculator_exp_calc_consumo_de_energia_method } from "./expressions/calc-consumo-de-energia";
import { Macro_math_calculator_exp_calc_determinante_method } from "./expressions/calc-determinante";
import { Macro_math_calculator_exp_calc_energia_cinetica_method } from "./expressions/calc-energia-cinetica";
import { Macro_math_calculator_exp_calc_energia_potencial_elastica_method } from "./expressions/calc-energia-potencial-elastica";
import { Macro_math_calculator_exp_calc_energia_potencial_gravitacional_method } from "./expressions/calc-energia-potencial-gravitacional";
import { Macro_math_calculator_exp_calc_espaco_method } from "./expressions/calc-espaco";
import { Macro_math_calculator_exp_calc_fatorial_method } from "./expressions/calc-fatorial";
import { Macro_math_calculator_exp_calc_lancamento_horizontal_method } from "./expressions/calc-lancamento-horizontal";
import { Macro_math_calculator_exp_calc_leis_de_newton_method } from "./expressions/calc-leis-de-newton";
import { Macro_math_calculator_exp_calc_matrizes_method } from "./expressions/calc-matrizes";
import { Macro_math_calculator_exp_calc_plano_inclinado_com_atrito_method } from "./expressions/calc-plano-inclinado-com-atrito";
import { Macro_math_calculator_exp_calc_plano_inclinado_sem_atrito_method } from "./expressions/calc-plano-inclinado-sem-atrito";
import { Macro_math_calculator_exp_calc_polinomios_method } from "./expressions/calc-polinomios";
import { Macro_math_calculator_exp_calc_porcentagem_method } from "./expressions/calc-porcentagem";
import { Macro_math_calculator_exp_calc_potencial_elastico_method } from "./expressions/calc-potencial-elastico";
import { Macro_math_calculator_exp_calc_potencial_mecanico_method } from "./expressions/calc-potencial-mecanico";
import { Macro_math_calculator_exp_calc_potencias_de_i_method } from "./expressions/calc-potencias-de-i";
import { Macro_math_calculator_exp_calc_probabilidade_method } from "./expressions/calc-probabilidade";
import { Macro_math_calculator_exp_calc_relacao_euler_method } from "./expressions/calc-relacao-euler";
import { Macro_math_calculator_exp_calc_tempo_method } from "./expressions/calc-tempo";
import { Macro_math_calculator_exp_calc_trabalho_method } from "./expressions/calc-trabalho";
import { Macro_math_calculator_exp_calc_velocidade_method } from "./expressions/calc-velocidade";
import { Macro_math_calculator_exp_eq_horaria_aceleracao_method } from "./expressions/eq-horaria-aceleracao";
import { Macro_math_calculator_exp_eq_horaria_espaco_method } from "./expressions/eq-horaria-espaco";
import { Macro_math_calculator_exp_eq_horaria_forca_method } from "./expressions/eq-horaria-forca";
import { Macro_math_calculator_exp_eq_horaria_tempo_method } from "./expressions/eq-horaria-tempo";
import { Macro_math_calculator_exp_eq_horaria_espaco_tempo_method } from "./expressions/eq-horaria-tempoespaco";
import { Macro_math_calculator_exp_eq_horaria_velocidade_method } from "./expressions/eq-horaria-velocidade";
import { Macro_math_calculator_exp_eq_torricelli_method } from "./expressions/eq-torricelli";
import { Macro_math_calculator_exp_teo_girard_method } from "./expressions/teo-girard";
import { Macro_math_calculator_exp_teo_pitagoras_method } from "./expressions/teo-pitagoras";
import { Macro_math_calculator_exp_teo_stirling_method } from "./expressions/teo-stirling";
import { Macro_math_calculator_exp_teo_tales_mileto_method } from "./expressions/teo-tales-mileto";

interface ExpressionsArch {

  teoGirard: 
    typeof Macro_math_calculator_exp_teo_girard_method;
  
  teoTalesMileto: 
    typeof Macro_math_calculator_exp_teo_tales_mileto_method;
  
  teoPitagoras: 
    typeof Macro_math_calculator_exp_teo_pitagoras_method;
  
  calcFatorial: 
    typeof Macro_math_calculator_exp_calc_fatorial_method;
  
  calcCombinacao: 
    typeof Macro_math_calculator_exp_calc_combinacao_method;
  
  calcArranjo: 
    typeof Macro_math_calculator_exp_calc_arranjo_method;
  
  calcProbabilidade: 
    typeof Macro_math_calculator_exp_calc_probabilidade_method;
  
  calcConjugadoNumComplexo: 
    typeof Macro_math_calculator_exp_calc_conjugado_numero_complexo_method;
  
  teoStirling: 
    typeof Macro_math_calculator_exp_teo_stirling_method;
  
  calcRelacaoEuler: 
    typeof Macro_math_calculator_exp_calc_relacao_euler_method;
  
  calcPotenciasDeI: 
    typeof Macro_math_calculator_exp_calc_potencias_de_i_method;
  
  calcPorcentagem: 
    typeof Macro_math_calculator_exp_calc_porcentagem_method;
  
  calcDeterminante: 
    typeof Macro_math_calculator_exp_calc_determinante_method;
  
  calcPolinomios: 
    typeof Macro_math_calculator_exp_calc_polinomios_method;
  
  calcMatrizes: 
    typeof Macro_math_calculator_exp_calc_matrizes_method;
  
  calcVelocidade: 
    typeof Macro_math_calculator_exp_calc_velocidade_method;
  
  calcEspaco: 
    typeof Macro_math_calculator_exp_calc_espaco_method;
  
  calcTempo: 
    typeof Macro_math_calculator_exp_calc_tempo_method;
  
  calcAceleracao: 
    typeof Macro_math_calculator_exp_calc_aceleracao_method;
  
  eqHorariaTempo: 
    typeof Macro_math_calculator_exp_eq_horaria_tempo_method;
  
  eqHorariaEspaco: 
    typeof Macro_math_calculator_exp_eq_horaria_espaco_method;
  
  eqHorariaVelocidade:
    typeof Macro_math_calculator_exp_eq_horaria_velocidade_method;
  
  eqHorariaAceleracao:
    typeof Macro_math_calculator_exp_eq_horaria_aceleracao_method;
  
  eqHorariaForca: 
    typeof Macro_math_calculator_exp_eq_horaria_forca_method;
  
  eqHorariaEspacoTempo: 
    typeof Macro_math_calculator_exp_eq_horaria_espaco_tempo_method;
  
  calcEnergiaCinetica: 
    typeof Macro_math_calculator_exp_calc_energia_cinetica_method;
  
  calcEnergiaPotencialElastica: 
    typeof Macro_math_calculator_exp_calc_energia_potencial_elastica_method;
  
  calcEnergiaPotencialGravitacional: 
    typeof Macro_math_calculator_exp_calc_energia_potencial_gravitacional_method;
    
  calcPotencialMecanico:
    typeof Macro_math_calculator_exp_calc_potencial_mecanico_method;

  calcPotencialElastico:
    typeof Macro_math_calculator_exp_calc_potencial_elastico_method;

  calcPlanoInclinadoSemAtrito:
    typeof Macro_math_calculator_exp_calc_plano_inclinado_sem_atrito_method;
    
  calcPlanoInclinadoComAtrito:
    typeof Macro_math_calculator_exp_calc_plano_inclinado_com_atrito_method;

  calcAceleracaoPlanoInclinadoEixoX:
    typeof Macro_math_calculator_exp_calc_aceleracao_no_plano_inclinado_eixo_x_method;
  
  calcAceleracaoPlanoInclinadoEixoY:
    typeof Macro_math_calculator_exp_calc_aceleracao_no_plano_inclinado_eixo_y_method;

  calcLancamentoHorizontal:
    typeof Macro_math_calculator_exp_calc_lancamento_horizontal_method;
  
  eqTorricelli:
    typeof Macro_math_calculator_exp_eq_torricelli_method;
  
  calcAlturaMaxLancamentoVertical:
    typeof Macro_math_calculator_exp_calc_altura_maxima_lancamento_vertical_method;

  calcAlcanceLancamentoVertical:
    typeof Macro_math_calculator_exp_calc_alcance_lancamento_vertical_method;

  calcAlcanceMaxLancamentoVertical:
    typeof Macro_math_calculator_exp_calc_alcance_maximo_lancamento_vertical_method;
  
  calcCalorSensivel:
    typeof Macro_math_calculator_exp_calc_calor_sensivel_method;

  calcCalorLatente:
    typeof Macro_math_calculator_exp_calc_calor_latente_method;

  calcLeisDeNewton:
    typeof Macro_math_calculator_exp_calc_leis_de_newton_method;

  calcTrabalho:
    typeof Macro_math_calculator_exp_calc_trabalho_method;

  calcConsumoDeEnergia:
    typeof Macro_math_calculator_exp_calc_consumo_de_energia_method;
  
} export var Macro_math_calculator_expressions_arch: ExpressionsArch;
