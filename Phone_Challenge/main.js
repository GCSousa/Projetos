function imprimevalor(valor)
{
    const inputTel = document.querySelector('input[type=tel]');
    inputTel.value += valor;
}

const listaDeTeclas = document.querySelectorAll('input[type=button]');
console.log(listaDeTeclas);

for(contador=0;contador<listaDeTeclas.length;contador++)
{
    const tecla = listaDeTeclas[contador];
    const valor = tecla.value;

    tecla.onclick = function(){
        imprimevalor(valor);
    }

    tecla.onkeydown = function(evento){
        if(evento.code ==="Enter" || evento.code === "Space")
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
