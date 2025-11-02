# @fractalcms/select-beautiful

Accessible and customizable Select component for Aurelia 2.

## Installation

```bash
npm install @fractalcms/select-beautiful
```

## Usage

```html
<select fractalcms-select-beautiful.bind="{ theme: 'green', multiple: true }">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

## Thèmes

* default
* dark
* red
* blue
* soft
* green
* custom

## Options

  | Option                | Type          | Default                                      | Description                            |
  |-----------------------|---------------|----------------------------------------------|----------------------------------------|
  | `multiple`            | `boolean`     | `true`                                       | Enable multi-select                    |
  | `theme`               | `ECssTheme`   | `'default'`                                  | Select theme                           |
  | `searchPlaceholder`   | `string`      | `'Rechercher'`                               | Search Input placeholder               |
  | `searchInputName`     | `string`      | `'model[search]'`                            | Search Input name                      |
  | `removeText`          | `string`      | `'retiré'`                                   | ARIA text when item removed            |
  | `removeAllText`       | `string`      | `'Toutes les sélections ont été supprimées'` | ARIA text when item removed            |
  | `addText`             | `string`      | `'ajouté'`                                   | ARIA text when item added              |
  | `eventChangeItemName` | `string`      | `'fractalcms-select-change'`                 | Event dispatch name wher select change |

## License

[license](./LICENSE)