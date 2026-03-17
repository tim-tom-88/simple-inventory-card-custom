import { CSS_CLASSES } from '../utils/constants';
import { InventoryItem } from '../types/homeAssistant';
import { TodoList } from '../types/todoList';
import { Utilities } from '../utils/utilities';
import {
  createGridItemRowTemplate,
  createItemRowTemplate,
  createMinimalItemRowTemplate,
} from './itemRow';
import { TranslationData } from '@/types/translatableComponent';
import { TranslationManager } from '@/services/translationManager';

export function createItemsList(
  items: InventoryItem[],
  sortMethod: string,
  todoLists: TodoList[],
  translations: TranslationData,
  minimal = false,
  grid = false,
): string {
  if (items.length === 0) {
    const noItemsMessage = TranslationManager.localize(
      translations,
      'items.no_items',
      undefined,
      'No items in inventory',
    );
    return `<div class="no-items">${noItemsMessage}</div>`;
  }

  if (sortMethod === 'category') {
    return createItemsByCategory(items, todoLists, translations, minimal);
  }

  if (sortMethod === 'location') {
    return createItemsByLocation(items, todoLists, translations, minimal);
  }

  return renderItemsCollection(items, todoLists, translations, minimal, grid);
}

export function createItemsByCategory(
  items: InventoryItem[],
  todoLists: TodoList[],
  translations: TranslationData,
  minimal = false,
  grid = false,
): string {
  const grouped = Utilities.groupItemsByCategory(items);
  const sortedCategories = Object.keys(grouped).sort();

  return sortedCategories
    .map(
      (category) => `
        <div class="${CSS_CLASSES.CATEGORY_GROUP}">
          <div class="${CSS_CLASSES.CATEGORY_HEADER}">${category}</div>
          ${renderItemsCollection(grouped[category], todoLists, translations, minimal, grid)}
        </div>
      `,
    )
    .join('');
}

export function createItemsByLocation(
  items: InventoryItem[],
  todoLists: TodoList[],
  translations: TranslationData,
  minimal = false,
  grid = false,
): string {
  const grouped = Utilities.groupItemsByLocation(items);
  const sortedLocations = Object.keys(grouped).sort();
  return sortedLocations
    .map(
      (location) => `
        <div class="${CSS_CLASSES.LOCATION_GROUP}">
          <div class="${CSS_CLASSES.LOCATION_HEADER}">${location}</div>
          ${renderItemsCollection(grouped[location], todoLists, translations, minimal, grid)}
        </div>
`,
    )
    .join('');
}

function renderItemsCollection(
  items: InventoryItem[],
  todoLists: TodoList[],
  translations: TranslationData,
  minimal: boolean,
  grid: boolean,
): string {
  const content = items
    .map((item) => {
      if (grid) {
        return createGridItemRowTemplate(item, todoLists, translations);
      }

      return minimal
        ? createMinimalItemRowTemplate(item, todoLists, translations)
        : createItemRowTemplate(item, todoLists, translations);
    })
    .join('');

  return grid ? `<div class="item-grid">${content}</div>` : content;
}
