<div align="center">

# 🎯 FocusBoard

**Construis ta journée, une session à la fois.**

Un tableau de bord personnel pour suivre ses priorités, consulter son planning et réserver du temps à la concentration.

![Next.js](https://img.shields.io/badge/Next.js-16.2.10-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Statut](https://img.shields.io/badge/Statut-Prototype-orange)

[Présentation](#-présentation) · [Fonctionnalités](#-fonctionnalités) · [Installation](#-installation) · [Architecture](#-architecture) · [État du projet](#-état-du-projet)

</div>

---

## 🧭 Présentation

**FocusBoard** rassemble les premières briques d’un outil de productivité personnelle : des tâches quotidiennes, un planning par créneaux et un minuteur de concentration.

Le projet est actuellement un **prototype avec des données de démonstration**. Les tâches peuvent être cochées et le minuteur est interactif. Leurs états sont enregistrés dans le navigateur, sans compte utilisateur ni base de données distante.

## ✨ Fonctionnalités

### Priorités et tâches

- Vue des priorités depuis le tableau de bord.
- Liste détaillée séparant les priorités des tâches secondaires.
- Niveaux de priorité : haute, moyenne et basse.
- Possibilité de terminer ou de rouvrir une tâche.
- Compteur de tâches terminées et barre de progression.
- Affichage ou masquage des tâches terminées.
- Réouverture de toutes les tâches terminées et retour aux données initiales.
- État partagé entre le tableau de bord et la page des tâches.

### Planning quotidien

- Affichage de créneaux avec horaires de début et de fin.
- Catégories : planification, concentration, administratif et personnel.
- Indication du niveau d’énergie associé à chaque créneau.
- Synthèse du nombre de créneaux, des blocs de concentration et de la durée planifiée.

Le planning utilise actuellement une journée de démonstration définie dans le code. L’édition des créneaux depuis l’interface n’est pas encore disponible.

### Sessions de concentration

- Durées prédéfinies de **25, 45 ou 60 minutes**.
- Commandes de démarrage, pause et réinitialisation.
- Affichage du temps restant et du nombre de sessions terminées.
- Conservation locale de la durée choisie, du temps restant et du compteur.

Après un rechargement ou un retour sur la page, le minuteur est restauré **en pause**. Il ne calcule pas le temps écoulé pendant l’absence.

### Interface

- Navigation latérale sur grand écran et navigation compacte sur mobile.
- Composants partagés construits avec shadcn/ui et Base UI.
- Interface en français et styles centralisés avec Tailwind CSS.

## 🛠️ Stack technique

| Usage | Technologies |
| --- | --- |
| Application et routage | Next.js 16.2.10, App Router |
| Interface | React 19.2.4, TypeScript 5 |
| Styles | Tailwind CSS 4, variables CSS |
| Composants | shadcn/ui, Base UI |
| Icônes | Lucide React |
| État applicatif | Hooks React et Context pour les tâches |
| Persistance | `localStorage` du navigateur |
| Analyse du code | ESLint |
| Dépendances | pnpm et fichier de verrouillage versionné |

## 🚀 Installation

### Prérequis

- Un environnement Node.js compatible avec la version de Next.js du projet.
- pnpm installé.

Aucune variable d’environnement, clé API ou base de données n’est nécessaire pour les fonctionnalités actuelles.

### Lancer en développement

Depuis la racine du dépôt :

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Ouvre ensuite **http://localhost:3000**. La route `/` redirige vers `/dashboard`.

### Compiler et démarrer

```bash
pnpm build
pnpm start
```

### Commandes disponibles

| Commande | Fonction |
| --- | --- |
| `pnpm dev` | Démarrer le serveur de développement |
| `pnpm build` | Compiler l’application |
| `pnpm start` | Démarrer l’application compilée |
| `pnpm lint` | Analyser le code avec ESLint |

Aucune suite de tests automatisés n’est actuellement définie dans `package.json`.

## 🗺️ Pages

| Route | Contenu |
| --- | --- |
| `/` | Redirection vers le tableau de bord |
| `/dashboard` | Priorités du jour |
| `/tasks` | Liste des tâches, progression et actions groupées |
| `/planning` | Planning de démonstration et synthèse des créneaux |
| `/focus` | Minuteur et conseils de concentration |

Pour lancer une session, utilise la page **Focus**. Le bouton « Démarrer une session » du tableau de bord n’est pas encore relié à une action.

## 💾 Stockage local

| Clé | Données conservées |
| --- | --- |
| `focusboard:daily-tasks` | Liste des tâches sauvegardée ; à la lecture, les états terminé/non terminé sont associés aux identifiants des tâches initiales |
| `focusboard:focus-timer` | Durée choisie, secondes restantes et nombre de sessions terminées |

Les données restent propres au navigateur et à l’adresse utilisée pour accéder à l’application. Elles ne sont pas synchronisées entre appareils. Effacer les données du site supprime cette sauvegarde.

Le bouton **Réinitialiser la journée** restaure les données de démonstration, y compris la tâche déjà terminée dans ce jeu initial. Il ne remet donc pas nécessairement toutes les cases à zéro. Le bouton **Rouvrir les terminées** décoche les tâches terminées.

Le minuteur est piloté par un intervalle dans la page. Quitter la page interrompt son exécution ; la mise en arrière-plan du navigateur peut également affecter sa précision. Réinitialiser le minuteur remet la durée au début sans effacer le compteur de sessions terminées.

## 🗂️ Architecture

Le code est organisé par domaine fonctionnel. Les routes assemblent les écrans, tandis que les composants et la logique métier restent dans leurs fonctionnalités respectives.

```text
FocusBoard/
├── src/
│   ├── app/
│   │   ├── (app)/
│   │   │   ├── dashboard/       # Priorités du jour
│   │   │   ├── tasks/           # Gestion de l’état des tâches
│   │   │   ├── planning/        # Planning quotidien
│   │   │   ├── focus/           # Minuteur
│   │   │   └── layout.tsx       # Layout partagé et provider des tâches
│   │   ├── globals.css          # Styles et tokens
│   │   ├── layout.tsx           # Layout racine et métadonnées
│   │   └── page.tsx             # Redirection initiale
│   ├── components/
│   │   ├── layout/              # Structure et navigation de l’application
│   │   └── ui/                  # Composants génériques réutilisables
│   ├── features/
│   │   ├── dashboard/           # Assemblage des cartes métier
│   │   ├── tasks/               # Tâches, données et état partagé
│   │   ├── daily-planning/      # Créneaux et indicateurs du planning
│   │   └── focus-sessions/      # Minuteur, contrôles et durées
│   └── lib/                     # Utilitaires et accès au stockage local
├── public/
├── components.json              # Configuration shadcn/ui
├── next.config.ts
├── package.json
└── pnpm-lock.yaml
```

### Conventions du projet

- Conserver les fichiers spécifiques aux tâches, au planning ou au minuteur dans la fonctionnalité concernée sous `src/features`.
- Garder les routes fines : elles importent principalement un composant d’écran.
- Réserver `src/components/ui` aux composants génériques et `src/components/layout` à la mise en page partagée.
- Utiliser `src/lib` pour les utilitaires transverses.
- Créer des dossiers globaux comme `actions`, `queries`, `schemas`, `providers`, `stores` ou `types` uniquement lorsqu’un besoin concret et partagé existe.
- Faire du dashboard un assemblage de cartes provenant des autres domaines, sans dupliquer leur logique métier.

## 🎨 Personnalisation

| Élément | Fichier |
| --- | --- |
| Tâches initiales | [`src/features/tasks/data/daily-tasks.ts`](src/features/tasks/data/daily-tasks.ts) |
| Créneaux du planning | [`src/features/daily-planning/data/today-plan.ts`](src/features/daily-planning/data/today-plan.ts) |
| Logique du minuteur | [`src/features/focus-sessions/hooks/use-focus-timer.ts`](src/features/focus-sessions/hooks/use-focus-timer.ts) |
| Navigation et structure de page | [`src/components/layout/app-shell.tsx`](src/components/layout/app-shell.tsx) |
| Message d’accueil | [`src/features/tasks/components/today-priorities-card.tsx`](src/features/tasks/components/today-priorities-card.tsx) |
| Couleurs et styles | [`src/app/globals.css`](src/app/globals.css) |
| Titre et description du site | [`src/app/layout.tsx`](src/app/layout.tsx) |

Les identifiants des tâches servent à retrouver leur état sauvegardé. Conserve-les lors d’un simple changement de libellé si tu souhaites garder leur progression.

## 🚧 État du projet

Les principales limites du prototype sont :

- Les tâches et les créneaux sont prédéfinis ; leur création, modification et suppression depuis l’interface restent à développer.
- Les données ne sont pas organisées par date et aucune remise à zéro quotidienne automatique n’est implémentée.
- Le planning et le minuteur fonctionnent séparément, sans association d’une session à une tâche.
- Le compteur de sessions n’est pas un historique détaillé des sessions.
- Aucun système de comptes, de synchronisation distante ou de notifications n’est présent.

---

<div align="center">

**FocusBoard** · Des priorités claires et du temps pour avancer.

</div>
