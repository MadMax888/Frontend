function b_slider (sSelector){
	var s = this;

	// 1. Секция данных ==================
	s.init(sSelector); // s.elem
	s.arrowPrev     = s.find('.b-slider__arrow_prev');	// стрелка <	
	s.arrowNext     = s.find('.b-slider__arrow_next');
	s.sliderSlides  = s.find('.b-slider__slides');
	s.slide         = s.find('.b-slide');
	s.slidePosition = 0;
	s.slideWidth    = s.find('.b-slide').width();	
	s.slidecount    = 2;	
	// 2. Секция логики ===================
	s.slidePrev = function (){
		console.log("sdasdasdasd");
		// сдвиг влево
		// последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
		s.slidePosition = Math.min(s.slidePosition + s.slideWidth * s.slidecount, 0)
		s.sliderSlides.css({'margin-left' : s.slidePosition + 'px'});
		}
	s.sliedNext = function (){
		// сдвиг вправо
		// последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
		var slidePositionMax = -s.slideWidth * (s.slide.length - s.slidecount);
		s.slidePosition = Math.max(s.slidePosition - s.slideWidth * s.slidecount, slidePositionMax);
		if (s.slidePosition == slidePositionMax) {
			s.slidePosition = 0;
			s.sliderSlides.css({'margin-left' : s.slidePosition + "px"});
			}
		else {	
			s.sliderSlides.css({'margin-left' : s.slidePosition + 'px'});
			}
		}
	// 3. Секция событий ==================
	s.arrowPrev.click(s.slidePrev);
	s.arrowNext.click(s.sliedNext);
}

b_slider.prototype = new component();