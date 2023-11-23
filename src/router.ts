import { initWelcome } from "./pages/inicio";
import { initInstrucciones } from "./pages/intrucciones";
import { initPlay } from "./pages/play";
import { initResultados } from "./pages/resultados";
import { initResultadoWin } from "./pages/win";
import { initResultadoLoser } from "./pages/loser";

const routes = [
  {
    path: /\/inicio/,
    component: initWelcome,
  },
  {
    path: /\/instrucciones/,
    component: initInstrucciones,
  },
  {
    path: /\/play/,
    component: initPlay,
  },
  {
    path: /\/resultados/,
    component: initResultados,
  },

  {
    path: /\/ganaste/,
    component: initResultadoWin,
  },
  {
    path: /\/perdiste/,
    component: initResultadoLoser,
  },
];

const BASE_PATH = "/piedra-papel-tijera";
let globalContainer: any; // Variable global para almacenar container

function isGithubPages() {
  //Esto verifica si la cadena "github.io" está presente en el dominio obtenido. Si "github.io" está presente en el dominio,
  //la función includes() devuelve true, lo que indica que la página está alojada en GitHub Pages. Si no está presente, devuelve false.
  return location.host.includes("ezequielgimenez.github.io");
}

export function initRouter(container: any) {
  globalContainer = container;

  if (
    location.pathname == "/" ||
    location.pathname == "/piedra-papel-tijera/"
  ) {
    goTo("/inicio");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}

export function goTo(path) {
  ///Recibe una ruta
  const pathComplete = isGithubPages() ? BASE_PATH + path : path;
  history.pushState({}, "", pathComplete); /// hace un push state para cambiar la ruta por el parametro que recibio "pathComplete"
  handleRoute(pathComplete); //Recibe por ej: (desafio-m5/inicio)    Anda a handleRoute y fijate que componente tiene que montar
}

export function handleRoute(route) {
  const container = globalContainer;
  //si mi ruta contiene github.io entonces voy a reemplazar BASE_PATH por algo vacio y quedaria solo /inicio por ejemplo
  const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
  for (const r of routes) {
    if (r.path.test(newRoute)) {
      // si entra al If le pasa la funcion correspondiente a element y de paso toma la funcion goTo
      //para que internamente pueda cambiar la URL porque el componente no puede hacer eso
      const element = r.component({ goTo: goTo });

      if (container.firstChild) {
        container.firstChild.remove();
      }
      container.appendChild(element);
    }
  }
}
