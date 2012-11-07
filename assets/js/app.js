function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

function iniciarArregloEncuestas(){
    if(supports_html5_storage()){
        if('encuestas' in localStorage){
            var tiempo = new Date();
            var encuesta = {
                'fecha':tiempo.toISOString(),
                'bloques':[]
            };
            var encuestas = JSON.parse(localStorage.getItem('encuestas'));
            encuestas.push(encuesta);
            localStorage.setItem('encuestas',JSON.stringify(encuestas));
        }else{
            tiempo = new Date();
            encuestas = [];
            encuesta = {
                'fecha':tiempo.toISOString(),
                'bloques':[]
            };
            encuestas.push(encuesta);
            localStorage.setItem('encuestas',JSON.stringify(encuestas));
            
        //            alert('no hay encuestas');
        }
        if('encuestasOld' in localStorage){
        //            alert('si hay encuestas viejas');
        }else{
            var encuestasOld = [];
            localStorage.setItem('encuestasOld',JSON.stringify(encuestasOld));
        //            alert('no hay encuestas viejas');
        }
    }
}



function agregarDatos(datos){
    var encuestas = JSON.parse(localStorage.getItem('encuestas'));
    encuestas[encuestas.length-1].datos = datos;
    localStorage.setItem('encuestas',JSON.stringify(encuestas));
}

function iniciarEncuesta(datos){
    var encuestas = JSON.parse(localStorage.getItem('encuestas'));
    var tiempo = new Date();
    var encuesta = {
        'datos':datos,
        'fecha':tiempo.toISOString(),
        'bloques':[]    
    };
    encuestas[encuestas.length-1] = encuesta;
    localStorage.setItem('encuestas',JSON.stringify(encuestas));
}

function agregarBloque(bloque, nb){
    var encuestas = JSON.parse(localStorage.getItem('encuestas'));
    encuestas[encuestas.length-1].bloques[nb-1] = bloque;
    localStorage.setItem('encuestas',JSON.stringify(encuestas));
}

function ultimosValores(nB){
    var encuestas = JSON.parse(localStorage.getItem('encuestas'));
    var ultimaEncuesta = encuestas[encuestas.length-1];
    if('bloques' in ultimaEncuesta && ultimaEncuesta.bloques[nB] != null){
        $('input[value=""]').each(function(){
            $(this).prop('checked',true);
        });
        var bloque = ultimaEncuesta.bloques[nB];
        for (var ip = 0; ip < bloque.preguntas.length; ip++) {
            var pregunta = bloque.preguntas[ip];
            var respuestas = pregunta.respuestas;
            var comentarios = pregunta.comentarios;
            for (var ir = 0; ir < respuestas.length; ir++) {
                var value = respuestas[ir];
                $('#p'+(ip+1)+' input[value='+value+']').prop('checked',true);
            }
            var comentario = $('#p'+(ip+1)+'-c');
            if(comentario.length == 1)
                comentario.val(comentarios)
//            alert(comentarios);
        }
    }
}