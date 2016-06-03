var controlKey=0;
document.getElementById('campo').onkeypress = function () {
    if(this.onkeypress.arguments[0].keyCode==13&&controlKey==0){
        urlCheck();
    }
    else{return;}
};

//checando Ip
function urlCheck () {

    var endereco = document.getElementById('campo').value,
        patt=/[A-Za-z.0-9]+/;

    //critica de entrada
    if(!patt.test(document.getElementById('campo').value)){return;}

    else{
        controlKey=1;
        document.getElementById('botao3').disabled = "disabled";

        if(endereco.substring(0, 7)!="http://"){
            endereco="http://" + endereco;
        }
        else{}

        function checkOnline(url) {
            try {

                var scriptElem = document.createElement('script');
                scriptElem.type = 'text/javascript';
                scriptElem.onerror = function(){
                    document.getElementById('imagem').src = 'img/offline.png';
                    alert("Page Not Found");
                    var cont=setTimeout(function () {
                        document.location.reload(true);
                    },15000);
                };
                scriptElem.onload = function(){
                    document.getElementById('imagem').src = 'img/online.png';
                    alert("Page Found");
                    var cont=setTimeout(function () {
                        document.location.reload(true);
                    },15000);
                };
                scriptElem.src = url;
                document.getElementsByTagName("body")[0].appendChild(scriptElem);
            } catch(err) {
                error(err);
            }
        };

        checkOnline(endereco);
    }
}

document.getElementById('botao4').onclick = function () {
    document.location.reload(true);
};