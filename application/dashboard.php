<?php session_create_id( "wtsfy" ); ?>
<?php header('Access-Control-Allow-Origin: *'); ?>

<!-- Kambler Application -->

<!DOCTYPE html>
<html>

  <head>
    <title>Wertsfy Dashboard</title>
    <link rel="icon" href="www/favicon.svg"/>
  </head>

  <body>
    <header>

      <style>
        html, body, head, footer, div, nav
        {
          margin: 0;
        }

        @font-face 
        { 
          font-family: Code; src: url(); 
        }
        
        .font_consola_sans 
        { 
          font-family: 'Consolas'; 
        }
        
        #formatter 
        { 
          color: #ffffff; 
          background-color: #000000; 
          border-radius: 2.8px; 
          display: inline-block;
          font-size: 2rem;
          margin-left: 0.5vw;
          margin-top: 0.5vw;
          padding: 0.9rem 0.8rem;
          box-shadow: 1px 1px 6px #bbbbbb;
          text-decoration: underline;
        } 

        .options 
        {
          color: #FFFFFF;
          display: inline-block;
          font-family: 'Consolas';
          font-size: 1.2rem;
          font-weight: 600;
          margin-left: 2vw;
        }
        
        .options-card
        {
          background-color: #335899;
          display: inline-block;
          height: 90%;
          padding: 0.8vw 0.6vw;
          border-radius: 4px;
          border-bottom: 2.4px solid #000000;
        }

        .conteiner-principal
        {
          margin-left: 2vw;
          width: 100%;
        }

        .conteiner-principal-inicio 
        {
          border-bottom: 1px solid #000000;
          display: inline-block;
          font-family: monospace;
          font-weight: 600;
          font-size: 1.4em;
          margin-bottom: 0.8vw;
        }
      </style>
      
      <nav>

        <h1 class="font_consola_sans" id="formatter">Wertsfy Dashboard</h1>

        <div class="options">

          <p class="options-card">Sistema</p>
          <p class="options-card">Recursos</p>
          <p class="options-card">Configurações</p>

        </div>

      </nav>
    
    </header>

    <div class="conteiner-principal">

      <p class="conteiner-principal-inicio">Versão: 2.0.0-Outsider Development</p>
      <p class="conteiner-principal-inicio">Tipo: Alpha/Beta</p>

    </div>

  </body>

</html>
