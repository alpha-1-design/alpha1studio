(function() {
'use strict';

const APPS = [
  {id:'sam-atlas',name:'Sam Atlas',desc:'AI Agent Builder. Digital products to help you build and sell AI agents.',icon:'\u{1F916}',color:'#1e3a5f',category:'AI',url:'https://sam-atlas.vercel.app'},
  {id:'alpha-1-design',name:'Alpha-1 Design',desc:'AI writing, image compression, and color palette tools. Powered by Claude API.',icon:'\u2728',color:'#2d1a5f',category:'AI',url:'https://alpha-1design.vercel.app'},
  {id:'privacy-toolkit',name:'Privacy Toolkit',desc:'13 browser-based security tools. Phishing detection, AES-256 encryption, JWT decoder.',icon:'\u{1F512}',color:'#0f3a2a',category:'Security',url:'https://privacy-toolkit-ten.vercel.app'},
  {id:'universal-toolbox',name:'Universal Toolbox',desc:'700+ curated web tools across 50+ categories. Your complete developer toolkit.',icon:'\u{1F6E0}\uFE0F',color:'#3a2a0f',category:'Tools',url:'https://universal-toolbox.vercel.app'},
  {id:'gia-app',name:'GIA',desc:'Generative Interface Agent — private on-device AI workspace. 21 providers, wake word, agentic tools.',icon:'\u{1F916}',color:'#0f2745',category:'AI',url:'https://alpha-1-design.github.io/gia-app/'}
];

let currentView = 'home';
let currentApp = null;
let allRepos = [];
let projAbort = null;

window.openApp = function(id) {
  const app = APPS.find(a => a.id === id);
  if (!app) return;
  currentApp = app;
  const iframe = document.getElementById('iframeContainer');
  const titleEl = document.getElementById('iframeTitle');
  const siteLink = document.getElementById('siteLink');
  if (iframe) iframe.src = app.url;
  if (titleEl) titleEl.textContent = app.name;
  if (siteLink) siteLink.href = app.url;
  showView('iframe');
  document.getElementById('appShell')?.classList.add('iframe-open');
};

window.closeApp = function() {
  const iframe = document.getElementById('iframeContainer');
  if (iframe) iframe.src = '';
  showView('launcher');
  document.getElementById('appShell')?.classList.remove('iframe-open');
};

window.showView = function(view, repo) {
  if (view === currentView && !repo) return;
  currentView = view;
  const home = document.getElementById('homeView');
  const launcher = document.getElementById('launcherView');
  const iframeV = document.getElementById('iframeView');
  const wikiV = document.getElementById('wikiView');
  const wikiDV = document.getElementById('wikiDetailView');
  const floatBack = document.getElementById('floatBack');
  const fullscreen = document.getElementById('fullscreenMode');
  [home, launcher, iframeV, wikiV, wikiDV].forEach(v => { if (v) v.classList.remove('active'); });
  if (fullscreen) fullscreen.classList.remove('open');
  if (floatBack) floatBack.style.display = 'none';
  if (view === 'home') {
    if (home) home.classList.add('active');
    document.title = 'Alpha-1 Studio';
  } else if (view === 'launcher') {
    if (launcher) launcher.classList.add('active');
    document.title = 'Apps - Alpha-1 Studio';
    loadApps();
  } else if (view === 'iframe') {
    if (iframeV) iframeV.classList.add('active');
    document.title = (currentApp ? currentApp.name : 'App') + ' - Alpha-1 Studio';
  } else if (view === 'wiki') {
    if (wikiV) wikiV.classList.add('active');
    document.title = 'Wiki - Alpha-1 Studio';
    renderWikiGrid();
  } else if (view === 'wikidetail') {
    if (wikiDV) wikiDV.classList.add('active');
    if (repo) renderWikiDetail(repo);
  }
  window.scrollTo({top:0});
};

window.loadApps = function() {
  const grid = document.getElementById('appGrid');
  if (!grid) return;
  const count = document.getElementById('appCount');
  if (count) count.textContent = APPS.length + ' ' + tr('statApps');
  grid.innerHTML = APPS.map(a => `
    <div class="ap" onclick="openApp('${a.id}')">
      <div class="ap-ico" style="background:${a.color};color:#fff;border-radius:10px">${a.icon}</div>
      <div class="ap-n">${a.name}</div>
      <div class="ap-d">${a.desc}</div>
      <span class="ap-t">${a.category}</span>
    </div>
  `).join('');
};

window.toggleNav = function() {
  const nav = document.getElementById('mobileNav');
  const toggle = document.getElementById('navToggle');
  if (nav && toggle) {
    nav.classList.toggle('open');
    toggle.classList.toggle('open');
  }
};

window.closeNav = function() {
  const nav = document.getElementById('mobileNav');
  const toggle = document.getElementById('navToggle');
  if (nav) nav.classList.remove('open');
  if (toggle) toggle.classList.remove('open');
};

window.tf = function(btn) {
  const fi = btn.closest('.fi');
  if (fi) fi.classList.toggle('open');
};

window.filterProjects = function(val) {
  const cards = document.querySelectorAll('.proj-card');
  const q = val.toLowerCase();
  let count = 0;
  cards.forEach(c => {
    const match = c.textContent.toLowerCase().includes(q);
    c.style.display = match ? 'flex' : 'none';
    if (match) count++;
  });
  const countEl = document.getElementById('projCount');
  if (countEl) countEl.textContent = allRepos.length ? (count + ' / ' + allRepos.length) : 'Loading...';
};

window.shareSite = function() {
  const url = 'https://alpha1studio.vercel.app';
  if (navigator.share) {
    navigator.share({title:'Alpha-1 Studio',url}).catch(()=>{});
  } else {
    navigator.clipboard.writeText(url).then(() => showToast('Link copied!')).catch(()=>{});
  }
};

window.showShortcuts = function() {
  const existing = document.querySelector('.shortcuts-modal');
  if (existing) { existing.remove(); return; }
  const m = document.createElement('div');
  m.className = 'shortcuts-modal';
  m.innerHTML = `<div class="shortcuts-box">
    <h2>Keyboard Shortcuts</h2>
    <div class="sc-item"><span>Home view</span><kbd>G</kbd> <kbd>H</kbd></div>
    <div class="sc-item"><span>Apps view</span><kbd>G</kbd> <kbd>A</kbd></div>
    <div class="sc-item"><span>Close app / Back</span><kbd>Esc</kbd></div>
    <div class="sc-item"><span>Toggle mobile nav</span><kbd>M</kbd></div>
    <div class="sc-item"><span>Focus search</span><kbd>/</kbd></div>
    <div class="sc-item"><span>Fullscreen</span><kbd>F</kbd></div>
    <div class="sc-item"><span>Scroll to top</span><kbd>T</kbd></div>
    <div class="sc-item"><span>Share</span><kbd>S</kbd></div>
    <button class="shortcuts-close" onclick="this.closest('.shortcuts-modal').remove()">Close</button>
  </div>`;
  document.body.appendChild(m);
  requestAnimationFrame(() => m.classList.add('open'));
  m.addEventListener('click', e => { if (e.target === m) m.remove(); });
};

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._hide);
  t._hide = setTimeout(() => t.classList.remove('show'), 2500);
}
window.showToast = showToast;

