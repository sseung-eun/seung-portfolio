const C=CONTENT,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const ids=["home","about","projects","contact"],RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
const ph=(src,cap,pos)=>`<span class="ph">${cap}<img src="${src}" alt="" loading="lazy" ${pos?`style="object-position:${pos}"`:""} onerror="this.remove()"></span>`;
const rows=r=>r.map(x=>x.length==1?`<div class="row">${x[0]}</div>`:`<div class="row"><span class="d">${x[0]}</span>${x[1]}${x[3]?`<span class="jp">${x[3]}</span>`:""}${x[2]?`<span class="x">${x[2]}</span>`:""}</div>`).join("");
/* 줄바꿈을 문장·쉼표 단위(의미 단위)로 끊어 읽기 좋게 만드는 도우미 */
const T=s=>s.replace(/([,.])[ ]+/g,"$1\u0000").split("\u0000").map(x=>`<span class="cl">${x}</span>`).join(" ");
const L=s=>s.split("\n").map(l=>`<span class="ln2">${l}</span>`).join("");
const cart=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h3l2.4 11h10l2-8H7"/><circle cx="10" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>`;
const h=C.hero,a=C.about,p=C.profile,c=C.career,k=C.contact;
$("#logo").textContent=C.brand;$("#nav").innerHTML=C.menu.map((m,i)=>`<a href="#${ids[i]}">${m}</a>`).join("");
$("#main").innerHTML=`
<section id="home"><div class="wrap"><div class="hf" id="hf">
 <div class="hbar"><span>${h.label}</span><span class="cartl">${cart}3 CASE STUDIES</span></div>
 <div class="hbody hs"><div class="stamp" aria-hidden="true">MD<br>PICK</div>
  <div class="rk"><span class="rn" aria-hidden="true">1</span><span class="rt">실시간 1위</span><span class="rt">이번주 1위</span><span class="rt c">MD 픽</span></div>
  <h1>${h.title.map(l=>`<span class="ln">${l}</span>`).join("<br>")}</h1>
  <div class="sub">${h.sub.map(s=>`<p>${T(s)}</p>`).join("")}</div>
  <div class="btns"><span class="pos"><a class="btn p cb" href="#projects" data-cur="상품 자세히 보기">${cart}카트에 담기</a><svg class="ptr" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 2l16 9-7 2-3 7z" fill="#fff" stroke="#292827" stroke-width="1.6" stroke-linejoin="round"/></svg></span><a class="btn" href="#about">VIEW PROFILE</a></div></div></div></div></section>

<section id="about"><div class="wrap"><div class="prod"><div class="tt"><p class="lab">${a.label}</p><h2>${T(a.head)}</h2>${a.body.map(b=>`<p>${L(b)}</p>`).join("")}</div>
 <div class="opts">${a.cards.map(x=>`<div class="opt"><b>${x[0]}</b><span>${T(x[1])}</span></div>`).join("")}</div></div>
 <div style="height:88px"></div><p class="lab">${p.label}</p><div class="grid3"><div><div class="pho">${ph(p.photo,"PROFILE PHOTO").replace('class="ph"','class="ph" style="width:100%;height:100%"')}</div>
 <div class="pf kv">${p.basic.map(b=>`<div class="row"><span class="d">${b[0]}</span><span>${b[1]}</span></div>`).join("")}</div></div>
 <div style="display:grid;gap:var(--g);align-content:start">${p.groups.slice(0,3).map(g=>`<div class="pf"><h3>${g.t}</h3>${rows(g.r)}</div>`).join("")}</div>
 <div style="display:grid;gap:var(--g);align-content:start">${p.groups.slice(3).map(g=>`<div class="pf"><h3>${g.t}</h3>${rows(g.r)}</div>`).join("")}</div></div></div></section>

<section id="projects"><div class="wrap"><p class="lab">${C.projLabel}</p><h2>${T(C.projHead)}</h2><p style="color:var(--sub);margin:-12px 0 24px">${T(C.projDesc)}</p>
 <div class="tb"><button id="ex">전체 펼치기</button><button id="co">전체 접기</button></div>
 ${C.projects.map((q,i)=>`<article class="pc" data-o="false"><button class="hdb" id="h${i}" aria-expanded="false" aria-controls="b${i}" data-cur="상품 자세히 보기"><span><span class="no">${q.no}</span><h3>${q.title}</h3><span class="sb">${q.sub}</span>
 <span class="tg">${q.tags.map(t=>`<span>${t}</span>`).join("")}</span></span><span class="met"><b>${q.metric[0]}</b><i>${q.metric[1]}</i></span><span class="more">자세히 보기 +</span></button>
 <div class="pn" id="b${i}" role="region" aria-labelledby="h${i}"><div><div class="bd bd2">
 <div class="gal" data-i="${i}" style="--ar:${q.ar||"4/3"}"><button class="gm" aria-label="사진 크게 보기"></button><div class="gc"></div>
  <div class="gt">${q.photos.map((f,j)=>`<button class="th" aria-label="사진 ${j+1}: ${f.t}">${ph(f.src,"",f.pos)}</button>`).join("")}</div><p class="gh">작은 사진을 누르면 다음 사진으로 넘어갑니다. (큰 사진을 누르면 확대됩니다)</p></div>
 <div class="info">${q.steps.map(s=>`<div class="st"><div class="k">${s.k}</div><p>${L(s.p)}</p></div>`).join("")}
  <div class="rs"><span class="rl">RESULT</span><ul>${q.res.map(x=>`<li>${x}</li>`).join("")}</ul></div>
  <div class="mdc"><b>ONLINE MD CONNECTION · 온라인 MD 직무 연결</b><p>${L(q.md)}</p></div></div></div></div></div></article>`).join("")}</div></section>

<section id="spec"><div class="wrap"><p class="lab">${C.spec.label}</p><h2>${T(C.spec.head)}</h2><p style="color:var(--sub);margin:-12px 0 24px">${T(C.spec.desc)}</p>
 <table class="spt"><thead><tr>${C.spec.cols.map(x=>`<th>${x}</th>`).join("")}</tr></thead><tbody>${C.spec.rows.map(r=>`<tr>${r.map((x,i)=>`<td data-l="${C.spec.cols[i]}">${x}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>

<section id="contact"><div class="wrap"><div class="done"><div class="ck" aria-hidden="true">✓</div><p class="lab">${k.label}</p><h2>${T(k.head)}</h2><p>${T(k.body)}</p>
 <div class="rcpt"><div class="rr"><span>이름</span><b>${h.name}</b></div>
 <div class="rr"><span>이메일</span><b><a href="mailto:${k.email}">${k.email}</a></b><button class="btn p sm" id="cp">COPY EMAIL</button></div></div>
 <span class="ok" id="ok" role="status"></span><div class="btns" style="justify-content:center;margin-top:8px"><button class="btn" id="up">BACK TO TOP</button></div></div></div></section>
<footer>© 2026 KIM SEUNGEUN · SHOP MY SKILLS</footer>`;

/* 내비게이션 */
const nav=$("#nav"),bg=$("#bg"),links=$$("#nav a"),go=id=>$("#"+id).scrollIntoView({behavior:RM?"auto":"smooth"});
bg.onclick=()=>bg.setAttribute("aria-expanded",nav.classList.toggle("open"));
nav.onclick=e=>{if(e.target.tagName=="A"){nav.classList.remove("open");bg.setAttribute("aria-expanded",false)}};
ids.forEach(id=>new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&links.forEach(l=>l.classList.toggle("on",l.hash=="#"+id))),{rootMargin:"-40% 0px -55% 0px"}).observe($("#"+id)));
/* 아코디언 */
const tog=(card,o)=>{card.dataset.o=o;const b=card.querySelector(".hdb");b.setAttribute("aria-expanded",o);b.querySelector(".more").textContent=o?"접기 −":"자세히 보기 +"};
$$(".pc").forEach(card=>card.querySelector(".hdb").onclick=()=>tog(card,card.dataset.o!="true"));
$("#ex").onclick=()=>$$(".pc").forEach(x=>tog(x,true));$("#co").onclick=()=>$$(".pc").forEach(x=>tog(x,false));
/* 라이트박스 */
const lb=$("#lb");
$$(".gal").forEach(g=>{const P=C.projects[+g.dataset.i].photos,m=g.querySelector(".gm"),cp=g.querySelector(".gc"),ths=[...g.querySelectorAll(".th")];let cur=0;
 const show=j=>{cur=j;const f=P[j];m.innerHTML=ph(f.src,f.t,f.pos);cp.innerHTML=`<b>${f.t}</b><span>${f.d}</span>`;ths.forEach((t,x)=>t.classList.toggle("on",x==j))};
 ths.forEach((t,j)=>t.onclick=()=>show(j));show(0);
 m.onclick=()=>{const f=P[cur];$("#lbc").innerHTML=`<img src="${f.src}" alt="${f.t}" onerror="this.outerHTML='<div class=ph>'+this.alt+'</div>'"><p style="margin:10px 4px 0;font-size:14px"><b>${f.t}</b><br>${f.d}</p>`;lb.showModal()}});
