/* elementos do HTML que serão manipulados de forma dinâmica */
var btnsC = [
  
  document.getElementById('button_c_1'),
  document.getElementById('button_c_2'),
  document.getElementById('button_c_3'),
  document.getElementById('button_c_4'),
  document.getElementById('button_c_5'),
  document.getElementById('button_c_6'),
  document.getElementById('button_c_7')

];

var btnsW = [

  document.getElementById('button_w_1'),
  document.getElementById('button_w_2'),
  document.getElementById('button_w_3'),
  document.getElementById('button_w_4'),
  document.getElementById('button_w_5')
  
];  

var btnsP = [

  document.getElementById('button_p_1')

];

var btnsL7 = [

  document.getElementById('button_l7_1')

];

var btnsH = [

  document.getElementById('button_h_1'),
  document.getElementById('button_h_2'),
  document.getElementById('button_h_3'),
  document.getElementById('button_h_4'),
  document.getElementById('button_h_5'),
  document.getElementById('button_h_6'),
  document.getElementById('button_h_7')

];

var btnsE = [

  document.getElementById('button_e_1'),
  document.getElementById('button_e_2'),
  document.getElementById('button_e_3'),
  document.getElementById('button_e_4'),
  document.getElementById('button_e_5'),
  document.getElementById('button_e_6'),
  document.getElementById('button_e_7')

];

var btnsEMais = [

  document.getElementById('button_e_mais_1'),
  document.getElementById('button_e_mais_2'),
  document.getElementById('button_e_mais_3'),
  document.getElementById('button_e_mais_4'),
  document.getElementById('button_e_mais_5'),
  document.getElementById('button_e_mais_6'),
  document.getElementById('button_e_mais_7')

];

var btnsR = [

  document.getElementById('button_r_1'),
  document.getElementById('button_r_2'),
  document.getElementById('button_r_3'),
  document.getElementById('button_r_4'),
  document.getElementById('button_r_5'),
  document.getElementById('button_r_6'),
  document.getElementById('button_r_7')

];

var btnsRMais = [

  document.getElementById('button_r_mais_1'),
  document.getElementById('button_r_mais_2'),
  document.getElementById('button_r_mais_3'),
  document.getElementById('button_r_mais_4'),
  document.getElementById('button_r_mais_5'),
  document.getElementById('button_r_mais_6'),
  document.getElementById('button_r_mais_7')

];

var btnsM = [

  document.getElementById('button_m_1'),
  document.getElementById('button_m_2')

];

var btnsMMais = [

  document.getElementById('button_m_mais_1'),
  document.getElementById('button_m_mais_2')

];

var btnsX = [

  document.getElementById('button_x_1'),
  document.getElementById('button_x_2'),
  document.getElementById('button_x_3'),
  document.getElementById('button_x_4'),
  document.getElementById('button_x_5'),
  document.getElementById('button_x_6'),
  document.getElementById('button_x_7')

];

var btnsXMais = [

  document.getElementById('button_x_mais_1'),
  document.getElementById('button_x_mais_2'),
  document.getElementById('button_x_mais_3'),
  document.getElementById('button_x_mais_4'),
  document.getElementById('button_x_mais_5'),
  document.getElementById('button_x_mais_6'),
  document.getElementById('button_x_mais_7')

];

var infosV = [

  document.getElementById('cat_versao1'),
  document.getElementById('cat_versao2'),
  document.getElementById('cat_versao3'),
  document.getElementById('cat_versao4'),
  document.getElementById('cat_versao5'),
  document.getElementById('cat_versao6'),
  document.getElementById('cat_versao7'),

];

var infosP = [

  document.getElementById('cat_portas1'),
  document.getElementById('cat_portas2'),
  document.getElementById('cat_portas3'),
  document.getElementById('cat_portas4'),
  document.getElementById('cat_portas5'),
  document.getElementById('cat_portas6'),
  document.getElementById('cat_portas7'),

];

var infosM = [

  document.getElementById('cat_motores1'),
  document.getElementById('cat_motores2'),
  document.getElementById('cat_motores3'),
  document.getElementById('cat_motores4'),
  document.getElementById('cat_motores5'),
  document.getElementById('cat_motores6'),
  document.getElementById('cat_motores7')

];

var infosPot = [

  document.getElementById('cat_potencia1'),
  document.getElementById('cat_potencia2'),
  document.getElementById('cat_potencia3'),
  document.getElementById('cat_potencia4'),
  document.getElementById('cat_potencia5'),
  document.getElementById('cat_potencia6'),
  document.getElementById('cat_potencia7')

];

var infosT = [

  document.getElementById('cat_torque1'),
  document.getElementById('cat_torque2'),
  document.getElementById('cat_torque3'),
  document.getElementById('cat_torque4'),
  document.getElementById('cat_torque5'),
  document.getElementById('cat_torque6'),
  document.getElementById('cat_torque7')

];