function loadProjects() {
  const grid = document.getElementById('projGrid');
  const skel = document.getElementById('skelGrid');
  const countEl = document.getElementById('projCount');
  if (!grid) return;
  if (countEl) countEl.textContent = 'Loading...';
  if (projAbort) projAbort.abort();
  projAbort = new AbortController();
  if (skel) skel.innerHTML = Array(6).fill('<div class="skel">' + Array(4).fill('<div class="skel-bar"></div>').join('') + '</div>').join('');
  fetch('https://api.github.com/users/alpha-1-design/repos?sort=updated&per_page=50', {
    signal: projAbort.signal,
    headers: {'Accept':'application/vnd.github.v3+json'}
  })
  .then(r => { if (!r.ok) throw new Error('GitHub API error'); return r.json(); })
  .then(repos => {
    // Skip the profile README repo and forks — they are not projects
    allRepos = repos.filter(r => r.name !== 'alpha-1-design' && !r.fork);
    if (skel) skel.innerHTML = '';
    if (countEl) countEl.textContent = allRepos.length + ' repos';
    syncStats();
    grid.innerHTML = allRepos.map(r => {
      const topics = r.topics || [];
      const lang = r.language ? `<span class="pc-tag">${r.language}</span>` : '';
      const desc = r.description || '';
      const fork = r.fork ? `<span class="pc-forked">Forked</span>` : '';
      const stars = r.stargazers_count || 0;
      const forks = r.forks_count || 0;
      const updated = new Date(r.updated_at).toLocaleDateString();
      const topTopics = topics.slice(0,3).map(t => `<span class="pc-tag">${t}</span>`).join('');
      const shot = SITE_SHOTS[r.name] ? `<div class="pc-shot"><img src="${shotUrl(SITE_SHOTS[r.name])}" alt="${r.name} preview" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentElement.classList.add('shot-fail')"></div>` : '';
      return `<div class="proj-card" onclick="showWikiDetail('${r.name}')" title="Open project wiki">
        ${fork}
        ${shot}
        <div class="pc-name">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
          <a href="${r.html_url}" target="_blank" style="color:#fff">${r.name}</a>
        </div>
        <div class="pc-desc">${desc}</div>
        <div class="pc-tags">${lang}${topTopics}</div>
        <div class="pc-bot">
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> ${stars}</span>
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6V2M8 18l4 4 4-4M8 6l-4 4 4 4"/></svg> ${forks}</span>
          <span style="margin-left:auto">${updated}</span>
        </div>
      </div>`;
    }).join('');
  })
  .catch(err => {
    if (err.name === 'AbortError') return;
    if (skel) skel.innerHTML = '';
    if (countEl) countEl.textContent = 'Failed';
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text3);font-size:.85rem">Failed to load projects. <button onclick="loadProjects()" style="background:var(--bg3);border:1px solid var(--border);border-radius:6px;padding:6px 14px;cursor:pointer;color:var(--blue);font-size:.78rem;margin-left:6px">Retry</button></div>';
  });
}

