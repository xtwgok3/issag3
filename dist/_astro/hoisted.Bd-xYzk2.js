import"./SmokeBackground.astro_astro_type_script_index_0_lang.7RsuF-eF.js";import"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";document.addEventListener("DOMContentLoaded",function(){const d=document.getElementById("button"),o=document.getElementById("makepdf"),t=document.getElementById("asd"),e=document.getElementById("options-menu-list");d&&t&&o&&d.addEventListener("click",function(s){t.style.display="none",s.preventDefault();const n=document.createElement("iframe");n.style.cssText="position: absolute; width: 0; height: 0; border: none;",document.body.appendChild(n);const i=n.contentWindow.document;i&&n.contentWindow&&(i.open(),i.write(`<html><head><title>ISSA POWER GYM</title>
                <style>body{font-family: Arial, sans-serif;font-weight: 700;color: #333333;padding: 23px;line-height: 1.1;padding-left: 1.25rem;}li{margin-top:2px}</style>
                </head><body>${o.innerHTML}</body></html>`),t.style.display="",i.close(),n.contentWindow.focus(),n.contentWindow.print(),e.classList.toggle("hidden"),optionsMenu.setAttribute("aria-expanded",e.classList.contains("hidden")?"false":"true"),document.body.removeChild(n))})});const c="https://xtwgok3.github.io/files/PDF/",a={0:"0-Rutinas%20para%20iniciados.pdf",1:"1-Rutina%20adaptada%20para%20bajar%20de%20peso.pdf",2:"2-RUTINA%20ADAPTADA%20CICLISMO.pdf",3:"3-Rutina%20de%205%20dias%20hombres.pdf",4:"4-Rutina%20mujeres%20nueva%205%20dias.pdf",5:"5-RUTINA%20FRECUENCIA%20X%203%20DE%20PIERNAS%20Nicole.pdf",6:"6-Rutina%20Varones%20Ulises.pdf",7:"7-HEAVY%20DUTY.pdf",8:"8-Rutina%20mujeres%20biseries.pdf"};document.addEventListener("DOMContentLoaded",function(){const d=document.getElementById("menu-item-pdf");if(d){let e=window.location.href;window.matchMedia("(min-width: 767px)").matches&&d.setAttribute("target","_blank"),e=e.replace(/\/+$/,"");const n=e.split("/"),i=n[n.length-1];a[i]?(d.href=c+a[i],d.setAttribute("download",a[i])):console.error(`No se encontró el archivo para el número ${i}`)}const o=document.getElementById("options-menu"),t=document.getElementById("options-menu-list");o&&t?(o.addEventListener("click",()=>{t.classList.toggle("hidden"),o.setAttribute("aria-expanded",t.classList.contains("hidden")?"false":"true");const e=o.getBoundingClientRect(),s=window.innerHeight;e.top>s/2?(t.classList.add("bottom-full"),t.classList.remove("top-full")):(t.classList.add("top-full"),t.classList.remove("bottom-full"))}),window.addEventListener("click",e=>{const s=e.target;(!(s instanceof Node)||!o.contains(s)&&!t.contains(s))&&(t.classList.add("hidden"),o.setAttribute("aria-expanded","false"))})):console.error("No se encontró optionsMenu o optionsMenuList")});