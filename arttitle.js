//Всплывашие подсказки как в контакте на чистом js
//Автор: artquant
//Использование: не для коммерции

function artNF(e,d,h,k){var b=document.getElementById("nftitle"),g;void 0!=b&&b.parentNode.removeChild(b);b=document.createElement("div");b.id="nftitle";b.innerHTML='<div id="nftitle-body">'+d+'</div><div id="nftitle-arrow-out"><div id="nftitle-arrow-in"></div></div>';document.body.appendChild(b);var a=document.getElementById("nftitle");document.getElementById("nftitle-body");d=document.getElementById("nftitle-arrow-out");b=document.getElementById("nftitle-arrow-in");a.style.border="1px solid #ADBAC7";
a.style.padding="10px";a.style.fontSize="11px";a.style.color="#000000";a.style.position="absolute";a.style.display="inline-block";a.style.background="#ffffff";a.style.boxShadow="0 0 2px rgba(0,0,0,0.2)";a.style.zIndex=99997;a.style.opacity=0;d.style.position="absolute";d.style.zIndex=99998;d.style.border="6px solid transparent";b.style.border="5px solid transparent";b.style.position="absolute";b.style.zIndex=99999;switch(h){case "top":var c=0.1,f=0;a.style.top=parseInt(document.getElementById(e).offsetTop-
document.getElementById("nftitle").offsetHeight-6)-15+"px";a.style.left=parseInt(document.getElementById(e).offsetLeft)-10+"px";b.style.borderTop="5px solid #ffffff";b.style.bottom="-3px";b.style.left="-5px";d.style.borderTop="6px solid #ADBAC7";d.style.top=parseInt(a.offsetHeight)-1+"px";d.style.left=parseInt(document.getElementById(e).offsetWidth/2-6+10)+"px";1>c&&(g=setInterval(function(){c+=0.1;10<=f?clearInterval(g):(a.style.opacity=c,f++,void 0!=document.getElementById("nftitle")&&(a.style.top=
parseInt(document.getElementById("nftitle").offsetTop)+1+"px"))},25));break;case "bottom":c=0.1,f=10,a.style.top=parseInt(document.getElementById(e).offsetTop+document.getElementById("nftitle").offsetHeight/2+6)+15+"px",a.style.left=parseInt(document.getElementById(e).offsetLeft)-10+"px",b.style.borderBottom="5px solid #ffffff",b.style.top="-3px",b.style.left="-5px",d.style.borderBottom="6px solid #ADBAC7",d.style.top="-12px",d.style.left=parseInt(document.getElementById(e).offsetWidth/2-6+10)+"px",
1>c&&(g=setInterval(function(){c+=0.1;0>=f?clearInterval(g):(a.style.opacity=c,f--,void 0!=document.getElementById("nftitle")&&(a.style.top=parseInt(document.getElementById("nftitle").offsetTop)-1+"px"))},25))}k?document.onclick=function(a){for(var b=document.getElementById("nftitle-body").childNodes,d=[],c=0;c<b.length;c++)d.push(b[c]);for(c=0;c<d.length;c++)if(a.target==d[c])return;"undefined"!=document.getElementById("nftitle")&&document.getElementById("nftitle").parentNode.removeChild(document.getElementById("nftitle"))}:
null!=document.getElementById(e)&&(document.getElementById(e).onmouseout=function(){document.getElementById("nftitle").parentNode.removeChild(document.getElementById("nftitle"))})};