var infosCM = [

  document.getElementById('cat_cambio_manual1'),
  document.getElementById('cat_cambio_manual2'),
  document.getElementById('cat_cambio_manual3'),
  document.getElementById('cat_cambio_manual4'),
  document.getElementById('cat_cambio_manual5'),
  document.getElementById('cat_cambio_manual6'),
  document.getElementById('cat_cambio_manual7')

];

var infosCA = [

  document.getElementById('cat_cambio_auto1'),
  document.getElementById('cat_cambio_auto2'),
  document.getElementById('cat_cambio_auto3'),
  document.getElementById('cat_cambio_auto4'),
  document.getElementById('cat_cambio_auto5'),
  document.getElementById('cat_cambio_auto6'),
  document.getElementById('cat_cambio_auto7')

];

var infosPr = [

  document.getElementById('cat_preco1'),
  document.getElementById('cat_preco2'),
  document.getElementById('cat_preco3'),
  document.getElementById('cat_preco4'),
  document.getElementById('cat_preco5'),
  document.getElementById('cat_preco6'),
  document.getElementById('cat_preco7')

];

/* Botões do card 1 do Catálogo */

btnsC[0].addEventListener("click", function() {

  infosV[0].textContent = "Versão: Cool";
  infosP[0].textContent = "Número de Portas: 2 ou 4";
  infosM[0].textContent = "Motor: 0.8L I3 Turbo";
  infosPot[0].textContent = "Potência: 96 cv";
  infosT[0].textContent = "Torque: 20 Kgfm";
  infosCM[0].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[0].textContent = "ou Automático (6 marchas)";
  infosPr[0].textContent = "Preço: R$ 25.940,00";

});

btnsW[0].addEventListener("click", function() {

  infosV[0].textContent = "Versão: Rallyway";
  infosP[0].textContent = "Número de Portas: 2 ou 4";
  infosM[0].textContent = "Motor: 1.4L I4 Turbo";
  infosPot[0].textContent = "Potência: 110 cv";
  infosT[0].textContent = "Torque: 28 Kgfm";
  infosCM[0].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[0].textContent = "ou Automático (6 marchas)";
  infosPr[0].textContent = "Preço: R$ 28.970,00";

});

btnsH[0].addEventListener("click", function() {

  infosV[0].textContent = "Versão: Hybrid";
  infosP[0].textContent = "Número de Portas: 4";
  infosM[0].textContent = "Motor: 1.4L I4 + 80 KW";
  infosPot[0].textContent = "Potência: 120 cv";
  infosT[0].textContent = "Torque: 30 Kgfm";
  infosCM[0].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[0].textContent = "ou Automático CVT (6 marchas)";
  infosPr[0].textContent = "Preço: R$ 31.900,00";

});

btnsE[0].addEventListener("click", function() {

  infosV[0].textContent = "Versão: Eletric";
  infosP[0].textContent = "Número de Portas: 4";
  infosM[0].textContent = "Motor: 90 KW";
  infosPot[0].textContent = "Potência: 100 cv";
  infosT[0].textContent = "Torque: 28 Kgfm";
  infosCM[0].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[0].textContent = "ou Automático CVT (6 marchas)";
  infosPr[0].textContent = "Preço: R$ 34.705,00";

});

btnsEMais[0].addEventListener("click", function() {

  infosV[0].textContent = "Versão: (Kit) Eletric+";
  infosP[0].textContent = "Número de Portas: 4";
  infosM[0].textContent = "Motor: 200 KW";
  infosPot[0].textContent = "Potência: 180 cv";
  infosT[0].textContent = "Torque: 34 Kgfm";
  infosCM[0].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[0].textContent = "ou Automático CVT (6 marchas)";
  infosPr[0].textContent = "Preço: R$ 36.945,10";

});

btnsR[0].addEventListener("click", function() {

  infosV[0].textContent = "Versão: Racing";
  infosP[0].textContent = "Número de Portas: 2 ou 4";
  infosM[0].textContent = "Motor: 2.0L I5 Turbo ou 2.0L I5 Biturbo";
  infosPot[0].textContent = "Potência: 220 cv";
  infosT[0].textContent = "Torque: 40 Kgfm";
  infosCM[0].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[0].textContent = "ou Automático (6 marchas)";
  infosPr[0].textContent = "Preço: R$ 40.900,50";

});

btnsRMais[0].addEventListener("click", function() {

  infosV[0].textContent = "Versão: (Kit) Racing+";
  infosP[0].textContent = "Número de Portas: 2 ou 4";
  infosM[0].textContent = "Motor: 2.5L I5 Turbo ou 2.5L I5 Biturbo";
  infosPot[0].textContent = "Potência: 280 cv";
  infosT[0].textContent = "Torque: 46 Kgfm";
  infosCM[0].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[0].textContent = "ou Automático DGS (7 marchas)";
  infosPr[0].textContent = "Preço: R$ 42.970,00";

});

