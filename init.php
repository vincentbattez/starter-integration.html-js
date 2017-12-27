<?php
require_once './vendor/autoload.php';

$loader = new Twig_Loader_Filesystem("./src/templates");
$twig = new Twig_Environment($loader);

