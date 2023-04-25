// mudacor()

function mudacor() {

    let r = "";
    let g = "";
    let b = "";

    
    //random = gera números aleatórios entre 0 e 1
    //ceil, floor e round que arrendondam o número para cima, baixo ou aleatóriamente
    
    //Determinando para a variavél r um valor entre 0 e 255
    r = Math.round(Math.random() * 255); 
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    
    const cabecalho = document.querySelector(".cabecalho");

    cabecalho.setAttribute("style", `background-color:rgb(${r},${g},${b})`);

    tmp = setTimeout(mudacor,100);


}

mudacor();