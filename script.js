const root=document.documentElement;
if(localStorage.getItem("yakut-theme")==="dark") root.classList.add("dark");
document.querySelector("[data-theme]")?.addEventListener("click",()=>{root.classList.toggle("dark");localStorage.setItem("yakut-theme",root.classList.contains("dark")?"dark":"light")});
document.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{"vibrate" in navigator&&navigator.vibrate(18)}));
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
