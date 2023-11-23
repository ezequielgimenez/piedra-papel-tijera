import { state } from "../../state";

export function initResultadoLoser(params) {
  //div y estilos
  const div = document.createElement("div");
  const style = document.createElement("style");

  //data
  const myData = localStorage.getItem("resultados");
  const dataParseada = JSON.parse(myData ?? "null");
  div.className = "contenedor-imgLose";
  div.innerHTML = `
     <img src="https://imgur.com/1X3TDdF.png" alt="perdiste">
     <div class="contenedor-score">
        <el-texto tipoTexto="body">Score</el-texto>
        <el-texto tipoTexto="parrafo">Vos : ${dataParseada.jugador}</el-texto>
        <el-texto tipoTexto="parrafo">La maquina: ${dataParseada.maquina}</el-texto>
     </div>

     <mi-button class="mi-button" atributoBoton="Volver a jugar"></mi-button>
     <p class="texto-p"> Sitio desarrollado por
      <a href="https://www.linkedin.com/in/ezequielgimenez/" class="texto-a">Ezequiel Gimenez</a>
     </p>
    `;
  const buttonSearch = div.querySelector(".mi-button");
  buttonSearch?.addEventListener("click", () => {
    const currentState = state.getState();
    const newState = JSON.parse(JSON.stringify(currentState)); //Esta operación de parseo crea un nuevo objeto JavaScript que es una copia independiente del original.
    newState.list = [];
    state.setState(newState);
    params.goTo("/instrucciones");
  });

  style.textContent = `
  .contenedor-imgLose{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background-color:rgba(137, 73, 73, 0.9);
      height: 100vh;
  }
  .contenedor-score{
    width:259px;
    height:217px;
    top:307px;
    left:58px;
    border: solid 10px black;
    background-color:white;
    text-aling:center;
  }

  .texto-p{
  font-size:15px;
  }

  .texto-a {
  text-decoration: none;
  color: #001997;
  }

  .texto-a:hover {
  text-decoration: underline;
  color:red;
  }
  `;
  div.appendChild(style);
  return div;
}
