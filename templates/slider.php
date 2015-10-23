<?
header("Content-Type: text/html;charset=UTF-8");
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>
		</title>
		<meta http-equiv='Content-Type' content='text/html;charset=UTF-8'>
		<link rel='stylesheet' href='../stylesheets/slider.css'>
		<!--
		-->
		<script src='../scripts/error.js'></script>
	</head>
	<body>
		<div class="b-slider" id="slider1">
			<div class='b-slider__arrow b-slider__arrow_prev'>&lt;</div>
			<div class='b-slider__arrow b-slider__arrow_next'>&gt;</div>
			<div class="b-slider__slides">
				<div class="b-slide">
					<img src="https://api.fnkr.net/testimg/200x200/00CED1/FFF/?text=img+1111" alt="" class="b-slide__image">
				</div>
				<div class="b-slide">
					<img src="https://api.fnkr.net/testimg/200x200/00CED5/FFF/?text=img+2222" alt="" class="b-slide__image">
				</div>
				<div class="b-slide">
					<img src="https://api.fnkr.net/testimg/200x200/00CED9/FFF/?text=img+3333" alt="" class="b-slide__image">
				</div>
				<div class="b-slide">
					<img src="https://api.fnkr.net/testimg/200x200/00CED8/FFF/?text=img+4444" alt="" class="b-slide__image">
				</div>
				<div class="b-slide">
					<img src="https://api.fnkr.net/testimg/200x200/00CED7/FFF/?text=img+5555" alt="" class="b-slide__image">
				</div>
				<div class="b-slide">
					<img src="https://api.fnkr.net/testimg/200x200/00CED6/FFF/?text=img+6666" alt="" class="b-slide__image">
				</div>
				<div class="b-slide">
					<img src="https://api.fnkr.net/testimg/200x200/00CED4/FFF/?text=img+7777" alt="" class="b-slide__image">
				</div>
				<div class="b-slide">
					<img src="https://api.fnkr.net/testimg/200x200/01CED5/FFF/?text=img+8888" alt="" class="b-slide__image">
				</div>
				<div class="b-slide">
					<img src="https://api.fnkr.net/testimg/200x200/04CED1/FFF/?text=img+9999" alt="" class="b-slide__image">
				</div>
<!-- 				<div class="b-slide">
					<img src="https://api.fnkr.net/testimg/200x200/00CED1/FFF/?text=img+10101010" alt="" class="b-slide__image">
				</div> -->
			</div>
		</div>
	</body>
	<script type='text/javascript' src='../scripts/jquery-2.1.4.min.js'></script>
	<!--
	-->
	<script type='text/javascript' src='../scripts/component.js'></script>
	<script type='text/javascript' src='../scripts/slider.js'></script>
	<script>
		var s1 = new b_slider("#slider1");
	</script>
</html>