// Counters
function animateCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target = parseInt(el.dataset.target) || 0;
    const suffix = el.dataset.suffix || '';
    const dur = 2000;
    const start = performance.now();
    function update(now) {
      const p = Math.min((now - start) / dur, 1);
      const val = Math.floor(p * target);
      el.textContent = val + suffix;
      if (p < 1) requestAnimationFrame(update);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(update);
  });
}

// Sync hardcoded stat numbers with live repo data
function syncStats() {
  const apps = APPS.length;
  const repos = allRepos.length;
  const langs = new Set(allRepos.map(r => r.language).filter(Boolean)).size;
  const la = document.getElementById('statApps');
  const lr = document.getElementById('lsRepos');
  if (la) la.textContent = apps;
  if (lr) lr.textContent = repos;
  document.querySelectorAll('.counter').forEach(el => {
    const count = el.dataset.count;
    const val = count === 'apps' ? apps : count === 'langs' ? langs : count === 'repos' ? repos : null;
    if (val === null) return;
    el.dataset.target = String(val);
    const parent = el.closest('.counter-parent');
    if (parent && parent.classList.contains('visible')) el.textContent = val;
  });
}

// Reveal animations
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        if (e.target.classList.contains('counter-parent')) {
          animateCounters();
        }
      }
    });
  }, {threshold:0.1});
  els.forEach(el => obs.observe(el));
}

// Showcase card clicks
function initShowcase() {
  document.querySelectorAll('.sc-card').forEach(card => {
    card.addEventListener('click', () => {
      const app = card.dataset.app;
      if (app) openApp(app);
    });
  });
}

// Particle background
let particlesCanvas, ctx, particles = [], animId;

function initParticles() {
  const c = document.getElementById('particles');
  if (!c) return;
  particlesCanvas = c;
  ctx = c.getContext('2d');
  resize();
  particles = Array(80).fill(null).map(() => ({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    r: Math.random() * 1.5 + 0.5,
    o: Math.random() * 0.4 + 0.1
  }));
  window.addEventListener('resize', resize);
  animateParticles();
}

