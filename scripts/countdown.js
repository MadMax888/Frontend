function b_clock (sSelector) {
	var  c = this;
	// 1. Секция данных ==================
	c.init(sSelector);
	// var dt      = new Date();
	// console.log(dt);
	// c.dt     = new Date();
	// c.hour   = c.dt.getHours();
	// c.minute = c.dt.getMinutes();
	// c.second = c.dt.getSeconds();
	// console.log(date);
	// console.log(c.hour);
	// console.log(c.minute);
	// console.log(c.second);
	// 2. Секция логики (функции) ====================
	c.startTime = function (){
		var dt      = new Date();
		var  hour   = dt.getHours().toString().split(" ")
			,minute = dt.getMinutes().toString().split(" ")
			,second = dt.getSeconds().toString().split(" ");
		console.log(hour);
		console.log(minute);
		console.log(second);
		window.setTimeout(c.startTime, 500);
		}
	// 3. Секция событий =============================
	c.startTime();
}

b_clock.prototype = new component();