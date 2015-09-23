<?
header("Content-Type: text/html;charset=UTF-8");
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>
		</title>
		<meta http-equiv='Content-Type' content='text/html;charset=UTF-8'>
		<link rel='stylesheet' href='../stylesheets/events.css'>
		<script type='text/javascript' src='../scripts/error.js'></script>
		<script type='text/javascript' src='../scripts/jquery-2.1.4.min.js'></script>

		<script type='text/javascript' src='../scripts/component.js'></script>	
		<script type='text/javascript' src='../scripts/events.js'></script>
		
		<script>
			var e1 = new events('#div1');
		</script>
	</head>
	<body>
	
		<nav class="b-menu" id="b-menu">
			<ul class="b-menu__list">
				<li class="b-menu__item"><a href="#" class="b-menu__link">Item 1</a></li>
				<li class="b-menu__item"><a href="#" class="b-menu__link">Item 2</a></li>
				<li class="b-menu__item"><a href="#" class="b-menu__link">Item 3</a></li>
				<li class="b-menu__item"><a href="#" class="b-menu__link">Item 4</a></li>
			</ul>
		</nav>
		<div class='b-pad' id='div1'>
			<div class='b-pad__coord b-pad__coord_x'></div>
			<div class='b-pad__coord b-pad__coord_y'></div>
			<div class='b-pad__coord b-pad__coord_target'></div>
			<br>
			<div class='b-pad__coord b-pad__coord_x-relative'></div>
			<div class='b-pad__coord b-pad__coord_y-relative'></div>
			<br>
			<div class='b-pad__coord b-pad__coord_keyinfo'></div>
			<input type='text' class='b-pad__text'>
			<nav class="b-context-menu" id="b-context-menu">
				<ul class="b-context-menu__list">
					<li class="b-context-menu__item"><a href="#" class="b-context-menu__link">Copy</a></li>
					<li class="b-context-menu__item"><a href="#" class="b-context-menu__link">Paste</a></li>
					<li class="b-context-menu__item"><a href="#" class="b-context-menu__link">Delete</a></li>
				</ul>
			</nav>

		</div>

	</body>


</html>