
// const liElement = document.getElementsByTagName("li");


// // Forma intelegente de fazer a leitura de uma coleção
// for (let index = 0; index < liElement.length; index++) {
//     console.log(liElement[index].textContent)
    
// }

// // console.log(liElement.length)

// Declaração de arrays
let nr1 = [1,2,3,4,5,];
let nr2 = [6,7,8,9,10];
let nr3 = [...nr1,...nr2];

console.log(`Array-1 ${nr1}`);
console.log(`Array-2 ${nr2}`);
console.log(`Array-3 ${nr3}`);

// Listando o Array - tecnica especial
// nr3.forEach((itemDoArray)=>{
    
// console.log(`Array-3 sendo listado ${nr3}`);    

// })

nr3.map((numero,key)=>{
    console.log(`Itens do Array - ${(key+1) - numero}`);
    // numero.forEach((digitos)=>{
    //     console.log(digitos)
    // });
})

// convertendo html collection em array de forma indireta
const liElementHtml = document.getElementsByTagName("li");
console.log(liElementHtml);

const liElementArray = [...liElementHtml];
console.log(liElementArray);

liElementArray.map((item,key)=>{
    if (item.textContent == "item-39") {
        console.log(`${key+1} - ${item.textContent = "LOCALIZADO"} `)
    }
// o item 44 kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
})


