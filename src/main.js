import { chapters, pigments, recipes, glossary, safety } from "./data.js";

const state = {
  page: "home",
  search: "",
  filter: "all",
  selectedPigment: null,
  selectedRecipe: null,
  recipeStep: 0,
  journal: JSON.parse(localStorage.getItem("pigment-lab-journal") || "[]")
};

const app = document.querySelector("#app");

function esc(s="") {
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}

function icon(name) {
  const icons = {
    home:"⌂", pigment:"◉", recipe:"⚗", history:"◌", chemistry:"△", journal:"✎", glossary:"?", safety:"!"
  };
  return icons[name] || "•";
}

function persist() {
  localStorage.setItem("pigment-lab-journal", JSON.stringify(state.journal));
}

function layout(content) {
  return `
    <div class="shell">
      <aside class="sidebar">
        <div class="brand" onclick="navigate('home')">
          <div class="brand-mark">P</div>
          <div>
            <strong>NATURAL<br>PIGMENT LAB</strong>
            <span>material • colour • process</span>
          </div>
        </div>
        <nav>
          ${navItem("home","home","Home")}
          ${navItem("pigments","pigment","Pigment Library")}
          ${navItem("recipes","recipe","Recipe Lab")}
          ${navItem("history","history","Pigment History")}
          ${navItem("chemistry","chemistry","Chemistry")}
          ${navItem("journal","journal","My Journal")}
          ${navItem("glossary","glossary","Glossary")}
          ${navItem("safety","safety","Safety")}
        </nav>
        <div class="side-note">
          <span>BASED ON</span>
          <b>Lucy Mayes</b>
          <small>The Natural Pigment Handbook</small>
        </div>
      </aside>
      <main class="main">
        <header class="topbar">
          <button class="mobile-menu" onclick="toggleMenu()">☰</button>
          <div class="crumb">${crumb()}</div>
          <div class="top-actions">
            <div class="search-box">
              <span>⌕</span>
              <input value="${esc(state.search)}" oninput="setSearch(this.value)" placeholder="Search pigment, recipe, chemistry..." />
            </div>
          </div>
        </header>
        <div class="content">${content}</div>
        <footer>
          <span>Natural Pigment Lab · educational material-study interface</span>
          <span>Source study: Lucy Mayes, <i>The Natural Pigment Handbook</i></span>
        </footer>
      </main>
    </div>
  `;
}

function navItem(page, ico, label) {
  return `<button class="${state.page===page ? "active":""}" onclick="navigate('${page}')"><span>${icon(ico)}</span>${label}</button>`;
}

function crumb() {
  const names = {home:"Home",pigments:"Pigment Library",recipes:"Recipe Lab",history:"Pigment History",chemistry:"Chemistry",journal:"My Journal",glossary:"Glossary",safety:"Safety"};
  return `Natural Pigment Lab <span>/</span> ${names[state.page] || "Home"}`;
}

function render() {
  const body = {
    home: homePage,
    pigments: pigmentPage,
    recipes: recipePage,
    history: historyPage,
    chemistry: chemistryPage,
    journal: journalPage,
    glossary: glossaryPage,
    safety: safetyPage
  }[state.page] || homePage;
  app.innerHTML = layout(body());
  if (state.selectedPigment) openPigmentModal(state.selectedPigment);
  if (state.selectedRecipe) openRecipeModal(state.selectedRecipe);
}

