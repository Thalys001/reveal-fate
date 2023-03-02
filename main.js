import "./style.css";

document.querySelector("#app").innerHTML = `
<div id="container">
<h1>Vou revelar o seu destino!</h1>
<p>Clique em fazer pergunta para que seu destino seja revelado.</p>

<input id="inputPergunta" type="text" placeholder="Digite sua pergunta">
<button 
  id="btnPerguntar">Fazer Pergunta</button>

<h3 id="resposta"></h3>
</div>
`;
