// La Note Gourmande : comportements communs.
// Chargé dans <head> (sans defer) pour poser la classe "js" avant le premier affichage :
// sans JavaScript, le panneau de filtres reste affiché dans la page.
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const desktop = window.matchMedia('(min-width: 1024px)');

  // ---- Menu mobile (<dialog>) ----
  const menu = document.getElementById('menu');
  const burger = document.querySelector('.burger');
  if (menu && burger) {
    burger.addEventListener('click', () => menu.showModal());
    menu.querySelector('.menu__fermer').addEventListener('click', () => menu.close());
    menu.addEventListener('click', (e) => { if (e.target === menu) menu.close(); });   // clic sur le fond
    desktop.addEventListener('change', (e) => { if (e.matches && menu.open) menu.close(); });
  }

  // ---- La loupe de l'en-tête place le curseur dans le champ de recherche ----
  const champ = document.getElementById('q');
  document.querySelector('.entete__loupe')?.addEventListener('click', () => champ?.focus());

  // ---- Page catalogue : formulaire, panneau de filtres, tri ----
  const form = document.getElementById('form-catalogue');
  if (!form) return;

  const panneau = document.getElementById('filtres');
  const btnOuvrir = form.querySelector('.btn-filtres');
  const btnFermer = panneau.querySelector('.filtres__fermer');
  const compteur = btnOuvrir.querySelector('span');
  const arriere = document.querySelectorAll('[data-masquable]');   // ce qui est derrière le panneau

  function basculer(ouvrir, rendreLeFocus = true) {
    panneau.classList.toggle('est-ouvert', ouvrir);
    btnOuvrir.setAttribute('aria-expanded', String(ouvrir));
    document.body.style.overflow = ouvrir ? 'hidden' : '';          // bloque le défilement derrière
    arriere.forEach((el) => { el.inert = ouvrir; });                // le clavier reste dans le panneau
    if (rendreLeFocus) (ouvrir ? btnFermer : btnOuvrir).focus();
  }
  btnOuvrir.addEventListener('click', () => basculer(true));
  btnFermer.addEventListener('click', () => basculer(false));
  panneau.addEventListener('keydown', (e) => { if (e.key === 'Escape') basculer(false); });
  desktop.addEventListener('change', (e) => { if (e.matches) basculer(false, false); });

  // ---- Nombre de filtres choisis, affiché sur le bouton « Filtres » ----
  function compterFiltres() {
    const n = [...panneau.querySelectorAll('input:checked')].filter((i) => i.value !== '').length;
    compteur.textContent = n ? `(${n})` : '';
  }
  panneau.addEventListener('change', compterFiltres);
  compterFiltres();

  // ---- Le tri s'applique tout de suite ----
  form.querySelector('select[name="tri"]').addEventListener('change', () => form.requestSubmit());
});
