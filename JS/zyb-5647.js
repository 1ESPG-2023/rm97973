// Função altera banner 

function alteraBanner() {

    const img1 = document.querySelector(".l-e > img")
    const img2 = document.querySelector(".l-d > img")

    let nr = Math.ceil(Math.random() * 3);
    let caminho = `../img/banner-lateral-${nr}.png`;
    img1.src = caminho;

    nr = Math.ceil(Math.random() * 3);
    caminho = `../img/banner-lateral-${nr}.png`;
    img2.src = caminho;

    setTimeout(alteraBanner, 1000)
    
}