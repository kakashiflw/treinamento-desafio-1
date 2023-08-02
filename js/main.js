function logar () {

    const login = document.getElementById('login').value
    const senha = document.getElementById9('senha').value;

    if(login === "certo" && senha === "certo" ) {
        alert("exito")
    }
}

document.querySelector('#login').onclick = logar