function homePage() {
  return `
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow">A MAKER'S DIGITAL WORKBENCH</div>
        <h1>Where colour<br><em>comes from.</em></h1>
        <p>Explore pigment as material, history and chemistry — from earth and mineral particles to plant dyes, lakes, binders and waste-stream colour.</p>
        <div class="hero-buttons">
          <button class="primary" onclick="navigate('pigments')">Explore Pigments <span>→</span></button>
          <button class="ghost" onclick="navigate('recipes')">Open Recipe Lab</button>
        </div>
      </div>
      <div class="hero-art">
        <div class="orbit o1"></div><div class="orbit o2"></div>
        <div class="pigment-orb"></div>
        <span class="float-tag t1">EARTH</span><span class="float-tag t2">PLANT</span><span class="float-tag t3">MINERAL</span>
      </div>
    </section>

    <section class="intro-grid">
      <article class="intro-card dark">
        <span class="card-no">01</span><h3>History</h3>
        <p>500,000+ years of earth colour, cultural practice, alchemy and the transition to modern chemistry.</p>
        <button onclick="navigate('history')">Enter history →</button>
      </article>
      <article class="intro-card">
        <span class="card-no">02</span><h3>Material</h3>
        <p>Understand pigment particles, substrates, binders, granulation, density and refractive behaviour.</p>
        <button onclick="navigate('chemistry')">Study material →</button>
      </article>
      <article class="intro-card warm">
        <span class="card-no">03</span><h3>Making</h3>
        <p>Follow interactive recipe cards for calcination, lakes, woad, binders, mineral processing and more.</p>
        <button onclick="navigate('recipes')">Make a pigment →</button>
      </article>
    </section>

    <section class="section-head">
      <div><div class="eyebrow">PIGMENT OF THE DAY</div><h2>Yellow Ochre</h2></div>
      <button class="text-btn" onclick="showPigment('yellow-ochre')">View profile →</button>
    </section>
    <section class="feature-pigment">
      <div class="colour-block" style="--swatch:#C7A34B"><div class="swatch-large"></div></div>
      <div class="feature-copy">
        <div class="tag">EARTH · YELLOW</div>
        <h3>Iron, water, time.</h3>
        <p>Yellow ochre is described as hydrated iron oxide hydroxide carried by clay minerals. Heat can transform its mineral state and move the colour toward red.</p>
        <div class="spec-row"><span>FORMULA</span><b>α-FeO(OH) + clay</b></div>
        <div class="spec-row"><span>TRANSFORMATION</span><b>Calcination → warmer reds</b></div>
      </div>
    </section>

    <section class="section-head">
      <div><div class="eyebrow">QUICK START</div><h2>Choose a path</h2></div>
    </section>
    <div class="quick-grid">
      <button onclick="navigate('pigments')"><span>◉</span><b>Browse colours</b><small>Profiles, formulas & behaviour</small></button>
      <button onclick="navigate('recipes')"><span>⚗</span><b>Make something</b><small>Step-by-step material recipes</small></button>
      <button onclick="navigate('chemistry')"><span>△</span><b>Understand why</b><small>Material science in plain language</small></button>
      <button onclick="navigate('journal')"><span>✎</span><b>Record a batch</b><small>Keep your own pigment notes</small></button>
    </div>
  `;
}

function pigmentPage() {
  const q = state.search.toLowerCase();
  const list = pigments.filter(p => {
    const matches = !q || `${p.name} ${p.family} ${p.hue} ${p.material} ${p.formula}`.toLowerCase().includes(q);
    const filter = state.filter === "all" || p.family.toLowerCase().includes(state.filter);
    return matches && filter;
  });
  const families = [...new Set(pigments.map(p=>p.family))];
  return `
    <div class="page-title"><div><div class="eyebrow">LIBRARY</div><h1>Pigment Library</h1><p>Material profiles arranged as a working colour cabinet.</p></div><div class="count">${list.length} pigments</div></div>
    <div class="filterbar"><button class="${state.filter==='all'?'sel':''}" onclick="setFilter('all')">All</button>${families.map(f=>`<button class="${state.filter===f.toLowerCase()?'sel':''}" onclick="setFilter('${f.toLowerCase()}')">${f}</button>`).join("")}</div>
    <div class="pigment-grid">${list.map(p=>pigmentCard(p)).join("")}</div>
  `;
}

function pigmentCard(p) {
  return `<button class="pigment-card" onclick="showPigment('${p.id}')">
    <div class="pigment-swatch" style="background:${p.hex}"><span>${esc(p.hue)}</span></div>
    <div class="pigment-info"><div class="tag">${esc(p.family)}</div><h3>${esc(p.name)}</h3><p>${esc(p.material)}</p><div class="mini-spec"><span>${esc(p.formula)}</span><span>→</span></div></div>
  </button>`;
}

