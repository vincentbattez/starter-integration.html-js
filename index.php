<?php

require_once("./vendor/autoload.php");

$loader = new \Twig_Loader_Filesystem(__DIR__.'/src/templates');
$twig = new \Twig_Environment($loader);

echo $twig->render('demo.twig', ['name' => 'zhinyz']);
