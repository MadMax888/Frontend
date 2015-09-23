function b_menu(sSelector){
	var m = this;
	
	// 1. Секция данных (переменные, массивы, ...) ===
	m.menu = $(sSelector);
	
	// 2. Секция логики (функции) ====================
	m.showSubmenu = function (){
		// подменю текущего пункта меню - показать
		// $(this).children('.b-submenu').show();
		// $(this).children('.b-submenu').addClass('b-submenu_shown');
		// $(this).children('.b-submenu').stop().slideDown();
		// m.toggleSubmenu(this);
		// $(this).children('.b-submenu').stop().fadeIn();
		$(this)
			.children('.b-submenu')
				.css({'display':'block'})
				.stop()
				.animate(
					{
						'opacity' : 1
						}
					, 400
					);
		
		}
		
	m.hideSubmenu = function (){
		// подменю текущего пункта меню - скрыть
		// $(this).children('.b-submenu').hide();
		// $(this).children('.b-submenu').removeClass('b-submenu_shown');
		// $(this).children('.b-submenu').stop().slideUp();
		// m.toggleSubmenu(this);
		$(this)
			.children('.b-submenu')
				.stop()
				.animate(
					{
						'opacity' : 0
						}
					, 400
					, function (){
						$(this).css({'display':'none'})
						}
					)
				;

		}
	m.toggleSubmenu = function (oMenuItem){
		$(oMenuItem).children('.b-submenu').stop().slideToggle();
		}
	// 3. Секция событий =============================
	// при наведении мыши на пункт меню - показать подменю
	// при отведении мыши с пункта меню - скрыть подменю
	m.menu.find('.b-menu__item')
		.mouseover(m.showSubmenu)
		.mouseout(m.hideSubmenu)
		;
	
	}