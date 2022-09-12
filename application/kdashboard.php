<?php header("Access-Control-Allow-Origin: https://github.com/", true) ?>

<DOCTYPE html>
<html>
  
  <head>
    <title>Kambler Plataform</title>
    <link rel="icon" href="www/img/favicon.svg"/>
  </head>

  <style>
    div, section, p, h1, h2, h3, h4, h5, h6, head, body, html
    {
      margin: 0;
    }

    .base-conteiner 
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
      display: inline-block;
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
      font-family: Consolas;
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
  </style>

  <body>
    <div class="base-container">
      <p class="base">Kambler
        <p class="base inv"><span class="base-border">v1.0.0</span></p>
      </p>
    </div>

    <div class="container">
      <h1 class="title">Wertsfy Dashboard</h1>
    </div>

    <section id="configurations-module"></section>

    <section id="wertsfy-cli-shell-module"></section>
  
    <section id="nikko-module"></section>

    <section id="kriptonight-module"></section>

    <section id="crawler-module"></section>

    <section id="eclypsus-module"></section>

    <section id="database-module"></section>

    <section id="cloud-services-module"></section>

    <section id="optionals-module"></section>

    <section id="io-connections-module"></section>

    <section id="language-selector-module"></section>

  </body>

</html>
