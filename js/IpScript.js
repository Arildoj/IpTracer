//Gerando IP
var Ip;

document.getElementById('botao1').onclick = function () {
    
    var numb=[0,0,0,0];

    for(var i=0;i<4;i++){
        numb[i]=RandomIp();
        if((numb[0]>191)||(numb[0]==10)||(numb[0]==0)||((numb[0]>14)&&(numb[0]<39))||((numb[0]>126)&&(numb[0]<129))){
            numb[0]=RandomIp();
        }
    }

    function RandomIp (){
        var a=0;
        a=Math.floor(Math.random()*255);//(Math.random()*(max-min))-min
        return a;
    }
    
    Ip = "http://"+(numb[0]+"."+numb[1]+"."+numb[2]+"."+numb[3]);
    document.getElementById('usr').value = Ip;
};

document.getElementById('botao2').onclick = function () {

    function checkOnline(Ip) {

            document.getElementById('detetive').src = "img/load.gif";
            //create a script Element
            var scriptElem = document.createElement('script');
            scriptElem.type = 'text/javascript';
            scriptElem.onerror = function(){
                alert("Page Not Found");
                document.location.reload(true);
            };
            scriptElem.onload = function(){
                alert("Page Online");
                window.open(Ip);
            };
            scriptElem.src = Ip;
            document.getElementsByTagName("body")[0].appendChild(scriptElem);
    };
    
    checkOnline(Ip);
};
