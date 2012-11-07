window.onload = function(){
    $('#mensaje').hide();
    ultimosGenerales();
    $('#continuar').click(guardarDatos);
    $('#preview').click(guardarDatos);
}

function ultimosGenerales(){
    var encuestas = JSON.parse(localStorage.getItem('encuestas'));
    var ultimaEncuesta = encuestas[encuestas.length-1];
    if('datos' in ultimaEncuesta){
        var datos = ultimaEncuesta.datos;
        $('#folio').val(datos.folio);
        $('#organizacion').val(datos.organizacion);
        $('#comunidad').val(datos.comunidad);
        $('#municipio').val(datos.municipio);
        $('#pueblo').val(datos.pueblo);
        $('#lengua').val(datos.lengua);
        $('#grado-escolar').val(datos.grado_escolar);
        $('#escolaridad').val(datos.escolaridad);
        $('#edad').val(datos.edad);
        $('input[value="'+datos.sexo+'"]').prop('checked', true);
        for (var i = 0; i < datos.escuela_caracteristicas.length; i++) {
            var value = datos.escuela_caracteristicas[i];
            $('input[value="'+value+'"]').prop('checked', true);
        }
        for (var i = 0; i < datos.lengua_habilidades.length; i++) {
            var value = datos.lengua_habilidades[i];
            $('input[value="'+value+'"]').prop('checked', true);
        }
    }
}

function guardarDatos(){
    //        e.preventDefault();
    $("#mensaje").hide();
    $("#mensaje").html('');
                    
    var sexo = $("[name='sexo']");
                    
    var lengua = $("#lengua");
    var lengua_habla = $("#lengua-habla");
    var lengua_entiende = $("#lengua-entiende");
    var lengua_lee = $("#lengua-lee");
    var lengua_escribe = $("#lengua-escribe");
        
    var escolaridad = $("#escolaridad");
        
    var publica = $("#publica");
    var privada = $("#privada");
    var rural = $("#rural");
    var urbana = $("#urbana");
    var matutino = $("#matutino");
    var vespertino = $("#vespertino");
    var mixto = $("#mixto");
        
    var hombre = $("#hombre");
    var mujer = $("#mujer");
        
    var edad = $("#edad");
                    
        
                    
    if(mensaje==" "){
        $("#mensaje").html(mensaje).show(200);
        return false;
    }else{
        var datosGenerales = {
            'folio':$("#folio").val(),
            'organizacion':$('#organizacion').val(),
            'comunidad':$('#comunidad').val(), 
            'municipio':$('#municipio').val(), 
            'pueblo':$('#pueblo').val(), 
            'lengua':$('#lengua').val(), 
            'lengua_habilidades':[],
            'escolaridad':escolaridad.val(),
            'grado_escolar':$('#grado-escolar').val(), 
            'escuela_caracteristicas':[],
            'edad':edad.val(), 
            'sexo':$('input[name="sexo"]:checked').val()
        }
        $('input[name="lengua-habilidades"]:checked').each(function(){
            datosGenerales.lengua_habilidades.push(this.value)
        })
        if($('input[name="publica-privada"]:checked').val() != null){
            datosGenerales.escuela_caracteristicas.push($('input[name="publica-privada"]:checked').val());
        }
        if($('input[name="rural-urbana"]:checked').val() != null){
            datosGenerales.escuela_caracteristicas.push($('input[name="rural-urbana"]:checked').val());
        }
        if($('input[name="turno"]:checked').val() != null){
            datosGenerales.escuela_caracteristicas.push($('input[name="turno"]:checked').val());
        }
            
        //            alert(JSON.stringify(datosGenerales));
        agregarDatos(datosGenerales);
        return true;
    }
}