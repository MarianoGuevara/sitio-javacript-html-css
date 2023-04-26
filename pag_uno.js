function mostrar_f_a_c()
{
    dato_uno = document.getElementById("dato_uno").value;
    dato_uno = parseInt(dato_uno)

    result = (dato_uno * (9/5)) + 32
    
    document.getElementById("dato_dos").value = result

    // document.getElementById("dato_dos")
}