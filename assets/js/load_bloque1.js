$(document).ready(function(){
    $('input[val=""]').prop('checked',false);
    $("#mensaje").hide();
    ultimosValores(0);
    $('#continuar').click(guardarBloque1);
    $('#preview').click(guardarBloque1);
});

function guardarBloque1(){
    $("#mensaje").html('');
    //            e.preventDefault();
    var mensaje = "";
    if(mensaje==" "){
        $("#mensaje").html(mensaje).show(200);
        return false;
    }else{
        var preguntas = [];
        for(var i = 0; i < 4; i++)
            preguntas[i] = {
                'respuestas':[],
                'comentarios':''
            }
            
        var p1_o1 =$('input[name="p1-o1"]:checked');
        var p1_o2 =$('input[name="p1-o2"]:checked');
        var p1_o3 =$('input[name="p1-o3"]:checked');
        preguntas[0].respuestas.push(p1_o1.val());
        preguntas[0].respuestas.push(p1_o2.val());
        preguntas[0].respuestas.push(p1_o3.val());
            
        var p2_o1 =$('input[name="p2-o1"]:checked');
        var p2_c =$('#p2-c');
        preguntas[1].respuestas.push(p2_o1.val());
        preguntas[1].comentarios = p2_c.val();
            
        var p3_o1 =$('input[name="p3-o1"]:checked');
        preguntas[2].respuestas.push(p3_o1.val());
            
        var p4_o1 =$('input[name="p4-o1"]:checked');
        var p4_c =$('#p4-c');
        preguntas[3].respuestas.push(p4_o1.val());
        preguntas[3].comentarios = p4_c.val();
            
            
        var b1 = {
            'preguntas':[]
        }
        b1.preguntas = preguntas;
        agregarBloque(b1, 1);
        return true;
    }
}