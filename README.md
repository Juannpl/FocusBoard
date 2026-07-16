# Focusboard

Base Next.js organisee autour des features metier.

## Structure

- `src/app`: routes, layouts et fichiers specifiques a Next.js
- `src/components/ui`: composants generiques reutilisables
- `src/components/layout`: shell et mise en page partages
- `src/features`: logique et composants metier par domaine
- `src/lib`: utilitaires transverses

## Regles de base

- Si un fichier est specifique aux taches, au planning, au focus ou aux objectifs, il doit vivre dans la feature concernee.
- Les routes doivent rester fines et se contenter d&apos;importer un composant d&apos;ecran depuis `src/features`.
- N&apos;ajoute pas `actions`, `queries`, `schemas`, `providers`, `stores` ou `types` globaux tant qu&apos;ils ne sont pas reels et utilises.

## Premier sprint

- redirection de `/` vers `/dashboard`
- layout `(app)` avec sidebar, header et contenu responsive
- dashboard local avec trois taches fictives
- pages `planning`, `focus` et `tasks` volontairement minimales

L&apos;etape Git avec la branche `feat/app-shell` sera faite ensuite, une fois la branche creee.
