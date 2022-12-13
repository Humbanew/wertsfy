/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

/*** Tag Header (conteiner) ***/
var cabecalhoEspaco = document.getElementById("cabecalho_espaco");

/*** Complemento do Cabeçalho ***/
var complemento = document.createElement("div");

complemento.classList.add("cabecalho_texto_complementar_espaco");
complemento.classList.add("cabecalho_texto_complementar_espaco_c");

var compTexto = document.createElement("p");

compTexto.classList.add("cabecalho_texto_complementar_espaco__logo");

compTexto.textContent = "CALCULATOR";

cabecalhoEspaco.appendChild(complemento);

complemento.appendChild(compTexto);