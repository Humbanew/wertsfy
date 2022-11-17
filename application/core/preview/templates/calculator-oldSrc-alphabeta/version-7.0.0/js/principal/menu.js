/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

var color = "#ffff00";

/* elementos do HTML que serão manipulados de forma dinâmica */

var options = document.getElementById("cab");

var btn = document.getElementById("btn_menu");

var btnImg = document.getElementById("btn_menu_img");

var nav = document.getElementById("cab_nav");

var main = document.getElementById("main");

var bluep = document.getElementById("bluep");

var calc = document.getElementById("calc");

var comm = document.getElementById("comm");

var devel = document.getElementById("devel");

var envir = document.getElementById("envir");

var helps = document.getElementById("helps");

var racin = document.getElementById("racin");

var reads = document.getElementById("reads");

var stud = document.getElementById("stud");

var vibm = document.getElementById("vibm");

var falec = document.getElementById("falec");

function cooldown() {
  btn.removeEventListener("mouseover", () => {
  });

  setTimeout(() => {
    btn.addEventListener("mouseover", () => {

      options.style.transition = "margin-left 1.5s";

      options.style.position = "static";
      options.style.opacity = "1";

      options.style.width = "110%";
      options.style.marginLeft = "-2.4%";
      options.style.height = "40px";
      options.style.zIndex = "1";

      btn.style.borderTopColor = "#00ff00";
      btn.style.borderLeftColor = "#00ff00";
      btn.style.borderRightColor = "#00ff00";
      btn.style.borderBottomColor = "#00ff00";
      btnImg.setAttribute("src", "svg/icons/opitions_active.svg");

      setTimeout(() => {
        options.style.position = "fixed";
        options.style.opacity = "0";

        options.style.width = "0%";
        options.style.height = "0px";
        options.style.marginLeft = "-2000%";
        options.style.zIndex = "1";

        btn.style.borderTopColor = "#0099cc";
        btn.style.borderLeftColor = "#0099cc";
        btn.style.borderRightColor = "#0066ff";
        btn.style.borderBottomColor = "#0066ff";
        btnImg.setAttribute("src", "svg/icons/opitions_comum.svg");
      }, 30000);
    }, 10000);
  });
}

function transforma() {

  options.style.position = "fixed";
  options.style.opacity = "0";
  options.style.width = "0%";
  options.style.height = "0px";
  options.style.marginLeft = "-2000%";
  options.style.zIndex = "1";
  btn.style.borderTopColor = "#0099cc";
  btn.style.borderLeftColor = "#0099cc";
  btn.style.borderRightColor = "#0066ff";
  btn.style.borderBottomColor = "#0066ff";
  btnImg.setAttribute("src", "svg/icons/opitions_comum.svg");
}

/* Ao passar o cursor sob o botão, o menu aparece e a cor de fundo e a borda passam a ser da cor laranja no cabeçalho */

var color = "#ffff00";

btn.addEventListener("mouseover", function () {

  options.style.transition = "margin-left 1.5s";

  options.style.position = "static";
  options.style.opacity = "1";

  options.style.width = "110%";
  options.style.marginLeft = "-2.4%";
  options.style.height = "40px";
  options.style.zIndex = "1";

  btn.style.borderTopColor = "#00ff00";
  btn.style.borderLeftColor = "#00ff00";
  btn.style.borderRightColor = "#00ff00";
  btn.style.borderBottomColor = "#00ff00";
  btnImg.setAttribute("src", "svg/icons/opitions_active.svg");

  setTimeout(() => {
    options.style.position = "fixed";
    options.style.opacity = "0";

    options.style.width = "0%";
    options.style.height = "0px";
    options.style.marginLeft = "-2000%";
    options.style.zIndex = "1";

    btn.style.borderTopColor = "#0099cc";
    btn.style.borderLeftColor = "#0099cc";
    btn.style.borderRightColor = "#0066ff";
    btn.style.borderBottomColor = "#0066ff";
    btnImg.setAttribute("src", "svg/icons/opitions_comum.svg");
  }, 28000);

  btn.addEventListener("click", function () {
    transforma();
    cooldown();
  });
});

