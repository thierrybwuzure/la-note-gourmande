# La Note Gourmande

Blog de recettes des cuisines du monde : deux blogueurs publient des recettes sous forme d'articles, et les lecteurs inscrits les notent, les commentent et votent sur les commentaires.

> Projet du module d'analyse web (ADB). État : phase de conception, le code n'est pas encore commencé. La technologie sera choisie selon les consignes du cours (WordPress, PHP/MySQL ou framework).

## Concept

Chaque article raconte un plat (origine, histoire, expérience des blogueurs) puis donne la recette complète. La communauté fait le reste :

- une note sur 5 par lecteur ;
- des commentaires, avec un badge « J'ai testé cette recette » ;
- des pouces levés ou baissés pour faire remonter les commentaires les plus utiles.

**Objectifs** : faire voyager par la cuisine avec des recettes réalisables à la maison, aider à choisir une recette fiable grâce aux retours de ceux qui l'ont testée, fidéliser une communauté.

**Cible** : cuisiniers amateurs de 20 à 45 ans, curieux des cuisines étrangères, surtout sur mobile, souvent en cuisine.

## Classement des recettes

Deux axes que le lecteur peut croiser (par exemple « Street food + mexicaine ») :

- **Style** (plusieurs possibles) : Fast-food, Gastronomique, Cuisine maison, Healthy, Desserts & pâtisserie, En-cas, Street food, Entrées.
- **Origine** (une seule), regroupée par région du monde : Asie, Afrique, Amériques, Europe, Moyen-Orient.

Filtres complémentaires : temps total, difficulté, régime (végétarien, vegan, sans gluten, sans lactose), note minimale.

## Fonctionnalités

| Priorité | Fonctionnalités |
| --- | --- |
| Indispensable | Fiche recette, liste avec filtres combinables, recherche par mot-clé, inscription et connexion, notation sur 5 étoiles, commentaires, pouces, page « Qui sommes-nous ? », back-office, responsive mobile-first |
| Souhaitable | Signalement de commentaires, réponses des blogueurs, profil membre, version imprimable, recettes les mieux notées |
| Optionnel | Ajustement des portions, favoris, mode « en cuisine », newsletter |

## Rôles

| Rôle | Peut faire |
| --- | --- |
| Visiteur | Lire, chercher, filtrer, voir notes et commentaires |
| Membre | Noter, commenter, voter, signaler, gérer son profil |
| Blogueur | Créer ses recettes, répondre aux commentaires, relire celles de l'autre |
| Admin | Modérer, gérer catégories, origines et membres |

Publication par relecture croisée : Brouillon, En relecture, Publié.

## Base de données

Douze tables : `utilisateurs`, `origines`, `categories`, `tags`, `recettes`, `recette_categorie`, `recette_tag`, `ingredients`, `etapes`, `notes`, `commentaires`, `votes_commentaires`. Une seule note par membre et par recette, un seul pouce par membre et par commentaire, garantis par des clés uniques.

## Charte graphique

Identité partie du logo : noir `#151412`, or `#D8B23C`, blanc cassé `#F5F2EA`. Mode clair et mode sombre, qui suit le réglage de l'appareil, avec des variables CSS. Titres en Bricolage Grotesque, texte en DM Sans (auto-hébergées). Tous les contrastes de texte respectent WCAG AA.

## Exigences techniques

- Mobile-first, zones cliquables d'au moins 44 × 44 px, accessibilité WCAG 2.1 AA.
- SEO : URLs lisibles, données structurées schema.org `Recipe`, sitemap.
- Performance : images WebP en chargement différé, Lighthouse 90 ou plus sur mobile.
- Sécurité : mots de passe hachés, requêtes préparées, échappement des sorties, jeton CSRF, limitation des tentatives de connexion.
- RGPD : données minimales, suppression du compte, mentions légales.

## Contenu du dépôt

```
assets/
  logo/                         logos pour fonds sombres
  la-note-gourmande-favicon/    jeu de favicons (16 à 512 px, .ico)
  wireframe-layout.png          wireframe de référence (zones A à G)
index.html, style.css           page d'accueil de départ
design_layout.md                notes de mise en page
```

Le wireframe vient du module d'analyse web et porte une autre marque : il sert de référence de structure, pas de contenu final.

## Organisation

Git (GitHub) pour le code, Trello pour le suivi, Figma pour les maquettes. Livrables : cahier des charges, maquettes et guide de style, schéma de la base, site fonctionnel avec contenu de démonstration, README et documentation d'installation, support de présentation.

## Installation

À venir, une fois la technologie choisie.