function recipePage() {
  const q = state.search.toLowerCase();
  const list = recipes.filter(r => !q || `${r.title} ${r.pigment} ${r.type} ${r.chapter} ${r.science}`.toLowerCase().includes(q));
  return `
    <div class="page-title"><div><div class="eyebrow">WORKBENCH</div><h1>Recipe Lab</h1><p>Interactive making cards. Start small, observe, record, repeat.</p></div><div class="count">${list.length} recipes</div></div>
    <div class="recipe-list">${list.map((r,i)=>recipeRow(r,i)).join("")}</div>
  `;
}

function recipeRow(r,i) {
  const chapter = chapters.find(c=>c.id===r.chapter);
  return `<button class="recipe-row" onclick="showRecipe('${r.id}')">
    <div class="recipe-num">${String(i+1).padStart(2,"0")}</div>
    <div class="recipe-main"><div class="tag">${esc(r.type)} · ${esc(chapter?.title || "")}</div><h3>${esc(r.title)}</h3><p>${esc(r.pigment)}</p></div>
    <div class="recipe-meta"><span>${esc(r.difficulty)}</span><span>${esc(r.duration)}</span><b>→</b></div>
  </button>`;
}

function historyPage() {
  return `
    <div class="page-title"><div><div class="eyebrow">CHAPTER ONE</div><h1>Pigment History</h1><p>A material timeline built from the historical themes of the source book.</p></div></div>
    <div class="timeline">
      <div class="time-item"><div class="time-date">500,000+ BCE</div><div><h3>Earth colour</h3><p>Ochre and other earth pigments appear as some of humanity's earliest colour materials.</p></div></div>
      <div class="time-item"><div class="time-date">Ancient world</div><div><h3>Mineral processing</h3><p>Grinding, levigation and heating allow natural materials to be refined and transformed.</p></div></div>
      <div class="time-item"><div class="time-date">Medieval</div><div><h3>Colour trades</h3><p>Apothecaries, colour sellers and specialist suppliers become part of the artist's material ecosystem.</p></div></div>
      <div class="time-item"><div class="time-date">Alchemy → chemistry</div><div><h3>Controlled transformation</h3><p>Pigment making moves toward systematic chemical experimentation and reproducible synthetic colour.</p></div></div>
      <div class="time-item"><div class="time-date">18th–19th c.</div><div><h3>Industrial colour</h3><p>Synthetic dyes and pigments expand the available palette and change the relationship between artist and material.</p></div></div>
      <div class="time-item"><div class="time-date">21st century</div><div><h3>Back to earth</h3><p>Handmade pigments, local materials, waste streams and sustainable practice reconnect artists with material origins.</p></div></div>
    </div>
    <div class="quote-card"><span>“LET’S GO BACK TO EARTH.”</span><p>The book frames pigment making not only as technique, but as a relationship between colour, material provenance and the living world.</p></div>
  `;
}

