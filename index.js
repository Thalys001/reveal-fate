const inputPergunta = document.querySelector("#inputPergunta")

function fazerPergunta() {
  if (inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }
}
