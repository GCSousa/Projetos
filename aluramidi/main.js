 function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
 }

const listaDeTeclas = document.querySelectorAll('.tecla');

for(contador=0;contador<listaDeTeclas.length;contador++)
{
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        //console.log(evento); para achar code da tecla
        //console.log(evento.code); para ver tecla pressionada
        if(evento.code ==="Enter" || evento.code === "Space")
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}

// function tocaSomPom () {
//     document.querySelector('#som_tecla_pom').play();
// }
// document.querySelector('.tecla_pom').onclick = tocaSomPom;
