$(document).ready(function(){
    $('input[val=""]').prop('checked',false);
    $("#mensaje").hide();
    ultimosValores(2);
    $('#continuar').click(guardarBloque3);
    $('#preview').click(guardarBloque3);
});

function guardarBloque3(){
    $("#mensaje").html('');
    var mensaje = "";
    if(mensaje==" "){
        $("#mensaje").html(mensaje).show(200);
        return false;
    }else{
        var preguntas = [];
        for(var i = 0; i < 15; i++)
            preguntas[i] = {
                'respuestas':[],
                'comentarios':''
            }           
            
        var p1_o1 =$('input[name="p1-o1"]:checked');
        var p1_c = $('#p1-c');
            preguntas[0].respuestas.push(p1_o1.val());
            preguntas[0].comentarios= p1_c.val();
            
        var p2_o1 =$('input[name="p2-o1"]:checked');
        var p2_o2 =$('input[name="p2-o2"]:checked');
        var p2_o3 =$('input[name="p2-o3"]:checked');
        var p2_o4 =$('input[name="p2-o4"]:checked');
        var p2_o5 =$('input[name="p2-o5"]:checked');
        var p2_o6 =$('input[name="p2-o6"]:checked');
            preguntas[1].respuestas.push(p2_o1.val());
            preguntas[1].respuestas.push(p2_o2.val());
            preguntas[1].respuestas.push(p2_o3.val());
            preguntas[1].respuestas.push(p2_o4.val());
            preguntas[1].respuestas.push(p2_o5.val());
            preguntas[1].respuestas.push(p2_o6.val());
            
        var p3_o1 =$('input[name="p3-o1"]:checked');
        var p3_o2 =$('input[name="p3-o2"]:checked');
        var p3_o3 =$('input[name="p3-o3"]:checked');
        var p3_o4 =$('input[name="p3-o4"]:checked');
        var p3_o5 =$('input[name="p3-o5"]:checked');
            preguntas[2].respuestas.push(p3_o1.val());
            preguntas[2].respuestas.push(p3_o2.val());
            preguntas[2].respuestas.push(p3_o3.val());
            preguntas[2].respuestas.push(p3_o4.val());
            preguntas[2].respuestas.push(p3_o5.val());
            
        var p4_o1 =$('input[name="p4-o1"]:checked');
        var p4_o2 =$('input[name="p4-o2"]:checked');
        var p4_o3 =$('input[name="p4-o3"]:checked');
        var p4_o4 =$('input[name="p4-o4"]:checked');
            preguntas[3].respuestas.push(p4_o1.val());
            preguntas[3].respuestas.push(p4_o2.val());
            preguntas[3].respuestas.push(p4_o3.val());
            preguntas[3].respuestas.push(p4_o4.val());
            
        var p5_o1 =$('input[name="p5-o1"]:checked');
        var p5_o2 =$('input[name="p5-o2"]:checked');
        var p5_o3 =$('input[name="p5-o3"]:checked');
        var p5_o4 =$('input[name="p5-o4"]:checked');
        var p5_o5 =$('input[name="p5-o5"]:checked');
        var p5_c = $('#p5-c');
            preguntas[4].respuestas.push(p5_o1.val());
            preguntas[4].respuestas.push(p5_o2.val());
            preguntas[4].respuestas.push(p5_o3.val());
            preguntas[4].respuestas.push(p5_o4.val());
            preguntas[4].respuestas.push(p5_o5.val());
            preguntas[4].comentarios= p5_c.val();
            
        var p6_o1 =$('input[name="p6-o1"]:checked');
            preguntas[5].respuestas.push(p6_o1.val());
            
        var p7_o1 =$('input[name="p7-o1"]:checked');
            preguntas[6].respuestas.push(p7_o1.val());
            
        var p8_o1 =$('input[name="p8-o1"]:checked');
            preguntas[7].respuestas.push(p8_o1.val());
            
        var p9_o1 =$('input[name="p9-o1"]:checked');
            preguntas[8].respuestas.push(p9_o1.val());
            
        var p10_o1 =$('input[name="p10-o1"]:checked');
        var p10_o2 =$('input[name="p10-o2"]:checked');
        var p10_o3 =$('input[name="p10-o3"]:checked');
        var p10_c = $('#p10-c');
            preguntas[9].respuestas.push(p10_o1.val());
            preguntas[9].respuestas.push(p10_o2.val());
            preguntas[9].respuestas.push(p10_o3.val());
            preguntas[9].comentarios= p10_c.val();
            
        var p11_o1 =$('input[name="p11-o1"]:checked');
        var p11_o2 =$('input[name="p11-o2"]:checked');
        var p11_o3 =$('input[name="p11-o3"]:checked');
        var p11_o4 =$('input[name="p11-o4"]:checked');
            preguntas[10].respuestas.push(p11_o1.val());
            preguntas[10].respuestas.push(p11_o2.val());
            preguntas[10].respuestas.push(p11_o3.val());
            preguntas[10].respuestas.push(p11_o4.val());
            
        var p12_o1 =$('input[name="p12-o1"]:checked');
        var p12_o2 =$('input[name="p12-o2"]:checked');
        var p12_o3 =$('input[name="p12-o3"]:checked');
            preguntas[11].respuestas.push(p12_o1.val());
            preguntas[11].respuestas.push(p12_o2.val());
            preguntas[11].respuestas.push(p12_o3.val());
            
        var p13_o1 =$('input[name="p13-o1"]:checked');
        var p13_o2 =$('input[name="p13-o2"]:checked');
        var p13_o3 =$('input[name="p13-o3"]:checked');
            preguntas[12].respuestas.push(p13_o1.val());
            preguntas[12].respuestas.push(p13_o2.val());
            preguntas[12].respuestas.push(p13_o3.val());
            
        var p14_o1 =$('input[name="p14-o1"]:checked');
            preguntas[13].respuestas.push(p14_o1.val());
            
        var p15_o1 =$('input[name="p15-o1"]:checked');
            preguntas[14].respuestas.push(p15_o1.val());
            
        var b3 = {
            'preguntas':[]
        }
        b3.preguntas = preguntas;
//        alert(JSON.stringify(b3));
        agregarBloque(b3, 3);
        return true;
    }
}