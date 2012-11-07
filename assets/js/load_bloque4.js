$(document).ready(function(){
    $('input[val=""]').prop('checked',false);
    $("#mensaje").hide();
    ultimosValores(3);
    $('#continuar').click(guardarBloque4);
    $('#preview').click(guardarBloque4);
});

function guardarBloque4(){
    $("#mensaje").html('');
    //        e.preventDefault();
    var mensaje = "";
    if(mensaje==" "){
        $("#mensaje").html(mensaje).show(200);
        return false;
    }else{
        var preguntas = [];
        for(var i = 0; i < 10; i++)
            preguntas[i] = {
                'respuestas':[],
                'comentarios':''
            }
            
        var p1_o1 =$('input[name="p1-o1"]:checked');
        var p1_o2 =$('input[name="p1-o2"]:checked');
        var p1_o3 =$('input[name="p1-o3"]:checked');
        var p1_o4 =$('input[name="p1-o4"]:checked');
            preguntas[0].respuestas.push(p1_o1.val());
            preguntas[0].respuestas.push(p1_o2.val());
            preguntas[0].respuestas.push(p1_o3.val());
            preguntas[0].respuestas.push(p1_o4.val());
            
        var p2_o1 =$('input[name="p2-o1"]:checked');
        var p2_o2 =$('input[name="p2-o2"]:checked');
        var p2_o3 =$('input[name="p2-o3"]:checked');
        var p2_o4 =$('input[name="p2-o4"]:checked');
            preguntas[1].respuestas.push(p2_o1.val());
            preguntas[1].respuestas.push(p2_o2.val());
            preguntas[1].respuestas.push(p2_o3.val());
            preguntas[1].respuestas.push(p2_o4.val());
            
        var p3_o1 =$('input[name="p3-o1"]:checked');
        var p3_o2 =$('input[name="p3-o2"]:checked');
        var p3_o3 =$('input[name="p3-o3"]:checked');
        var p3_o4 =$('input[name="p3-o4"]:checked');
        if(p3_o1.val() != null && p3_o1.val() != '')
            preguntas[2].respuestas.push(p3_o1.val());
            preguntas[2].respuestas.push(p3_o2.val());
            preguntas[2].respuestas.push(p3_o3.val());
            preguntas[2].respuestas.push(p3_o4.val());
            
        var p4_o1 =$('input[name="p4-o1"]:checked');
            preguntas[3].respuestas.push(p4_o1.val());
            
        var p5_o1 =$('input[name="p5-o1"]:checked');
        var p5_o2 =$('input[name="p5-o2"]:checked');
        var p5_o3 =$('input[name="p5-o3"]:checked');
        var p5_o4 =$('input[name="p5-o4"]:checked');
            preguntas[4].respuestas.push(p5_o1.val());
            preguntas[4].respuestas.push(p5_o2.val());
            preguntas[4].respuestas.push(p5_o3.val());
            preguntas[4].respuestas.push(p5_o4.val());
            
        var p6_o1 =$('input[name="p6-o1"]:checked');
            preguntas[5].respuestas.push(p6_o1.val());
            
        var p7_o1 =$('input[name="p7-o1"]:checked');
        var p7_o2 =$('input[name="p7-o2"]:checked');
        var p7_o3 =$('input[name="p7-o3"]:checked');
        var p7_o4 =$('input[name="p7-o4"]:checked');
            preguntas[6].respuestas.push(p7_o1.val());
            preguntas[6].respuestas.push(p7_o2.val());
            preguntas[6].respuestas.push(p7_o3.val());
            preguntas[6].respuestas.push(p7_o4.val());
            
        var p8_o1 =$('input[name="p8-o1"]:checked');
            preguntas[7].respuestas.push(p8_o1.val());
            
        var p9_o1 =$('input[name="p9-o1"]:checked');
            preguntas[8].respuestas.push(p9_o1.val());
            
        var p10_c = $('#p10-c');
            preguntas[9].comentarios= p10_c.val();
            
        var b4 = {
            'preguntas':[]
        }
        b4.preguntas = preguntas;
        agregarBloque(b4, 4);
        return true;
    }
}