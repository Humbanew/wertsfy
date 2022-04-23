<?php 

namespace Wertsfy;

require_once('autoload.php');

use Wertsfy\Cmd\CommandLineInterface;

$cli = new CommandLineInterface();
$cli->init_ui();

?>