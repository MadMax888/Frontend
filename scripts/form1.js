function b_form(sSelector){
	var f = this;

	// 1. Секция данных (переменные, массивы, ...) ===
	f.form = $(sSelector);
	
	// 2. Секция логики (функции) ====================
	f.showInfo = function (){
		
		alert(
			settings.get('b-form__yourform') + ':'
			+ '\n' + f.label('.b-form__label_name') + ' : '		+ f.val('.b-form__name')
			+ '\n' + f.label('.b-form__label_surname') + ' : '	+ f.val('.b-form__surname')
			+ '\n' + f.label('.b-form__label_season') + ' : '	+ f.val('.b-form__season:checked')
			+ '\n' + f.label('.b-form__label_fruit') + ' : '	+ f.val('.b-form__fruit:checked')
			+ '\n' + f.label('.b-form__label_animals') + ' : '	+ f.val('.b-form__animals')
			+ '\n' + f.label('.b-form__label_review') + ' : '	+ f.val('.b-form__review')
			+ '\n Языки:\n'										+ f.getLanguages()
			);
		}

	f.getLanguages = function (){
			var lang = {							
			 "ru"	: "Русский"
			,"en"	: "Английский"
			,"uk"	: "Украинский"
			,"de"	: "Немецкий"
			}
		var sLanguages = '';
		$.each(lang, function( sLangCode, sLangName){
			sLanguages += 
				(sLanguages ? '\n' : '')
				+ sLangCode + '\t' + sLangName;
				}
			);
		return sLanguages;
		}
	f.label = function (sSelector){
		var label = f.form.find(sSelector).html();
		return label;
	}
	f.val = function (sSelector){
		var jqField = f.form.find(sSelector); // jqField - обьект колекция
		var sFieldValue = ''; // значение поля - то, что возвращает функцию
		if (jqField.attr('type') == 'checkbox') { // Если поле - флажок
				jqField.each(
				function (){
					var jqCheckbox = $(this);
					sFieldValue += 
						(sFieldValue ? ', ' : '')
						+ jqCheckbox.val();
					}
				);
			}
		else { // Если полу не флажок
				sFieldValue = jqField.val();
			}
		return sFieldValue;
		// var value = f.form.find(sSelector).val();
	}
	
	// 3. Секция событий =============================
	// при нажатии на кнопку ОК - показать информацию
	f.form.find('.b-form__ok-button').click(f.showInfo);
	}