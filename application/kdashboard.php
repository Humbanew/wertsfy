<?php $defines = []; ?>

<DOCTYPE html>
<html>
  
  <head>
    <title>Kambler Plataform</title>
    <link rel="icon" href="www/img/favicon.svg"/>
  </head>

  <style>
    :root {
      --dark-theme-background-color: #222222;
      --light-theme-background-color: #eeeeee;
    }

    @font-face {
      font-family: Exo2;
      src: url("./www/fnts/Exo2-Regular.ttf");
    }

    @font-face {
      font-family: Electrolize;
      src: url("./www/fnts/Electrolize-Regular.ttf");
    }

    div, section, p, h1, h2, h3, h4, h5, h6, head, body, html
    {
      margin: 0;
    }

    .kambler-cabecalho 
    {
      display: inline-block;
    }
    
    .base 
    { 
      background-image: linear-gradient(to right, #006666, #0000ff);
      box-shadow: -4px 2px 6px #777777;
      color: #ffffff;
      display: inline-block;
      font-family: Consolas;
      font-size: 1.2rem; 
      font-weight: 900;
      padding: 0.4vw 0.6vw;
      width: 48.8vw;
    }

    .base-border
    {
      border: 0.5px solid #666666;
      padding: 0.2vw 0.4vw;
      border-top-left-radius: 4px;
      border-bottom-right-radius: 6px;
    }
    
    .inv 
    {
      background-image: linear-gradient(to right, #0000ff, #991acc);
      box-shadow: 4px 2px 6px #777777;
      display: inline-block;
      text-align: right;
      color: #00ee44;
    }
    
    .container
    {
      font-family: Exo2;
      margin-left: 1vw;
      margin-top: 1vw;
    }

    .title
    {
      margin-top: 0.5vw;
      display: inline-block;
      padding: 0.4vw 0.6vw;
      box-shadow: 0px 0px 10px #666666;
    }
    
    .options-control-conteiner
    {
      display: inline-block;
      width: 98%;
      height: 72%;
      margin-top: 2vw;
      margin-left: 1vw;
    }

    .options-conteiner 
    {
      display: inline-flex;
    }
    
    #configurations-module, #wertsfy-cli-shell-module
    {
      background-color: #eeeeee;
      border: 1px solid #111111;
      box-shadow: 1px 1px 5px #000000;
      border-radius: 4px; 
      color: #006666;
      display: inline-flex;
      font-family: Exo2;
      font-size: 2.2em;
      font-weight: 800;
      /* rotate: -90deg; */
      padding: 0.6vw 0.7vw;
      width: 70vh;
    }

    #configurations-module
    { }

    #wertsfy-cli-shell-module
    { }
  </style>

  <body>
    <div class="kambler-cabecalho">
      <p class="base">Kambler
        <p class="base inv"><span class="base-border">v1.0.0</span></p>
      </p>
    </div>

    <div class="container">
      <h1 class="title">Wertsfy Dashboard</h1>
    </div>

    <div class="options-control-conteiner">

      <div class="options-conteiner">
        
        <section id="configurations-module">
          <p>Configurations</p>
        </section>
    
        <section id="wertsfy-cli-shell-module">
          <p>Wertsfy CLI Shell</p>
        </section>
      
        <section id="nikko-module"></section>
    
        <section id="kriptonight-module"></section>
    
        <section id="crawler-module"></section>
    
        <section id="eclypsus-module"></section>
    
        <section id="database-module"></section>
    
        <section id="cloud-services-module"></section>
    
        <section id="optionals-module"></section>
    
        <section id="io-connections-module"></section>
    
        <section id="language-selector-module"></section>
  
      </div>

    </div>

  </body>

</html>
