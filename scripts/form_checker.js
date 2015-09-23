function form_checker(sSelector){
	var f = this;
	
	f.init(sSelector);
	// 1. Секция данных ==================
	f.fields 	= f.find('.b-textfield');
	f.error 	= false;					// ошибка всей формы
	// 2. Секция логики ===================
	f.check = function (event){
		event.preventDefault();	// останавливает реакцию на событие по умолчанию
		
		f.fields.each(function (){
			var jqField = f.find(this);	
			if (!jqField.val()){
				jqField.addClass('b-textfield_error');
				f.error = true;
				}
			});
			f.showError();
		}
	f.showError = function () {
		// alert("hujna");
		if(!f.error == false) {
			$(".b-form__message_error")
				.css({'display':'block'})
				.stop()
				.animate(
					{
						'opacity' : 1
						}
					, 500
					);
			}
	}
	
	// 3. Секция событий ==================
	f.elem.submit(f.check)
	}
	
form_checker.prototype = new component();