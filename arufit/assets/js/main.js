/* ARUFIT — interações e animações */
(() => {
  const D = window.ARUFIT;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const hasGSAP = !!(window.gsap && window.ScrollTrigger);
  document.documentElement.classList.remove("no-js");
  if (reduced) document.documentElement.classList.add("reduced");

  /* ---------------- Links de conversão ---------------- */
  const waLink = (msg) => D.contato.whatsapp
    ? `https://wa.me/${D.contato.whatsapp}?text=${encodeURIComponent(msg)}`
    : D.contato.instagramDM;
  window.ARUFIT.waLink = waLink;
  const bindWA = (root = document) => $$("[data-wa]", root).forEach((a) => {
    a.href = waLink(a.dataset.wa);
    a.target = "_blank";
    a.rel = "noopener";
  });

  /* ---------------- Conteúdo dinâmico ---------------- */
  const track = $("[data-htrack]");
  const themes = ["", "mod--blue", "", "mod--ink", ""];
  const arts = ["art--caustic", "art--splash", "art--lanes", "art--grid", "art--flag"];
  track.innerHTML = D.modalidades.map((m, i) => `
    <article class="mod ${themes[i % themes.length]}" id="mod-${m.id}">
      <div class="mod__top">
        <h3 class="mod__name">${m.nome}</h3>
        <span class="mod__n">0${i + 1}/0${D.modalidades.length}</span>
      </div>
      <div class="mod__body">
        <figure class="media" data-cursor="${m.nome}">
          <div class="art ${arts[i % arts.length]}"></div>
          <img src="assets/media/${m.id}.jpg" alt="${m.nome} na Arufit" loading="lazy" onerror="this.remove()">
        </figure>
        <p style="margin-top:18px">${m.resumo}</p>
        <p class="mod__for"><b>Para quem:</b> ${m.paraQuem}</p>
        <ul>${m.beneficios.map((b) => `<li>${b}</li>`).join("")}</ul>
      </div>
      <div class="mod__cta">
        <span>Aula experimental</span>
        <a href="#" class="btn btn--sm ${themes[i % themes.length] ? "btn--white" : "btn--blue"} magnetic" data-wa="Olá! Vim pelo site e quero fazer uma aula experimental de ${m.nome} na Arufit."><span>Quero ${m.nome.toLowerCase()}</span></a>
      </div>
    </article>`).join("");

  $("[data-faq]").innerHTML = D.faq.map((f, i) => `
    <div class="faq__item">
      <button class="faq__q" aria-expanded="false" aria-controls="faq-${i}">${f.p}<span class="faq__icon" aria-hidden="true"></span></button>
      <div class="faq__a" id="faq-${i}" role="region"><p>${f.r}</p></div>
    </div>`).join("");

  if (D.depoimentos.length) {
    $("[data-reviews]").hidden = false;
    $("[data-reviews-track]").innerHTML = D.depoimentos.map((r) => `
      <blockquote class="review">
        <div class="stars" aria-label="${r.nota} de 5 estrelas">${"★".repeat(r.nota || 5)}</div>
        <p>“${r.texto}”</p>
        <footer>${r.nome} · ${r.origem}</footer>
      </blockquote>`).join("");
  }

  const e = D.endereco, c = D.contato;
  $("[data-addr]").innerHTML = `${e.linha1}<br>${e.linha2}<br>CEP ${e.cep}`;
  $("[data-route]").href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(e.mapsQuery)}`;
  $("[data-map]").src = `https://maps.google.com/maps?q=${encodeURIComponent(e.mapsQuery)}&z=16&output=embed`;
  $("[data-contact]").innerHTML = [
    c.telefoneExibicao && `<a href="${waLink("Olá!")}" target="_blank" rel="noopener">${c.telefoneExibicao}</a>`,
    `<a href="mailto:${c.email}">${c.email}</a>`,
    `<a href="${c.instagram}" target="_blank" rel="noopener">@academiaarufit</a>`,
  ].filter(Boolean).join("<br>");
  $("[data-hours]").innerHTML = D.horarios.length
    ? `<div class="hours">${D.horarios.map((h) => `<div><span>${h.dia}</span><b>${h.hora}</b></div>`).join("")}</div>`
    : `Horários de cada turma direto com a equipe.<br><a href="${waLink("Olá! Quais são os horários das aulas?")}" target="_blank" rel="noopener">Consultar horários</a>`;
  $("[data-year]").textContent = new Date().getFullYear();

  bindWA();

  /* ---------------- Vídeos opcionais ---------------- */
  $$("video[data-video]").forEach((v) => {
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return;
      io.disconnect();
      v.src = v.dataset.video;
      v.addEventListener("loadeddata", () => { v.classList.add("is-ready"); v.play().catch(() => {}); }, { once: true });
      v.addEventListener("error", () => v.remove(), { once: true });
    }, { rootMargin: "200px" });
    io.observe(v);
  });

  /* ---------------- FAQ ---------------- */
  $$(".faq__item").forEach((item) => {
    const q = $(".faq__q", item), a = $(".faq__a", item);
    q.addEventListener("click", () => {
      const open = !item.classList.contains("is-open");
      $$(".faq__item.is-open").forEach((o) => { if (o !== item) toggle(o, false); });
      toggle(item, open);
    });
    function toggle(it, open) {
      const ans = $(".faq__a", it);
      it.classList.toggle("is-open", open);
      $(".faq__q", it).setAttribute("aria-expanded", open);
      if (hasGSAP && !reduced) gsap.to(ans, { height: open ? "auto" : 0, duration: .6, ease: "expo.out" });
      else ans.style.height = open ? "auto" : "0";
    }
  });

  /* ---------------- Quiz ---------------- */
  const quiz = $("[data-quiz]");
  const Q = [
    { q: "Qual é o seu principal objetivo agora?", o: [
      ["Ganhar força ou massa muscular", { musculacao: 3, funcional: 1 }],
      ["Emagrecer e ganhar fôlego", { funcional: 3, natacao: 2, musculacao: 1 }],
      ["Postura, dores ou mobilidade", { pilates: 3, hidro: 2 }],
      ["Aprender a nadar ou competir", { natacao: 4 }],
    ]},
    { q: "Como está o seu corpo hoje?", o: [
      ["Tenho dor ou limitação nas articulações", { hidro: 3, pilates: 2 }],
      ["Estou parado(a) há um tempo", { hidro: 1, pilates: 1, natacao: 1, funcional: 1 }],
      ["Já treino e quero subir o nível", { musculacao: 2, funcional: 2, natacao: 1 }],
      ["É para o meu filho ou filha", { natacao: 4 }],
    ]},
    { q: "Qual ambiente te anima mais?", o: [
      ["Dentro d'água", { natacao: 2, hidro: 2 }],
      ["Aula em turma, com energia de grupo", { funcional: 2, hidro: 1 }],
      ["Atenção próxima do instrutor", { pilates: 2 }],
      ["Meu ritmo, meu treino", { musculacao: 2 }],
    ]},
  ];
  let step = 0, score = {};
  const renderQ = () => {
    const s = Q[step];
    quiz.innerHTML = `
      <div class="quiz__steps">${Q.map((_, i) => `<i class="${i <= step ? "on" : ""}"></i>`).join("")}</div>
      <p class="quiz__q">${s.q}</p>
      <div class="quiz__opts">${s.o.map(([t], i) => `<button class="quiz__opt" data-i="${i}"><kbd>${"ABCD"[i]}</kbd>${t}</button>`).join("")}</div>`;
    $$(".quiz__opt", quiz).forEach((b) => b.addEventListener("click", () => pick(+b.dataset.i, b)));
    if (hasGSAP && !reduced) gsap.from($$(".quiz__q, .quiz__opt", quiz), { y: 24, opacity: 0, stagger: .06, duration: .6, ease: "expo.out" });
  };
  const pick = (i, btn) => {
    btn.classList.add("is-picked");
    Object.entries(Q[step].o[i][1]).forEach(([k, v]) => { score[k] = (score[k] || 0) + v; });
    setTimeout(() => { step++; step < Q.length ? renderQ() : renderResult(); }, 280);
  };
  const renderResult = () => {
    const ranked = Object.entries(score).sort((a, b) => b[1] - a[1]).map(([k]) => D.modalidades.find((m) => m.id === k));
    const [top, second] = ranked;
    const msg = `Olá! Fiz o quiz no site e minha modalidade ideal deu ${top.nome}${second ? ` (e ${second.nome} como complemento)` : ""}. Quero agendar uma aula experimental!`;
    quiz.innerHTML = `
      <div class="quiz__result">
        <small>Sua combinação ideal</small>
        <h3>${top.nome}</h3>
        <p>${top.resumo}</p>
        ${second ? `<p class="also">Para completar: <b>${second.nome}</b>. Muitos alunos combinam as duas.</p>` : ""}
        <div class="quiz__actions">
          <a href="#" class="btn btn--blue magnetic" data-wa="${msg.replace(/"/g, "&quot;")}"><span>Agendar aula de ${top.nome}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          <button class="quiz__restart" data-restart>Refazer</button>
        </div>
      </div>`;
    bindWA(quiz);
    $("[data-restart]", quiz).addEventListener("click", () => { step = 0; score = {}; renderQ(); });
    if (hasGSAP && !reduced) gsap.from($$(".quiz__result > *", quiz), { y: 30, opacity: 0, stagger: .07, duration: .8, ease: "expo.out" });
  };
  renderQ();

  /* ---------------- Menu mobile ---------------- */
  const burger = $("[data-burger]"), menu = $("[data-menu]");
  const setMenu = (open) => {
    document.body.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", open);
    menu.setAttribute("aria-hidden", !open);
    if (window.__lenis) open ? __lenis.stop() : __lenis.start();
  };
  burger.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
  $$("a", menu).forEach((a) => a.addEventListener("click", () => setMenu(false)));

  /* ---------------- Contadores ---------------- */
  const fmt = (n, el) => el.dataset.format === "pt" ? Math.round(n).toLocaleString("pt-BR") : Math.round(n);
  const runCount = (el) => {
    const to = +el.dataset.count, from = +(el.dataset.from || 0);
    if (!hasGSAP || reduced) { el.textContent = fmt(to, el); return; }
    const o = { v: from };
    gsap.to(o, { v: to, duration: 2, ease: "expo.out", onUpdate: () => (el.textContent = fmt(o.v, el)) });
  };

  if (!hasGSAP) {
    $$("[data-count]").forEach(runCount);
    $(".loader")?.remove();
    return;
  }

  /* ================== GSAP ================== */
  gsap.registerPlugin(ScrollTrigger);

  // Lenis: rolagem suave
  if (!reduced && window.Lenis) {
    const lenis = new Lenis({ lerp: .1, smoothWheel: true });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (ev) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const t = $(id);
      if (!t) return;
      ev.preventDefault();
      lenis.scrollTo(t, { offset: id === "#topo" ? 0 : -60, duration: 1.4 });
    }));
  }

  // Barra de progresso + header que some/volta
  const header = $("[data-header]");
  gsap.to(".progress", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: .3 } });
  let lastY = 0;
  ScrollTrigger.create({
    start: 0, end: "max",
    onUpdate: (st) => {
      const y = st.scroll();
      header.classList.toggle("is-solid", y > innerHeight * .85);
      header.classList.toggle("is-hidden", y > lastY && y > innerHeight && !document.body.classList.contains("menu-open"));
      lastY = y;
      $(".fab-wa").classList.toggle("is-in", y > innerHeight * .6);
    },
  });

  // Preloader → entrada do hero
  const intro = () => {
    const title = $$(".hero__title .line > span");
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.from(title, { yPercent: 110, rotate: 4, duration: 1.4, stagger: .09 })
      .from("[data-hero-in]", { y: 30, opacity: 0, duration: 1.1, stagger: .08 }, "-=1")
      .from(".header > *", { y: -24, opacity: 0, duration: 1, stagger: .05 }, "-=1")
      .add(() => $$(".hero [data-count]").forEach(runCount), "-=.8");
  };
  const loader = $(".loader");
  if (reduced || !loader) { loader?.remove(); document.body.classList.remove("is-loading"); intro(); }
  else {
    document.body.classList.add("is-loading");
    const num = $("[data-loader-num]"), o = { v: 0 };
    gsap.timeline()
      .from(".loader__mark", { scale: .6, opacity: 0, duration: .6, ease: "expo.out" })
      .to(o, { v: 100, duration: 1.1, ease: "power2.inOut", onUpdate: () => (num.textContent = String(Math.round(o.v)).padStart(2, "0")) }, 0)
      .to(".loader__mark", { scale: 14, opacity: 0, duration: .9, ease: "expo.in" }, "-=.25")
      .to(loader, { clipPath: "inset(0 0 100% 0)", duration: .9, ease: "expo.inOut" }, "-=.4")
      .add(() => { loader.remove(); document.body.classList.remove("is-loading"); intro(); }, "-=.55");
  }

  // Hero: parallax suave do título ao rolar
  gsap.to(".hero__inner", { yPercent: -18, opacity: .2, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  // Marquee com velocidade/direção pelo scroll
  const mq = $("[data-marquee]");
  if (mq) {
    let x = 0, dir = 1, boost = 0;
    const half = () => mq.scrollWidth / 2;
    ScrollTrigger.create({ onUpdate: (st) => { dir = st.direction; boost = Math.min(Math.abs(st.getVelocity()) / 120, 18); } });
    gsap.ticker.add(() => {
      x -= (1 + boost) * dir;
      boost *= .92;
      if (x <= -half()) x += half();
      if (x > 0) x -= half();
      gsap.set(mq, { x, skewX: -boost * .6 * dir });
    });
  }

  // Manifesto: palavras acendem conforme rola
  const mt = $("[data-words]");
  if (mt && !reduced) {
    const split = (node) => [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((w) => {
          if (!w.trim()) { frag.append(w); return; }
          const s = document.createElement("span"); s.className = "w"; s.textContent = w; frag.append(s);
        });
        n.replaceWith(frag);
      } else split(n);
    });
    split(mt);
    gsap.to($$(".w", mt), { opacity: 1, stagger: .1, ease: "none", scrollTrigger: { trigger: mt, start: "top 80%", end: "bottom 45%", scrub: true } });
  }

  // Revelações por clip-path
  $$(".reveal-clip").forEach((el) => gsap.to(el, {
    clipPath: "inset(0% 0% 0% 0% round 22px)", ease: "none",
    scrollTrigger: { trigger: el, start: "top 95%", end: "top 40%", scrub: true },
  }));
  $$(".manifesto [data-count]").forEach((el) => ScrollTrigger.create({ trigger: el, start: "top 85%", once: true, onEnter: () => runCount(el) }));
  $$(".ig [data-count]").forEach((el) => ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: () => runCount(el) }));

  // Títulos de seção: subida linha a linha
  $$(".h2, .contato__title").forEach((h) => {
    let lines = [h];
    if (window.SplitText) {
      const st = new SplitText(h, { type: "lines", linesClass: "sl", mask: "lines" });
      lines = st.lines;
    }
    gsap.from(lines, { yPercent: 105, opacity: lines.length === 1 ? 0 : 1, duration: 1.2, stagger: .08, ease: "expo.out", scrollTrigger: { trigger: h, start: "top 85%" } });
  });
  $$(".eyebrow:not(.hero__eyebrow)").forEach((el) => gsap.from(el, { x: -20, opacity: 0, duration: .9, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 90%" } }));

  // Modalidades: rolagem horizontal fixada (desktop)
  const mm = gsap.matchMedia();
  mm.add("(min-width: 761px)", () => {
    const pin = $("[data-hpin]");
    const dist = () => track.scrollWidth - innerWidth;
    const tween = gsap.to(track, {
      x: () => -dist(), ease: "none",
      scrollTrigger: { trigger: pin, start: "center center", end: () => `+=${dist()}`, pin: ".mods", scrub: .8, invalidateOnRefresh: true, anticipatePin: 1 },
    });
    gsap.to("[data-hbar]", { scaleX: 1, ease: "none", scrollTrigger: { trigger: pin, start: "center center", end: () => `+=${dist()}`, scrub: true } });
    $$(".mod .media img, .mod .media .art", track).forEach((m) => gsap.fromTo(m, { xPercent: -8, scale: 1.15 }, { xPercent: 8, ease: "none", scrollTrigger: { trigger: m.closest(".mod"), containerAnimation: tween, start: "left right", end: "right left", scrub: true } }));
  });
  mm.add("(max-width: 760px)", () => {
    const pin = $("[data-hpin]");
    const onScroll = () => gsap.set("[data-hbar]", { scaleX: pin.scrollLeft / (pin.scrollWidth - pin.clientWidth || 1) });
    pin.addEventListener("scroll", onScroll, { passive: true });
    return () => pin.removeEventListener("scroll", onScroll);
  });

  // Steps: cartões empilhados diminuem ao serem cobertos
  $$(".step").forEach((s, i, all) => {
    if (i === all.length - 1) return;
    gsap.to(s, { scale: .9, ease: "none", scrollTrigger: { trigger: all[i + 1], start: "top 85%", end: "top 30%", scrub: true } });
  });

  // Galeria: parallax interno e entrada
  $$("[data-parallax]").forEach((img) => gsap.fromTo(img, { yPercent: -8 }, { yPercent: 8, ease: "none", scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true } }));
  $$(".gallery__item, .podio__feature, .podio__card, .ig__grid .media, .faq__item, .contato__info > div").forEach((el) =>
    gsap.from(el, { y: 60, opacity: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 92%" } }));

  // Rodapé: palavra gigante sobe
  gsap.from(".footer__giant", { yPercent: 40, ease: "none", scrollTrigger: { trigger: ".footer", start: "top bottom", end: "bottom bottom", scrub: true } });

  /* ---------------- Microinterações (desktop) ---------------- */
  if (fine && !reduced) {
    // Cursor
    const cur = $(".cursor"), label = $(".cursor__label");
    const xTo = gsap.quickTo(cur, "x", { duration: .45, ease: "power3" });
    const yTo = gsap.quickTo(cur, "y", { duration: .45, ease: "power3" });
    addEventListener("pointermove", (ev) => { xTo(ev.clientX); yTo(ev.clientY); cur.style.opacity = 1; }, { passive: true });
    document.addEventListener("pointerover", (ev) => {
      const t = ev.target.closest("[data-cursor], a, button");
      cur.classList.remove("is-big", "is-link");
      if (!t) return;
      if (t.dataset.cursor) { label.textContent = t.dataset.cursor; cur.classList.add("is-big"); }
      else cur.classList.add("is-link");
    });

    // Botões magnéticos
    const bindMagnetic = (root = document) => $$(".magnetic", root).forEach((b) => {
      if (b.__mag) return; b.__mag = true;
      const bx = gsap.quickTo(b, "x", { duration: .6, ease: "elastic.out(1,.4)" });
      const by = gsap.quickTo(b, "y", { duration: .6, ease: "elastic.out(1,.4)" });
      b.addEventListener("pointermove", (ev) => { const r = b.getBoundingClientRect(); bx((ev.clientX - r.left - r.width / 2) * .3); by((ev.clientY - r.top - r.height / 2) * .35); });
      b.addEventListener("pointerleave", () => { bx(0); by(0); });
    });
    bindMagnetic();
    new MutationObserver(() => bindMagnetic()).observe(document.body, { childList: true, subtree: true });

    // Tilt 3D nos cards de conquistas
    $$(".tilt").forEach((card) => {
      card.addEventListener("pointermove", (ev) => {
        const r = card.getBoundingClientRect();
        const px = (ev.clientX - r.left) / r.width - .5, py = (ev.clientY - r.top) / r.height - .5;
        gsap.to(card, { rotateY: px * 8, rotateX: -py * 8, transformPerspective: 900, duration: .6, ease: "power3.out" });
      });
      card.addEventListener("pointerleave", () => gsap.to(card, { rotateX: 0, rotateY: 0, duration: 1, ease: "elastic.out(1,.5)" }));
    });
  }

  // Recalcula quando imagens reais carregam
  addEventListener("load", () => ScrollTrigger.refresh());
})();
