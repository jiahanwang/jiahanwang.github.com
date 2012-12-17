// JavaScript Document
$(window).load(function(){                   
	   	$("div.backPanel").fadeIn("500");
		$("div#mainPanel").delay("500");
		$("div#mainPanel").fadeIn("500");
		$('#msg,#develop').hover(
			function() {
				var name = "#i"+$(this).attr('id');
				$(name).show("blind", {direction: "vertical"}, 300);       
				
			}, 
			function() {
				var name = "#i"+$(this).attr('id');
				$(name).delay(300);
				$(name).hide("blind", {direction: "vertical"}, 100);
			});
		$('#friends').hover(
			function() {

				$("#ifriends").show("blind", {direction: "vertical"}, 300);        
			}, 
			function() {
				$("#ifriends").delay(300);
				$("#ifriends").hide("blind", {direction: "vertical"}, 100);	
			});
		$('#ifriends').hover(
			function(){
				$(this).clearQueue();
				},
			function(){
				$(this).hide("blind", {direction: "vertical"}, 100);
				});
				
		//Button变化事件
		$("#buttonPanel a img").hover(
			function(){
				$(this).fadeTo(400,0);
				if(!!(document.createElement("audio").canPlayType))
				{
					var music = document.getElementById("music");
				 	music.play();
				}
				},
			function(){
				$(this).fadeTo(400,1);
			});
});

