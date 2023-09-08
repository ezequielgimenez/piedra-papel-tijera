function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequire1770;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequire1770=i),i.register("27Lyk",function(t,o){e(t.exports,"register",()=>n,e=>n=e),e(t.exports,"resolve",()=>i,e=>i=e);var n,i,a={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)a[t[o]]=e[t[o]]},i=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i.register("5UesL",function(e,t){e.exports=new URL(i("27Lyk").resolve("74Trf"),import.meta.url).toString()}),i.register("9gay6",function(e,t){e.exports=new URL(i("27Lyk").resolve("57tS2"),import.meta.url).toString()}),i.register("k7DIM",function(e,t){e.exports=new URL(i("27Lyk").resolve("axSNX"),import.meta.url).toString()}),i("27Lyk").register(JSON.parse('{"1LzKV":"index.166a9500.js","74Trf":"tijera.3914bd3c.png","57tS2":"piedra.b149aa9e.png","axSNX":"papel.2b93aab3.png"}'));const a={data:[],listeners:[],getState(){return this.data},suscribe(e){this.listeners.push(e)},setState(e){for(let t of(this.data=e,this.listeners))t()},addItem(e=[]){let t=this.getState();console.log("addItem currenState:",t),console.log("item",e);let o=[...t,e];this.setState(o)}},r=[{path:/\/inicio/,component:function(e){let t=document.createElement("div");t.className="contenedor-inicio",t.innerHTML=`
    
  <el-texto tipoTexto="title">Piedra Papel \xf3 Tijera</el-texto>
  <mi-button class="mi-button" atributoBoton="Empezar"></mi-button>
  <ppt-component></ppt-component>  
`;let o=t.querySelector(".mi-button");return o?.addEventListener("click",()=>{e.goTo("/instrucciones")}),t}},{path:/\/instrucciones/,component:function(e){let t=document.createElement("div");t.innerHTML=`
    <el-texto tipoTexto="body">
        Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.
    </el-texto>

    <mi-button class="mi-button" atributoBoton="\xa1Jugar!"></mi-button>
    
    <ppt-component></ppt-component>  
  `;let o=t.querySelector(".mi-button");return o?.addEventListener("click",()=>{e.goTo("/play")}),t}},{path:/\/play/,component:function(){let e=document.createElement("div");return e.innerHTML=`
  <ppt-play></ppt-play>
  `,e}},{path:/\/ganaste/,component:function(e){let t=document.createElement("div");t.innerHTML=`
        
  
      <ganaste-comp></ganaste-comp>

    
    `;let o=t.querySelector(".mi-button");return o?.addEventListener("click",()=>{e.goTo("/instrucciones")}),t}},{path:/\/perdiste/,component:function(e){let t=document.createElement("div");t.innerHTML=`
        
  

      <perdiste-comp></perdiste-comp>
    
    `;let o=t.querySelector(".mi-button");return o?.addEventListener("click",()=>{e.goTo("/instrucciones")}),t}}],s="desafio-m5";function l(){return location.host.includes("github.io")}!function(){let e=document.querySelector(".root");!function(e){function t(e){let t=l()?s+e:e;history.pushState({},"",t),o(t)}function o(o){let n=l()?o.replace(s,""):o;for(let o of r)if(o.path.test(n)){let n=o.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(n)}}"/"==location.pathname||"/piedra-papel-tijera/"==location.pathname?t("/inicio"):o(location.pathname),window.onpopstate=function(){o(location.pathname)}}(e),customElements.define("el-texto",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("link");t.setAttribute("href","https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap"),t.setAttribute("rel","stylesheet"),e.appendChild(t);let o=this.getAttribute("tipoTexto")||"",n=document.createElement("div");n.className=o,n.textContent=this.textContent,e.appendChild(n);let i=document.createElement("style");i.textContent=`
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
        `,e.appendChild(o)}}),customElements.define("ppt-play",class extends HTMLElement{constructor(){super(),this.count=3,this.arrayDeValores=[],this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){let e=document.createElement("div"),t=i("5UesL"),o=i("9gay6"),n=i("k7DIM");e.innerHTML=`
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
          `,this.shadow.appendChild(e);let r=document.createElement("style");r.textContent=`
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
          `,this.shadow.appendChild(r);let s=this.shadow.querySelectorAll(".mi-img"),l=this.shadow.querySelector(".contenedor-img"),c=!1;s.forEach(e=>{e.addEventListener("click",()=>{c=!0;let t=e.getAttribute("data-valor");s.forEach(t=>{t!==e&&(t.style.display="none",l.style.justifyContent="center")}),console.log("data-valor",t),null!==t&&this.arrayDeValores.push(t),a.addItem(this.arrayDeValores)})});let d=this.shadow.querySelector(".counter"),p=setInterval(()=>{d&&(d.textContent=this.count.toString(),this.count--,this.count<0&&(clearInterval(p),c||(console.log("No se hizo clic en ninguna imagen y el contador lleg\xf3 a cero."),window.location.href="/instrucciones"),d.remove(),this.showRandomImage()))},1e3)}showRandomImage(){let e=[],t=this.shadow.querySelectorAll(".img-random"),o=this.shadow.querySelector(".maquina"),n=document.createElement("div");n.className="contenedor-maquina";let i=document.createElement("style");t.forEach(t=>{let o=t.getAttribute("src"),n=t.getAttribute("valor");null!==o&&null!==n&&e.push({src:o,data:n})}),console.log(e);let r=Math.floor(Math.random()*e.length),s=e[r],l=e[r].src,c=e[r].data;console.log("array de la imagen [0]",s),console.log(l),console.log(c);let d=this.shadow.querySelector(".img-random");null!==d&&(d.src=l,d.setAttribute("valor",c));let p=d.getAttribute("valor");null!==p&&this.arrayDeValores.push(p),a.addItem(this.arrayDeValores),n.innerHTML=`
          <img class="img-maquina" src="${d.src}">
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
        `,o?.appendChild(i),function(){let e=localStorage.getItem("resultados"),t=e?JSON.parse(e):{maquina:0,jugador:0},o=a.getState()[0];"tijera"==o[0]&&"piedra"==o[1]&&(console.log("perdiste"),t.maquina++,localStorage.setItem("resultados",JSON.stringify(t)),setTimeout(function(){window.location.href="/perdiste"},2e3)),"tijera"==o[0]&&"papel"==o[1]&&(console.log("ganaste"),t.jugador++,localStorage.setItem("resultados",JSON.stringify(t)),setTimeout(function(){window.location.href="/ganaste"},2e3)),"piedra"==o[0]&&"tijera"==o[1]&&(console.log("ganaste"),t.jugador++,localStorage.setItem("resultados",JSON.stringify(t)),setTimeout(function(){window.location.href="/ganaste"},2e3)),"piedra"==o[0]&&"papel"==o[1]&&(console.log("perdiste"),t.maquina++,localStorage.setItem("resultados",JSON.stringify(t)),setTimeout(function(){window.location.href="/perdiste"},2e3)),"papel"==o[0]&&"tijera"==o[1]&&(console.log("perdiste"),t.maquina++,localStorage.setItem("resultados",JSON.stringify(t)),setTimeout(function(){window.location.href="/perdiste"},2e3)),"papel"==o[0]&&"piedra"==o[1]&&(console.log("ganaste"),t.jugador++,localStorage.setItem("resultados",JSON.stringify(t)),setTimeout(function(){window.location.href="/ganaste"},2e3)),"papel"==o[0]&&"papel"==o[1]&&(console.log("empate"),setTimeout(function(){window.location.href="/instrucciones"},2e3)),"tijera"==o[0]&&"tijera"==o[1]&&(console.log("empate"),setTimeout(function(){window.location.href="/instrucciones"},2e3),console.log("empate")),"piedra"==o[0]&&"piedra"==o[1]&&(console.log("empate"),setTimeout(function(){window.location.href="/instrucciones"},2e3),console.log("empate"))}()}}),customElements.define("ganaste-comp",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),o=localStorage.getItem("resultados"),n=JSON.parse(o??"null");t.className="contenedor-imgWin",t.innerHTML=`
            <img src="https://imgur.com/YNxOFWQ.png" alt="ganaste">
            <div class="contenedor-score">
            <el-texto tipoTexto="body">Score</el-texto>
            <el-texto tipoTexto="parrafo">Vos: ${n.jugador} puntos</el-texto>
            <el-texto tipoTexto="parrafo">La m\xe1quina: ${n.maquina} puntos</el-texto>
            
            </div>
            <mi-button class="mi-button" atributoBoton="Volver a jugar"></mi-button>

        `,e.appendChild(t);let i=t.querySelector(".mi-button");i?.addEventListener("click",()=>{window.location.href="/instrucciones"});let a=document.createElement("style");a.textContent=`
            .contenedor-imgWin{
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                background-color:rgba(136, 137, 73, 0.9);


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

        `,e.appendChild(a)}}),customElements.define("perdiste-comp",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),o=localStorage.getItem("resultados"),n=JSON.parse(o??"null");t.className="contenedor-imgLose",t.innerHTML=`
              <img src="https://imgur.com/1X3TDdF.png" alt="perdiste">
              <div class="contenedor-score">
                <el-texto tipoTexto="body">Score</el-texto>
                <el-texto tipoTexto="parrafo">Vos: ${n.jugador} puntos</el-texto>
                <el-texto tipoTexto="parrafo">La m\xe1quina: ${n.maquina} puntos</el-texto>
              </div>
              <mi-button class="mi-button" atributoBoton="Volver a jugar"></mi-button>

          `,e.appendChild(t);let i=t.querySelector(".mi-button");i?.addEventListener("click",()=>{window.location.href="/instrucciones"});let a=document.createElement("style");a.textContent=`
          
              .contenedor-imgLose{
                  display:flex;
                  flex-direction:column;
                  justify-content:center;
                  align-items:center;
                  background-color:rgba(137, 73, 73, 0.9);
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

          `,e.appendChild(a)}})}();
//# sourceMappingURL=index.166a9500.js.map
