"use strict";
function promiseFile(file){
	return new Promise((resolve, reject)=>{
		const xhr = new XMLHttpRequest();
		xhr.open("GET", file);
		xhr.overrideMimeType("text/plain");
		xhr.onload = () => resolve(xhr.responseText);
		xhr.onerror = () => reject(xhr.statusText);
		xhr.send();
	});
}

(function(){
	var style = document.createElement("STYLE");
	style.appendChild(document.createTextNode(`
html
{
	color:#fff;
	background:#000;
}
body{
	margin:0;
}
canvas{
	display:block;
}
`
	));
	document.head.appendChild(style);
})();
/*(function(){
	window.CANVAS = document . createElement("CANVAS");
	document.body.insertBefore(CANVAS,document.body.childNodes[0]);
	function resize(){
		CANVAS.width  = innerWidth;
		CANVAS.height = innerHeight;
	}
	resize();
	window.addEventListener("resize",resize);
	function draw(){
		var ctx = CANVAS.getContext("2d");
		ctx.fillStyle = "red";
		ctx.fillRect(0,0,100,100);
		ctx.fillRect(innerWidth-100,innerHeight-100,100,100);
		//requestAnimationFrame(draw);
	}
	requestAnimationFrame(draw);
})();*/
(function(){
	var WAIT = undefined;
	var loading_text = document.createTextNode("Loading...");
	document.body.appendChild(loading_text);
	setTimeout(()=>{WAIT = 0},100);
	(function(){
		var video = document.createElement("VIDEO");
		(function depend(){"use strict";
			if(false
				|| "undefined"==typeof(WAIT)
			//	|| "undefined"==typeof(initShaderProgram)
			//	|| "undefined"==typeof(dependency)
			//	dependencies list
			){
				return setTimeout(depend,1);
			}
			// dependencies loaded
			document.body.removeChild(loading_text);loading_text=null;
			(function(){
				document.body.appendChild(video);
				navigator.mediaDevices.getUserMedia({
				
				})
			})();
		})();
	})();
})();
