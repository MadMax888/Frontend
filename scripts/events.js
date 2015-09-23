function events (sSelector) {
	var e = this;

	// 1. Секция данных ===================
	var jqContextMenu = $('.b-context-menu')

	// 2. Секция логики ===================
	e.showCoords    = function (event){
		e.coordX.html(event.pageX);
		e.coordY.html(event.pageY);
		e.coordXrel.html(event.pageX - e.position.left);
		e.coordYrel.html(event.pageY - e.position.top);
		e.target.html($(event.target).attr('class'));
		}
	e.clickPad      = function (){
		console.log('Pad has been clicked!');
		$('.b-context-menu').removeClass('b-context-menu_active');
		}
	e.clickX        = function (event){
		event.stopPropagation(); // Остановить продвижение (всплывания событий) 
		console.log('Field X has been clicked!');
		}
	e.showInfo      = function (event){
		e.keyinfo.html(
			event.which  
			+ " " + event.key 
			+ " " + "ctrl pressed:"
			+ event.ctrlKey  
			);
		if (event.which == 190 && event.ctrlKey == true) {
			console.log('Show Menu');
			e.showMenu();
			}
		}
	e.showMenu = function () {
		$('.b-menu').slideToggle();
	}
	e.myContextMenu = function (event){
		event.preventDefault();
		var	posLeftX      = event.pageX - e.position.left //положение курсора по оси Х
		,	posTopY       = event.pageY - e.position.top //положение курсора по оси Y
		,	menuWidth     = jqContextMenu.width() 
		,	menuHeight    = jqContextMenu.height()
		,	windowWidth   = e.elem.width()
		,	windowHeight  = e.elem.height()
		; 
		console.log(posLeftX);
		console.log(posTopY);
		console.log(menuWidth);
		console.log(menuHeight);
		console.log(windowWidth);
		console.log(windowHeight);

		// if ( (windowWidth - posLeftX) < menuWidth ) {
		// 	posLeftX = posLeftX - menuWidth + "px";				
		// 	}
		// if ( (windowHeight - posTopY) < menuHeight ) {
		// 	posTopY = posTopY - menuHeight + "px";
		// 	}
		if ( windowWidth < posLeftX + menuWidth ) {
			posLeftX = posLeftX - menuWidth;	
			console.log('Srabotal X');			
			}
		if ( windowHeight < posTopY + menuHeight ) {
			posTopY = posTopY - menuHeight;
			console.log('Srabotal Y');
			}
		if ( jqContextMenu.hasClass('b-context-menu_active') ) {
			jqContextMenu.removeClass('b-context-menu_active');
			jqContextMenu.css({'left': posLeftX + 'px', 'top': posTopY + 'px'}).addClass('b-context-menu_active');
			console.log('removeClass');
			}
		else {
			jqContextMenu.css({'left': posLeftX + 'px', 'top': posTopY + 'px'}).addClass('b-context-menu_active');
			console.log('addClass');
			}
		}

	e.main = function (){ // 
		
		e.init(sSelector);
		// 1. Секция данных ==================
		e.coordX    = e.find(".b-pad__coord_x");
		e.coordY    = e.find(".b-pad__coord_y");
		e.target    = e.find(".b-pad__coord_target");
		e.coordXrel = e.find(".b-pad__coord_x-relative");
		e.coordYrel = e.find(".b-pad__coord_y-relative");
		e.keyinfo   = e.find(".b-pad__coord_keyinfo");
		e.text      = e.find(".b-pad__text");
		e.position  = e.elem.position();
		
		// 3. Секция событий ==================
		e.elem   .bind ("mousemove", e.showCoords);
		e.elem   .bind ("contextmenu", e.myContextMenu); // Запрет контекстного меню
		e.elem   .bind ("click", e.clickPad);
		e.coordX .bind ("click", e.clickX);
		e.text   .bind ("keyup", e.showInfo);
		}
	$(document).ready(e.main);
}

events.prototype = new component();

// ---------------- Памятка ----------------- //
/*f				объект
.form			свойство которое является объектом
.find(sSelector)метод который возвращает объект
.html()			метод который возвращает строку*/