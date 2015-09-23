var settings = {};
settings.data = null; //данные настроек
settings.init = function (oSettings){
	settings.data = oSettings;
	} // 
settings.get = function (sSettingName){
	return settings.data[sSettingName]; 
} //получение данных настройки