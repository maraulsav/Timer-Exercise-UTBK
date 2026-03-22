
var a=document.body.scrollHeight/100;a<10&&(a=10),a>200&&(a=200);
var b,c,d = ["#ffffff"],e="★",f=.75,h=30,j=[],k=[],l=[],m=[];
function n(o){return Math.floor(o*Math.random())}
function p(){var o=h-15;
    for(i=0,b=document.body.scrollHeight+h/2,c=window.innerWidth-50;i<=a;i++)
        l[i]=0,m[i]=15*Math.random()*f,
        k[i]=.03+Math.random()/10,j[i]=document.getElementById("flake"+i),
        j[i].style.fontFamily="inherit",j[i].size=n(o)+15,
        j[i].style.fontSize=j[i].size+"px",
        j[i].style.color=d[n(d.length)],j[i].style.zIndex=10,
        j[i].sink=f*j[i].size/5,j[i].posX=n(c-j[i].size),
        j[i].posY=n(2*b-b-2*j[i].size),j[i].style.left=j[i].posX+"px",
        j[i].style.top=j[i].posY+"px";q()
    }
function r(){b=document.body.scrollHeight+h/2,c=window.innerWidth-50}
function q(){
    for(i=0;i<=a;i++)l[i]+=k[i],
    j[i].posY+=j[i].sink,j[i].style.left=j[i].posX+m[i]*Math.sin(l[i])+"px",
    j[i].style.top=j[i].posY+"px",
    (j[i].posY<-j[i].size||j[i].posY>=b-2*j[i].size||parseInt(j[i].style.left)>c-3*m[i])&&
    (j[i].posX=n(c-j[i].size),f<0?j[i].posY=b-2*j[i].size:j[i].posY=-j[i].size);
    setTimeout("q()",35)}
function s(){if("initial"==j[0].style.display)for(i=0;i<=a;i++)j[i].style.display="none";
    else for(i=0;i<=a;i++)j[i].style.display="initial"}
    for(i=0;i<=a;i++)
        document.write("<span id='flake"+i+"' style='display: initial; transform: rotate("+n(60)+"deg); position:absolute; top: -"+h+"px'>"+e[n(e.length)]+"</span>");
    window.addEventListener("load",p),window.addEventListener("resize",r);
