var log = console.log;

function mywindow (sSelector) {
	var w = this;

	w.init(sSelector);
	// 1. Секция данных ==================
	w.StartCountdownBtn = w.find('.b-mywindow__start-countdown');
	w.StopCountdownBtn  = w.find('.b-mywindow__stop-countdown');
	w.StartTickerBtn    = w.find('.b-mywindow__start-ticker');	
	w.StopTickerBtn     = w.find('.b-mywindow__stop-ticker');	
	w.OpenWindowBtn     = w.find('.b-mywindow__open-window');  	
	w.CloseWindowBtn    = w.find('.b-mywindow__close-window'); 	
	w.countdownTimer    = null;
	w.intervalTimer     = null;
	w.count             = 0;
	w.tickerInterval    = 2;
	w.newWindow         = null;

	// 2. Секция логики ===================
	w.countdownAction = function (){
		console.log('Countdowm has finished');
		}
	w.StartCountdown = function (){
		w.countdownTimer = window.setTimeout(w.countdownAction, 4000); // ТАймер, есть два параметра
		console.log('Countdowm has started');
		}
	w.StopCountdown  = function (){
		window.clearTimeout(w.countdownTimer); //Принудительная остановка таймера
		console.log('Countdowm has stoped');
		}
	w.StartTickerAction = function (){
		console.log('Time : ' + w.count + ' seconds');
		w.count += w.tickerInterval; 
		}
	w.StartTicker    = function (){ // Отметка, начинает таймер. Сколько времени прошло от начала запуска таймера
		w.intervalTimer = window.setInterval(w.StartTickerAction, w.tickerInterval * 1000); // ТАймер, есть два параметра
		console.log('Interval has started');
		}
	w.StopTicker     = function (){
		window.clearInterval(w.intervalTimer); //Принудительная остановка таймера
		w.count = 0;
		console.log('Interval has stoped');
		}
	w.OpenWindow     = function (){
		w.newWindow = window.open ( //
			 'new_window.html'
			,'_blank'
			,'top=200,left=400,width=500,height=200,resizable=no' 
			);
	}
	w.CloseWindow    = function (){
		w.newWindow.close();
		}
	
	// 3. Секция событий ==================
	w.StartCountdownBtn.bind('click', w.StartCountdown);
	w.StopCountdownBtn .bind('click', w.StopCountdown ); 
	w.StartTickerBtn   .bind('click', w.StartTicker   );   
	w.StopTickerBtn    .bind('click', w.StopTicker    );    
	w.OpenWindowBtn    .bind('click', w.OpenWindow    );    
	w.CloseWindowBtn   .bind('click', w.CloseWindow   );   
}

mywindow.prototype = new component();