$("#lbx").onclick=()=>lb.close();lb.onclick=e=>{if(e.target===lb)lb.close()};
/* 이메일 복사 / 상단 이동 */
$("#cp").onclick=async()=>{const o=$("#ok");try{await navigator.clipboard.writeText(k.email);o.textContent="이메일 주소를 복사했습니다: "+k.email}catch{const t=document.createElement("textarea");t.value=k.email;document.body.append(t);t.select();o.textContent=document.execCommand("copy")?"이메일 주소를 복사했습니다: "+k.email:"복사하지 못했습니다. 직접 선택해 주세요.";t.remove()}};
const toTop=$("#top");toTop.onclick=$("#up").onclick=()=>scrollTo({top:0,behavior:RM?"auto":"smooth"});
addEventListener("scroll",()=>toTop.classList.toggle("on",scrollY>600),{passive:true});
/* 커서 라벨: 마우스 환경 + 인터랙션 요소에서만 */
if(matchMedia("(hover:hover) and (pointer:fine)").matches&&!RM){const cu=$("#cur");
 addEventListener("mousemove",e=>{cu.style.transform=`translate(${e.clientX+16}px,${e.clientY+16}px)`;const t=e.target.closest("[data-cur]");cu.classList.toggle("on",!!t);if(t)cu.textContent=t.dataset.cur});addEventListener("scroll",()=>cu.classList.remove("on"),{passive:true})}

/* 첫 화면 → 다음 화면 전환: 첫 화면은 스크롤에 따라 서서히 걷히고, ABOUT 요소는 순서대로 사라락 나타남 */
if(!RM){
 const hf=$("#hf"),f=()=>{const q=Math.min(1,Math.max(0,scrollY/(innerHeight*.75)));hf.style.opacity=1-q*.92;hf.style.transform=`translateY(${-q*48}px) scale(${1-q*.05})`};
 addEventListener("scroll",f,{passive:true});f();
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("shown");io.unobserve(e.target)}}),{threshold:.12});
 $$("#about .tt, #about .opt").forEach((e,i)=>{e.classList.add("rv");e.style.setProperty("--d",(i*.11)+"s");io.observe(e)});
}
