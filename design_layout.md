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

- **Étoiles** : or du logo (#D8B23C). Le mode clair (or foncé #8A6D12) a été retiré : voir « Thème sombre uniquement ».
- **Photos** : des emplacements `div role="img"` avec une description, tant qu'il n'y a pas de vraies photos (à remplacer par `<img alt="…">`).
- **Logo** : seule la version pour fond sombre existe ; le site étant sombre uniquement, la version claire n'est plus nécessaire.
- **Icône des badges** : une même icône pour toutes les catégories pour l'instant (une icône par catégorie à dessiner).

---

# Fiche recette (`recette.html`, 2026-11-05)

Structure et composants repris de Raphaël Bruggeman (branche `page_recette`), adaptés à `style.css` dans `recette.css` (chargé après `style.css`).

- **Réutilisé du site** : variables de couleur, `.btn`, `.badge`, `.photo` (4:3), `.etoiles`, `.fil-ariane`, en-tête et pied de page communs.
- **φ mesuré à 1440 px** : photo et titre 683,8 px et 422,6 px (1,618) ; préparation et ingrédients 683,8 px et 422,6 px (1,618). Contrôlé aussi à 1000 et 400 px : aucun débordement, aucun texte sous 14 px, aucune cible sous 44 px, aucun message en console, vérifié aussi avec un navigateur en mode clair (le site reste sombre).
- **Changements par rapport à la version de Raphaël** : couleurs et tailles passées aux variables et au rem ; boutons `div.fab` devenus de vrais `<button>` (`.rond`) ou `.btn` ; cases d'ingrédients en vraies `<input type="checkbox">` (les icônes `crop_square` et `check_box_outlined` ne servent plus) ; icônes imprimer et cœur gardées, utilisées comme masque CSS (elles sont blanches) ; `<caption>` remplacé par un `<label>` ; doublon auteur et date supprimé ; « Portion 4 min » devenu « Portions 4 pers. » ; image et avatar manquants remplacés par un bloc 4:3 et une initiale ; tags devenus des liens vers `catalogue.html?tag[]=...` ; `lang="fr"`.
- **Desktop (1024 px)** : photo et titre 1,618 : 1 ; ingrédients et préparation 1 : 1,618 ; six chiffres clés sur une ligne ; commentaires en colonne de lecture de 48 rem.
- **Reste à faire** : vraie photo (`<img>`), contenu réel, JavaScript des portions, de la note, des favoris et du tri, lien depuis les cartes du catalogue.

---

# Thème sombre uniquement (2026-11-05)

Décision de l'équipe : le site n'a plus de mode clair. Dans `style.css`, les valeurs du mode sombre sont les valeurs par défaut de `:root` (avec `color-scheme: dark`), et le bloc `@media (prefers-color-scheme: dark)` ainsi que les valeurs claires ont été supprimés. Vérifié sur `index.html`, `catalogue.html` et `recette.html` avec un navigateur réglé en mode clair : fond #151412, texte #F5F2EA, aucun débordement. Pour revenir en arrière : retrouver le commit « Dark theme only » dans l'historique.
