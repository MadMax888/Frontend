<?
// header('HTTP/1.1 403 Forbidden');

$square 	= $_POST['square'];
$thickness 	= $_POST['thickness'];
$type 		= $_POST['type'];

$types = Array(
	 'rockwool'	=> 5
	,'PF'		=> 2
	);

$price = $square * $thickness * $types[$type];
 
 

?>{"price":"<?= $price?>","insulationCoef":"<?= $types[$type]?>"}