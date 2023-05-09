
// Vamos criar um objeto para armazenar o nossso usuário
const usuario = {
    nomeUsuario:"",
    senhaUsuario:""
}

addEventListener("click",(evento)=>{

evento.preventDefault();

    // console.log(evento.target.id == "btnSubmit")
    if(evento.target.id == "btnSubmit"){
        // let usuario = document.querySelector("#idUser").value;
        // let senha = document.querySelector("#idPass").value;
        usuario.nomeUsuario = document.querySelector("#idUser").value;
        senha.senhaUsuario = document.querySelector("#idPass").value;
        
        //validação
        if (usuario.nomeUsuario == "rm97973" && senha.senhaUsuario == "rm97973") {
            console.log("Validado");
            const h1Titulo = document.querySelector("#Título");
            h1.h1Titulo.innerHTML = "Bem Vindo : " = usuario.nomeUsuario;
        }else{
            console.log("Não Validou")
        }
    }

});