window.onload = function(e){
    var encuestas = JSON.parse(localStorage.getItem('encuestas'));
    
    var ultima = encuestas[encuestas.length-1];
    $('.mensaje').hide();
    mostrarDatos(ultima.datos);
    for (var i = 0; i < ultima.bloques.length; i++) {
        mostrarBloque(ultima.bloques[i],i);
    }
}

function mostrarDatos(datos){
    $('#folio').append('<h5 style="display: inline; padding-right:2cm">'+datos.folio+'</h5>');
    $('#organizacion').append('<h5 style="display: inline; padding-right:2cm">'+datos.organizacion+'</h5>');
    $('#comunidad').append('<h5 style="display: inline; padding-right:2cm">'+datos.comunidad+'</h5>');
    $('#municipio').append('<h5 style="display: inline; padding-right:2cm">'+datos.municipio+'</h5>');
    $('#pueblo').append('<h5 style="display: inline; padding-right:2cm">'+datos.pueblo+'</h5>');
    $('#escolaridad').append('<h5 style="display: inline; padding-right:2cm">'+datos.escolaridad+'</h5>');
    $('#grado-escolar').append('<h5 style="display: inline; padding-right:2cm">'+datos.grado_escolar+'</h5>');
    $('#edad').append('<h5 style="display: inline; padding-right:2cm">'+datos.edad+'</h5>');
    $('#lengua').append('<h5 style="display: inline; padding-right:2cm">'+datos.lengua+'</h5>');
    $('#sexo').append('<h5 style="display: inline; padding-right:2cm">'+datos.sexo+'</h5>');
    for(var ir = 0; ir < datos.lengua_habilidades.length; ir++){
        $('#lengua-habilidades').append('<h5 style="display: inline; padding-right:2cm">'+datos.lengua_habilidades[ir]+'</h5>');
    }
    for(var ir = 0; ir < datos.escuela_caracteristicas.length; ir++){
        $('#escuela-caracteristicas').append('<h5 style="display: inline; padding-right:2cm">'+datos.escuela_caracteristicas[ir]+'</h5>');
    }
}

function mostrarBloque(bloque, nB){
    var preguntas = bloque.preguntas;
    var idB = "b"+nB;
    var i = 0;
    $('#'+idB+' div.respuestas').each(function(){
        for(var ir = 0; ir < preguntas[i].respuestas.length; ir++){
            $(this).append('<h5 style="display: inline; padding-right:2cm">'+preguntas[i].respuestas[ir]+'</h5>');
        }
        i++;
    });
    i = 0;
    $('#'+idB+' div.comentarios').each(function(){
        $(this).append('<h5 style="display: inline; padding-right:2cm">'+preguntas[i].comentarios+'</h5>');
        i++;
    });
}