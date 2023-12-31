const formulario = document.getElementById('formularios');
const nome = document.getElementById('seuNome');
const data = document.getElementById('nascimento');
const sexo = document.getElementById('genero');
const endereço = document.getElementById('rua');
const celular = document.getElementById('numero_tel');
const login = document.getElementById('login');
const senha = document.getElementById('senha');

 formulario.addEventListener('submit', (vitinho) => {
    vitinho.preventDefault()


    if (nome.value === "") {
        alert('os campos são obrigatorios');
        alert('o nome é obrigatorio');
        // alert('seu nome é obrgatorio');
        return;
    }
    
    if (!validaNome(nome.value)) {
        alert ('o nome pode ter somente letras');
        return;
    }
    
    if (data.value === "") {
        alert('data de nascimento é obrgatorio');
        return;
    }

    if (sexo.value === "") {
        alert('escreva seu sexo')
        return true;
    }

    if (!validaGenero(sexo.value)) {
        alert('escreva homem, mulher ou outro')
        return;
    }

    if (endereço.value === "") {
        alert('endereço é obrgatorio');
        return;
    }

    if (celular.value === "") {
        alert('numero de celular é obrgatorio');
        return;
    }

    if (!validaCelular(celular.value)) {
        alert ('numero de celular invalido');
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
    formulario.reset();

 });

    // celula com mascara
 celular.addEventListener('keypress', (mascaraCelular) => {
    // mascaraCelular.preventDefault();

    let celularLinha = celular.value.length

    if(celularLinha === 0) {
        celular.value += '(15)'
    }

    if(celularLinha === 9) {
        celular.value += '-'
    }
 });


 //FUNÇÃO PARA VALIDAR O EMAIL
 function validaEmail (email) {

    const emalValido = new RegExp (

        /^[a-zA-Z0-9/._-]+@[a-zA-Z0-9/._-]+\.[a-zA-Z]{2,}$/
    );

    if(emalValido.test(email)) {
        //email correto
        return true
    }else {
        //email incorreto
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

        /^[a-zA-Z ]+[a-zA-Z ]+[a-zA-Z ]+[a-zA-Z ]+[a-zA-Z ]{2,}$/
    );

    if(nomeValido.test(somenteLetras)) {
        //só letras esta correto
        return true;
    }else {
        //se tiver digitos que não são letras esta incorreto
        return false;
    }

}

//função para telefone ser somente com numero
 function validaCelular (somenteNumero) {

    const celularValido = new RegExp (

        /^[(0-9)/0-9]+-[0-9]{1,}$/
    );

    
    if(celularValido.test(somenteNumero)) {

        //so numero ta correto
        return true;
    }else {
        //alem de numero incorreto
        return false;
    }
}

//função para validar o genero
function validaGenero (somenteValido) {

    const generoValido = new RegExp (

         /^[homemHomemmulherMulheroutroOutro]{1,}$/
    );

    if(generoValido.test(somenteValido)){

        return true;
    }else {

        return false;
    }
}

function listaDinamica (name, date, sex, addres, phone, account, password) {

    let meuNome = document.getElementById('seuNome').value;
    let meuData = document.getElementById('nascimento').value;
    let meuSexo = document.getElementById('genero').value;
    let meuEndereço = document.getElementById('rua').value;
    let meuCelular = document.getElementById('numero_tel').value;
    let meuLogin = document.getElementById('login').value;
    let meuSenha = document.getElementById('senha').value;

    let lista = document.getElementById('listaDeCadastros_um').innerHTML

    //lista dinamica -----------------

    lista += "<td>" +meuNome+ "</td>"

    lista += "<td>" +meuData+ "</td>"

    lista += "<td>" +meuSexo+ "</td>"

    lista += "<td>" +meuEndereço+ "</td>"

    lista += "<td>" +meuCelular+ "</td>"

    lista += "<td>" +meuLogin+ "</td>"

    lista += "<td>" +meuSenha+ "</td>"

    document.getElementById('listaDeCadastros_um').innerHTML = lista;

}

formulario.submit = listaDinamica;