function resize() {
  if (!particlesCanvas) return;
  particlesCanvas.width = window.innerWidth;
  particlesCanvas.height = window.innerHeight;
}

function animateParticles() {
  if (!ctx || !particlesCanvas) return;
  ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > particlesCanvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > particlesCanvas.height) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(59,130,246,${p.o})`;
    ctx.fill();
    for (let j = i + 1; j < particles.length; j++) {
      const dx = p.x - particles[j].x;
      const dy = p.y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(59,130,246,${0.08 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  });
  animId = requestAnimationFrame(animateParticles);
}

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  const key = e.key.toLowerCase();
  if (key === 'escape') {
    if (document.querySelector('.shortcuts-modal')) {
      document.querySelector('.shortcuts-modal').remove();
      return;
    }
    const dd = document.getElementById('langDropdown');
    if (dd && dd.classList.contains('open')) { dd.classList.remove('open'); return; }
    if (currentView === 'iframe') { closeApp(); return; }
    if (currentView === 'launcher') { showView('home'); return; }
    closeNav();
  }
  if (key === 'g' && e.shiftKey) { e.preventDefault(); showView('home'); }
  if (key === 'a' && e.shiftKey) { e.preventDefault(); showView('launcher'); }
  if (key === 'w' && e.shiftKey) { e.preventDefault(); showWiki(); }
  if (key === 'm') { e.preventDefault(); toggleNav(); }
  if (key === '/') { e.preventDefault(); const f = document.getElementById('projFilter'); if (f) f.focus(); }
  if (key === 't') { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); }
  if (key === 's') { e.preventDefault(); shareSite(); }
});

// Back to top
const btt = document.getElementById('btt');
if (btt) {
  window.addEventListener('scroll', () => btt.classList.toggle('show', window.scrollY > 400));
}

// Wiki functions
const readmeCache = {};

// Projects with a live web build — used for screenshot thumbnails
const SITE_SHOTS = {
  'gia-app':'https://alpha-1-design.github.io/gia-app/',
  'privacy-toolkit':'https://privacy-toolkit-ten.vercel.app',
  'universal-toolbox':'https://universal-toolbox.vercel.app',
  'Terra-Core':'https://terra-core-nu.vercel.app',
  'alpha1studio':'https://alpha1studio.vercel.app'
};
function shotUrl(url) {
  return 'https://s0.wp.com/mshots/v1/' + encodeURIComponent(url) + '?w=720&h=450';
}
function repoColors(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = ((h << 5) - h) + name.charCodeAt(i);
  h = ((h % 360) + 360) % 360;
  return {primary:`hsl(${h},70%,55%)`,secondary:`hsl(${(h+30)%360},60%,45%)`,bg:`hsla(${h},70%,55%,.1)`,bgHover:`hsla(${h},70%,55%,.15)`};
}
function fmtNum(n) {if(!n&&n!==0)return'—';return n>=1000?(n/1000).toFixed(1)+'k':n;}
function mdToHtml(md, repoName, branch) {
  if (!md) return '';
  const base = `https://raw.githubusercontent.com/alpha-1-design/${repoName}/${branch || 'main'}/`;
  if (typeof marked === 'undefined' || !marked.parse) {
    return '<p>' + md.slice(0, 500).replace(/</g,'&lt;').replace(/\n/g,'<br>') + '…</p>';
  }
  try {
    const html = marked.parse(md, { gfm: true, breaks: true, baseUrl: base });
    return html.replace(/<a href="/g, '<a target="_blank" rel="noopener" href="');
  } catch (e) {
    return '<p>Could not render this README.</p>';
  }
}
window.showWiki = function() {showView('wiki');};
window.showWikiDetail = function(repoName) {
  const repo = allRepos.find(r => r.name === repoName);
  if (!repo) {showView('wiki');return;}
  showView('wikidetail', repo);
};
function renderWikiGrid() {
  const grid = document.getElementById('wikiGrid');
  const count = document.getElementById('wikiCount');
  if (!grid) return;
  if (!allRepos.length) {grid.innerHTML='<p style="text-align:center;color:var(--text3);padding:40px 0">Wiki data not loaded yet.</p>';return;}
  if (count) count.textContent = `(${allRepos.length})`;
  grid.innerHTML = allRepos.map(r => {
    const c = repoColors(r.name);
    return `<div class="wiki-card" onclick="showWikiDetail('${r.name}')" style="--wc-color:${c.primary};--wc-bg:${c.bg}">
      <div class="wc-top">
        <div class="wc-icon">${r.language ? r.language[0] : '#'}</div>
        <div class="wc-name">${r.name}</div>
        ${r.language ? `<span class="wc-lang">${r.language}</span>` : ''}
      </div>
      <div class="wc-desc">${(r.description || 'No description available.').replace(/'/g,"\\'")}</div>
      <div class="wc-bot">
        <span>★ ${fmtNum(r.stargazers_count)}</span>
        <span>⑂ ${fmtNum(r.forks_count)}</span>
        <span>◉ ${fmtNum(r.open_issues_count)}</span>
        <span style="margin-left:auto">${new Date(r.updated_at).toLocaleDateString()}</span>
      </div>
    </div>`;
  }).join('');
}
function renderWikiDetail(repo) {
  const c = repoColors(repo.name);
  const hero = document.getElementById('wdHero');
  const nameEl = document.getElementById('wdName');
  const langEl = document.getElementById('wdLang');
  const descEl = document.getElementById('wdDesc');
  const ghLink = document.getElementById('wdGhLink');
  const overviewEl = document.getElementById('wdOverview');
  const detailsGrid = document.getElementById('wdDetailsGrid');
  if (hero) hero.style.setProperty('--wd-color', c.primary);
  if (hero) hero.style.setProperty('--wd-bg', c.bg);
  if (nameEl) nameEl.textContent = repo.name;
  if (langEl) langEl.textContent = repo.language || '—';
  if (descEl) descEl.textContent = repo.description || 'Project details';
  if (ghLink) ghLink.href = repo.html_url;
  const shotEl = document.getElementById('wdShot');
  if (shotEl) {
    const s = SITE_SHOTS[repo.name];
    shotEl.innerHTML = s ? `<img src="${shotUrl(s)}" alt="${repo.name} screenshot" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : '';
  }
  if (overviewEl) overviewEl.innerHTML = 'Loading README...';
  if (detailsGrid) {
    detailsGrid.innerHTML = [
      {label:'Stars',value:fmtNum(repo.stargazers_count)},
      {label:'Forks',value:fmtNum(repo.forks_count)},
      {label:'Open Issues',value:fmtNum(repo.open_issues_count)},
      {label:'Language',value:repo.language||'—'},
      {label:'Created',value:new Date(repo.created_at).toLocaleDateString()},
      {label:'Updated',value:new Date(repo.updated_at).toLocaleDateString()},
      {label:'Size',value:repo.size?repo.size+' KB':'—'},
      {label:'License',value:repo.license?repo.license.spdx_id:'—'},
      {label:'Default Branch',value:repo.default_branch||'—'},
    ].map(d => `<div class="wd-detail-item"><div class="wd-di-label">${d.label}</div><div class="wd-di-value">${d.value}</div></div>`).join('');
  }
  document.title = repo.name + ' - Wiki - Alpha-1 Studio';
  // Fetch README
  if (readmeCache[repo.name]) {
    if (overviewEl) overviewEl.innerHTML = mdToHtml(readmeCache[repo.name], repo.name, repo.default_branch);
    return;
  }
  fetch(`https://api.github.com/repos/alpha-1-design/${repo.name}/readme`)
    .then(r => {if(!r.ok)throw new Error('No README');return r.json();})
    .then(data => {
      const text = atob(data.content.replace(/\n/g,''));
      readmeCache[repo.name] = text;
      const el = document.getElementById('wdOverview');
      if (el) el.innerHTML = mdToHtml(text, repo.name, repo.default_branch);
    })
    .catch(() => {
      const el = document.getElementById('wdOverview');
      if (el) el.textContent = repo.description || 'No README available for this project.';
    });
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(()=>{});
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('homeView')?.classList.add('active');
  initParticles();
  initReveal();
  initShowcase();
  loadProjects();
  renderLangDropdown();
  updateLangSwitcher(currentLang);
  translatePage();
  loadApps();
});

})();
