/* Variáveis que serão manipuladas no Carousel */

var imgs = document.getElementById("imgs");

var btnMenu = document.getElementById("btn_menu_img");

var cont = document.getElementById("contador");

var btnSeta1 = document.getElementById("img_seta1_button1");

var btnSeta2 = document.getElementById("img_seta1_button2");

/* Ajuste dos botões de Interação do Carousel */

btnMenu.addEventListener("click", function() {

  btnSeta1.style.left = "34%";
  btnSeta1.style.top = "80.5%";

  btnSeta2.style.left = "62%";
  btnSeta2.style.top = "80.5%";
  
});

btnMenu.addEventListener("dblclick", function() {

  btnSeta1.style.left = "34%";
  btnSeta1.style.top = "66%";

  btnSeta2.style.left = "62%";
  btnSeta2.style.top = "66%";

});

/* Endereços das imagens do Carousel */

var srcs = [

  "svg/carousel/Background 1.svg", 
  "svg/carousel/Background 2.svg", 
  "svg/carousel/Background 3.svg", 
  "svg/carousel/Background 4.svg",
  "svg/carousel/Background 5.svg", 
  "svg/carousel/Background 6.svg", 
  "svg/carousel/Background 7.svg", 
  "svg/carousel/Background 8.svg",
  "svg/carousel/Background 1.svg", 
  "svg/carousel/Background 2.svg", 
  "svg/carousel/Background 3.svg", 
  "svg/carousel/Background 4.svg",
  "svg/carousel/Background 5.svg", 
  "svg/carousel/Background 6.svg", 
  "svg/carousel/Background 7.svg", 
  "svg/carousel/Background 8.svg"

];

/* Sistema de alternância das imagens e da mudança do valor do contador do Carousel */

var c = 0;

var dynamic = setInterval(function() {

  imgs.setAttribute("src", srcs[c]);

  c = c + 1;

  cont.textContent = c + " / 16";

  if(c == 16) {
      return c = 0;
    }

}, 9600);

/* Sistema de botões do Carousel */

btnSeta1.addEventListener("click", function() {
  
  imgs.setAttribute("src", srcs[c]);
  
  c = c - 1;

  cont.textContent = c + 2 + " / 16";

  if(c == 16) {
    return c = 0;
  }

  if(c == -1) {
    return c = 15;
  }

  clearInterval(200, dynamic);

});

btnSeta2.addEventListener("click", function() {

  imgs.setAttribute("src", srcs[c]);

  c = c + 1;

  cont.textContent = c + " / 16";

  if(c == 16) {
    return c = 0;
  }

  clearInterval(200, dynamic);

});