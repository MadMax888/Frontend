function b_gallery(sSelector){
	var g = this;
	
	// 1. Секция данных ==================
	g.init(sSelector);										// сама галерея
	g.pictures			= g.find('.b-picture');				// фото в галерее
	g.arrowPrev			= g.find('.b-preview__arrow_prev');	// стрелка <	
	g.arrowNext			= g.find('.b-preview__arrow_next');	// стрелка >
	g.preview			= g.find('.b-preview');				// блок просмотра
	g.previewImage		= g.find('.b-preview__image');		// большое фото
	g.previewText		= g.find('.b-preview__text');		// текст подписи
	g.current 			= 0;								// номер текущего фото
	g.qty				= g.pictures.length;				// количество фото
	
	// 2. Секция логики ===================
	g.showPreview 		= function (){
		g.preview.addClass('b-preview_shown');
		
		var jqPicture = g.find(this);
		g.current = g.pictures.index(jqPicture);			// номер текущего фото
		g.showImage(0);
		} 
	g.showPrevious 		= function (){ g.showImage(-1); } 
	g.showNext 			= function (){ g.showImage( 1); } 
	g.showImage			= function (iShift){
		// == TODO == +  проверка на диапазон 0..qty
		// смена номера фото 
		g.current += iShift;
		console.log(g.current);
		if ( g.current >= g.qty ) {
			g.current = -1;
			console.log("toStart");
			}
		else if ( g.current < 0 ) {
			g.current = g.qty;
			console.log("toEnd");
			}
		else {
			var jqPicture    = g.pictures.eq(g.current);
			var jqImage      = jqPicture.find(".b-picture__image")
			var sBigImageSrc = jqImage.attr("src").replace("small_","");		//alert(sBigImageSrc);
			g.previewImage.attr('src', sBigImageSrc);		// записали sBigImageSrc
			
			var sTextUnderImg = jqImage.attr("alt");
			g.previewText.html(sTextUnderImg);
			}
		}
	g.closePreview 		= function (event){
		
		if (g.find(event.target).hasClass('b-preview') ){
			g.preview.removeClass('b-preview_shown');
			}
		}
	
	// 3. Секция событий ==================
	g.pictures	.click(g.showPreview);			// При щелчке по изображению - показать просмотр
	g.arrowPrev	.click(g.showPrevious);			// при щелчке по стрелке "предыдущая" - показать предыдущее изображение
	g.arrowNext	.click(g.showNext);				// при щелчке по стрелке "следующая"  - показать следующее изображение
	g.preview	.click(g.closePreview);			// при щелчке по preview - закрыть просмотр
	}
	
b_gallery.prototype = new component();