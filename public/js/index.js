/**************** Util ****************/
//Mouse Wheel
function _myMouseWheel(event){
	if(event.preventDefault)
		event.preventDefault();
	else
		event.returnValue = false;
	var wheelDelta;
	if(event.wheelDelta){
		wheelDelta = window.opera && window.opera.version() < 9.5 ? -event.wheelDelta : event.wheelDelta;
	}
	else{
		wheelDelta = -event.detail*40;
	}
	var left = $(window).scrollLeft();
	if(wheelDelta < 0 && Math.abs(wheelDelta) > 110){
		left += 435;
		//if(left > 2365)
			//left = 2365;
	}
	else{
		left -= 435;
		//if(left < 0)
			//left = 0;
	}
	var n = $("html, body").queue("fx");
  	if(0 == n.length)
		$("html, body").animate({"scrollLeft": left},300,"linear");
}
//Get Browser Resolution
function _getPageHeight(){
		var pageHeight = window.innerHeight;
		if(typeof pageHeight != "number")
			if(document.compatMode =="CSS1Compat")
				pageHeight = document.documentElement.clientHeight;
			else
				pageHeight = document.body.clientHeight;
		return pageHeight;
}
/************ document.ready ***********/
$(function(){
	
	//Init Main Position
	if(_getPageHeight() <= 850){
		
		$("#mainPanel").css({"top": "130px","margin-top": "0px" });
	}
	//Event Resize Handler 	
	$(window).resize(function(){
		if(_getPageHeight() <= 850)
			$("#mainPanel").css({"top": "130px","margin-top": "0px" });
		else
			$("#mainPanel").css({"top": "50%","margin-top": "-280px" });
	});
	//NavBar Event Hover Handler
	/*$("#navBar").hover(
		function(){ $("div.links").clearQueue().animate({"width": "200px"},700);},
		function(){ $("div.links").clearQueue().animate({"width": "0px"},700);}
	);*/
	//Link Event Hover Handler
	$("#navBar li").hover(
		function(){ $(this).find("img.second").fadeIn(300);},
		function(){ $(this).find("img.second").fadeOut(300);}
	);
	/*$("a.tile").hover(
		function(event){ 
			$(this).children("p").fadeIn(300);
		},
		function(event){
			$(this).children("p").fadeOut(300);	
		}
	);*/
	//Tile Hover - Change Color
	$("a.tile").hover(
		function(event){ 
			$(this).animate({"backgroundColor": "#fb1616"},300);
		},
		function(event){
			$(this).animate({"backgroundColor": "#c40f0f"},300);
		}
	);
	//Event Mouse Wheel Handler
	if(document.attachEvent)
		document.attachEvent("onmousewheel", function(event){_myMouseWheel(event)});
	else
	{
		window.addEventListener("mousewheel", function(event){_myMouseWheel(event)});
		window.addEventListener("DOMMouseScroll", function(event){_myMouseWheel(event)});
	}
	//Short Key Smooth Scroll
	$("html, body").keydown(function (event){
		if(event.keyCode == 37){
			event.preventDefault();
			var left = $(window).scrollLeft()-435;
			//if(left < 0)
				//left = 0;
			var n = $("html, body").queue("fx");
  			if(0 == n.length)
				$("html, body").animate({"scrollLeft": left},300,"linear"); 
		}
		if(event.keyCode == 39){
			event.preventDefault();
			var left = $(window).scrollLeft()+435;
			//if(left > 2365)
				//left = 2365;
			var n = $("html, body").queue("fx");
  			if(0 == n.length)
				$("html, body").animate({"scrollLeft": left},300,"linear"); 
		}
	});
	
});
/************ window.load ***********/
$(window).load(function(){
	//Show Main
	$("#navWrapper").fadeIn(500);
	$("#mainPanel").delay(500).animate({"left": "65px","opacity": "1.0"},500);
	$(".scrollable-vertical").scrollable({speed: 500, keyboard: false,vertical: true, circular: true}).autoscroll({autoplay: true, interval: 4000 });
	$(".scrollable-horizontal").scrollable({speed: 500 , keyboard: false, vertical: false, circular: true}).autoscroll({autoplay: true, interval: 7000 });

});