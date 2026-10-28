function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
if(document.getElementById("tg")){document.getElementById("tg").innerHTML=CONFIG.TEACHERS.map(function(t){
 return '<div class="tc"><div class="av">'+(t.photo?'<img src="'+esc(t.photo)+'" alt="'+esc(t.name)+'">':esc(t.name.charAt(0)))+'</div><div style="flex:1;min-width:0"><b>'+esc(t.name)+'</b><span>'+esc(t.role)+'</span>'+(t.voice?'<audio controls preload="none" src="'+esc(t.voice)+'"></audio>':'<span style="display:block">Voice note coming soon</span>')+'</div></div>'}).join("");}
var menu=document.getElementById("menu"),bt=document.getElementById("bt");
bt.onclick=function(){var o=menu.classList.toggle("open");bt.setAttribute("aria-expanded",o)};
document.querySelectorAll("[data-link]").forEach(function(a){a.onclick=function(e){var u=CONFIG.LINKS[a.dataset.link];e.preventDefault();if(u)window.location.href=u;else{var o=a.textContent;a.textContent="Link coming soon";setTimeout(function(){a.textContent=o},1800)}}});
