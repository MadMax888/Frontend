	function ajaxTest (sSelector) {
		var c = this;

		// 1. Секция данных (переменные, массивы, ...) ===
		c.init(sSelector);
		c.calcA     = c.find(".b-calc__a");
		c.calcB     = c.find(".b-calc__b");
		c.calcCount = c.find(".b-calc__count");
		c.calcRes   = c.find(".b-calc__result");
		// 2. Секция логики (функции) ====================
		c.status = function(sStatus, sStatusText){ //Считали переменную и заменили в ней что нужно
			// 1. Удалять старый статус 
			var oldClassName = 							  // Во временную переменнуюю временно сохраним 
				c.elem.attr('class')					  // считанный клас форм
					.replace(/b_calc_status_[a..z]+/, '');// в котором удален старый статус
			c.elem.attr('class', oldClassName);			  // и запишем (3) очищенное имя класса обратно в атрибут формы
			c.elem.addClass("b-calc_status_" + sStatus);  // Доришем новый статус
			
			// 2. Если статус  = ок  - не выводить сообщение
			if (sStatus == "error") {
				console.error(sStatusText, c.oAjax);      
				}

			}
		c.calculate = function(event) {
			event.preventDefault();
			// c.oAjax = $.ajax() // Обьект запроса и ответа сервера, єквивалентній просто oAjax
			// Подготовим и отпрвавим аякс запрос и сохрнаним свойство c.oAjax его обьект
			// c.oAjax = calculator.ojectOfAjaxxrequest 	
			c.oAjax = $.ajax({ // Метод JQuery
				 'url' 		: 'ajaxcalc.php?t-' + new Date().getTime() // чтоб каждый раз нов файл (запрет кеша)
				,'method'	: 'POST'
				,'dataType' : 'json'
				,'timeout'  : 5000 // макс. врем обработки запроса
				,'data' 	: {
					 'a' : c.calcA.val()       // a,b про эти парам сообщают бєкендеры
					,'b' : c.calcB.val()
					}
				, 'success' : function (oServerResponse) { // Для бизнес логики
					// debugger; // ключевое слово для брекпоинта
					c.calcRes.html(oServerResponse.result);
					}
				, 'error'   : function (oAjax) {
					alert('Проблемы с расчетами, повторите попытку позже');
					// debugger;
					// c.elem.addClass('b-calc_status_error');
					}
				, 'complete': function (oAjax) { // Обьеденяет Succes и Error . Техническая логика
					// debugger;
					if(oAjax.status == 200) { // 200 = OK 
						if ( typeof(oAjax.responseJSON) == 'undefined'){
							//console.error('could not parse server response as JSON object', oAjax.responseText);
							c.status('error', 'could not parse server response as JSON object');
							}
						else {
							//c.elem.addClass("b-calc_status_ok");
							c.status('ok');
							}

						}
					else if (oAjax.statusText == "timeout") {
						//console.error('AJAX request timed out');
						//c.elem.addClass("b-calc_status_ok");
						c.status('error', 'AJAX request timed out');
						}
					else if (oAjax.status == 403) { // access forbidden
						//console.error('access forbidden');
						//c.elem.addClass("b-calc_status_error");
						c.status('error', 'access forbidden');
						}
					else {
						//console.error("Unpredicated error", oAjax);
						//c.elem.addClass("b-calc_status_error");
						c.status('error', 'Unpredicated error');
						}
					}
 			}); 
			}
		// c.calc = e.find(".b-calc__a");
		// 3. Секция событий =============================
		c.elem.bind("submit", c.calculate);
	}

	ajaxTest.prototype = new component();