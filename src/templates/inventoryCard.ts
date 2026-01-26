import { createInventoryHeader } from '../templates/inventoryHeader';
import { createSearchAndFilters } from '../templates/searchAndFilters';
import { createAddModal, createEditModal } from '../templates/modalTemplates';
import { createItemsList } from '../templates/itemList';
import { createActiveFiltersDisplay } from '../templates/filters';
import { InventoryItem } from '../types/homeAssistant';
import { FilterState } from '../types/filterState';
import { TodoList } from '../types/todoList';
import { styles } from '../styles/styles';
import { TranslationData } from '@/types/translatableComponent';
import { TranslationManager } from '@/services/translationManager';

export function generateCardHTML(
  inventoryName: string,
  items: InventoryItem[],
  filters: FilterState,
  sortMethod: string,
  categories: string[],
  locations: string[],
  todoLists: TodoList[],
  allItems: readonly InventoryItem[],
  description: string | undefined,
  translations: TranslationData,
  minimal = false,
): string {
  return `
    <style>${styles}</style>
    <ha-card>
      ${createInventoryHeader(inventoryName, allItems as InventoryItem[], translations, description)}

      <div class="search-controls">
        ${createSearchAndFilters(filters, translations)}
      </div>

      ${createActiveFiltersDisplay(filters, translations)}

      <div class="items-container">
        ${
          items.length > 0
            ? createItemsList(items, sortMethod, todoLists, translations, minimal)
            : `<div class="empty-state">${TranslationManager.localize(translations, 'items.no_items', undefined, 'No items in inventory')}</div>`
        }
      </div>

      ${createAddModal(todoLists, translations, categories, locations)}
      ${createEditModal(todoLists, translations, categories, locations)}
    </ha-card>
  `;
}
