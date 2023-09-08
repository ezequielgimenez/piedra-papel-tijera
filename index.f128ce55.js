let e;function t(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=o.parcelRequire1770;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},o.parcelRequire1770=a),a.register("27Lyk",function(e,o){t(e.exports,"register",()=>n,e=>n=e),t(e.exports,"resolve",()=>i,e=>i=e);var n,i,a={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)a[t[o]]=e[t[o]]},i=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a.register("fYx2c",function(e,t){e.exports=new URL(a("27Lyk").resolve("6nUhZ"),import.meta.url).toString()}),a.register("1LekW",function(e,t){e.exports=new URL(a("27Lyk").resolve("k0E3k"),import.meta.url).toString()}),a.register("wF6Ju",function(e,t){e.exports=new URL(a("27Lyk").resolve("6ocGL"),import.meta.url).toString()}),a("27Lyk").register(JSON.parse('{"dZpbI":"index.f128ce55.js","6nUhZ":"tijera.3914bd3c.png","k0E3k":"piedra.b149aa9e.png","6ocGL":"papel.2b93aab3.png"}'));const r={data:{list:[]},listeners:[],getState(){return this.data},suscribe(e){this.listeners.push(e)},setState(e){for(let t of(this.data=e,this.listeners))t()},addItem(e=[]){let t=this.getState();console.log("addItem currenState:",t),console.log("item",e),t.list.push(e),this.setState(t)}};function s(){let e=localStorage.getItem("resultados"),t=e?JSON.parse(e):{maquina:0,jugador:0},o=r.getState().list[0];"tijera"==o[0]&&"piedra"==o[1]?(console.log("perdiste aaaaaaaaaaaaaaaaaaaa"),t.maquina++,localStorage.setItem("resultados",JSON.stringify(t)),setTimeout(function(){p("/perdiste")},2e3)):"tijera"==o[0]&&"papel"==o[1]?(console.log("ganaste"),t.jugador++,localStorage.setItem("resultados",JSON.stringify(t)),setTimeout(function(){p("/ganaste")},2e3)):"piedra"==o[0]&&"tijera"==o[1]?(console.log("ganaste"),t.jugador++,localStorage.setItem("resultados",JSON.stringify(t)),setTimeout(function(){p("/ganaste")},2e3)):"piedra"==o[0]&&"papel"==o[1]?(console.log("perdiste"),t.maquina++,localStorage.setItem("resultados",JSON.stringify(t)),setTimeout(function(){p("/perdiste")},2e3)):"papel"==o[0]&&"tijera"==o[1]?(console.log("perdiste"),t.maquina++,localStorage.setItem("resultados",JSON.stringify(t)),setTimeout(function(){p("/perdiste")},2e3)):"papel"==o[0]&&"piedra"==o[1]?(console.log("ganaste"),t.jugador++,localStorage.setItem("resultados",JSON.stringify(t)),setTimeout(function(){p("/ganaste")},2e3)):o[0]==o[1]&&(console.log("empate"),setTimeout(function(){let e=r.getState(),t=JSON.parse(JSON.stringify(e));console.log(t.list),t.list=[],r.setState(t),p("/instrucciones")},2e3))}const l=[{path:/\/inicio/,component:function(e){let t=document.createElement("div");t.className="contenedor-inicio",t.innerHTML=`
    
  <el-texto tipoTexto="title">Piedra Papel \xf3 Tijera</el-texto>
  <mi-button class="mi-button" atributoBoton="Empezar"></mi-button>
  <ppt-component></ppt-component>  
`;let o=t.querySelector(".mi-button");return o?.addEventListener("click",()=>{e.goTo("/instrucciones")}),t}},{path:/\/instrucciones/,component:function(e){let t=document.createElement("div");t.innerHTML=`
    <el-texto tipoTexto="body">
        Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.
    </el-texto>

    <mi-button class="mi-button" atributoBoton="\xa1Jugar!"></mi-button>
    
    <ppt-component></ppt-component>  
  `;let o=t.querySelector(".mi-button");return o?.addEventListener("click",()=>{e.goTo("/play")}),t}},{path:/\/play/,component:function(e){let t=document.createElement("div");return t.innerHTML=`
  <ppt-play></ppt-play>
  `,t}},{path:/\/resultados/,component:s},{path:/\/ganaste/,component:function(e){let t=document.createElement("div");t.innerHTML=`
      <ganaste-comp></ganaste-comp>
    `;let o=t.querySelector(".mi-button");return o?.addEventListener("click",()=>{e.goTo("/instrucciones")}),t}},{path:/\/perdiste/,component:function(e){let t=document.createElement("div");t.innerHTML=`
      <perdiste-comp></perdiste-comp>
    `;let o=t.querySelector(".mi-button");return o?.addEventListener("click",()=>{e.goTo("/instrucciones")}),t}}],c="/piedra-papel-tijera";function d(){return location.host.includes("ezequielgimenez.github.io")}function p(e){let t=d()?c+e:e;history.pushState({},"",t),m(t)}function m(t){let o=e,n=d()?t.replace(c,""):t;for(let e of l)if(e.path.test(n)){let t=e.component({goTo:p});o.firstChild&&o.firstChild.remove(),o.appendChild(t)}}!function(){let t=document.querySelector(".root");e=t,"/"==location.pathname||"/piedra-papel-tijera/"==location.pathname?p("/inicio"):m(location.pathname),window.onpopstate=function(){m(location.pathname)},customElements.define("el-texto",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("link");t.setAttribute("href","https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap"),t.setAttribute("rel","stylesheet"),e.appendChild(t);let o=this.getAttribute("tipoTexto")||"",n=document.createElement("div");n.className=o,n.textContent=this.textContent,e.appendChild(n);let i=document.createElement("style");i.textContent=`
            .title{
                font-size:80px;
                color:#009048;
                text-align: center;
                font-family: 'Odibee Sans', cursive;
            }
            .body{
                font-size:40px;
                text-align: center;
                font-family: 'Odibee Sans', cursive;
            }
              .parrafo{
                font-size:20px;
                text-align: center;
                font-family: 'Odibee Sans', cursive;
              }
            
        `,e.appendChild(i)}}),customElements.define("mi-button",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=this.getAttribute("atributoBoton"),o=document.createElement("div");o.className="contenedor-button",o.innerHTML=`
            <button class="mi-button">
                <el-texto tipoTexto="body">${t}</el-texto>
            </button>
        `,e.appendChild(o);let n=document.createElement("style");n.textContent=`

          .contenedor-button{
             display:flex;
             align-items:center;
             justify-content:center;
          }
            .mi-button{
                background-color:#006CFC;
                border: 10px solid #001997;
                padding:19px 90px;
                margin:20px;
                color:white; 
                cursor: pointer;
                transition: transform 0.2s;
            }
            
            .mi-button:active {
                transform: scale(0.95);
              }
        `,e.appendChild(n)}}),customElements.define("ppt-component",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.className="contenedor-img",t.innerHTML=`
            <div>
                 <img class="mi-img" src="https://imgur.com/Gqdl1YG.png" alt="" />
                
            </div>
            <div>
                  <img class="mi-img" src="https://imgur.com/fpPGp5O.png" alt="" />
           
             </div>
            <div>
                <img class="mi-img" src="https://imgur.com/MQQxM7r.png" alt="" />
      
            </div>
        `,e.appendChild(t);let o=document.createElement("style");o.textContent=`
            .contenedor-img{
                display:flex;
                justify-content: space-around;

            }

            .mi-img{
                transition: transform 0.2s;

            }

            .mi-img:active{
                transform: scale(0.80);
            }
        `,e.appendChild(o)}}),customElements.define("ppt-play",class extends HTMLElement{constructor(){super(),this.count=3,this.arrayDeValores=[],this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){let e=document.createElement("div"),t=a("fYx2c"),o=a("1LekW"),n=a("wF6Ju");e.innerHTML=`
                <div class="contenedor-img2">
                      
                    <div>
                        <img class="img-random" src="https://imgur.com/Mc7opyX.png" alt="tijera-rotado" valor="tijera" />
                        
                    </div>
                    <div>
                          <img class="img-random" src="https://imgur.com/WxZ1n4a.png" alt="piedra-rotado" valor="piedra"/>
                  
                    </div>
                    <div>
                        <img class="img-random" src="https://imgur.com/0KGjK2M.png" alt="papel-rotado" valor="papel" />
              
                    </div>
                </div>

             <div class="counter">${this.count} </div>
             <div class="maquina"> </div>

               <div class="contenedor-img">
                    <div>
                          <img class="mi-img" src="${t}" alt="tijera" data-valor="tijera" />
                    </div>

                    <div>
                          <img class="mi-img" src="${o}" alt="piedra" data-valor="piedra"/>
                   </div>

                    <div>
                        <img class="mi-img" src="${n}" alt="papel" data-valor="papel" />
                    </div>
               </div>
          `,this.shadow.appendChild(e);let i=document.createElement("style");i.textContent=`
              .contenedor-img{
                  display:flex;
                  justify-content: space-around;
              }

              .contenedor-img2{
                display:none;
               }

              .counter{
                display:flex;
                align-items:center;
                justify-content:center;
                font-size: 5rem; /* Ajusta el tama\xf1o de fuente seg\xfan lo necesario */
                width: 200px;
                height: 100px;
                margin:50px auto;
                padding:50px 0;
                border: 10px solid black;
                border-radius:200px;

              }

              .mi-img{
                transition: transform 0.3s;
                opacity 0.3s;
                width:80px;
                height:183px;
            }

            .mi-img:hover{
                transform: scale(1.50); 
                opacity: 0.8; 
                width:80px;
                height:183px;
            }
          `,this.shadow.appendChild(i);let s=this.shadow.querySelectorAll(".mi-img"),l=this.shadow.querySelector(".contenedor-img"),c=!1;s.forEach(e=>{e.addEventListener("click",()=>{c=!0;let t=e.getAttribute("data-valor");s.forEach(t=>{t!==e&&(t.style.display="none",l.style.justifyContent="center")}),console.log("data-valor",t),null!==t&&this.arrayDeValores.push(t),r.addItem(this.arrayDeValores)})});let d=this.shadow.querySelector(".counter"),m=setInterval(()=>{d&&(d.textContent=this.count.toString(),this.count--,this.count<0&&(clearInterval(m),c||(console.log("No se hizo clic en ninguna imagen y el contador lleg\xf3 a cero."),p("/instrucciones")),d.remove(),this.showRandomImage()))},1e3)}showRandomImage(){let e=[],t=this.shadow.querySelectorAll(".img-random"),o=this.shadow.querySelector(".maquina"),n=document.createElement("div");n.className="contenedor-maquina";let i=document.createElement("style");t.forEach(t=>{let o=t.getAttribute("src"),n=t.getAttribute("valor");null!==o&&null!==n&&e.push({src:o,data:n})}),console.log(e);let a=Math.floor(Math.random()*e.length),l=e[a],c=e[a].src,d=e[a].data;console.log("array de la imagen [0]",l),console.log(c),console.log(d);let p=this.shadow.querySelector(".img-random");null!==p&&(p.src=c,p.setAttribute("valor",d));let m=p.getAttribute("valor");null!==m&&this.arrayDeValores.push(m),r.addItem(this.arrayDeValores),n.innerHTML=`
          <img class="img-maquina" src="${p.src}">
        `,o?.appendChild(n),i.textContent=`
          .contenedor-maquina{
            display:flex;
            justify-content:center;
            align-items:center;
            margin: 50px 0;
          }
          .img-maquina{
            width:80px;
            height:183px;
          }
        `,o?.appendChild(i),s()}}),customElements.define("ganaste-comp",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),o=localStorage.getItem("resultados"),n=JSON.parse(o??"null");t.className="contenedor-imgWin",t.innerHTML=`
            <img src="https://imgur.com/YNxOFWQ.png" alt="ganaste">
            <div class="contenedor-score">
            <el-texto tipoTexto="body">Score</el-texto>
            <el-texto tipoTexto="parrafo">Vos: ${n.jugador} puntos</el-texto>
            <el-texto tipoTexto="parrafo">La m\xe1quina: ${n.maquina} puntos</el-texto>
            
            </div>
            <mi-button class="mi-button" atributoBoton="Volver a jugar"></mi-button>
            <p class="texto-developer">Sitio desarrollado por 
                <a href="https://www.linkedin.com/in/ezequielgimenez/" class="texto-a">Ezequiel Gim\xe9nez</a> 
             </p>
        `,e.appendChild(t);let i=t.querySelector(".mi-button");i?.addEventListener("click",()=>{window.location.href="/instrucciones"});let a=document.createElement("style");a.textContent=`
            .contenedor-imgWin{
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                background-color:rgba(136, 137, 73, 0.9);
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

            .texto-developer{
              font-size:15px;
            }
            
            .texto-a {
              text-decoration: none;
              color: #001997; 
            }
            
            .texto-a:hover {
              text-decoration: underline;
            }

        `,e.appendChild(a)}}),customElements.define("perdiste-comp",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),o=localStorage.getItem("resultados"),n=JSON.parse(o??"null");t.className="contenedor-imgLose",t.innerHTML=`
              <img src="https://imgur.com/1X3TDdF.png" alt="perdiste">
              <div class="contenedor-score">
                <el-texto tipoTexto="body">Score</el-texto>
                <el-texto tipoTexto="parrafo">Vos: ${n.jugador} puntos</el-texto>
                <el-texto tipoTexto="parrafo">La m\xe1quina: ${n.maquina} puntos</el-texto>
              </div>
              <mi-button class="mi-button" atributoBoton="Volver a jugar"></mi-button>
              <p class="texto-developer">Sitio desarrollado por 
                 <a href="https://www.linkedin.com/in/ezequielgimenez/" class="texto-a">Ezequiel Gim\xe9nez</a> 
              </p>
          `,e.appendChild(t);let i=t.querySelector(".mi-button");i?.addEventListener("click",()=>{window.location.href="/instrucciones"});let a=document.createElement("style");a.textContent=`
          
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
            
            .texto-developer{
              font-size:15px;
            }
            
            .texto-a {
              text-decoration: none;
              color:  #001997;
            }
            
            .texto-a:hover {
              text-decoration: underline;
            }
          `,e.appendChild(a)}})}();
//# sourceMappingURL=index.f128ce55.js.map