btnsX[0].addEventListener("click", function() {

  infosV[0].textContent = "Versão: Extreme";
  infosP[0].textContent = "Número de Portas: 2 ou 4";
  infosM[0].textContent = "Motor: 3.0L U6 Turbo ou 3.0L U6 Biturbo";
  infosPot[0].textContent = "Potência: 310 cv";
  infosT[0].textContent = "Torque: 50 Kgfm";
  infosCM[0].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[0].textContent = "ou Automático DGS (8 marchas)";
  infosPr[0].textContent = "Preço: R$ 46.980,60";

});

btnsXMais[0].addEventListener("click", function() {

  infosV[0].textContent = "Versão: (Kit) Extreme+";
  infosP[0].textContent = "Número de Portas: 2 ou 4";
  infosM[0].textContent = "Motor: 3.5 U6 Turbo ou 3.5 U6 Biturbo";
  infosPot[0].textContent = "Potência: 330 cv";
  infosT[0].textContent = "Torque: 52 Kgfm";
  infosCM[0].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[0].textContent = "ou Automático (8 marchas)";
  infosPr[0].textContent = "Preço: R$ 50.700,00";

});

/* Botões do card 2 do Catálogo */

btnsC[1].addEventListener("click", function() {

  infosV[1].textContent = "Versão: Cool";
  infosP[1].textContent = "Número de Portas: 2 ou 4";
  infosM[1].textContent = "Motor: 1.0L I3 Turbo";
  infosPot[1].textContent = "Potência: 98 cv";
  infosT[1].textContent = "Torque: 22 Kgfm";
  infosCM[1].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[1].textContent = "ou Automático (6 marchas)";
  infosPr[1].textContent = "Preço: R$ 30.910,00";

});

btnsW[1].addEventListener("click", function() {

  infosV[1].textContent = "Versão: Rallyway";
  infosP[1].textContent = "Número de Portas: 2 ou 4";
  infosM[1].textContent = "Motor: 1.5L I6 Turbo";
  infosPot[1].textContent = "Potência: 124 cv";
  infosT[1].textContent = "Torque: 28 Kgfm";
  infosCM[1].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[1].textContent = "ou Automático (6 marchas)";
  infosPr[1].textContent = "Preço: R$ 33.970,00";

});

btnsH[1].addEventListener("click", function() {

  infosV[1].textContent = "Versão: Hybrid";
  infosP[1].textContent = "Número de Portas: 4";
  infosM[1].textContent = "Motor: 1.4L I4 + 80 KW";
  infosPot[1].textContent = "Potência: 120 cv";
  infosT[1].textContent = "Torque: 30 Kgfm";
  infosCM[1].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[1].textContent = "ou Automático CVT (6 marchas)";
  infosPr[1].textContent = "Preço: R$ 35.900,00";

});

btnsE[1].addEventListener("click", function() {

  infosV[1].textContent = "Versão: Eletric";
  infosP[1].textContent = "Número de Portas: 4";
  infosM[1].textContent = "Motor: 90 KW";
  infosPot[1].textContent = "Potência: 100 cv";
  infosT[1].textContent = "Torque: 28 Kgfm";
  infosCM[1].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[1].textContent = "ou Automático CVT (6 marchas)";
  infosPr[1].textContent = "Preço: R$ 37.705,00";

});

btnsEMais[1].addEventListener("click", function() {

  infosV[1].textContent = "Versão: (Kit) Eletric+";
  infosP[1].textContent = "Número de Portas: 4";
  infosM[1].textContent = "Motor: 200 KW";
  infosPot[1].textContent = "Potência: 180 cv";
  infosT[1].textContent = "Torque: 34 Kgfm";
  infosCM[1].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[1].textContent = "ou Automático CVT (6 marchas)";
  infosPr[1].textContent = "Preço: R$ 39.945,10";

});

btnsR[1].addEventListener("click", function() {

  infosV[1].textContent = "Versão: Racing";
  infosP[1].textContent = "Número de Portas: 2 ou 4";
  infosM[1].textContent = "Motor: 2.0L I5 Turbo ou 2.0L I5 Biturbo";
  infosPot[1].textContent = "Potência: 220 cv";
  infosT[1].textContent = "Torque: 40 Kgfm";
  infosCM[1].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[1].textContent = "ou Automático (6 marchas)";
  infosPr[1].textContent = "Preço: R$ 42.900,50";

});

btnsRMais[1].addEventListener("click", function() {

  infosV[1].textContent = "Versão: (Kit) Racing+";
  infosP[1].textContent = "Número de Portas: 2 ou 4";
  infosM[1].textContent = "Motor: 2.5L I5 Turbo ou 2.5L I5 Biturbo";
  infosPot[1].textContent = "Potência: 280 cv";
  infosT[1].textContent = "Torque: 46 Kgfm";
  infosCM[1].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[1].textContent = "ou Automático DGS (7 marchas)";
  infosPr[1].textContent = "Preço: R$ 44.970,00";

});

