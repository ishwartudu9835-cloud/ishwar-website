function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
if(document.getElementById("tg")){document.getElementById("tg").innerHTML=CONFIG.TEACHERS.map(function(t){
 return '<div class="tc"><div class="av">'+(t.photo?'<img src="'+esc(t.photo)+'" alt="'+esc(t.name)+'">':esc(t.name.charAt(0)))+'</div><div style="flex:1;min-width:0"><b>'+esc(t.name)+'</b><span>'+esc(t.role)+'</span>'+(t.voice?'<audio controls preload="none" src="'+esc(t.voice)+'"></audio>':'<span style="display:block">Voice note coming soon</span>')+'</div></div>'}).join("");}
var menu=document.getElementById("menu"),bt=document.getElementById("bt");
bt.onclick=function(){var o=menu.classList.toggle("open");bt.setAttribute("aria-expanded",o)};
document.querySelectorAll("[data-link]").forEach(function(a){a.onclick=function(e){var u=CONFIG.LINKS[a.dataset.link];e.preventDefault();if(u)window.location.href=u;else{var o=a.textContent;a.textContent="Link coming soon";setTimeout(function(){a.textContent=o},1800)}}});

function waLink(t){return"https://wa.me/"+CONFIG.WHATSAPP+"?text="+encodeURIComponent(t)}
document.querySelectorAll("[data-wa]").forEach(function(a){a.href=waLink(a.dataset.wa);a.target="_blank";a.rel="noopener"});
var inc=document.getElementById("inc");
if(inc){inc.innerHTML=CONFIG.DOC_B1.includes.map(function(t){return'<li><svg class="ck"><use href="#ck"/></svg>'+esc(t)+'</li>'}).join("");document.getElementById("val").textContent=CONFIG.DOC_B1.validity}
