$(document).ready(function(){
    $('input[val=""]').prop('checked',false);
    $("#mensaje").hide();
    ultimosValores(1);
    $('#continuar').click(guardarBloque2);
    $('#preview').click(guardarBloque2);
});

function guardarBloque2(){
    $("#mensaje").html('');
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
        preguntas[0].respuestas.push(p1_o1.val());
        preguntas[0].respuestas.push(p1_o2.val());
        preguntas[0].respuestas.push(p1_o3.val());
            
        var p2_o1 =$('input[name="p2-o1"]:checked');
        preguntas[1].respuestas.push(p2_o1.val());
            
        var p3_o1 =$('input[name="p3-o1"]:checked');
        var p3_o2 =$('input[name="p3-o2"]:checked');
        var p3_o3 =$('input[name="p3-o3"]:checked');
        var p3_o4 =$('input[name="p3-o4"]:checked');
        var p3_o5 =$('input[name="p3-o5"]:checked');
        var p3_c =$('#p3-c');
        preguntas[2].respuestas.push(p3_o1.val());
        preguntas[2].respuestas.push(p3_o2.val());
        preguntas[2].respuestas.push(p3_o3.val());
        preguntas[2].respuestas.push(p3_o4.val());
        preguntas[2].respuestas.push(p3_o5.val());
        preguntas[2].comentarios = p3_c.val();
            
        var p4_o1 =$('input[name="p4-o1"]:checked');
        preguntas[3].respuestas.push(p4_o1.val());
            
        var p5_o1 =$('input[name="p5-o1"]:checked');
        preguntas[4].respuestas.push(p5_o1.val());
            
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
        var p9_o2 =$('input[name="p9-o2"]:checked');
        var p9_o3 =$('input[name="p9-o3"]:checked');
        preguntas[8].respuestas.push(p9_o1.val());
        preguntas[8].respuestas.push(p9_o2.val());
        preguntas[8].respuestas.push(p9_o3.val());
            
        var p10_o1 =$('input[name="p10-o1"]:checked');
        preguntas[9].respuestas.push(p10_o1.val());
            
        var b2 = {
            'preguntas':[]
        }
        b2.preguntas = preguntas;
        agregarBloque(b2, 2);
        return true;
    }
}