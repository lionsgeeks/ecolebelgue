# École Belge au Maroc - Website

Site web pour les établissements scolaires belges au Maroc utilisant le programme d'enseignement de la Fédération Wallonie-Bruxelles.

## 🚀 Technologies

- **Backend**: Laravel (PHP)
- **Frontend**: React 19 avec TypeScript
- **Styling**: Tailwind CSS v4
- **Routing**: Inertia.js
- **UI Components**: Radix UI + shadcn/ui components
- **Build Tool**: Vite

## 📁 Structure du Projet

### Organisation des Pages

Chaque section/concept suit cette structure :
```
pages/
  └── [section]/
      ├── index.jsx
      └── partials/
          └── [component files]
```

**Exemple** :
```
pages/
  └── home/
      ├── index.jsx
      └── partials/
          └── [futurs composants de la page d'accueil]
```

**Note** : Les fichiers de pages utilisent l'extension `.jsx` par défaut. Le système de résolution essaie `.jsx` en premier, puis `.tsx` si nécessaire.

### Routes

Les routes sont organisées en fichiers séparés dans le dossier `routes/` :

- `routes/home.php` - Route d'accueil
- `routes/pourquoi.php` - Routes "Pourquoi choisir nos écoles ?"
- `routes/scolarite.php` - Routes "Scolarité"
- `routes/admissions.php` - Routes "Admissions"
- `routes/ecoles.php` - Routes "Nos Ecoles"
- `routes/contact.php` - Route de contact
- `routes/faq.php` - Route FAQ

Toutes les routes sont importées dans `routes/web.php`.

### Composants

Les composants suivent la même structure avec index + partials :

- `components/navbar/` - Composant de navigation principal
- `layouts/app-layout.tsx` - Layout principal de l'application

## 🎨 Design System

### Couleurs Belgiques

Le projet utilise les couleurs du drapeau belge définies dans `resources/css/app.css` :

```css
--color-belgYellow: #fbbc15;  /* Jaune belge */
--color-belgRed: #eb3424;     /* Rouge belge */
--color-belgBlack: #3c3d3c;   /* Noir belge */
```

Ces couleurs sont disponibles directement en classes Tailwind :
- `bg-belgYellow`, `text-belgYellow`, `border-belgYellow`
- `bg-belgRed`, `text-belgRed`, `border-belgRed`
- `bg-belgBlack`, `text-belgBlack`, `border-belgBlack`

### Usage

Utilisez les classes Tailwind directement au lieu de `var(--color-*)` :

```tsx
// ✅ Bon
<div className="bg-belgYellow text-belgBlack">

// ❌ Évitez
<div className="bg-[var(--color-belgYellow)]">
```

## 🧭 Navigation

### Structure du Menu

La navbar comprend les éléments suivants (tous en français) :

1. **Accueil** - Lien direct
2. **Pourquoi choisir nos écoles ?** - Menu déroulant
   - Notre Mission
   - Nos Valeurs
   - Avantages
3. **Scolarité** - Menu déroulant
   - Programmes
   - Calendrier
   - Examens
4. **Admissions** - Menu déroulant
   - Processus
   - Documents requis
   - Frais
5. **Nos Ecoles** - Menu déroulant
   - Localisation
   - Infrastructures
   - Équipe
6. **Contact** - Lien direct
7. **FAQ** - Lien direct

### Comportement UX

- Hover : Fond jaune subtil (`hover:bg-belgYellow/10`) avec texte légèrement assombri
- Underline : Animation de soulignement jaune au survol
- Navbar fixe avec padding-top sur le contenu principal (`pt-20`)

## 🏗️ Architecture

### Layout

Le layout principal (`layouts/app-layout.tsx`) :
- Navbar fixe en haut
- Contenu principal avec padding-top pour compenser la navbar
- Fond blanc

### Composant Navbar

Le composant navbar (`components/navbar/index.tsx`) :
- Responsive avec menu mobile (Sheet component)
- Logo EBM avec image (`/logo.png`)
- Menus déroulants sur desktop
- Bandeau tricolore belge en bas (noir, jaune, rouge)
- Tous les textes en français

## 📝 Guidelines de Développement

### Structure des Fichiers

1. **Chaque section doit avoir** :
   - Un fichier `index.jsx` dans le dossier de la section
   - Un dossier `partials/` contenant les composants de la page

**Format de fichiers** : Utilisez `.jsx` pour les fichiers de pages. Le système de résolution d'Inertia essaie `.jsx` en premier, puis `.tsx` comme fallback.

2. **Composants réutilisables** :
   - Créer dans `components/[nom-component]/index.tsx`
   - Si le composant a des sous-composants, créer un dossier `partials/`

### Styling

- Utiliser uniquement Tailwind CSS
- Utiliser les variables de couleur belges via les classes Tailwind
- Éviter les styles inline sauf cas exceptionnels
- Respecter la palette de couleurs belges

### Langue

- Tous les textes de l'interface doivent être en français
- Les labels, menus, et messages utilisateur en français

## 🧪 Tests

Les tests PHPUnit sont dans le dossier `tests/`. Pour exécuter les tests :

```bash
php artisan test
```

## 📦 Installation

1. Installer les dépendances PHP :
```bash
composer install
```

2. Installer les dépendances Node.js :
```bash
npm install
```

3. Copier le fichier d'environnement :
```bash
cp .env.example .env
```

4. Générer la clé d'application :
```bash
php artisan key:generate
```

5. Lancer les migrations :
```bash
php artisan migrate
```

## 🚀 Développement

### Lancer le serveur de développement

Terminal 1 - Laravel :
```bash
php artisan serve
```

Terminal 2 - Vite :
```bash
npm run dev
```

### Build de production

```bash
npm run build
npm run build:ssr  # Pour le rendu côté serveur
```

## 📄 Fichiers Créés/Modifiés

### Nouveaux Fichiers

- `resources/js/components/navbar/index.tsx` - Composant navbar
- `resources/js/layouts/app-layout.tsx` - Layout principal
- `resources/js/pages/home/index.jsx` - Page d'accueil
- `resources/js/pages/home/partials/` - Dossier pour les composants de la page d'accueil
- `routes/home.php` - Routes de la page d'accueil
- `routes/pourquoi.php` - Routes "Pourquoi choisir nos écoles ?"
- `routes/scolarite.php` - Routes "Scolarité"
- `routes/admissions.php` - Routes "Admissions"
- `routes/ecoles.php` - Routes "Nos Ecoles"
- `routes/contact.php` - Route de contact
- `routes/faq.php` - Route FAQ

### Fichiers Modifiés

- `resources/css/app.css` - Ajout des couleurs belges comme variables Tailwind
- `routes/web.php` - Import des routes séparées

## 🎯 Prochaines Étapes

- [ ] Créer les pages pour chaque route définie
- [ ] Ajouter le contenu dans les partials de la page d'accueil
- [ ] Implémenter les fonctionnalités spécifiques (formulaires, etc.)
- [ ] Ajouter des animations et transitions
- [ ] Optimiser les images et assets
- [ ] Ajouter les métadonnées SEO

## 📞 Support

Pour toute question ou problème, veuillez contacter l'équipe de développement.

---

**Note** : Ce projet est développé pour les établissements scolaires belges au Maroc avec le programme de la Fédération Wallonie-Bruxelles.