btnsX[1].addEventListener("click", function() {

  infosV[1].textContent = "Versão: Extreme";
  infosP[1].textContent = "Número de Portas: 2 ou 4";
  infosM[1].textContent = "Motor: 3.0L U6 Turbo ou 3.0L U6 Biturbo";
  infosPot[1].textContent = "Potência: 310 cv";
  infosT[1].textContent = "Torque: 50 Kgfm";
  infosCM[1].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[1].textContent = "ou Automático DGS (8 marchas)";
  infosPr[1].textContent = "Preço: R$ 48.980,60";

});

/* Botões do card 3 do Catálogo */

btnsC[2].addEventListener("click", function() {

  infosV[2].textContent = "Versão: Cool";
  infosP[2].textContent = "Número de Portas: 2 ou 4";
  infosM[2].textContent = "Motor: 1.0L I4 Turbo";
  infosPot[2].textContent = "Potência: 124 cv";
  infosT[2].textContent = "Torque: 38 Kgfm";
  infosCM[2].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[2].textContent = "ou Automático (6 marchas)";
  infosPr[2].textContent = "Preço: R$ 34.990,00";

});

btnsW[2].addEventListener("click", function() {

  infosV[2].textContent = "Versão: Rallyway";
  infosP[2].textContent = "Número de Portas: 2 ou 4";
  infosM[2].textContent = "Motor: 1.5L I6 Turbo";
  infosPot[2].textContent = "Potência: 124 cv";
  infosT[2].textContent = "Torque: 28 Kgfm";
  infosCM[2].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[2].textContent = "ou Automático (6 marchas)";
  infosPr[2].textContent = "Preço: R$ 36.970,00";

});

btnsH[2].addEventListener("click", function() {

  infosV[2].textContent = "Versão: Hybrid";
  infosP[2].textContent = "Número de Portas: 4";
  infosM[2].textContent = "Motor: 1.4L I4 + 80 KW";
  infosPot[2].textContent = "Potência: 120 cv";
  infosT[2].textContent = "Torque: 30 Kgfm";
  infosCM[2].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[2].textContent = "ou Automático CVT (6 marchas)";
  infosPr[2].textContent = "Preço: R$ 38.900,00";

});

btnsE[2].addEventListener("click", function() {

  infosV[2].textContent = "Versão: Eletric";
  infosP[2].textContent = "Número de Portas: 4";
  infosM[2].textContent = "Motor: 90 KW";
  infosPot[2].textContent = "Potência: 100 cv";
  infosT[2].textContent = "Torque: 28 Kgfm";
  infosCM[2].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[2].textContent = "ou Automático CVT (6 marchas)";
  infosPr[2].textContent = "Preço: R$ 40.705,00";

});

btnsEMais[2].addEventListener("click", function() {

  infosV[2].textContent = "Versão: (Kit) Eletric+";
  infosP[2].textContent = "Número de Portas: 4";
  infosM[2].textContent = "Motor: 200 KW";
  infosPot[2].textContent = "Potência: 180 cv";
  infosT[2].textContent = "Torque: 34 Kgfm";
  infosCM[2].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[2].textContent = "ou Automático CVT (6 marchas)";
  infosPr[2].textContent = "Preço: R$ 43.945,10";

});

btnsR[2].addEventListener("click", function() {

  infosV[2].textContent = "Versão: Racing";
  infosP[2].textContent = "Número de Portas: 2 ou 4";
  infosM[2].textContent = "Motor: 2.0L I5 Turbo ou 2.0L I5 Biturbo";
  infosPot[2].textContent = "Potência: 220 cv";
  infosT[2].textContent = "Torque: 40 Kgfm";
  infosCM[2].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[2].textContent = "ou Automático (6 marchas)";
  infosPr[2].textContent = "Preço: R$ 45.900,50";

});

btnsRMais[2].addEventListener("click", function() {

  infosV[2].textContent = "Versão: (Kit) Racing+";
  infosP[2].textContent = "Número de Portas: 2 ou 4";
  infosM[2].textContent = "Motor: 2.5L I5 Turbo ou 2.5L I5 Biturbo";
  infosPot[2].textContent = "Potência: 280 cv";
  infosT[2].textContent = "Torque: 46 Kgfm";
  infosCM[2].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[2].textContent = "ou Automático DGS (7 marchas)";
  infosPr[2].textContent = "Preço: R$ 47.970,00";

});

btnsX[2].addEventListener("click", function() {

  infosV[2].textContent = "Versão: Extreme";
  infosP[2].textContent = "Número de Portas: 2 ou 4";
  infosM[2].textContent = "Motor: 3.0L U6 Turbo ou 3.0L U6 Biturbo";
  infosPot[2].textContent = "Potência: 310 cv";
  infosT[2].textContent = "Torque: 50 Kgfm";
  infosCM[2].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[2].textContent = "ou Automático DGS (8 marchas)";
  infosPr[2].textContent = "Preço: R$ 50.980,60";

});

/* Botões do card 4 do Catálogo */

