//Всплывашие подсказки как в контакте на чистом js
//Автор: artquant
//Использование: не для коммерции

function artNF(f,g,d,h,m){var a=document.getElementById("nftitle"),l;void 0!=a&&a.parentNode.removeChild(a);a=document.createElement("div");a.id="nftitle";""!=d&&"top"==h?a.innerHTML='<div id="nftitle-title">'+d+'</div><div id="nftitle-body">'+g+'</div><div id="nftitle-arrow-out"><div id="nftitle-arrow-in"></div></div>':"top"==h?a.innerHTML='<div id="nftitle-body">'+g+'</div><div id="nftitle-arrow-out"><div id="nftitle-arrow-in"></div></div>':""!=d&&"bottom"==h?a.innerHTML='<div id="nftitle-arrow-out"><div id="nftitle-arrow-in"></div></div><div id="nftitle-body">'+
g+'</div><div id="nftitle-title">'+d+"</div>":"bottom"==h&&(a.innerHTML='<div id="nftitle-body">'+g+'</div><div id="nftitle-arrow-out"><div id="nftitle-arrow-in"></div></div>');document.body.appendChild(a);var b=document.getElementById("nftitle");g=document.getElementById("nftitle-body");d=document.getElementById("nftitle-title");var a=document.getElementById("nftitle-arrow-out"),c=document.getElementById("nftitle-arrow-in");b.style.border="1px solid #ADBAC7";b.style.fontFamily="Tahoma";b.style.fontSize=
"11px";b.style.color="#000000";b.style.position="absolute";b.style.display="inline-block";b.style.background="#ffffff";b.style.boxShadow="0 0 2px rgba(0,0,0,0.2)";b.style.zIndex=99997;b.style.opacity=0;g.style.padding="5px";d.style.background="#f2f2f2";d.style.padding="5px";d.style.fontWeight="bold";a.style.position="absolute";a.style.zIndex=99998;a.style.border="6px solid transparent";c.style.border="5px solid transparent";c.style.position="absolute";c.style.zIndex=99999;switch(h){case "top":var e=
0.1,k=0;b.style.top=parseInt(document.getElementById(f).offsetTop-document.getElementById("nftitle").offsetHeight-6)-15+"px";b.style.left=parseInt(document.getElementById(f).offsetLeft)-10+"px";d.style.borderBottom="1px solid ##cfd4e5";c.style.borderTop="5px solid #ffffff";c.style.bottom="-3px";c.style.left="-5px";a.style.borderTop="6px solid #ADBAC7";a.style.top=parseInt(b.offsetHeight)-1+"px";a.style.left=parseInt(document.getElementById(f).offsetWidth/2-6+10)+"px";1>e&&(l=setInterval(function(){e+=
0.1;10<=k?clearInterval(l):(b.style.opacity=e,k++,void 0!=document.getElementById("nftitle")&&(b.style.top=parseInt(document.getElementById("nftitle").offsetTop)+1+"px"))},25));break;case "bottom":e=0.1,k=10,b.style.top=parseInt(document.getElementById(f).offsetTop+document.getElementById("nftitle").offsetHeight/2+6)+10+"px",b.style.left=parseInt(document.getElementById(f).offsetLeft)-10+"px",d.style.borderTop="1px solid #cfd4e5",c.style.borderBottom="5px solid #ffffff",c.style.top="-3px",c.style.left=
"-5px",a.style.borderBottom="6px solid #ADBAC7",a.style.top="-12px",a.style.left=parseInt(document.getElementById(f).offsetWidth/2-6+10)+"px",1>e&&(l=setInterval(function(){e+=0.1;0>=k?clearInterval(l):(b.style.opacity=e,k--,void 0!=document.getElementById("nftitle")&&(b.style.top=parseInt(document.getElementById("nftitle").offsetTop)-1+"px"))},25))}m?document.onclick=function(a){for(var b=document.getElementById("nftitle-body").childNodes,d=[],c=0;c<b.length;c++)d.push(b[c]);for(c=0;c<d.length;c++)if(a.target==
d[c])return;"undefined"!=document.getElementById("nftitle")&&document.getElementById("nftitle").parentNode.removeChild(document.getElementById("nftitle"))}:null!=document.getElementById(f)&&(document.getElementById(f).onmouseout=function(){document.getElementById("nftitle").parentNode.removeChild(document.getElementById("nftitle"))})};
