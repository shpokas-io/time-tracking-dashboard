document.querySelector(".container");const e=document.querySelectorAll(".menu-link");function t(t){e.forEach(e=>{e.classList.remove("menu-active")}),t.target.classList.add("menu-active"),t.target.innerText.toLowerCase()}e.forEach(e=>{e.addEventListener("click",t)}),fetch("./js/data.json").then(e=>e.json()).then(e=>console.log(e));
//# sourceMappingURL=index.1a93037f.js.map