btnsC[3].addEventListener("click", function() {

  infosV[3].textContent = "Versão: Cool";
  infosP[3].textContent = "Número de Portas: 2 ou 4";
  infosM[3].textContent = "Motor: 1.0L I4 Turbo";
  infosPot[3].textContent = "Potência: 124 cv";
  infosT[3].textContent = "Torque: 38 Kgfm";
  infosCM[3].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[3].textContent = "ou Automático (6 marchas)";
  infosPr[3].textContent = "Preço: R$ 34.990,00";

});

btnsH[3].addEventListener("click", function() {

  infosV[3].textContent = "Versão: Hybrid";
  infosP[3].textContent = "Número de Portas: 4";
  infosM[3].textContent = "Motor: 1.4L I4 + 80 KW";
  infosPot[3].textContent = "Potência: 120 cv";
  infosT[3].textContent = "Torque: 30 Kgfm";
  infosCM[3].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[3].textContent = "ou Automático CVT (6 marchas)";
  infosPr[3].textContent = "Preço: R$ 38.900,00";

});

btnsE[3].addEventListener("click", function() {

  infosV[3].textContent = "Versão: Eletric";
  infosP[3].textContent = "Número de Portas: 4";
  infosM[3].textContent = "Motor: 90 KW";
  infosPot[3].textContent = "Potência: 100 cv";
  infosT[3].textContent = "Torque: 28 Kgfm";
  infosCM[3].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[3].textContent = "ou Automático CVT (6 marchas)";
  infosPr[3].textContent = "Preço: R$ 40.705,00";

});

btnsEMais[3].addEventListener("click", function() {

  infosV[3].textContent = "Versão: (Kit) Eletric+";
  infosP[3].textContent = "Número de Portas: 4";
  infosM[3].textContent = "Motor: 200 KW";
  infosPot[3].textContent = "Potência: 180 cv";
  infosT[3].textContent = "Torque: 34 Kgfm";
  infosCM[3].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[3].textContent = "ou Automático CVT (6 marchas)";
  infosPr[3].textContent = "Preço: R$ 43.945,10";

});

btnsM[0].addEventListener("click", function() {

  infosV[3].textContent = "Versão: Master";
  infosP[3].textContent = "Número de Portas: 2 ou 4";
  infosM[3].textContent = "Motor: 2.0L I5 Turbo ou 2.0L I5 Biturbo";
  infosPot[3].textContent = "Potência: 220 cv";
  infosT[3].textContent = "Torque: 40 Kgfm";
  infosCM[3].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[3].textContent = "ou Automático (6 marchas)";
  infosPr[3].textContent = "Preço: R$ 45.900,50";

});

btnsMMais[0].addEventListener("click", function() {

  infosV[3].textContent = "Versão: (Kit) Master+";
  infosP[3].textContent = "Número de Portas: 2 ou 4";
  infosM[3].textContent = "Motor: 2.5L I5 Turbo ou 2.5L I5 Biturbo";
  infosPot[3].textContent = "Potência: 280 cv";
  infosT[3].textContent = "Torque: 46 Kgfm";
  infosCM[3].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[3].textContent = "ou Automático DGS (7 marchas)";
  infosPr[3].textContent = "Preço: R$ 47.970,00";

});

btnsR[3].addEventListener("click", function() {

  infosV[3].textContent = "Versão: Racing";
  infosP[3].textContent = "Número de Portas: 2 ou 4";
  infosM[3].textContent = "Motor: 2.0L I5 Turbo ou 2.0L I5 Biturbo";
  infosPot[3].textContent = "Potência: 220 cv";
  infosT[3].textContent = "Torque: 40 Kgfm";
  infosCM[3].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[3].textContent = "ou Automático (6 marchas)";
  infosPr[3].textContent = "Preço: R$ 45.900,50";

});

btnsRMais[3].addEventListener("click", function() {

  infosV[3].textContent = "Versão: (Kit) Racing+";
  infosP[3].textContent = "Número de Portas: 2 ou 4";
  infosM[3].textContent = "Motor: 2.5L I5 Turbo ou 2.5L I5 Biturbo";
  infosPot[3].textContent = "Potência: 280 cv";
  infosT[3].textContent = "Torque: 46 Kgfm";
  infosCM[3].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[3].textContent = "ou Automático DGS (7 marchas)";
  infosPr[3].textContent = "Preço: R$ 47.970,00";

});

btnsX[3].addEventListener("click", function() {

  infosV[3].textContent = "Versão: Extreme";
  infosP[3].textContent = "Número de Portas: 2 ou 4";
  infosM[3].textContent = "Motor: 3.0L U6 Turbo ou 3.0L U6 Biturbo";
  infosPot[3].textContent = "Potência: 310 cv";
  infosT[3].textContent = "Torque: 50 Kgfm";
  infosCM[3].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[3].textContent = "ou Automático DGS (8 marchas)";
  infosPr[3].textContent = "Preço: R$ 50.980,60";

});

/* Botões do card 5 do Catálogo */

