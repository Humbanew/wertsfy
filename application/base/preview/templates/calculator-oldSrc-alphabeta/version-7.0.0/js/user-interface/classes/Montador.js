/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
class Montador{

  montaElemento(elementoHtml="" ,nomeDaClasse="", nomeDoId="", conteudoDeTexto=""||``, inputType="", textoPlaceholder=""){
    let montador = document.createElement(elementoHtml);
    montador.classList.add(nomeDaClasse);
    montador.id = nomeDoId;
    montador.textContent = conteudoDeTexto;
    montador.setAttribute("type", inputType);
    montador.setAttribute("for", nomeDoId);
    montador.setAttribute("step", "0.000001");
    montador.setAttribute("placeholder", textoPlaceholder);
    return montador;
  }

  interligaBody(elemento=typeof(variable)){
    let ui = document.getElementById("body");
    ui.appendChild(elemento);
  }

  interligaElementos(elemento=typeof(variable), nomeDoId=""){
    let elementoSuperior = document.getElementById(nomeDoId);
    elementoSuperior.appendChild(elemento);
  }
}