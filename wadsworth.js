

var myPort = browser.runtime.connect({name:"port-from-cs"});

myPort.onMessage.addListener(function(m) {
	var rawTime = document.getElementsByClassName("ytp-time-duration")[0].innerHTML; // gets the length of the video and stores in x
	var timeArry = rawTime.split(":");
	var timeS = Number(timeArry[0]) * 60 + Number(timeArry[1]);//total time in seconds

	var jumpTime = Math.ceil(timeS * .3);

	if (window.location.href.length === 43) // only checks for youtube video urls where time stamp is not already set. 43 is the length of a normal url
	{
	 window.location.href = window.location.href + "#t=" + jumpTime + "s";
	}
});