btnsC[4].addEventListener("click", function() {

  infosV[4].textContent = "Versão: Cool";
  infosP[4].textContent = "Número de Portas: 2 ou 4";
  infosM[4].textContent = "Motor: 1.5L I6 Turbo";
  infosPot[4].textContent = "Potência: 124 cv";
  infosT[4].textContent = "Torque: 38 Kgfm";
  infosCM[4].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[4].textContent = "ou Automático (6 marchas)";
  infosPr[4].textContent = "Preço: R$ 130.910,00";

});

btnsH[4].addEventListener("click", function() {

  infosV[4].textContent = "Versão: Hybrid";
  infosP[4].textContent = "Número de Portas: 4";
  infosM[4].textContent = "Motor: 1.4L I4 + 80 KW";
  infosPot[4].textContent = "Potência: 120 cv";
  infosT[4].textContent = "Torque: 30 Kgfm";
  infosCM[4].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[4].textContent = "ou Automático CVT (6 marchas)";
  infosPr[4].textContent = "Preço: R$ 134.900,00";

});

btnsE[4].addEventListener("click", function() {

  infosV[4].textContent = "Versão: Eletric";
  infosP[4].textContent = "Número de Portas: 4";
  infosM[4].textContent = "Motor: 90 KW";
  infosPot[4].textContent = "Potência: 100 cv";
  infosT[4].textContent = "Torque: 28 Kgfm";
  infosCM[4].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[4].textContent = "ou Automático CVT (6 marchas)";
  infosPr[4].textContent = "Preço: R$ 138.705,00";

});

btnsEMais[4].addEventListener("click", function() {

  infosV[4].textContent = "Versão: (Kit) Eletric+";
  infosP[4].textContent = "Número de Portas: 4";
  infosM[4].textContent = "Motor: 200 KW";
  infosPot[4].textContent = "Potência: 180 cv";
  infosT[4].textContent = "Torque: 34 Kgfm";
  infosCM[4].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[4].textContent = "ou Automático CVT (6 marchas)";
  infosPr[4].textContent = "Preço: R$ 143.945,10";

});

btnsM[1].addEventListener("click", function() {

  infosV[4].textContent = "Versão: Master";
  infosP[4].textContent = "Número de Portas: 2 ou 4";
  infosM[4].textContent = "Motor: 2.0L I5 Turbo ou 2.0L I5 Biturbo";
  infosPot[4].textContent = "Potência: 220 cv";
  infosT[4].textContent = "Torque: 40 Kgfm";
  infosCM[4].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[4].textContent = "ou Automático (6 marchas)";
  infosPr[4].textContent = "Preço: R$ 145.900,50";

});

btnsMMais[1].addEventListener("click", function() {

  infosV[4].textContent = "Versão: (Kit) Master+";
  infosP[4].textContent = "Número de Portas: 2 ou 4";
  infosM[4].textContent = "Motor: 2.5L I5 Turbo ou 2.5L I5 Biturbo";
  infosPot[4].textContent = "Potência: 280 cv";
  infosT[4].textContent = "Torque: 46 Kgfm";
  infosCM[4].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[4].textContent = "ou Automático DGS (7 marchas)";
  infosPr[4].textContent = "Preço: R$ 147.970,00";

});

btnsR[4].addEventListener("click", function() {

  infosV[4].textContent = "Versão: Racing";
  infosP[4].textContent = "Número de Portas: 2 ou 4";
  infosM[4].textContent = "Motor: 2.0L I5 Turbo ou 2.0L I5 Biturbo";
  infosPot[4].textContent = "Potência: 220 cv";
  infosT[4].textContent = "Torque: 40 Kgfm";
  infosCM[4].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[4].textContent = "ou Automático (6 marchas)";
  infosPr[4].textContent = "Preço: R$ 155.900,50";

});

btnsRMais[4].addEventListener("click", function() {

  infosV[4].textContent = "Versão: (Kit) Racing+";
  infosP[4].textContent = "Número de Portas: 2 ou 4";
  infosM[4].textContent = "Motor: 2.5L I5 Turbo ou 2.5L I5 Biturbo";
  infosPot[4].textContent = "Potência: 280 cv";
  infosT[4].textContent = "Torque: 46 Kgfm";
  infosCM[4].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[4].textContent = "ou Automático DGS (7 marchas)";
  infosPr[4].textContent = "Preço: R$ 160.970,00";

});

btnsX[4].addEventListener("click", function() {

  infosV[4].textContent = "Versão: Extreme";
  infosP[4].textContent = "Número de Portas: 2 ou 4";
  infosM[4].textContent = "Motor: 3.0L U6 Turbo ou 3.0L U6 Biturbo";
  infosPot[4].textContent = "Potência: 310 cv";
  infosT[4].textContent = "Torque: 50 Kgfm";
  infosCM[4].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[4].textContent = "ou Automático DGS (8 marchas)";
  infosPr[4].textContent = "Preço: R$ 164.980,60";

});

/* Botões do card 6 do Catálogo */

