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
    const container1 = document.querySelector(".container .l-e");
    const container2 = document.querySelector(".container .l-d");
    const rodape = document.querySelector(".rodape");

    cabecalho.setAttribute("style", `background-color:rgb(${r},${g},${b})`);
    container1.setAttribute("style", `background-color:rgb(${r},${g},${b})`);
    container2.setAttribute("style", `background-color:rgb(${r},${g},${b})`);
    rodape.setAttribute("style", `background-color:rgb(${r},${g},${b})`);

    tmp = setTimeout(mudacor,100);

}

mudacor();