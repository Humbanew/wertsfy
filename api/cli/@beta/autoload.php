<?php
$files = [ 'WertsfyCmd' => ['Wertsfy\\cmd', 'cmd'] ];

spl_autoload_register(function (string $nomeClasse) {

  $arquivo = str_replace('Wertsfy\\cmd', 'cmd', $nomeClasse);
  $arquivo = str_replace('\\', DIRECTORY_SEPARATOR, $arquivo);
  $arquivo .= '.php';

  if (file_exists($arquivo)) {
    require_once $arquivo;
  }
});

?>
