"use strict";
function include(){
	if(arguments[0].length){
		let a = document.createElement("script");
		a.src = arguments[0];
		document.body.appendChild(a);
	}
}
function manifest(list){
	for(let i of list)
		include(i);
}
include("manifest.js");
