window.onload = function(){
    var nE = 0;
    if('encuestas' in localStorage){
        var encuestas = JSON.parse(localStorage.getItem('encuestas'));
        nE = encuestas.length;
    }else{
        nE = 0;
    }
    if(nE == 1) 
        $('#ne').text('Has realizado '+(nE)+" encuesta.");
    else
        $('#ne').text('Has realizado '+(nE)+" encuestas.");
    $('#continuar').click(function(e){
        iniciarArregloEncuestas();
        window.location = "inicio.html";
    });
    $('#subir').click(function(e){
        open_in_new_tab("http://polls.pagodabox.com/");
    });
    $('#limpiar').click(function(e){
        localStorage.clear();
        window.location.reload();
        return false; 
    });
    $('#descargar').click(function(e){
        if(encuestas.length == 0){
            alert("No has hecho ninguna encuesta.");
        } 
        else{
            var contentenido = localStorage.getItem('encuestas');
            uriContent = "data:application/octet-stream," + encodeURIComponent(contentenido);
            newWindow=window.open(uriContent, 'guardar');
            localStorage.clear();
            window.location.reload();
        }
        return false;
    });
}

function open_in_new_tab(url )
{
    window.open(url, '_blank');
    window.focus();
}