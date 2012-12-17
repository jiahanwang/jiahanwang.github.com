// JavaScript Document
/*定义变量*/
var casePanelAble = [null,true,true];//第一个为空，一个数据代表一个Page
var html5Able = true;
var caseInfo =[
				["bleach",false,"closed",1],
				["conan",false,"closed",1],
				["naruto",false,"closed",1],
				["onepiece",false,"closed",1],
				["gundamOO",false,"closed",1],
				["shana",false,"closed",2],
				["tennis",false,"closed",2],
				["eva",false,"closed",2],
				["seiya",false,"closed",2],
				["inuyasha",false,"closed",2]
			];

$(document).ready(function(){

	$(".navlist a").mouseenter(function(){
		$(this).animate({backgroundColor: $.Color("#F00")}, 400 );
		});
	$(".navlist a").mouseleave(function(){
		$(this).animate({backgroundColor: $.Color("transparent")}, 400 );
		});
	
	});
	
$(window).load(function(){
	
	//检测浏览器HTML5兼容性
	/*if(!Modernizr.video)
	{
		alert("您的浏览器不支持HTML5，网页中的视频音频将无法播放!\n"+"建议您升级您的浏览器到最新版本！");
		html5Able = false;
	}*/
	//加载完成后淡入
	$(".mainPanel").fadeIn('slow');	
	//给Cases的div注册scrollable
	$(".scrollable").scrollable({vertical: true,mousewheel: true});

	/*CasePanel事件注册*/
	//原图片mouseover事件			
	$(".CastPanel img").mouseover(
		function(){
			var panelNum = $(this).attr("class");
			//alert(casePanelAble[panelNum]);
			if(casePanelAble[panelNum] == true)
			{
				var id = $(this).attr('name');
				//alert(id);
				$('#'+id).fadeIn(300);
				//var music = document.getElementById("showMusic");
				//music.play();
				
			}
		});
		
	/*case事件注册*/
	//离开case	
	$(".Cases").mouseleave(function(){
			var id = $(this).attr("id");
			for(var i=0; i<caseInfo.length; i++)
				if(caseInfo[i][0] == id)
				{
					if(caseInfo[i][2] != "opened")
						$(this).fadeOut(300);
					break;
				}	
	});
	//点击close按钮时case收起
	$(".close").click(function(){
		var id = $(this).attr('name');
		//var pageNum = $(this).attr("class").split(' ')[1];
		//关闭case
		$("#"+id).children("a").hide();
		$("#"+id).animate({width: '163px'},150,
					function(){
						for(var i=0; i<caseInfo.length; i++)
							if(caseInfo[i][0]==id)
							{
								caseInfo[i][2] = "closed";
								casePanelAble[caseInfo[i][3]] = true;
								//alert(caseInfo[i][2]+"   "+casePanelAble[caseInfo[i][3]]);
								break;
							}		
					});
		$("#"+id).fadeOut();	
	});


	//点击case时case展开
	$('.Cases').click(function(){
			var id = $(this).attr('id');
			var caseNum = 0;
 			for(;caseNum<caseInfo.length; caseNum++)
			{
				if(caseInfo[caseNum][0]==id)
					break;			
			}
			if(caseInfo[caseNum][2] != "opened")
			{
				caseInfo[caseNum][2] = "opened";
				casePanelAble[caseInfo[caseNum][3]] = false;
				 for(var i = 0; i < caseInfo.length; i++)
				{
					if(caseInfo[i][0] != id && caseInfo[i][3] == caseInfo[caseNum][3])
						$("#"+caseInfo[i][0]).hide();
							
				}

				$(this).animate({width: '505px'},300,
					function(){	
					
					$(this).children("a").fadeIn(300);
					
					//判断该case是否是第一次打开
					//如果是第一次动态加入图片		
					if(!caseInfo[caseNum][1])
					{
						caseInfo[caseNum][1] = true;
						//循环加入图片,可以修改参数使得加入的图片变多
						for(i=2; i<=5; i++)
						{
							var divSelect = '#'+id+' '+'div.item[name='+'"'+i+'"'+']';
							//var loadSelect = '#'+id+'_Case'+' '+'div.item[name='+'"'+i+'"'+'] img[name="loading"]';
							var url = 'imgs/'+id+'/'+id+'_'+i+'.jpg';
							var $insert = $("<img>");
							$insert.hide();
							$insert.bind("load",function(){ 
											$(this).prev().remove();
											$(this).fadeIn();
										});
							$(divSelect).append($insert);
							$insert.attr('src',url);
							//var $temp = $('<div class="item"><img class="lazyLoad" src="imgs/'+id+'/'+id+'_'+i+'.jpg"/></div>');
							//$(this).children(".scrollable").children(".items").append($temp);
						}
					}
					
				});
			}
		});
});