function chemistryPage() {
  const concepts = [
    ["01","Pigment vs Dye","A pigment is generally insoluble in its working medium. A dye is soluble. Lake making is one bridge between the two: a soluble colourant is fixed into an insoluble solid."],
    ["02","Particle size","Grinding changes surface area, settling, texture and the way light is scattered. Two samples with the same chemistry can paint differently if their particle morphology differs."],
    ["03","Calcination","Heat can change the mineral state of earth pigments. In iron-bearing earths, dehydration can move goethite toward hematite and change yellow/brown hues toward red/warm tones."],
    ["04","Laking","Metal salts and alkaline conditions can create a solid substrate that captures a soluble dye. The visible clouding and precipitate are part of the transformation."],
    ["05","Oxidation","Some colour systems change when exposed to oxygen. Woad's indigo chemistry and vivianite's colour development are examples discussed in the book."],
    ["06","Binder","Pigment particles need a medium that holds them to the support. Gum, casein, egg and local tree sap behave differently because their chemistry and film-forming properties differ."]
  ];
  return `
    <div class="page-title"><div><div class="eyebrow">MATERIAL SCIENCE</div><h1>Why does the colour change?</h1><p>Tap a concept to connect the visible colour to the material process.</p></div></div>
    <div class="chem-grid">${concepts.map(c=>`<article class="chem-card"><span>${c[0]}</span><h3>${c[1]}</h3><p>${c[2]}</p></article>`).join("")}</div>
    <section class="process-strip">
      <div><b>RAW MATERIAL</b><span>earth · plant · mineral · waste</span></div><i>→</i>
      <div><b>PROCESS</b><span>grind · wash · heat · extract · react</span></div><i>→</i>
      <div><b>PIGMENT</b><span>particle · colour · structure</span></div><i>→</i>
      <div><b>PAINT</b><span>pigment + binder + support</span></div>
    </section>
  `;
}

function journalPage() {
  return `
    <div class="page-title"><div><div class="eyebrow">YOUR WORKBENCH</div><h1>My Pigment Journal</h1><p>Record experiments locally in this browser. Nothing is uploaded.</p></div></div>
    <div class="journal-form">
      <input id="jName" placeholder="Batch / pigment name" />
      <input id="jDate" type="date" value="${new Date().toISOString().slice(0,10)}" />
      <textarea id="jNotes" placeholder="Material source, quantities, temperature, pH, colour, texture, what happened..."></textarea>
      <button class="primary" onclick="addJournal()">Save batch</button>
    </div>
    <div class="journal-list">${state.journal.length ? state.journal.slice().reverse().map((j,i)=>`<article class="journal-entry"><div><span>${esc(j.date)}</span><h3>${esc(j.name)}</h3></div><p>${esc(j.notes)}</p><button onclick="deleteJournal(${state.journal.length-1-i})">×</button></article>`).join("") : `<div class="empty">Your first pigment experiment will appear here.</div>`}</div>
  `;
}

function glossaryPage() {
  return `
    <div class="page-title"><div><div class="eyebrow">REFERENCE</div><h1>Glossary</h1><p>Small definitions for the language of pigment making.</p></div></div>
    <div class="glossary">${glossary.map(([a,b])=>`<article><h3>${esc(a)}</h3><p>${esc(b)}</p></article>`).join("")}</div>
  `;
}

function safetyPage() {
  return `
    <div class="page-title"><div><div class="eyebrow">READ BEFORE MAKING</div><h1>Safety & Responsible Practice</h1><p>Natural does not automatically mean harmless. Treat every material as a material study.</p></div></div>
    <div class="warning-box"><strong>⚠ WORK SMALL · WORK CLEAN · RECORD EVERYTHING</strong><p>Some processes involve heat, dust, alkaline solutions, acids, metal salts or copper compounds. Use appropriate PPE and ventilation, and never use food equipment.</p></div>
    <div class="safety-list">${safety.map((s,i)=>`<div><b>${String(i+1).padStart(2,"0")}</b><p>${esc(s)}</p></div>`).join("")}</div>
  `;
}

function openPigmentModal(id) {
  const p = pigments.find(x=>x.id===id); if(!p) return;
  const related = recipes.filter(r=>r.pigment.toLowerCase().includes(p.name.toLowerCase().split(" / ")[0].toLowerCase()) || r.title.toLowerCase().includes(p.name.toLowerCase().split(" ")[0].toLowerCase()));
  const el = document.createElement("div"); el.className="modal-backdrop"; el.onclick=e=>{if(e.target===el)closeModal()};
  el.innerHTML=`<div class="modal">
    <button class="close" onclick="closeModal()">×</button>
    <div class="modal-swatch" style="background:${p.hex}"></div>
    <div class="tag">${esc(p.family)} · ${esc(p.hue)}</div><h2>${esc(p.name)}</h2>
    <p class="lead">${esc(p.material)}</p>
    <div class="modal-specs">
      <div><span>CHEMISTRY</span><b>${esc(p.formula)}</b></div>
      <div><span>BEHAVIOUR</span><b>${esc(p.behaviour)}</b></div>
      <div><span>TRANSFORMATION</span><b>${esc(p.transformation)}</b></div>
      <div><span>HISTORY</span><b>${esc(p.history)}</b></div>
    </div>
    <div class="modal-section"><h3>Study source</h3><p>${esc(p.source)} of <i>The Natural Pigment Handbook</i>.</p></div>
    ${related.length?`<div class="modal-section"><h3>Related making</h3>${related.map(r=>`<button class="related" onclick="closeModal();showRecipe('${r.id}')">${esc(r.title)} →</button>`).join("")}</div>`:""}
  </div>`;
  document.body.appendChild(el);
}

