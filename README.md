# @fractalcms/select-beautiful

Un composant Select multi-sélection et accessible pour [Aurelia 2](https://docs.aurelia.io/), conçu pour être simple, élégant et extensible.
Compatible multi-sélection, recherche intégrée, navigation clavier et ARIA live pour l’accessibilité.

## Installation

```bash
npm install @fractalcms/aurelia-select-beautiful
```

## Ajouter le composant

```typescript
import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { SelectBeautiful } from '@fractalcms/aurelia-select-beautiful';

Aurelia
  .register(SelectBeautiful)
  .app(MyApp)
  .start();
```

### Ajout des styles CSS

Le composant ne surcharge aucun style global et ne s’injecte pas automatiquement.
Pour appliquer ses styles, importez simplement la feuille CSS dans votre fichier global SCSS ou CSS :

```bash
@import "@fractalcms/aurelia-select-beautiful/dist/styles/select-beautiful.css";
```


Cette méthode est compatible avec Webpack, Vite et Aurelia CLI.
Elle garantit que vos styles de site ne sont jamais altérés.

## Exemple d'utilisation

```html
<select multiple fractalcms-select-beautiful.bind="{ theme: 'green'}">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

```html
<select fractalcms-select-beautiful="">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```
## Fonctionnalités incluses

* Recherche textuelle dynamique
* Navigation clavier (↑, ↓, Entrée, Échap)
* Sélection multiple avec suppression
* Accessibilité ARIA (live region, multiselect, etc.)

## Thèmes CSS

| Thème                 | Description                         | Exemple           |
| --------------------- | ----------------------------------- |-------------------|
| `soft` *(par défaut)* | Clair, doux et neutre               | `theme: 'soft'`   |
| `dark`                | Fond sombre, texte clair            | `theme: 'dark'`   |
| `blue`                | Accent bleu professionnel           | `theme: 'blue'`   |
| `red`                 | Accent rouge moderne                | `theme: 'red'`    |
| `green`               | Accent vert équilibré               | `theme: 'green'`  |
| `custom`              | Thème utilisateur (voir ci-dessous) | `theme: 'custom'` |

### Exemple

```html
<select fractalcms-select-beautiful.bind="{theme: 'blue'}" multiple>
  <option value="1">Bleu</option>
  <option value="2">Vert</option>
</select>
```

### Créer un thème personnalisé ('custom')

```html
<select fractalcms-select-beautiful.bind="{theme: 'custom'}" multiple>
  <option value="1">Bleu</option>
  <option value="2">Vert</option>
</select>
```

```scss
.theme-custom.select-beautiful {
  .select-beautiful--item---item {
    border: 2px solid #ff9900;
    color: #ff9900;
  }

  .select-beautiful--item---item-close {
    background-color: #fff5e6;
    color: #ff9900;
    border: 2px solid #ff9900;
  }

  .select-beautiful--search---input {
    border: 2px solid #ff9900;
  }

  .select-beautiful--search---list--items {
    border: 2px solid #ff9900;

    &---option[aria-selected="true"] {
      background-color: #ff9900;
      color: white;
    }
  }
}
```
Ce mode vous permet d’adapter le composant à la charte graphique de votre application sans modifier le code source du package.

## Options

  | Option                | Type          | Default                                      | Description                            |
  |-----------------------|---------------|----------------------------------------------|----------------------------------------|
  | `theme`               | `ECssTheme`   | `'soft'`                                     | Select theme                           |
  | `searchPlaceholder`   | `string`      | `'Rechercher'`                               | Search Input placeholder               |
  | `searchInputName`     | `string`      | `'model[search]'`                            | Search Input name                      |
  | `removeText`          | `string`      | `'retiré'`                                   | ARIA text when item removed            |
  | `removeAllText`       | `string`      | `'Toutes les sélections ont été supprimées'` | ARIA text when item removed            |
  | `addText`             | `string`      | `'ajouté'`                                   | ARIA text when item added              |
  | `eventChangeItemName` | `string`      | `'fractalcms-select-change'`                 | Event dispatch name wher select change |


## Evénement de changement

Le composant déclenche un événement personnalisé à chaque modification de sélection :

```typescript
this.element.addEventListener('fractalcms-select-change', (e: CustomEvent) => {
  console.log('Valeurs sélectionnées :', e.detail);
});

```

## Accessibilité (A11y)

Le composant suit les bonnes pratiques ARIA :

* aria-live pour annoncer les ajouts/suppressions
* aria-multiselectable et aria-selected sur les options
* aria-activedescendant pour la navigation clavier
* Support total pour lecteurs d’écran

## Développement Local

```bash
# Installation des dépendances
npm install

# Build complet
npm run build

# Watch (TypeScript + SCSS)
npm run watch
```

## License

[license](./LICENSE)