var color = "#ffff00";

main.addEventListener("click", function () {
  /** Dinamicidade do complemento do cabecalho **/
  compTexto.textContent = "";

  complemento.classList.remove("cabecalho_texto_complementar_espaco_c");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_co");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_d");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_e");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_h");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_r");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_re");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_s");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_v");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_b");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_f_c");

  complemento.style.display = "none";

  imgLogo.src = "svg/logo/Humbanew Logo (Design) - 2.0.svg";

  imgLogo.style.width = "60px";

  imgLogo.style.height = "60px";

  imgTexto.style.marginLeft = "0%";

  imgTexto.style.marginTop = "0.6%";

  imgLogo.style.marginLeft = "2px";

  iconTab.href = "svg/logo/Humbanew Logo (Design) - 2.0.svg";

  titleTab.textContent = "Humbanew | Innovations to the World";
});

var color = "#ffff00";

bluep.addEventListener("click", function () {
  /** Dinamicidade do complemento do cabecalho **/
  compTexto.textContent = "Blueprints";

  complemento.classList.remove("cabecalho_texto_complementar_espaco_c");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_co");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_d");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_e");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_h");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_r");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_re");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_s");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_v");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_f_c");

  complemento.classList.add("cabecalho_texto_complementar_espaco_b");

  complemento.style.display = "inline-block";

  imgLogo.src = "svg/logo/Humbanew Blueprints Logo (Design).svg";

  imgLogo.style.width = "72px";

  imgLogo.style.height = "58px";

  imgTexto.style.marginLeft = "0%";

  imgTexto.style.marginTop = "0.6%";

  imgLogo.style.marginLeft = "2px";

  iconTab.href = "svg/logo/Humbanew Blueprints Logo (Design).svg";

  titleTab.textContent = "Humbanew Blueprints | Innovate your Projects";

});

var color = "#ffff00";

calc.addEventListener("click", function () {
  /** Dinamicidade do complemento do cabecalho **/
  compTexto.textContent = "Calculator";

  complemento.classList.remove("cabecalho_texto_complementar_espaco_b");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_co");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_d");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_e");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_h");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_r");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_re");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_s");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_v");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_f_c");

  complemento.classList.add("cabecalho_texto_complementar_espaco_c");

  complemento.style.display = "inline-block";

  imgLogo.src = "svg/logo/Humbanew Calculator Logo (Design).svg";

  imgLogo.style.width = "47px";

  imgLogo.style.height = "63px";

  imgLogo.style.marginTop = "0%";

  imgLogo.style.marginLeft = "4px";

  imgTexto.style.paddingTop = "0.6%";

  iconTab.href = "svg/logo/Humbanew Calculator Logo (Design).svg";

  titleTab.textContent = "Humbanew Calculator | Innovate your Calculations";
});

var color = "#ffff00";

comm.addEventListener("click", function () {
  /** Dinamicidade do complemento do cabecalho **/
  compTexto.textContent = "Community";

  complemento.classList.remove("cabecalho_texto_complementar_espaco_c");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_b");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_d");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_e");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_h");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_r");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_re");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_s");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_v");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_f_c");

  complemento.classList.add("cabecalho_texto_complementar_espaco_co");

  complemento.style.display = "inline-block";

  imgLogo.src = "svg/logo/Humbanew Community Logo.svg";

  imgLogo.style.width = "66px";

  imgLogo.style.height = "55px";

  imgLogo.style.marginTop = "0%";

  imgLogo.style.marginLeft = "0%";

  imgTexto.style.paddingTop = "0.6%";

  iconTab.href = "svg/logo/Humbanew Community Logo.svg";

  titleTab.textContent = "Humbanew Community | Innovate your Conversations";
});

