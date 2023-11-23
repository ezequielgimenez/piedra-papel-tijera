import { state } from "../../state";
import { goTo } from "../../router";

export function initResultados() {
  let resultadosString = localStorage.getItem("resultados");
  // si resultadosString tiene un valor (es decir, no es nulo ni indefinido), entonces se interpreta como una cadena JSON y se utiliza JSON.parse()
  // si no se encuentran resultados en localStorage, se crea un objeto de resultados inicial con valores de 0 para "maquina" y "jugador".
  let resultados = resultadosString
    ? JSON.parse(resultadosString)
    : { maquina: 0, jugador: 0 };

  const arrayPrincipal = state.getState().list;
  const primerArray = arrayPrincipal[0];

  if (primerArray[0] == "tijera" && primerArray[1] == "piedra") {
    console.log("perdiste");
    resultados.maquina++;
    localStorage.setItem("resultados", JSON.stringify(resultados));
    setTimeout(function () {
      goTo("/perdiste");
    }, 2000);
  } else if (primerArray[0] == "tijera" && primerArray[1] == "papel") {
    console.log("ganaste");
    resultados.jugador++;
    localStorage.setItem("resultados", JSON.stringify(resultados));
    setTimeout(function () {
      goTo("/ganaste");
    }, 2000);
  } else if (primerArray[0] == "piedra" && primerArray[1] == "tijera") {
    console.log("ganaste");
    resultados.jugador++;
    localStorage.setItem("resultados", JSON.stringify(resultados));
    setTimeout(function () {
      goTo("/ganaste");
    }, 2000);
  } else if (primerArray[0] == "piedra" && primerArray[1] == "papel") {
    console.log("perdiste");
    resultados.maquina++;
    localStorage.setItem("resultados", JSON.stringify(resultados));
    setTimeout(function () {
      goTo("/perdiste");
    }, 2000);
  } else if (primerArray[0] == "papel" && primerArray[1] == "tijera") {
    console.log("perdiste");
    resultados.maquina++;
    localStorage.setItem("resultados", JSON.stringify(resultados));
    setTimeout(function () {
      goTo("/perdiste");
    }, 2000);
  } else if (primerArray[0] == "papel" && primerArray[1] == "piedra") {
    console.log("ganaste");
    resultados.jugador++;
    localStorage.setItem("resultados", JSON.stringify(resultados));
    setTimeout(function () {
      goTo("/ganaste");
    }, 2000);
  } else if (primerArray[0] == primerArray[1]) {
    console.log("empate");
    setTimeout(function () {
      const currentState = state.getState();
      const newState = JSON.parse(JSON.stringify(currentState)); // Copia profunda del estado
      console.log(newState.list);
      newState.list = []; // Vacía el array list en el nuevo estado
      state.setState(newState);
      goTo("/instrucciones");
    }, 2000);
  }
}
