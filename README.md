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

## Etape 2: shadcn/ui

L&apos;installation de `shadcn/ui` est en place avec:

- `components.json` configure pour `src/app/globals.css`
- les variables CSS et tokens dans `src/app/globals.css`
- le helper `cn` dans `src/lib/utils.ts`
- les composants de base dans `src/components/ui`

Composants deja presents:

- `badge`
- `button`
- `card`
- `checkbox`
- `progress`
- `separator`

## Premier sprint

- redirection de `/` vers `/dashboard`
- layout `(app)` avec sidebar, header et contenu responsive
- dashboard local avec trois taches fictives
- pages `planning`, `focus` et `tasks` volontairement minimales

L&apos;etape Git avec la branche `feat/app-shell` sera faite ensuite, une fois la branche creee.
