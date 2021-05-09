let puntosAcumulados = 0

function sumarPuntos() {
  
    puntosAcumulados = puntosAcumulados + 10

}
function restarPuntos() {

    puntosAcumulados = puntosAcumulados - 5

}






//Round 1


let respuestaCorrecta = document.querySelector("#maggie");  
maggie.onclick = () =>{
    sumarPuntos();
    $('.pregunta1').replaceWith(`<div class = "d-flex justify-content-center">
                                    <img src="img/homero-pensando.png" alt="Homero">
                                    <p>Muy bien! Tienes ${puntosAcumulados} puntos</p> 
                                    </div>`)

}



document.querySelector("#smithers");
smithers.onclick = () =>{
    restarPuntos();
    $('.pregunta1').replaceWith(`<div class = "d-flex justify-content-center">
                                     <img src="img/perdedor.png" alt="Lisa">
                                     <p>Eres todo un perdedor, tienes ${puntosAcumulados} puntos</p>
                                </div>`)
   
}
document.querySelector("#homer");
homer.onclick = () =>{
    restarPuntos();
    $('.pregunta1').replaceWith(`<div class = "d-flex justify-content-center">
    <img src="img/perdedor.png" alt="Lisa">
    <p>Eres todo un perdedor, tienes ${puntosAcumulados} puntos</p>
</div>`)
}    


//Round 2


respuestaCorrecta = document.querySelector("#opcion3");
opcion3.onclick = ()=>{
    sumarPuntos();
    $('.pregunta2').replaceWith(`<div class = "d-flex justify-content-center">
     <img src="img/lisa-libros.png" alt="">
     <p>Adelante Lisa! Digo... tienes ${puntosAcumulados} puntos.</p> <br>
    </div>`)
}
document.querySelector('#opcion2')
opcion2.onclick = ()=>{
    restarPuntos();
    $('.pregunta2').replaceWith(`<div class = "d-flex justify-content-center"><br> <img src="img/tv.png" alt=""><p>Te conviene repasar algunas temporadas. Tienes ${puntosAcumulados} puntos </p>  </div>`)
}
document.querySelector('#opcion1')
opcion1.onclick = ()=>{
    restarPuntos();
    $('.pregunta2').replaceWith(`<div class = "d-flex justify-content-center"> <img src="img/tv.png" alt="">  <p>Te conviene repasar algunas temporadas. Tienes ${puntosAcumulados} puntos </p> <br></div>`)
    
}

// Round 3


respuestaCorrecta = document.querySelector("#opera");
opera.onclick = () =>{
    sumarPuntos();
    $('.pregunta3').replaceWith(`<div class = "d-flex justify-content-center"> <img src="img/haha.png" alt=""> <p>Increible!. Tienes ${puntosAcumulados} puntos</p> <br></div>`)
}
document.querySelector("#drive");
drive.onclick = () =>{
    restarPuntos();
    $('.pregunta3').replaceWith(`<div class = "d-flex justify-content-center"> <img src="img/shame.png" alt=""><p>Me avergüenzo por los dos. Tienes ${puntosAcumulados} puntos</p> <br></div>`)
}
document.querySelector("#dance");
dance.onclick = () =>{
    restarPuntos();
    $('.pregunta3').replaceWith(`<div class = "d-flex justify-content-center"> <img src="img/shame.png" alt=""><p>Me avergüenzo por los dos. Tienes ${puntosAcumulados} puntos</p> <br></div>`)
}
document.querySelector("#karate");
karate.onclick = () =>{
    restarPuntos();
    $('.pregunta3').replaceWith(`<div class = "d-flex justify-content-center"> <img src="img/shame.png" alt=""><p>Me avergüenzo por los dos. Tienes ${puntosAcumulados} puntos</p> <br> </div>`)
}

//Round 4

respuestaCorrecta = document.querySelector("#margo");
margo.onclick = () =>{
    sumarPuntos();
    $('.pregunta4').replaceWith(`<div class = "d-flex justify-content-center"> <img src="img/burns.png" alt=""><p> Excelente! Tienes ${puntosAcumulados} puntos</p> <br></div>`)
}
document.querySelector("#loreley");
loreley.onclick = () =>{
    restarPuntos();
    $('.pregunta4').replaceWith(`<div class = "d-flex justify-content-center"> <img src="img/doh.png" alt=""><p>¿No puedes pasar más de 5 minutos sin humillarte? Tienes ${puntosAcumulados} puntos</p> <br></div>`)
}
document.querySelector("#odalisca");
odalisca.onclick = () =>{
    restarPuntos();
    $('.pregunta4').replaceWith(`<div class = "d-flex justify-content-center"> <img src="img/doh.png" alt=""><p>¿No puedes pasar más de 5 minutos sin humilllarte? Tienes ${puntosAcumulados} puntos</p> <br></div>`)
}

//Round 5

respuestaCorrecta = document.querySelector("#tres")
tres.onclick = () =>{
    sumarPuntos();
    $('.pregunta5').replaceWith(`<div class = "d-flex justify-content-center"> <img src = "img/maggie-surprise.png" alt=""><p>Lo hiciste de nuevo! <br></div>`)
}
document.querySelector("#cinco");
cinco.onclick = () =>{
    restarPuntos ();
    $('.pregunta5').replaceWith(`<p>Rafa hubiera alcanzado el puntaje máximo.`)
}
document.querySelector("#seis");
seis.onclick = () =>{
    restarPuntos ();
    $('.pregunta5').replaceWith(`<p>Rafa hubiera alcanzado el puntaje máximo.</p>`)

}
+//cambiar puntaje a 20 correcta
//Puntaje final
document.querySelector("#puntajeFinal")
puntajeFinal.onclick = ()=>{
    
    if (puntosAcumulados === 50){
        $('#puntajeFinal').replaceWith(`<p class="reglas text-center">Verdaderamente eres el rey de reyes. <br> Tu puntaje final es ${puntosAcumulados}👌</p>`)
        
    }else if (puntosAcumulados>=30 && puntosAcumulados<50){
        $('#puntajeFinal').replaceWith(`<p class=" text-center">Eres un gran fan, aunque faltan conocimientos. <br> Tu puntaje final es ${puntosAcumulados}👀</p>`)
    }else{
        $('#puntajeFinal').replaceWith(`<p class="reglas text-center">Perdedooor! <br> Debes repasar algunas temporadas antes de considerarte un fanático. <br> Tu puntaje final es ${puntosAcumulados}🤦‍♀️</p>`)
    }
    
}


//Quotes


document.querySelector('#botonPersonajes').addEventListener('click', function() {
    obtenerDatos();
})

function obtenerDatos() {
    let url = `https://thesimpsonsquoteapi.glitch.me/quotes`;
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function () {
        if (this.status==200 && this.readyState==4){
           let datos = JSON.parse (this.responseText);
           console.log(datos);
           let respuesta = document.querySelector('#respuesta');
           respuesta.innerHTML = '';

            for(let dato of datos){
                respuesta.innerHTML += ` <p class="quote">"${dato.quote}"</p> <br>
                                       
                                        <img src= "${dato.image}" alt="" class= "mx-auto">
                                        <p>${dato.character} </p> <br>
                                        </div>`
                                        
            }
        }
    }
}