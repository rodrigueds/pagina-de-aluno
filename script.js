const form = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");
const listaAlunos = document.getElementById("listaAlunos");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const curso = document.getElementById("curso").value.trim();

    if(nome === "" || email === "" || curso === ""){
        mensagem.style.color = "red";
        mensagem.textContent = "Preencha todos os campos.";
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailValido.test(email)){
        mensagem.style.color = "red";
        mensagem.textContent = "Digite um e-mail válido.";
        return;
    }

    mensagem.style.color = "green";
    mensagem.textContent = "Aluno cadastrado com sucesso!";

    const novoAluno = document.createElement("div");
    novoAluno.classList.add("aluno");

    novoAluno.innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Curso:</strong> ${curso}</p>
    `;

    listaAlunos.appendChild(novoAluno);

    form.reset();
});