function openRecipeModal(id) {
  const r=recipes.find(x=>x.id===id); if(!r) return;
  const chapter=chapters.find(c=>c.id===r.chapter);
  const step=Math.min(state.recipeStep,r.steps.length-1);
  const el=document.createElement("div"); el.className="modal-backdrop"; el.onclick=e=>{if(e.target===el)closeModal()};
  el.innerHTML=`<div class="modal recipe-modal">
    <button class="close" onclick="closeModal()">×</button>
    <div class="eyebrow">${esc(r.type)} · ${esc(chapter?.title||"")}</div>
    <h2>${esc(r.title)}</h2><p class="lead">${esc(r.pigment)}</p>
    <div class="risk-line"><span>${esc(r.difficulty)}</span><span>${esc(r.duration)}</span><span>⚠ ${esc(r.risk)}</span></div>
    <div class="recipe-cols">
      <aside><h3>Ingredients</h3><ul>${r.ingredients.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><h3>Equipment</h3><ul>${r.equipment.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></aside>
      <section>
        <div class="science-note"><b>WHY IT WORKS</b><p>${esc(r.science)}</p></div>
        <div class="stepper">
          <div class="step-count">STEP ${String(step+1).padStart(2,"0")} / ${String(r.steps.length).padStart(2,"0")}</div>
          <h3>${esc(r.steps[step])}</h3>
          <div class="progress">${r.steps.map((_,i)=>`<button class="${i<=step?'done':''}" onclick="recipeGo(${i})"></button>`).join("")}</div>
          <div class="step-actions"><button ${step===0?'disabled':''} onclick="recipeGo(${step-1})">← Previous</button><button ${step===r.steps.length-1?'disabled':''} onclick="recipeGo(${step+1})">Next →</button></div>
        </div>
        <div class="source-note">${esc(r.note)}</div>
      </section>
    </div>
  </div>`;
  document.body.appendChild(el);
}

window.navigate = p=>{state.page=p;state.search="";state.selectedPigment=null;state.selectedRecipe=null;render();};
window.setSearch = v=>{state.search=v;render();};
window.setFilter = v=>{state.filter=v;render();};
window.showPigment = id=>{state.selectedPigment=id;openPigmentModal(id)};
window.showRecipe = id=>{state.selectedRecipe=id;state.recipeStep=0;openRecipeModal(id)};
window.closeModal = ()=>{document.querySelectorAll(".modal-backdrop").forEach(x=>x.remove());state.selectedPigment=null;state.selectedRecipe=null;};
window.recipeGo = i=>{state.recipeStep=i;document.querySelectorAll(".modal-backdrop").forEach(x=>x.remove());openRecipeModal(state.selectedRecipe)};
window.addJournal = ()=>{
  const name=document.querySelector("#jName")?.value.trim();
  const date=document.querySelector("#jDate")?.value || new Date().toISOString().slice(0,10);
  const notes=document.querySelector("#jNotes")?.value.trim();
  if(!name||!notes)return;
  state.journal.push({name,date,notes});persist();render();
};
window.deleteJournal = i=>{state.journal.splice(i,1);persist();render();};
window.toggleMenu = ()=>document.body.classList.toggle("menu-open");

render();
