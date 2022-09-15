function notatotal() {
   nombre=document.getElementById('Nombre').value;
   edad=document.getElementById('Edad').value;
   ciclo=document.getElementById('Ciclo').value;
    tarea1=document.getElementById('tarea1').value;
    tarea2=document.getElementById('tarea2').value;
    parcial1=document.getElementById('parcial1').value;
    parcial2=document.getElementById('parcial2').value;
    
    document.getElementById('resultado3').innerText= 'Nombre:'+nombre+'/'+'Edad:'+edad+' años'+'/'+'Ciclo:'+ciclo

       
    var notapromedio=(((parseInt(tarea1)+parseInt(tarea2))/2)+parseInt(parcial1)+parseInt(parcial2))/3;

document.getElementById('resultado2').innerHTML =  'Nota promedio: '+Math.round(notapromedio);
    if(notapromedio<11){
        document.getElementById('resultado').innerHTML = 'DESAPROBADO'
    }else{
        if( notapromedio<15){
            document.getElementById('resultado').innerHTML = 'alumno regular APROBADO'
        }else{
                if(notapromedio===15||notapromedio<=20){
                    document.getElementById('resultado').innerHTML = 'alumno destado APROBADO'
                    }else{
                        document.getElementById('resultado').innerHTML = 'EL RANGO DE NOTA ES DE 0 - 20'
                    }
                }    
            }
}

