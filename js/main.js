// const formulario = document.getElementById('formularios');
// const lista = document.getElementById('listaDeCadastros');

// function form () { 

//    formulario.addEventListener('submit', (evento) =>{
//     evento.preventDefault();

//     const nome = document.getElementById('seuNome').value;
//     const data = document.getElementById('nascimento').value;
//     const sexo = document.getElementById('genero').value;
//     const endereço = document.getElementById('rua').value;
//     const celular = document.getElementById('numero_tel').value;
//     const login = document.getElementById('login').value;
//     const senha =document.getElementById('senha').value;
//     console.log (form);
// })
// }


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

    if (nome.value === "" && data.value === "" && sexo.value === "" && endereço.value === "" &&  celular.value === "" && login.value === "" && senha.value === "") {
        alert('seu nome é obrgatorio');
        return;
    }

    formulario.submit();
 });