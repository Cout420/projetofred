(() => {
  const WHATS = '5511999183616';

  // Header com sombra ao rolar
  const hdr = document.getElementById('hdr');
  const onScroll = () => hdr.classList.toggle('is-scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Menu mobile
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
  };
  burger.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

  // Animação de entrada
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('is-in'));
  }

  // Botões "Orçar" preenchem o formulário
  const produtos = document.getElementById('produtos');
  document.querySelectorAll('[data-produto]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const p = btn.dataset.produto;
      if (!produtos.value.includes(p)) {
        produtos.value = (produtos.value ? produtos.value + '\n' : '') + p + ' — quantidade: ';
      }
      setTimeout(() => produtos.focus({ preventScroll: true }), 600);
    });
  });

  // Formulário -> WhatsApp
  const form = document.getElementById('form');
  const msg = document.getElementById('formMsg');
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let ok = true;
    form.querySelectorAll('[required]').forEach((f) => {
      const bad = !f.value.trim();
      f.classList.toggle('is-invalid', bad);
      if (bad) ok = false;
    });
    if (!ok) { msg.textContent = 'Preencha nome, telefone e os produtos.'; return; }
    msg.textContent = '';
    const d = new FormData(form);
    const text = `Olá, Nova Radiante! Gostaria de um orçamento.\n\nNome: ${d.get('nome')}\nTelefone: ${d.get('tel')}\nPerfil: ${d.get('perfil')}\n\nProdutos:\n${d.get('produtos')}`;
    window.open(`https://wa.me/${WHATS}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });

  document.getElementById('ano').textContent = new Date().getFullYear();
})();