var color = "#ffff00";

devel.addEventListener("click", function () {
  /** Dinamicidade do complemento do cabecalho **/
  compTexto.textContent = "Development Studios";

  complemento.classList.remove("cabecalho_texto_complementar_espaco_c");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_b");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_co");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_e");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_h");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_r");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_re");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_s");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_v");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_f_c");

  complemento.classList.add("cabecalho_texto_complementar_espaco_d");

  complemento.style.display = "inline-block";

  imgLogo.src = "svg/logo/Humbanew Development Studios Logo (Design).svg";

  imgLogo.style.width = "65px";

  imgLogo.style.height = "65px";

  imgLogo.style.marginTop = "0%";

  imgLogo.style.marginLeft = "0%";

  imgTexto.style.paddingTop = "0.6%";

  iconTab.href = "svg/logo/Humbanew Development Studios Logo (Design).svg";

  titleTab.textContent = "Humbanew Development Studios | Innovate your Strategies";
});

var color = "#ffff00";

envir.addEventListener("click", function () {
  /** Dinamicidade do complemento do cabecalho **/
  compTexto.textContent = "Environment";

  complemento.classList.remove("cabecalho_texto_complementar_espaco_c");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_b");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_co");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_d");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_h");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_r");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_re");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_s");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_v");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_f_c");

  complemento.classList.add("cabecalho_texto_complementar_espaco_e");

  complemento.style.display = "inline-block";

  imgLogo.src = "svg/logo/Humbanew Environment Logo - Design.svg";

  imgLogo.style.width = "60px";

  imgLogo.style.height = "60px";

  imgLogo.style.marginTop = "0%";

  imgLogo.style.marginLeft = "0%";

  imgTexto.style.paddingTop = "0.6%";

  iconTab.href = "svg/logo/Humbanew Environment Logo - Design.svg";

  titleTab.textContent = "Humbanew Environment | Innovate your Green Areas";
});

var color = "#ffff00";

helps.addEventListener("click", function () {
  /** Dinamicidade do complemento do cabecalho **/
  compTexto.textContent = "Helps";

  complemento.classList.remove("cabecalho_texto_complementar_espaco_c");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_b");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_co");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_d");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_e");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_r");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_re");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_s");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_v");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_f_c");

  complemento.classList.add("cabecalho_texto_complementar_espaco_h");

  complemento.style.display = "inline-block";

  imgLogo.src = "svg/logo/Humbanew Helps Logo - (Design).svg";

  imgLogo.style.width = "60px";

  imgLogo.style.height = "60px";

  imgLogo.style.marginTop = "0%";

  imgLogo.style.marginLeft = "0%";

  imgTexto.style.paddingTop = "0.6%";

  iconTab.href = "svg/logo/Humbanew Helps Logo - (Design).svg";

  titleTab.textContent = "Humbanew Helps | Innovate your Assistance";
});

var color = "#ffff00";

racin.addEventListener("click", function () {
  /** Dinamicidade do complemento do cabecalho **/
  compTexto.textContent = "Racing";

  complemento.classList.remove("cabecalho_texto_complementar_espaco_c");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_b");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_co");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_d");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_e");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_h");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_re");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_s");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_v");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_f_c");

  complemento.classList.add("cabecalho_texto_complementar_espaco_r");

  complemento.style.display = "inline-block";

  imgLogo.src = "svg/logo/Humbanew Racing Logo (Design).svg";

  imgLogo.style.width = "60px";

  imgLogo.style.height = "60px";

  imgLogo.style.marginTop = "0%";

  imgLogo.style.marginLeft = "0%";

  imgTexto.style.paddingTop = "0.46%";

  iconTab.href = "svg/logo/Humbanew Racing Logo (Design).svg";

  titleTab.textContent = "Humbanew Racing | Innovate your Challenges";
});

var color = "#ffff00";

