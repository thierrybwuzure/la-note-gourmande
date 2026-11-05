# Sites Web Inspirations 

## 1. Simple Recipes
https://www.simplyrecipes.com/


---

# Mise en page (état au 2026-10-16)

Pages faites : `index.html` et `catalogue.html`. Le wireframe `assets/wireframe-layout.png` (zones A à G) sert de référence de structure ; il porte la marque « TechCampus Lab / ITGenius », pas la nôtre.

## Structure d'une page

1. **En-tête** : toujours sombre (#151412), car les logos du dépôt sont faits pour un fond noir. Logo, navigation (visible à partir de 1024 px), loupe et burger sous 1024 px. Le burger ouvre un `<dialog>`.
2. **Fil d'Ariane**, puis titre `h1` et nombre de recettes.
3. **Recherche, tri, filtres actifs** : un seul formulaire GET. Les filtres actifs sont de vrais liens (la page sans ce filtre).
4. **Filtres** (panneau) et **résultats** (cartes), puis pagination.
5. **Pied de page**, collé en bas de la fenêtre.

## Points de rupture (cahier des charges, section 9)

| Largeur | Cartes | Filtres |
| --- | --- | --- |
| 0 à 599 px | liste compacte : vignette 112 × 84 px (4:3) à gauche du texte | panneau plein écran, ouvert par le bouton « Filtres (n) » |
| 600 à 1023 px | grille de 2 colonnes, photo 4:3 au-dessus du texte | idem |
| 1024 px et plus | grille de 3 colonnes | colonne latérale toujours visible |

## Échelle φ (règle globale : φ est la valeur par défaut)

- **Espacements** : `--s-3` .236rem, `--s-2` .382, `--s-1` .618, `--s0` 1, `--s1` 1.618, `--s2` 2.618, `--s3` 4.236 (puissances de 1,618). Écart entre éléments liés `--s-1`, entre groupes `--s1`, entre sections `--s2` à `--s3`. Sur mobile, un cran de moins.
- **Colonnes desktop** : filtres 1 pour résultats 2,618 (φ²). Mesuré à 1440 px : 306 px et 801 px, rapport 2,618.
- **Boutons** : marge intérieure `.618rem 1rem` (1 : φ).
- **Interligne** du titre 1,272 (√φ) ; texte 1,6 comme demandé au cahier des charges.

Ce que le cahier des charges impose et qui l'emporte sur φ : texte 17 px, titres 50/36/22 px (desktop) et 30/26/17 px (mobile), rayon des boutons 8 px, zones cliquables de 44 px minimum, points de rupture, photos 4:3.

## Accessibilité

- Texte à 14 px minimum (badges et métadonnées à .875rem), contrastes WCAG AA, zones cliquables de 44 px mini (mesuré : aucune plus petite).
- Focus visible de 3 px (or foncé #8A6D12 en clair, or #D8B23C en sombre). Lien d'évitement. Panneau de filtres : le reste de la page est rendu inerte pendant qu'il est ouvert, Échap le ferme.
- Notes : les étoiles sont décoratives (`aria-hidden`), la note est écrite (« 4,3 ») et lue en entier aux lecteurs d'écran. Moins de 3 notes : « Pas encore assez de notes ».
- Badges de catégorie : nom, icône et couleur, jamais la couleur seule.

## Écarts décidés avec le cahier des charges

- **Étoiles** : or foncé (#8A6D12) en mode clair, or du logo en sombre.
- **Photos** : des emplacements `div role="img"` avec une description, tant qu'il n'y a pas de vraies photos (à remplacer par `<img alt="…">`).
- **Logo** : seule la version pour fond sombre existe ; la version claire reste à faire, d'où l'en-tête sombre dans les deux thèmes.
- **Icône des badges** : une même icône pour toutes les catégories pour l'instant (une icône par catégorie à dessiner).

---

# Fiche recette (`recette.html`, 2026-11-05)

Structure et composants repris de Raphaël Bruggeman (branche `page_recette`), adaptés à `style.css` dans `recette.css` (chargé après `style.css`).

- **Réutilisé du site** : variables de couleur (clair et sombre), `.btn`, `.badge`, `.photo` (4:3), `.etoiles`, `.fil-ariane`, en-tête et pied de page communs.
- **φ mesuré à 1440 px** : photo et titre 683,8 px et 422,6 px (1,618) ; préparation et ingrédients 683,8 px et 422,6 px (1,618). Contrôlé aussi à 1000 et 400 px : aucun débordement, aucun texte sous 14 px, aucune cible sous 44 px, aucun message en console, clair et sombre vérifiés.
- **Changements par rapport à la version de Raphaël** : couleurs et tailles passées aux variables et au rem ; boutons `div.fab` devenus de vrais `<button>` (`.rond`) ou `.btn` ; cases d'ingrédients en vraies `<input type="checkbox">` (les icônes `crop_square` et `check_box_outlined` ne servent plus) ; icônes imprimer et cœur gardées, utilisées comme masque CSS (elles sont blanches) ; `<caption>` remplacé par un `<label>` ; doublon auteur et date supprimé ; « Portion 4 min » devenu « Portions 4 pers. » ; image et avatar manquants remplacés par un bloc 4:3 et une initiale ; tags devenus des liens vers `catalogue.html?tag[]=...` ; `lang="fr"`.
- **Desktop (1024 px)** : photo et titre 1,618 : 1 ; ingrédients et préparation 1 : 1,618 ; six chiffres clés sur une ligne ; commentaires en colonne de lecture de 48 rem.
- **Reste à faire** : vraie photo (`<img>`), contenu réel, JavaScript des portions, de la note, des favoris et du tri, lien depuis les cartes du catalogue.

---

# Thèmes clair et sombre avec bouton (2026-11-05)

Le site a deux thèmes. Un premier essai « sombre uniquement » (commit `b26d648`) a été remplacé le jour même par un bouton de choix.

- **Valeurs** : le sombre est la valeur par défaut de `:root` dans `style.css` ; le clair est dans `:root[data-theme="light"]` et, sans JavaScript, dans `@media (prefers-color-scheme: light) { :root:not([data-theme]) }`. Les deux blocs clairs doivent rester identiques.
- **Choix** : `js/site.js` pose `data-theme` sur `<html>` avant le premier affichage (pas de flash) : le choix gardé dans `localStorage` (clé `theme`), sinon le réglage du système. Sans JavaScript, c'est le réglage du système qui joue et le bouton est caché.
- **Bouton** : `.theme-btn` dans l'en-tête de chaque page, entre la navigation et la loupe ou le burger. Disque coupé en deux qui fait un demi-tour en thème clair, 44 × 44 px, `aria-label` « Passer au thème clair » ou « Passer au thème sombre ». L'en-tête reste sombre dans les deux thèmes (logos pour fond noir).
- **Vérifié** : clic, mémoire d'une page à l'autre, réglage du système sans choix, aucun débordement, aucune erreur en console.
- **Étoiles** : or foncé #8A6D12 en clair (l'or pur fait 1,9:1 sur l'ivoire), or du logo en sombre.

---

# Recettes d'exemple et liens du catalogue (2026-11-05)

Huit fiches recette d'exemple, une par catégorie, générées sur le modèle de `recette.html` : `recette-<nom>.html`.

| Catégorie | Fiche | Origine |
| --- | --- | --- |
| Fast-food | `recette-cheeseburger-maison.html` | Américaine (Amériques) |
| Gastronomique | `recette-magret-canard-cerises.html` | Française (Europe) |
| Cuisine maison | `recette-poulet-yassa.html` | Sénégalaise (Afrique) |
| Healthy | `recette-bowl-riz-tofu.html` | Japonaise (Asie) |
| Desserts & pâtisserie | `recette-tarte-tatin.html` | Française (Europe) |
| En-cas | `recette-houmous-pita.html` | Libanaise (Moyen-Orient) |
| Street food | `recette-tacos-al-pastor.html` | Mexicaine (Amériques) |
| Entrées | `recette-rouleaux-de-printemps.html` | Vietnamienne (Asie) |

- **Catalogue** : `catalogue.html` montre dix cartes (les huit recettes plus « Banh mi » et « Falafels », qui n'ont pas encore de page et gardent le lien `#`), sans filtre actif ni case cochée au départ. Chaque carte de recette pointe vers sa fiche ; le filtre de catégorie, l'origine et les tags de chaque fiche pointent vers `catalogue.html?categorie[]=`, `region[]=` et `tag[]=`.
- **Cohérence** : la note, le nombre de notes, le temps total et l'origine sont les mêmes sur la carte et sur la fiche. Les temps de marinade (yassa, tacos) sont dits dans l'intro et ne comptent pas dans le total.
- **Données d'exemple** : textes, notes et commentaires sont inventés pour le prototype (noms `Membre_n`). Photos : blocs 4:3 à remplacer par `<img>`. Aucune note n'est cochée par défaut dans le bloc « Notez-la ».
- **`recette.html`** reste le modèle générique de Raphaël (« Titre de la recette »), non lié au catalogue.
- **Quand le PHP arrive** : une seule page `recette.php?id=` remplacera les huit fichiers.

---

# Photos des recettes (2026-11-05)

Les huit recettes d'exemple ont une vraie photo : `assets/image/recettes/<nom>.webp` (4:3, 1000 × 750 px ou 960 × 720 px, 60 à 130 Ko).

- **Origine et licences** : photos libres de droit de Wikimedia Commons (CC0, domaine public, CC BY, CC BY-SA), choisies une à une pour correspondre au plat. Auteur, licence et lien source de chacune sont dans `assets/image/recettes/CREDITS.md`.
- **Crédit visible** : chaque fiche affiche sous la photo « Photo : auteur, licence, via Wikimedia Commons » (obligatoire pour CC BY et CC BY-SA, gardé aussi pour CC0). Les cartes du catalogue n'affichent pas le crédit : il est sur la fiche vers laquelle elles mènent.
- **Retouches** : recadrage centré en 4:3 et conversion en WebP. Pas d'autre modification.
- **Réserve** : « Bowl de riz » (CC BY-SA 2.0) et « Houmous » (CC BY-SA 4.0) sont sous licence avec partage dans les mêmes conditions : si on retouche ces deux images, la version retouchée garde la même licence.
- **Alt** : chaque `<img>` a un texte alternatif en français qui décrit le plat. Fiche : image chargée tout de suite ; catalogue : `loading="lazy"`.
- **CSS** : `img.photo` (dans `style.css`) remplit le cadre 4:3 comme le faisait le bloc vide ; `.recette__photo figcaption` pour le crédit (`recette.css`).
- **Pas encore de photo** : « Banh mi » et « Falafels » (blocs vides) et `recette.html`.
