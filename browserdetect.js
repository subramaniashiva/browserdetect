/* Browser Detect JS file */
/* Detects the current browser and its version*/
/* This is a quick fix solution as this method uses User Agent String to detect browser*/
/* While developing for web, if you need some actions to be done based on browsers, please use feature detection instead of User Agent sniffing*/
/* You can get the browser name and its major version from two variables objbrowserName and objBrMajorVersion*/
function getMajorVersion(majorVerString) {
	var objBrMajorVersion,ix;
	objBrMajorVersion =  parseInt(navigator.appVersion,10);
	if ((ix=majorVerString.indexOf(";"))!=-1)
		majorVerString=majorVerString.substring(0,ix);
	if ((ix=majorVerString.indexOf(" "))!=-1)
		majorVerString=majorVerString.substring(0,ix);
	objBrMajorVersion = parseInt(''+majorVerString,10);
	if (isNaN(objBrMajorVersion)) {
		objBrMajorVersion = parseInt(navigator.appVersion,10);
	}
	return objBrMajorVersion;
}
$(document).ready(function(e) {
	var objappVersion = navigator.appVersion;
	var objAgent = navigator.userAgent;
	var objbrowserName  = navigator.appName;
	var objfullVersion  = ''+parseFloat(navigator.appVersion);
	var objBrMajorVersion = parseInt(navigator.appVersion,10);
	var objOffsetName,objOffsetVersion,ix;
	// In Chrome
	if ((objOffsetVersion=objAgent.indexOf("Chrome"))!=-1) {
		objbrowserName = "Chrome";
		objfullVersion = objAgent.substring(objOffsetVersion+7);
		objBrMajorVersion = getMajorVersion(objfullVersion);
	}
		// In Microsoft internet explorer
	else if ((objOffsetVersion=objAgent.indexOf("MSIE"))!=-1) {
		objbrowserName = "Microsoft Internet Explorer";
		objfullVersion = objAgent.substring(objOffsetVersion+5);
		objBrMajorVersion = getMajorVersion(objfullVersion);
		
	}
	// In Firefox
	else if ((objOffsetVersion=objAgent.indexOf("Firefox"))!=-1) {
		objbrowserName = "Firefox";
		objfullVersion = objAgent.substring(objOffsetVersion+8);
		objBrMajorVersion = getMajorVersion(objfullVersion);
		
	}
// In Safari
	else if ((objOffsetVersion=objAgent.indexOf("Safari"))!=-1) {
		objbrowserName = "Safari";
		objfullVersion = objAgent.substring(objOffsetVersion+7);
		if ((objOffsetVersion=objAgent.indexOf("Version"))!=-1)
			objfullVersion = objAgent.substring(objOffsetVersion+8);
		objBrMajorVersion = getMajorVersion(objfullVersion);
	}
// For other browser "name/version" is at the end of userAgent
	else if ( (objOffsetName=objAgent.lastIndexOf(' ')+1) < (objOffsetVersion=objAgent.lastIndexOf('/')) ) {
		objbrowserName = objAgent.substring(objOffsetName,objOffsetVersion);
		objfullVersion = objAgent.substring(objOffsetVersion+1);
		if (objbrowserName.toLowerCase()==objbrowserName.toUpperCase()) {
			objbrowserName = navigator.appName;
			objBrMajorVersion = getMajorVersion(objfullVersion);
		}
	}
	console.log(objbrowserName);
	console.log(objBrMajorVersion);
});
