// Добавить товар в масив товаров (массив корзина) и проверить или данный товар в корзине (повесит клас инкарт)

function cart (sSelector, sCartSelector) {
	var c = this; // указатель на клас

	$.cookie.json = true;
// 1. Секция данных ==================	
	c.init(sSelector);
	c.minicart  = $(sCartSelector);
	c.list      = c.minicart.find('.b-minicart__list');  //2 поиск в корзине
	c.cartGoods = c.minicart.find('.b-goods_cart');
	c.button    = c.minicart.find('.b-minicart__button');
	c.goods     = { // для хранения выбраных товаров
		// goodId : qty  
		}
// 2. Секция логики ===================
	c.copyData = function(aElementsList, jqSource, jqDestination){

	// 	$.each(aElementsList, function (index, sSelector){
	// //for( var i = 0; i < aElementsList.length; i++ ) {
	// 	var 
	// 		jqDestinationElement= jqDestination	.find(sSelector)
	// 		,jqSourceElement 	= jqSource		.find(sSelector)
	// 		, sTagName = oHTMLElement.prop('tagName')
	// 		;
			
	// 	if ( sTagName == 'IMG' ) {
	// 		jqDestinationElement.attr( "src", 	jqSourceElement.attr("src") );
	// 		}
	// 	else { 
	// 		jqDestinationElement.html( 			jqSourceElement.html() );
	// 		}
		
	// 	})

		for( var i = 0; i < aElementsList.length; i++ ) {
			if ( aElementsList[i] == '.b-good__image' ) {
				jqDestination.find(aElementsList[i]).attr( "src", jqSource.find(aElementsList[i]).attr("src") );
				}
			else { 
				jqDestination.find(aElementsList[i]).html( 		jqSource.find(aElementsList[i]).html() );
				}
			
			}
		}
	c.loadGoodsCart = function (jqGood) {
		var jqCartGood = c.cartGoods.find('.b-good:first-child')
				.clone()
				.appendTo(c.cartGoods); 
		// если товара нет в корзине
		if(1) { // 
			var goodId = jqGood
							.closest('.b-good')
								.attr('class')
								.match(/b-good_id_([0-9]{1,6})/)[1];
			
			jqCartGood.addClass('b-good_id_' + goodId);
			/*======Старый код ========*/
																		/*считывание */
			// jqCartGood.find('.b-good__name')          .html(        jqGood.find('.b-good__name').html() ); 
			// jqCartGood.find('.b-good__image')         .attr( "src", jqGood.find('.b-good__image').attr("src") ); 
			// jqCartGood.find('.b-good__price')         .html(        jqGood.find('.b-good__price').html() ); 

			/* 	НОВЫЙ КОД!!!!*/
			c.copyData([
				'.b-good__name'
				,'.b-good__price'
				,'.b-good__image'
				], jqGood, jqCartGood
				);
			
			}		
																		/*считывание */
		jqCartGood.find('.b-order-form__quantity').val(         jqGood.find('.b-order-form__quantity').val() ); 
	}
	c.openCart = function () {
		c.list.slideToggle();
	}
	c.add = function (event) {
		event.preventDefault();
		var 
			jqGood = c.find(this)
						.closest('.b-good')			
			, goodId = c.find(this)
						.closest('.b-good')
							.attr('class')
							.match(/b-good_id_([0-9]{1,6})/)[1]
			, qty   = c.find(this).find('.b-order-form__quantity').val()
			;
		c.goods[goodId] = qty; // Сохранили в ОЗУ
		jqGood.addClass('b-good_in-cart');
		$.cookie(
			'cookieGoods',
			c.goods
			, { expires: 14, path: '/' }); //  "/" - всем на сервере доступно
		;
		// var jqCartGood = c.cartGoods.find('.b-good:first-child')
		// 		.clone()
		// 		.appendTo(c.cartGoods); 
		// 												/*считывание */
		// jqCartGood.find('.b-good__name')          .html(        jqGood.find('.b-good__name').html() ); 
		// jqCartGood.find('.b-good__image')         .attr( "src", jqGood.find('.b-good__image').attr("src") ); 
		// jqCartGood.find('.b-good__price')         .html(        jqGood.find('.b-good__price').html() ); 
		// jqCartGood.find('.b-order-form__quantity').val(         jqGood.find('.b-order-form__quantity').val() ); 
		c.loadGoodsCart(jqGood);

		c.list.slideDown();
		}
	c.load = function () { 
		var cookieGoods = $.cookie('cookieGoods');
		c.goods = typeof(cookieGoods) != 'undefined' ? cookieGoods : {} ; // проверка чтоб убрать ошибку undefined, когда куки пустые
		$.each(c.goods, function(goodId, qty){ // Для записи количества товаров в хтмл после обновления страници
			var jqGood = c.elem.find('.b-good_id_' + goodId); 
			// 1. указать в каталоге колчество товаров из корзины
			//c.elem.find('.b-good_id_' + goodId)           
			//			.find('.b-order-form__quantity')  
			jqGood.find('.b-order-form__quantity').val(qty); 
			// 2. пометить этот товар
			jqGood.addClass('b-good_in-cart');
			// var jqCartGood = c.cartGoods.find('.b-good:first-child')
			// 	.clone()
			// 	.appendTo(c.cartGoods); 
			// 												/*считывание */
			// jqCartGood.find('.b-good__name')          .html(        jqGood.find('.b-good__name').html() ); 
			// jqCartGood.find('.b-good__image')         .attr( "src", jqGood.find('.b-good__image').attr("src") ); 
			// jqCartGood.find('.b-good__price')         .html(        jqGood.find('.b-good__price').html() ); 
			// jqCartGood.find('.b-order-form__quantity').val(         jqGood.find('.b-order-form__quantity').val() ); 
			c.loadGoodsCart(jqGood);
			});
		}
// 3. Секция событий ==================
	c.load(); // Считывание куки 
	c.find('.b-order-form').bind('submit', c.add); //
	c.button.bind ('click', c.openCart); 
}

cart.prototype = new component();

function ajaxRequest (sSelector) {
	var a = this;

	// 1. Секция данных ==================	
	a.url      = 0;
	a.data     = 0;
	a.succes   = 0;
	a.complite = 0;
	// 2. Секция логики ===================

	a.go = function	(){

		}
}

ajaxRequest.prototype = new component();


