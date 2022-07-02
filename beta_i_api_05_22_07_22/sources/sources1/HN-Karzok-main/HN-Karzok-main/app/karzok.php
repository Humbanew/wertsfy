<?php

namespace Karzok;

require_once('autoload.php');

use Karzok\Minecraft\JsonCreator;

$jsons = new JsonCreator();
$jsons->get_json_blueprint_model_block("generic.json");

?>
