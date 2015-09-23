<?
include("insulationcalc.php");

header("Content-Type: text/html;charset=UTF-8");
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>AJAXDZ</title>
		<meta http-equiv='Content-Type' content='text/html;charset=UTF-8'>
		<link rel='stylesheet' 		   href='../stylesheets/ajaxdz.css'>
		<script type='text/javascript' src='../scripts/error.js'></script>
		<script type='text/javascript' src='../scripts/jquery-2.1.4.min.js'></script>
	</head>
	<body>

		<form action="ajaxdz.php" method="POST" 	class='b-calc' id='calc1'>
			<input type='text' name='square'		class='b-calc__square' value='<?= $square ?>'> 
			<input type='text' name='thickness'		class='b-calc__thickness' value='<?= $thickness?>'>
			<select size='1'   name='type'			class='b-calc__type'>
				<option disabled="">Choose product</option>
				<option value="rockwool">rockwool</option>
				<option value="PF"		>PF 	 </option>
			</select>
			<input type='submit' value='Calculate' 	class='b-calc__count'>
			<span 							class='b-calc__result'><?= $price?></span>
		</form>
		
	</body>
	<script type='text/javascript' src='../scripts/component.js'></script>
	<script type='text/javascript' src='../scripts/ajaxdz.js'></script> 
	
	<script>
		var c1 = new ajaxDz('#calc1');
	</script>
</html>