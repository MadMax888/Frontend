/* клас "компонент" - хранит общие свойства и мeтоды 
для всех UI компонентов (меню, галерея, формы)*/
function component() {
	this.elem = null; // хранит указатель (доступ) на основной хтмл-елемент (меню, форма, галерея)
	this.find = function (sSelector){
		return this.elem.find(sSelector);
		}
	this.init = function (sSelector){
		if (!$(sSelector).length > 0) {
			alert("Element not found!!!");
			}
		else {
			this.elem = $(sSelector);
			}
		}
}