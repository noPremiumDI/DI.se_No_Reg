// ==UserScript==
// @name        DI.se_No_Reg
// @namespace   http://di.se/
// @version     0.1
// @description Makes it possible to read paywall protected DI.se premium content
// @include      http://*.di.se/*
// @copyright   2015,@paoTrade, in response to @richard_brase shitty post about Precise Biometrics 20151109
// @require     http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

//This is what Karma feels like, @richard_brase, enjoy a finger, from me to you;)
//http://www.di.se/di/artiklar/2015/11/9/den-smarte-ger-precise-fingret/

$(document).ready(function () {
var xpathResult = document.evaluate(".//*[@id=\"aspnetForm\"]/div[10]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/article/div[2]/div[4]/div[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
var node=xpathResult.singleNodeValue;
node.parentNode.removeChild(node);
    
var xpathResult = document.evaluate(".//*[@id=\"paywall-container\"]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
var node=xpathResult.singleNodeValue;
node.parentNode.removeChild(node);

var x = document.getElementsByClassName("paywall-content");
 
var i;
for (i = 0; i < x.length; i++) {
    
    x[i].style.height = "";
  
}
var x = document.getElementsByClassName("paywall-container");
 
var i;
for (i = 0; i < x.length; i++) {
   
    x[i].parentNode.removeChild(x[i]);
}
	
	
});


