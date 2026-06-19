# RSPIR Funnel

Funnel statique brutal pour RSPIR.

## Ce qui est inclus

- `index.html` : landing page + mini diagnostic
- `styles.css` : direction visuelle RSPIR
- `script.js` : scroll, sélection des offres, choix rapides
- `merci.html` : page après formulaire
- `netlify.toml` : config Netlify
- `assets/bananes-rspir.jpg` : image rage bait fournie

## Déploiement recommandé

Utilise Netlify parce que le formulaire est déjà compatible avec Netlify Forms.

Étapes :

1. Va sur Netlify.
2. Clique **Add new site**.
3. Choisis **Import an existing project**.
4. Connecte GitHub.
5. Sélectionne `nathanielrespire-collab/rspir-funnel`.
6. Build command : laisse vide.
7. Publish directory : `.`.
8. Déploie.

Les leads vont apparaître dans Netlify > Forms > `rspir-lead`.

## Important

Sur GitHub Pages, la page va afficher, mais le formulaire ne collectera pas les leads.
Sur Netlify, le formulaire fonctionne sans backend.
