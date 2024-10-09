function agregar(valor) {
    document.getElementById(`pantalla`).value += valor;
    
 }
 function borrar() {
    document.getElementById(`pantalla`).value = ``
    
 }
 
 function calcular() {
 const valorpantalla = document.getElementById(`pantalla`).value
 const resultado = eval(valorpantalla)
 document.getElementById(`pantalla`).value = resultado;   
 }





**************************************************
    Numero aleatorio
**************************************************
    function numeroa(){
    const numero = Math.random()*10
    const redondeo = Math.round(numero)

    document.getElementById(`eleatorio`).innerHTML = redondeo;
}