btnsC[5].addEventListener("click", function() {

  infosV[5].textContent = "Versão: Cool";
  infosP[5].textContent = "Número de Portas: 2 ou 4";
  infosM[5].textContent = "Motor: 0.8L I3 Turbo";
  infosPot[5].textContent = "Potência: 96 cv";
  infosT[5].textContent = "Torque: 20 Kgfm";
  infosCM[5].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[5].textContent = "ou Automático (6 marchas)";
  infosPr[5].textContent = "Preço: R$ 22.900,00";

});

btnsW[3].addEventListener("click", function() {

  infosV[5].textContent = "Versão: Rallyway";
  infosP[5].textContent = "Número de Portas: 2 ou 4";
  infosM[5].textContent = "Motor: 1.4L I4 Turbo";
  infosPot[5].textContent = "Potência: 110 cv";
  infosT[5].textContent = "Torque: 28 Kgfm";
  infosCM[5].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[5].textContent = "ou Automático (6 marchas)";
  infosPr[5].textContent = "Preço: R$ 25.970,00";

});

btnsH[5].addEventListener("click", function() {

  infosV[5].textContent = "Versão: Hybrid";
  infosP[5].textContent = "Número de Portas: 4";
  infosM[5].textContent = "Motor: 1.4L I4 + 80 KW";
  infosPot[5].textContent = "Potência: 120 cv";
  infosT[5].textContent = "Torque: 30 Kgfm";
  infosCM[5].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[5].textContent = "ou Automático CVT (6 marchas)";
  infosPr[5].textContent = "Preço: R$ 30.900,00";

});

btnsE[5].addEventListener("click", function() {

  infosV[5].textContent = "Versão: Eletric";
  infosP[5].textContent = "Número de Portas: 4";
  infosM[5].textContent = "Motor: 90 KW";
  infosPot[5].textContent = "Potência: 100 cv";
  infosT[5].textContent = "Torque: 28 Kgfm";
  infosCM[5].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[5].textContent = "ou Automático CVT (6 marchas)";
  infosPr[5].textContent = "Preço: R$ 34.705,00";

});

btnsEMais[5].addEventListener("click", function() {

  infosV[5].textContent = "Versão: (Kit) Eletric+";
  infosP[5].textContent = "Número de Portas: 4";
  infosM[5].textContent = "Motor: 200 KW";
  infosPot[5].textContent = "Potência: 180 cv";
  infosT[5].textContent = "Torque: 34 Kgfm";
  infosCM[5].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[5].textContent = "ou Automático CVT (6 marchas)";
  infosPr[5].textContent = "Preço: R$ 36.945,10";

});

btnsR[5].addEventListener("click", function() {

  infosV[5].textContent = "Versão: Racing";
  infosP[5].textContent = "Número de Portas: 2 ou 4";
  infosM[5].textContent = "Motor: 2.0L I5 Turbo ou 2.0L I5 Biturbo";
  infosPot[5].textContent = "Potência: 220 cv";
  infosT[5].textContent = "Torque: 40 Kgfm";
  infosCM[5].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[5].textContent = "ou Automático (6 marchas)";
  infosPr[5].textContent = "Preço: R$ 40.900,50";

});

btnsRMais[5].addEventListener("click", function() {

  infosV[5].textContent = "Versão: (Kit) Racing+";
  infosP[5].textContent = "Número de Portas: 2 ou 4";
  infosM[5].textContent = "Motor: 2.5L I5 Turbo ou 2.5L I5 Biturbo";
  infosPot[5].textContent = "Potência: 280 cv";
  infosT[5].textContent = "Torque: 46 Kgfm";
  infosCM[5].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[5].textContent = "ou Automático DGS (7 marchas)";
  infosPr[5].textContent = "Preço: R$ 42.970,00";

});

btnsX[5].addEventListener("click", function() {

  infosV[5].textContent = "Versão: Extreme";
  infosP[5].textContent = "Número de Portas: 2 ou 4";
  infosM[5].textContent = "Motor: 3.0L U6 Turbo ou 3.0L U6 Biturbo";
  infosPot[5].textContent = "Potência: 310 cv";
  infosT[5].textContent = "Torque: 50 Kgfm";
  infosCM[5].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[5].textContent = "ou Automático DGS (8 marchas)";
  infosPr[5].textContent = "Preço: R$ 46.980,60";

});

btnsXMais[1].addEventListener("click", function() {

  infosV[5].textContent = "Versão: (Kit) Extreme+";
  infosP[5].textContent = "Número de Portas: 2 ou 4";
  infosM[5].textContent = "Motor: 3.5 U6 Turbo ou 3.5 U6 Biturbo";
  infosPot[5].textContent = "Potência: 330 cv";
  infosT[5].textContent = "Torque: 52 Kgfm";
  infosCM[5].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[5].textContent = "ou Automático (8 marchas)";
  infosPr[5].textContent = "Preço: R$ 50.700,00";

});

/* Botões do card 7 do Catálogo */

