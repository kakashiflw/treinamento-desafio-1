
const formulario = document.getElementById('formularios');
const nome = document.getElementById('seuNome');
const data = document.getElementById('nascimento');
const sexo = document.getElementById('genero');
const endereço = document.getElementById('rua');
const celular = document.getElementById('numero_tel');
const login = document.getElementById('login');
const senha = document.getElementById('senha');

 formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()


    if (nome.value === "") {
        alert('os campos são obrigatorios');
        alert('o nome é obrigatorio')
        // alert('seu nome é obrgatorio');
        return;
    }

    if (!validaNome(nome.value)) {
        alert('o nome só pode ter letras');
        return;
    }    

    if (data.value === "") {
        alert('data de nascimento é obrgatorio');
        return;
    }

    if (sexo.value === "mulher || hommem || outro") {
        return true;
    }

    if (endereço.value === "") {
        alert('endereço é obrgatorio');
        return;
    }

    if (celular.value === "") {
        alert('numero de celular é obrgatorio');
        return;
    }

    if (login.value === "" || !validaEmail(login.value)) {
        // alert('email invalido')
        alert('email invalido');
        alert('email é obrigatorio');
        return;
    }

    if (senha.value === "") {
        alert('senha é obrgatoria');
        return;
    }

    //  verificar se os campos estão preenchidos
    if(!validaSenha(senha.value, 8)) {
        alert('a senha precisa ter no minimo 8 digitos')
        return;
    }

    formulario.submit();
 });



 //FUNÇÃO PARA VALIDAR O EMAIL
 function validaEmail (email) {

    const emalValido = new RegExp (

        /^[a-zA-Z0-9/._-]+@[a-zA-Z0-9/._-]+\.[a-z]{2,}$/

    );

    if(emalValido.test(email)) {
        return true
    }else {
        return false
    }
 }

 //função para validar a senha 
 function validaSenha (senha2, minimoDeDigitos) {
    if(senha2.length >= minimoDeDigitos) {
        //senha correta
        return true;
    }else {
        //senha incorreta
        return false;
    }
 }

 //função para validar o nome 
 function validaNome(somenteLetras) {

    const nomeValido = new RegExp (
      /^[a-zA-Z]+[a-zA-Z]+[a-zA-Z]+[a-zA-Z]+[a-zA-Z]{1,}$/
    );
    

    if(nomeValido.test(somenteLetras)) {
        //só letras esta correto
        return true;
    }else {
        //se tiver digitos que não são letras esta incorreto
        return false;
    }

}