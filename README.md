# Simple Inventory Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)

To use, install the [Simple Inventory](https://github.com/blaineventurine/simple_inventory) integration first.

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=blaineventurine&repository=simple-inventory-card-custom&category=Dashboard)

This card allows you to track various items in different inventories, and automatically add an item to a specific to-do list when it is below a certain threshold.

<img width="513" height="1098" alt="image" src="https://github.com/user-attachments/assets/8c621dda-a5a9-480b-a813-0512ed416ca6" />

You can set an expiration date for an item, how far ahead you want to be warned, a par level that will update a given todo list:

<img width="539" height="258" alt="image" src="https://github.com/user-attachments/assets/9d43c244-1cd9-47f3-8c35-7ac1eb040ff6" />

(the description will not sync with the built-in Home Assistant `todo.shopping_list`, but any other list you create will work)

## Card Types

This repository currently exposes three Lovelace card types:

- `custom:simple-inventory-card-custom`
  The standard card with full item controls.
- `custom:simple-inventory-card-custom-minimal`
  A reduced version of the card with the minimal search/add experience.
- `custom:simple-inventory-card-custom-minimal-grid`
  A minimal grid layout that keeps the compact search bar and renders items as tiles.
![alt text](image.png)
## Minimal Grid Card

The minimal grid card is intended for dense browsing on mobile and tablet layouts.

Behavior:

- Uses the same minimal search controls as the minimal card
- Displays items in a responsive grid
- Keeps sort ordering, including natural location sorting such as `1-3`, `2-6`, `11-3`
- Shows the item description under the title when present
- Shows the item location in the bottom-left of the tile
- Uses a chevron button to reveal edit and delete actions above it

Example:

```yaml
type: custom:simple-inventory-card-custom-minimal-grid
entity: sensor.office_parts_inventory
sort_method: location
```

## Notes

- The grid card removes the inventory title/header to maximize visible item space.
- On standard phone portrait layouts, the grid targets two columns by default.
- Because the built artifact in `dist/` is tracked in this repository, run `npm run build` before committing so the bundled file matches `src/`.

