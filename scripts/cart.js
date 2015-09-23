// Добавить товар в масив товаров (массив корзина) и проверить или данный товар в корзине (повесит клас инкарт)

function cart (sSelector, sCartSelector) {
	var c = this; // указатель на клас

	c.init(sSelector);
	c.minicart = $(sCartSelector);
 	// c.find()           //1 поиск в каталоге
 	// c.cart.find()
	// c.minicart.find()  //2 поиск в корзине
	// m.find
// 1. Секция данных ==================	
	c.goods = { // для хранения выбраных товаров
		// goodId : qty  
		};
// 2. Секция логики ===================
	c.add = function (event) {
		event.preventDefault();
		var 
			goodId = c.find(this)
				.closest('.b-good')
					.attr('class')
					.match(/b-good_id_([0-9]{1,6})/)[1])
			,qty   = c.find(this).find('.b-order-form__quantity').val()
			;
		}

// 3. Секция событий ==================
	c.find('.b-order-form').bind('submit', c.add); // 
}
cart.prototype = new component();