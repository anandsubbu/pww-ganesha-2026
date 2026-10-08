(function(){
"use strict";
var S = window.SITE, $ = function(s,r){return (r||document).querySelector(s)}, $$ = function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var Q = new URLSearchParams(location.search);
var page = document.body.getAttribute("data-page");

/* ---------- helpers ---------- */
function esc(t){return String(t==null?"":t).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
var I = {
  home:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/></svg>',
  menu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  right:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  left:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
  chev:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
  play:'<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4.5v15l12-7.5z"/></svg>',
  playS:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>',
  cam:'<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="12" cy="13" r="3.5"/><path d="M8 6l1.5-2h5L16 6"/></svg>',
  film:'<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/></svg>',
  phone:'<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 10v4l3-2z" fill="currentColor"/></svg>',
  cal:'<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  share:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4"/></svg>'
};
var RANGOLI='<div class="rg-div"><svg width="132" height="32" viewBox="0 0 132 32" aria-hidden="true"><g fill="none" stroke="#A8431A" stroke-width="1.6"><path d="M66 3l13 13-13 13-13-13z"/><path d="M66 10l6 6-6 6-6-6z"/><path d="M12 16h34M86 16h34"/></g><g fill="#C9962B"><circle cx="6" cy="16" r="3.5"/><circle cx="126" cy="16" r="3.5"/><circle cx="66" cy="16" r="2"/><circle cx="30" cy="10" r="2"/><circle cx="102" cy="10" r="2"/><circle cx="30" cy="22" r="2"/><circle cx="102" cy="22" r="2"/></g></svg></div>';
var RANGOLI_BIG='<svg class="rg" viewBox="0 0 200 200" aria-hidden="true"><g fill="none" stroke="#FFD9A0" stroke-width="2"><path d="M100 10l40 40-40 40-40-40z"/><path d="M100 110l40 40-40 40-40-40z"/><path d="M10 100l40-40 40 40-40 40z"/><path d="M110 100l40-40 40 40-40 40z"/><circle cx="100" cy="100" r="30"/><circle cx="100" cy="100" r="50"/></g></svg>';
function sm(p){return p.replace(/\.jpg$/,"-sm.jpg")}
function ytId(v){ if(!v) return ""; var m=String(v).match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([A-Za-z0-9_-]{11})/); return m?m[1]:(/^[A-Za-z0-9_-]{11}$/.test(v)?v:""); }
function dayBy(n){return S.days.filter(function(d){return d.n===+n})[0]}
var FILMS = []; S.days.forEach(function(d){ d.films.forEach(function(f){ var c=Object.assign({},f); c.day=d.n; FILMS.push(c); }); });
function thumbOf(f){ var id=ytId(f.youtube); return id?"https://i.ytimg.com/vi/"+id+"/hqdefault.jpg":""; }

/* ---------- chrome ---------- */
var LINKS=[["index.html","Home"],["day.html?d=1","Day 1"],["day.html?d=2","Day 2"],["day.html?d=3","Day 3"],["films.html","All Films"],["photos.html","All Photos"]];
function noticeHTML(){
  var hide=false; try{hide=sessionStorage.getItem("pww-notice")==="1"}catch(e){}
  if(hide) return "";
  return '<div class="notice" id="notice" role="region" aria-label="Notice"><p><b>For Prestige West Woods residents only.</b> '+esc(S.legal)+'</p><button id="noticeX" aria-label="Close notice">'+I.close+'</button></div>';
}
function header(crumbs){
  var left = crumbs ? '<nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">'+I.home+'Home</a>'+crumbs.map(function(c,i){
      var last=i===crumbs.length-1;
      return '<span class="sep">›</span>'+(last?'<span class="here" aria-current="page">'+esc(c.t)+'</span>':'<a href="'+c.h+'">'+esc(c.t)+'</a>');
    }).join("")+'</nav>'
    : '<a class="brand" href="index.html"><b>PWW</b><small>GANESH UTSAV 2026</small></a>';
  var dn = LINKS.slice(1).map(function(l,i,a){return '<a href="'+l[0]+'"'+(i===a.length-1?' class="cta"':'')+'>'+l[1]+'</a>'}).join("");
  var dr = LINKS.map(function(l,i,a){return '<a href="'+l[0]+'"'+(i===a.length-1?' class="cta"':'')+'>'+l[1]+'</a>'}).join("");
  $("#hdr").innerHTML='<a class="skip" href="#main">Skip to content</a>'+noticeHTML()+'<div class="top"><div class="wrap bar">'+left+'<nav class="dnav" aria-label="Main">'+dn+'</nav><button class="menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false">'+I.menu+'</button></div></div><div class="toran" aria-hidden="true"></div>'
   +'<div class="drawer" id="drawer" role="dialog" aria-label="Menu"><button class="menu-btn x" id="menuX" aria-label="Close menu">'+I.close+'</button>'+dr+'</div>';
  var nx=$("#noticeX"); if(nx) nx.onclick=function(){ var n=$("#notice"); if(n) n.remove(); try{sessionStorage.setItem("pww-notice","1")}catch(e){} };
  $("#menuBtn").onclick=function(){$("#drawer").classList.add("open");this.setAttribute("aria-expanded","true")};
  $("#menuX").onclick=function(){$("#drawer").classList.remove("open");$("#menuBtn").setAttribute("aria-expanded","false")};
}
function footer(){
  $("#ftr").innerHTML='<div class="wrap"><footer><b>Prestige West Woods</b>'+esc(S.org)+' · '+esc(S.name)+' · '+esc(S.venue)+'<p class="legal">'+esc(S.legalShort)+'</p>Ganpati Bappa Morya</footer></div>';
}
function pager(prev,next){
  var el=document.createElement("div"); el.className="pager";
  el.innerHTML=(prev?'<a class="btn btn-o" href="'+prev.h+'">'+I.left+esc(prev.t)+'</a>':'<span class="ph-gap"></span>')+(next?'<a class="btn btn-p" href="'+next.h+'">'+esc(next.t)+I.right+'</a>':'<span class="ph-gap"></span>');
  document.body.appendChild(el); document.body.classList.add("has-pager");
}

/* ---------- components ---------- */
function photoGrid(di, n){
  var d=S.days[di], out="";
  for(var i=0;i<n;i++){
    var p=d.photos[i];
    out+= p ? '<button class="ph" data-lb="'+di+'" data-i="'+i+'" aria-label="Open photo: '+esc(p.alt)+'"><img src="'+p.src+'-sm.jpg" alt="'+esc(p.alt)+'" loading="lazy"></button>'
             : '<div class="ph empty" aria-hidden="true">Photo<br>coming soon</div>';
  }
  return out;
}
function albumBtn(d,label,cls){
  return d.album ? '<a class="btn '+(cls||"btn-p")+'" href="'+esc(d.album)+'" target="_blank" rel="noopener">'+label+'</a>'
                 : '<span class="btn '+(cls||"btn-p")+'" aria-disabled="true">'+label+' (album link coming soon)</span>';
}
function player(v, opt){
  opt=opt||{}; var id=ytId(v), cls="vid"+(opt.short?" v9":"");
  if(!id) return '<div class="'+cls+' soon"><span class="play">'+I.play+'</span>Coming soon'+(opt.label?'<br><span style="opacity:.8">'+esc(opt.label)+'</span>':'')+'</div>';
  return '<button class="'+cls+'" data-yt="'+id+'" aria-label="Play '+esc(opt.label||"video")+'"><img src="https://i.ytimg.com/vi/'+id+'/hqdefault.jpg" alt="" loading="lazy"><span class="play">'+I.play+'</span>'+(opt.lbl?'<span class="lbl">'+esc(opt.lbl)+'</span>':'')+'</button>';
}
function filmRow(f){
  var t=thumbOf(f);
  return '<a class="frow reveal" href="watch.html?v='+f.id+'"><div class="th">'+(t?'<img src="'+t+'" alt="" loading="lazy">':'')+I.playS+'</div><div><b>'+esc(f.title)+'</b><span>Day '+f.day+' · '+esc(f.time)+(f.youtube?'':' · coming soon')+'</span></div></a>';
}
function timeline(d){
  return '<div class="tl">'+d.program.map(function(p){return '<div class="it reveal"><time>'+esc(p.time)+'</time><b>'+esc(p.name)+'</b>'+(p.note?'<p>'+esc(p.note)+'</p>':'')+'</div>'}).join("")+'</div>';
}
function fmt(n){return Number(n).toLocaleString("en-IN")}
function statB(s){ return typeof s.n==="number" ? '<b data-count="'+s.n+'" data-suffix="'+esc(s.suffix||"")+'">0'+esc(s.suffix||"")+'</b>' : '<b>'+esc(s.n)+'</b>'; }
function statsRow(){return '<div class="stats" id="start">'+S.stats.map(function(s){return '<div>'+statB(s)+'<span>'+esc(s.l)+'</span></div>'}).join("")+'</div>'}
function dayCard(d){
  var cover = d.cover ? '<img src="'+sm(d.cover)+'" alt="" loading="lazy">' : '';
  return '<a class="dcard reveal" href="day.html?d='+d.n+'"><div class="arch">'+cover+'</div><div class="t"><span class="d">'+d.dow.toUpperCase().slice(0,3)+' · '+esc(d.date.replace(" 2026","").toUpperCase())+'</span><h3>Day '+d.n+'</h3><p>'+esc(d.title)+'</p><span class="f">Films: '+d.films.map(function(f){return esc(f.title)}).join(" · ")+'</span></div><div class="go">'+I.chev+'</div></a>';
}

/* ---------- pages ---------- */
var R={};
R.home=function(){
  header(null);
  var petals=""; for(var i=0;i<14;i++){petals+='<i style="left:'+(Math.random()*100).toFixed(1)+'%;animation-duration:'+(9+Math.random()*9).toFixed(1)+'s;animation-delay:-'+(Math.random()*12).toFixed(1)+'s;background:'+(i%3?'#F4A93B':'#E8552B')+'"></i>'}
  $("#main").innerHTML=
   '<section class="hero"><img class="bg" src="assets/img/aarti-night.jpg" alt="Aarti being performed before Lord Ganesha"><div class="petals" aria-hidden="true">'+petals+'</div><div class="in">'
   +'<span class="eyebrow">'+esc(S.dates)+'</span><h1>'+esc(S.name)+'</h1><p>Three days. One community. Relive every moment, in photos and film.</p>'
   +'<div class="ctas"><a class="btn btn-p pulse" href="day.html?d=1">Start with Day 1 '+I.right+'</a><a class="btn btn-l" href="films.html">'+I.playS+' Watch the festival films</a></div></div>'
   +'<a class="scrollcue" id="scrollcue" href="#start" aria-label="Scroll down for more"><span>Scroll for more</span><svg width="26" height="30" viewBox="0 0 26 30" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path class="c1" d="M4 4l9 9 9-9"/><path class="c2" d="M4 15l9 9 9-9"/></svg></a></section>'
   +statsRow()
   +'<div class="wrap"><section class="sec reveal" style="padding-top:36px"><span class="eyebrow">The festival in short</span><h2>Ganesh Utsav 2026 - At a Glance</h2><p class="swipehint">Swipe right for the highlights '+I.right+'</p><div class="shorts">'+player(S.teaser,{short:true,label:"PWW Ganesh Utsav 2026 is HERE!",lbl:"PWW Ganesh Utsav 2026 is HERE!"})+S.days.map(function(d){return player(d.short,{short:true,label:"Day "+d.n+" highlights",lbl:"Day "+d.n+" highlights"})}).join("")+'</div></section></div>'
   +RANGOLI
   +'<div class="wrap"><section class="sec reveal" style="padding-top:14px"><span class="eyebrow">Step 1</span><h2>Choose your day</h2><div class="daycards">'+S.days.map(dayCard).join("")+'</div></section>'
   +'<section class="sec reveal"><span class="eyebrow">Or jump straight to</span><h2>Everything, one tap away</h2><div class="tiles">'
   +'<a class="tile t1" href="photos.html">'+I.cam+'<span>All Photos<small>Google Photos albums</small></span></a>'
   +'<a class="tile t2" href="films.html">'+I.film+'<span>All Films<small>Drone films by event</small></span></a>'
   +'<a class="tile" href="#shorts">'+I.phone+'<span>Day Highlights<small>Short clips, 1 minute</small></span></a>'
   +'<a class="tile" href="programme.html">'+I.cal+'<span>Programme<small>What happened when</small></span></a></div></section>'
   +'<section class="sec reveal"><span class="eyebrow">A glimpse</span><h2>Moments from the festival</h2><div class="chips" id="gchips">'+S.days.map(function(d,i){return '<button class="chip" data-g="'+i+'" aria-pressed="'+(i===0)+'">Day '+d.n+'</button>'}).join("")+'</div><div class="pgrid" id="ggrid">'+photoGrid(0,8)+'</div><div class="stack" style="margin-top:16px;max-width:420px"><a class="btn btn-p" href="photos.html">See all photos on Google Photos</a></div></section>'
   +'<section class="sec reveal" id="shorts"><span class="eyebrow">Swipe →</span><h2>Highlights in a minute</h2><div class="shorts">'+S.days.map(function(d){return player(d.short,{short:true,label:"Day "+d.n+" highlights",lbl:"Day "+d.n})}).join("")+'</div></section>'
   +'</div>';
  footer();
  var cue=$("#scrollcue"); function cueCheck(){ cue.classList.toggle("gone", (window.pageYOffset||document.documentElement.scrollTop)>40); }
  window.addEventListener("scroll",cueCheck,{passive:true}); cueCheck();
  $("#gchips").addEventListener("click",function(e){var b=e.target.closest(".chip"); if(!b) return; $$(".chip",this).forEach(function(c){c.setAttribute("aria-pressed",c===b)}); $("#ggrid").innerHTML=photoGrid(+b.dataset.g,8)});
};

R.day=function(){
  var d=dayBy(Q.get("d"))||S.days[0], di=d.n-1;
  document.title="Day "+d.n+" · "+S.name+" · PWW";
  header([{t:"Day "+d.n}]);
  var prev=d.n>1?{t:"Day "+(d.n-1),h:"day.html?d="+(d.n-1)}:null, next=d.n<3?{t:"Day "+(d.n+1),h:"day.html?d="+(d.n+1)}:null;
  $("#main").innerHTML=
   '<section class="banner">'+(d.cover?'<img src="'+d.cover+'" alt="">':RANGOLI_BIG)+'<div class="in"><span class="eyebrow">'+d.dow.toUpperCase()+' · '+esc(d.date.toUpperCase())+'</span><h1>Day '+d.n+'</h1><p>'+esc(d.title)+'</p></div></section>'
   +'<div class="wrap"><div class="switch" aria-label="Choose day">'+S.days.map(function(x){return '<a href="day.html?d='+x.n+'"'+(x.n===d.n?' class="on" aria-current="page"':'')+'>Day '+x.n+'</a>'}).join("")+'</div>'
   +'<div class="stack" style="max-width:560px">'+albumBtn(d,'<span style="display:flex;gap:12px;align-items:center">'+I.cam+'See Day '+d.n+' photos</span>','btn-p btn-big')
   +'<a class="btn btn-m btn-big" href="#films"><span style="display:flex;gap:12px;align-items:center">'+I.film+'Watch Day '+d.n+' films</span><small>'+d.films.length+(d.films.length===1?' film':' films')+'</small></a></div>'
   +'<section class="sec reveal" style="padding-top:36px"><h2>Photo highlights</h2><div class="pgrid">'+photoGrid(di,8)+'</div><div class="stack" style="margin-top:14px;max-width:420px">'+albumBtn(d,"See all Day "+d.n+" photos","btn-oa")+'</div></section>'
   +'<section class="sec reveal" id="highlights"><h2>Day '+d.n+' in one minute</h2><div style="margin-top:14px">'+player(d.short,{short:true,label:"Day "+d.n+" highlights"})+'</div></section>'
   +'<section class="sec reveal" id="films"><h2>Films from Day '+d.n+'</h2><div class="flist">'+d.films.map(function(f){var c=Object.assign({day:d.n},f);return filmRow(c)}).join("")+'</div></section>'
   +'<section class="sec" id="programme"><h2 class="reveal">What happened, hour by hour</h2>'+timeline(d)+'</section></div>';
  footer(); pager(prev,next);
};

R.watch=function(){
  var f=FILMS.filter(function(x){return x.id===Q.get("v")})[0];
  if(!f){ header([{t:"Films",h:"films.html"},{t:"Not found"}]); $("#main").innerHTML='<div class="wrap sec"><h2>We could not find that film</h2><div class="stack" style="max-width:320px"><a class="btn btn-p" href="films.html">See all films</a></div></div>'; footer(); return; }
  var d=dayBy(f.day), idx=FILMS.indexOf(f), prev=FILMS[idx-1], next=FILMS[idx+1];
  document.title=f.title+" · Day "+d.n+" · "+S.name;
  header([{t:"Day "+d.n,h:"day.html?d="+d.n},{t:f.title}]);
  var more=d.films.filter(function(x){return x.id!==f.id}).map(function(x){return filmRow(Object.assign({day:d.n},x))}).join("");
  $("#main").innerHTML='<div class="wrap" style="padding-top:16px"><div class="two"><div>'+player(f.youtube,{label:f.title})
   +'<div class="stack" style="margin-top:18px;gap:8px"><span class="eyebrow">Day '+d.n+' · '+esc(f.time)+' · Drone film</span><h1 style="font-size:30px">'+esc(f.title)+'</h1><p style="color:var(--muted)">'+esc(f.blurb||"")+'</p></div>'
   +'<div class="stack" style="margin-top:16px;max-width:520px;display:grid;grid-template-columns:1fr 1fr;gap:12px"><button class="btn btn-p" id="shareBtn" style="font-size:15px">'+I.share+'Share</button>'+albumBtn(d,"Day "+d.n+" photos","btn-o").replace('btn btn-o','btn btn-o" style="font-size:15px').replace(' (album link coming soon)','')+'</div>'
   +'</div>'
   +'<div><section class="sec" style="padding-top:28px"><h2 style="font-size:22px">Photos from Day '+d.n+'</h2><div class="strip">'+(d.photos.length?d.photos.map(function(p,i){return '<button class="ph" data-lb="'+(d.n-1)+'" data-i="'+i+'" aria-label="Open photo: '+esc(p.alt)+'"><img src="'+p.src+'-sm.jpg" alt="'+esc(p.alt)+'" loading="lazy"></button>'}).join(""):'<div class="ph empty">Photos<br>coming soon</div>')+'</div></section>'
   +(more?'<section class="sec" style="padding-top:28px"><h2 style="font-size:22px">More from Day '+d.n+'</h2><div class="flist" style="display:flex">'+more+'</div></section>':'')+'</div></div></div>';
  footer();
  pager(prev?{t:"Previous film",h:"watch.html?v="+prev.id}:null, next?{t:"Next film",h:"watch.html?v="+next.id}:null);
  $("#shareBtn").onclick=function(){
    var data={title:f.title+" · "+S.name,text:f.title+" — PWW Ganesh Utsav 2026",url:location.href};
    if(navigator.share){navigator.share(data).catch(function(){})} else {location.href="https://wa.me/?text="+encodeURIComponent(data.text+" "+data.url)}
  };
};

R.films=function(){
  header([{t:"All Films"}]);
  $("#main").innerHTML='<div class="wrap"><section class="sec" style="padding-top:28px"><span class="eyebrow">Drone films</span><h1 style="font-size:34px;margin-top:6px">All Films</h1></section>'
   +S.days.map(function(d){return '<section class="sec reveal" style="padding-top:32px"><h2 style="font-size:24px">Day '+d.n+' <span style="font-size:14px;font-family:var(--body);color:var(--muted);font-weight:500">· '+esc(d.date)+'</span></h2><div class="flist">'+d.films.map(function(f){return filmRow(Object.assign({day:d.n},f))}).join("")+'</div></section>'}).join("")+'</div>';
  footer();
};
R.photos=function(){
  header([{t:"All Photos"}]);
  $("#main").innerHTML='<div class="wrap"><section class="sec" style="padding-top:28px"><span class="eyebrow">Google Photos</span><h1 style="font-size:34px;margin-top:6px">All Photos</h1><p style="color:var(--muted);margin-top:8px">Tap a day to open its full album. Eight favourites from each day are shown here.</p></section>'
   +S.days.map(function(d,i){return '<section class="sec reveal" style="padding-top:32px"><h2 style="font-size:24px">Day '+d.n+'</h2><div class="pgrid">'+photoGrid(i,8)+'</div><div class="stack" style="margin-top:14px;max-width:420px">'+albumBtn(d,"Open Day "+d.n+" album","btn-p")+'</div></section>'}).join("")+'</div>';
  footer();
};
R.programme=function(){
  header([{t:"Programme"}]);
  $("#main").innerHTML='<div class="wrap"><section class="sec" style="padding-top:28px"><span class="eyebrow">What happened when</span><h1 style="font-size:34px;margin-top:6px">Programme</h1><div class="chips">'+S.days.map(function(d){return '<a class="chip" href="#d'+d.n+'" style="display:flex;align-items:center">Day '+d.n+'</a>'}).join("")+'</div></section>'
   +S.days.map(function(d){return '<section class="sec" id="d'+d.n+'" style="padding-top:32px"><h2 style="font-size:24px">Day '+d.n+' <span style="font-size:14px;font-family:var(--body);color:var(--muted);font-weight:500">· '+esc(d.dow)+', '+esc(d.date)+'</span></h2><p style="color:var(--muted);margin-top:4px">'+esc(d.title)+'</p>'+timeline(d)+'</section>'}).join("")+'</div>';
  footer();
};
/* ---------- global behaviours ---------- */
document.addEventListener("click",function(e){
  var y=e.target.closest("[data-yt]");
  if(y){ var id=y.getAttribute("data-yt"), s=y.classList.contains("v9");
    if(s){ openFS(id); return; }
    var fr=document.createElement("iframe"); fr.src="https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1&rel=0&playsinline=1";
    fr.allow="autoplay; encrypted-media; picture-in-picture; fullscreen"; fr.allowFullscreen=true; fr.title="Video player";
    var box=document.createElement("div"); box.className="vid"; box.appendChild(fr); y.replaceWith(box); return; }
  var p=e.target.closest("[data-lb]");
  if(p){ openLB(+p.dataset.lb, +p.dataset.i); }
});
var fs=document.createElement("div"); fs.className="fs"; fs.setAttribute("role","dialog"); fs.setAttribute("aria-label","Video player");
fs.innerHTML='<button class="c" aria-label="Close video">'+I.close+'</button><div class="box"></div>';
document.body.appendChild(fs);
function openFS(id){
  var fr=document.createElement("iframe"); fr.src="https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1&rel=0&playsinline=1&modestbranding=1";
  fr.allow="autoplay; encrypted-media; picture-in-picture; fullscreen"; fr.allowFullscreen=true; fr.title="Video player";
  var b=$(".box",fs); b.innerHTML=""; b.appendChild(fr); fs.classList.add("open"); document.body.style.overflow="hidden";
  try{history.pushState({fs:1},"")}catch(e){}
}
function closeFS(fromPop){
  if(!fs.classList.contains("open")) return;
  fs.classList.remove("open"); $(".box",fs).innerHTML=""; document.body.style.overflow="";
  if(!fromPop){ try{ if(history.state&&history.state.fs) history.back(); }catch(e){} }
}
$(".c",fs).onclick=function(){closeFS()};
fs.addEventListener("click",function(e){if(e.target===fs||e.target.classList.contains("box")) closeFS()});
window.addEventListener("popstate",function(){closeFS(true)});
document.addEventListener("keydown",function(e){ if(e.key==="Escape") closeFS(); });
var lb=document.createElement("div"); lb.className="lb"; lb.setAttribute("role","dialog"); lb.setAttribute("aria-label","Photo viewer");
lb.innerHTML='<button class="c" aria-label="Close">'+I.close+'</button><button class="p" aria-label="Previous photo">'+I.left+'</button><img alt=""><button class="n" aria-label="Next photo">'+I.right+'</button><div class="cap"></div>';
document.body.appendChild(lb);
var L={list:[],i:0};
function showLB(){var p=L.list[L.i]; $("img",lb).src=p.src+".jpg"; $("img",lb).alt=p.alt; $(".cap",lb).textContent=p.alt+"  ("+(L.i+1)+"/"+L.list.length+")";}
function openLB(di,i){L.list=S.days[di].photos; if(!L.list.length) return; L.i=i; showLB(); lb.classList.add("open");}
function closeLB(){lb.classList.remove("open")}
function stepLB(n){L.i=(L.i+n+L.list.length)%L.list.length; showLB()}
$(".c",lb).onclick=closeLB; $(".p",lb).onclick=function(){stepLB(-1)}; $(".n",lb).onclick=function(){stepLB(1)};
lb.addEventListener("click",function(e){if(e.target===lb) closeLB()});
document.addEventListener("keydown",function(e){ if(!lb.classList.contains("open")) return; if(e.key==="Escape") closeLB(); if(e.key==="ArrowLeft") stepLB(-1); if(e.key==="ArrowRight") stepLB(1); });
var sx=0; lb.addEventListener("touchstart",function(e){sx=e.touches[0].clientX},{passive:true});
lb.addEventListener("touchend",function(e){var dx=e.changedTouches[0].clientX-sx; if(Math.abs(dx)>50) stepLB(dx<0?1:-1)});

function countUp(el){
  var to=+el.getAttribute("data-count"), suf=el.getAttribute("data-suffix")||"", dur=2400, st=null;
  function step(ts){ st=st||ts; var k=Math.min(1,(ts-st)/dur), e=1-Math.pow(1-k,4); /* ease-out (quartic) */
    el.textContent=fmt(Math.round(to*e))+suf; if(k<1) requestAnimationFrame(step); }
  requestAnimationFrame(step);
}
function motion(){
  var still = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(still || !("IntersectionObserver" in window)){ $$("[data-count]").forEach(function(n){n.textContent=fmt(n.getAttribute("data-count"))+(n.getAttribute("data-suffix")||"")}); }
  if(!("IntersectionObserver" in window)){ $$(".reveal").forEach(function(n){n.classList.add("in")}); return; }
  var io=new IntersectionObserver(function(es){es.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target);} })},{threshold:.12});
  $$(".reveal").forEach(function(n){io.observe(n)});
  var cio=new IntersectionObserver(function(es){es.forEach(function(en){ if(!en.isIntersecting) return; cio.unobserve(en.target); countUp(en.target); })},{threshold:.4});
  if(!still) $$("[data-count]").forEach(function(n){cio.observe(n)});
}
if(R[page]){ R[page](); motion(); }
})();
