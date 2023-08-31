let nome;



// Verifica se a página atual é a página inicial (index.html)
if (window.location.pathname.includes("index.html")) {
    document.getElementById("button").addEventListener("click" , function(){
         nome = document.getElementById("nome").value;
        localStorage.setItem("nome", nome);
        window.location.href = "obrigado.html";
    });
}

// Verifica se a página atual é a página "obrigado.html"
if (window.location.pathname.includes("obrigado.html")) {
    const nome = localStorage.getItem("nome");
    if (nome) {
        document.getElementById("home").innerHTML = "Obrigado " + nome + " seu feedback já foi enviados.";
    }
}