btnsC[6].addEventListener("click", function() {

  infosV[6].textContent = "Versão: Cool";
  infosP[6].textContent = "Número de Portas: 2 ou 4";
  infosM[6].textContent = "Motor: 1.0L I4 Turbo";
  infosPot[6].textContent = "Potência: 128 cv";
  infosT[6].textContent = "Torque: 38 Kgfm";
  infosCM[6].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[6].textContent = "ou Automático (6 marchas)";
  infosPr[6].textContent = "Preço: R$ 38.920,00";

});

btnsW[4].addEventListener("click", function() {

  infosV[6].textContent = "Versão: Rallyway";
  infosP[6].textContent = "Número de Portas: 2 ou 4";
  infosM[6].textContent = "Motor: 1.5L I6 Turbo";
  infosPot[6].textContent = "Potência: 124 cv";
  infosT[6].textContent = "Torque: 28 Kgfm";
  infosCM[6].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[6].textContent = "ou Automático (6 marchas)";
  infosPr[6].textContent = "Preço: R$ 41.970,00";

});

btnsL7[0].addEventListener("click", function() {

  infosV[6].textContent = "Versão: Lougue 7";
  infosP[6].textContent = "Número de Portas: 2 ou 4";
  infosM[6].textContent = "Motor: 1.6L I4 Turbo";
  infosPot[6].textContent = "Potência: 124 cv";
  infosT[6].textContent = "Torque: 28 Kgfm";
  infosCM[6].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[6].textContent = "ou Automático (6 marchas)";
  infosPr[6].textContent = "Preço: R$ 45.970,00";

});

btnsH[6].addEventListener("click", function() {

  infosV[6].textContent = "Versão: Hybrid";
  infosP[6].textContent = "Número de Portas: 4";
  infosM[6].textContent = "Motor: 1.4L I4 + 80 KW";
  infosPot[6].textContent = "Potência: 120 cv";
  infosT[6].textContent = "Torque: 30 Kgfm";
  infosCM[6].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[6].textContent = "ou Automático CVT (6 marchas)";
  infosPr[6].textContent = "Preço: R$ 49.900,00";

});

btnsE[6].addEventListener("click", function() {

  infosV[6].textContent = "Versão: Eletric";
  infosP[6].textContent = "Número de Portas: 4";
  infosM[6].textContent = "Motor: 90 KW";
  infosPot[6].textContent = "Potência: 100 cv";
  infosT[6].textContent = "Torque: 28 Kgfm";
  infosCM[6].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[6].textContent = "ou Automático CVT (6 marchas)";
  infosPr[6].textContent = "Preço: R$ 53.705,00";

});

btnsEMais[6].addEventListener("click", function() {

  infosV[6].textContent = "Versão: (Kit) Eletric+";
  infosP[6].textContent = "Número de Portas: 4";
  infosM[6].textContent = "Motor: 200 KW";
  infosPot[6].textContent = "Potência: 180 cv";
  infosT[6].textContent = "Torque: 34 Kgfm";
  infosCM[6].textContent = "Câmbio: Manual (5 marchas)";
  infosCA[6].textContent = "ou Automático CVT (6 marchas)";
  infosPr[6].textContent = "Preço: R$ 58.945,10";

});

btnsR[6].addEventListener("click", function() {

  infosV[6].textContent = "Versão: Racing";
  infosP[6].textContent = "Número de Portas: 2 ou 4";
  infosM[6].textContent = "Motor: 2.0L I5 Turbo ou 2.0L I5 Biturbo";
  infosPot[6].textContent = "Potência: 220 cv";
  infosT[6].textContent = "Torque: 40 Kgfm";
  infosCM[6].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[6].textContent = "ou Automático (6 marchas)";
  infosPr[6].textContent = "Preço: R$ 64.900,50";

});

btnsRMais[6].addEventListener("click", function() {

  infosV[6].textContent = "Versão: (Kit) Racing+";
  infosP[6].textContent = "Número de Portas: 2 ou 4";
  infosM[6].textContent = "Motor: 2.5L I5 Turbo ou 2.5L I5 Biturbo";
  infosPot[6].textContent = "Potência: 280 cv";
  infosT[6].textContent = "Torque: 46 Kgfm";
  infosCM[6].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[6].textContent = "ou Automático DGS (7 marchas)";
  infosPr[6].textContent = "Preço: R$ 68.970,00";

});

btnsX[6].addEventListener("click", function() {

  infosV[6].textContent = "Versão: Extreme";
  infosP[6].textContent = "Número de Portas: 2 ou 4";
  infosM[6].textContent = "Motor: 3.0L U6 Turbo ou 3.0L U6 Biturbo";
  infosPot[6].textContent = "Potência: 310 cv";
  infosT[6].textContent = "Torque: 50 Kgfm";
  infosCM[6].textContent = "Câmbio: Manual (6 marchas)";
  infosCA[6].textContent = "ou Automático DGS (8 marchas)";
  infosPr[6].textContent = "Preço: R$ 73.980,60";

});