reads.addEventListener("click", function () {
  /** Dinamicidade do complemento do cabecalho **/
  compTexto.textContent = "Reads";

  complemento.classList.remove("cabecalho_texto_complementar_espaco_c");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_b");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_co");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_d");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_e");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_h");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_r");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_s");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_v");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_f_c");

  complemento.classList.add("cabecalho_texto_complementar_espaco_re");

  complemento.style.display = "inline-block";

  imgLogo.src = "svg/logo/Humbanew Reads Logo (Design).svg";

  imgLogo.style.width = "60px";

  imgLogo.style.height = "60px";

  imgLogo.style.marginTop = "0%";

  imgLogo.style.marginLeft = "0%";

  imgTexto.style.paddingTop = "0.55%";

  iconTab.href = "svg/logo/Humbanew Reads Logo (Design).svg";

  titleTab.textContent = "Humbanew Reads | Innovate your Interpretations";
});

var color = "#ffff00";

stud.addEventListener("click", function () {
  /** Dinamicidade do complemento do cabecalho **/
  compTexto.textContent = "Studios";

  complemento.classList.remove("cabecalho_texto_complementar_espaco_c");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_b");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_co");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_d");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_e");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_h");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_r");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_re");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_v");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_f_c");

  complemento.classList.add("cabecalho_texto_complementar_espaco_s");

  complemento.style.display = "inline-block";

  imgLogo.src = "svg/logo/Humbanew Studios Logo (Design).svg";

  imgLogo.style.width = "60px";

  imgLogo.style.height = "60px";

  imgLogo.style.marginTop = "0%";

  imgLogo.style.marginLeft = "0%";

  imgTexto.style.paddingTop = "0.55%";

  iconTab.href = "svg/logo/Humbanew Studios Logo (Design).svg";

  titleTab.textContent = "Humbanew Studios | Innovate your Streamings";
});

var color = "#ffff00";

vibm.addEventListener("click", function () {
  /** Dinamicidade do complemento do cabecalho **/
  compTexto.textContent = "Vibes Musics";

  complemento.classList.remove("cabecalho_texto_complementar_espaco_c");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_b");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_co");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_d");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_e");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_h");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_r");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_re");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_s");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_f_c");

  complemento.classList.add("cabecalho_texto_complementar_espaco_v");

  complemento.style.display = "inline-block";

  imgLogo.src = "svg/logo/Humbanew Vibes Musics Logo - (Design).svg";

  imgLogo.style.width = "60px";

  imgLogo.style.height = "60px";

  imgLogo.style.marginTop = "0%";

  imgLogo.style.marginLeft = "0%";

  imgTexto.style.paddingTop = "0.45%";

  iconTab.href = "svg/logo/Humbanew Vibes Musics Logo - (Design).svg";

  titleTab.textContent = "Humbanew Vibes Musics | Innovate your Playlists";
});

var color = "#ffff00";

falec.addEventListener("click", function () {
  /** Dinamicidade do complemento do cabecalho **/
  compTexto.textContent = "Fale Conosco";

  complemento.classList.remove("cabecalho_texto_complementar_espaco_c");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_b");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_co");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_d");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_e");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_h");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_r");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_re");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_s");

  complemento.classList.remove("cabecalho_texto_complementar_espaco_v");

  complemento.classList.add("cabecalho_texto_complementar_espaco_f_c");

  complemento.style.display = "inline-block";

  imgLogo.src = "svg/logo/Humbanew Logo (Design) - 2.0.svg";

  imgLogo.style.width = "60px";

  imgLogo.style.height = "60px";

  imgLogo.style.marginTop = "0%";

  imgLogo.style.marginLeft = "4px";

  imgTexto.style.paddingTop = "0.7%";

  iconTab.href = "svg/logo/Humbanew Logo (Design) - 2.0.svg";

  titleTab.textContent = "Humbanew | Innovate your Things";
});