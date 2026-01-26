import { FilterState } from '../types/filterState';
import { Utilities } from '../utils/utilities';
import { TranslationData } from '@/types/translatableComponent';
import { TranslationManager } from '@/services/translationManager';
import { ELEMENTS } from '../utils/constants';

export function createSearchAndFilters(
  filters: FilterState,
  translations: TranslationData,
): string {
  return `
    ${searchRow(filters, translations)}
  `;
}

function searchRow(filters: FilterState, translations: TranslationData): string {
  return `
    <div class="search-row">
      <input 
        type="text" 
        id="${ELEMENTS.SEARCH_INPUT}" 
        placeholder="${TranslationManager.localize(
          translations,
          'filters.search_placeholder',
          undefined,
          'Search items...',
        )}" 
        value="${filters.searchText || ''}"
        class="search-input ${filters.searchText ? 'has-value' : ''}"
      />
      <button id="${ELEMENTS.CLEAR_FILTERS}" 
        class="clear-only-btn ${Utilities.hasActiveFilters(filters) ? 'has-active-filters' : ''}">
        ${TranslationManager.localize(
          translations,
          'filters.clear_all_filters',
          undefined,
          'Clear Filters',
        )}
      </button>
      <button id="${ELEMENTS.OPEN_ADD_MODAL}" class="add-new-btn">
        + ${TranslationManager.localize(translations, 'modal.add_item', undefined, 'Add Item')}
      </button>
    </div>
`;
}
