// Função altera banner 

// function alteraBanner() {

//     const img1 = document.querySelector(".l-e > img")
//     const img2 = document.querySelector(".l-d > img")

//     let nr = Math.ceil(Math.random() * 3);
//     let caminho = `../img/banner-lateral-${nr}.png`;
//     img1.src = caminho;

//     nr = Math.ceil(Math.random() * 3);
//     caminho = `../img/banner-lateral-${nr}.png`;
//     img2.src = caminho;

//     setTimeout(alteraBanner, 1000)
    
// }


// const botao = document.querySelector(".central button");

// botao.addEventListener("click", ()=>{
//     function ligaDesliga() {

//         const imgLampada = document.querySelector(".cetral img");
    
//         if(botao.textContent == "Ligar"){
//             imgLampada.src = "../img/pic_bulbon.gif"
//             botao.textContent = "Desligar"
//         }else{
//             imgLampada.src = "../img/pic_bulboff.gif"
//             botao.textContent = "ligar"
//         }
    
//     }
// });

const inputUser = document.querySelector("input[name='nmUser']");

inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style", "border: solid 1px #ff0000;");
});