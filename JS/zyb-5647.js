
let tmp = "";

function mudaCor() {
    
    let r = "";
    let g = "";
    let b = "";

    //random = Gera números aleatórios entre 0 e 1
    //ceil,floor e round que arredondam o número para cima, para baixo ou aleatóriamente.

    //Determinando para a variável r um valor entre 0 e 255.
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    const cabecalho = document.querySelector(".cabecalho");
    
    cabecalho.setAttribute("style", `background-color:rgb(${r},${g},${b})`)

    tmp = setTimeout(mudaCor, 1000);

}

const inputUser = document.querySelector("input[name='nmUser']");
const labelUser = document.querySelector("label[for]");

inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style", "outline-color:#ff0000");
});

inputUser.addEventListener("keyup", ()=>{

    if(inputUser.value.length < 8){
        inputUser.setAttribute("style", "outline-color:#ff0000");
        labelUser.setAttribute("style", "color:#ff0000");
    }else{
        inputUser.setAttribute("style", "outline-color:#dddddd");
        labelUser.setAttribute("style", "color:#00ff00");
    }
});

