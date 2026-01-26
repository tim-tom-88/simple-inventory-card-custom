import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createSearchAndFilters } from '../../src/templates/searchAndFilters';
import { FilterState } from '../../src/types/filterState';
import { ELEMENTS } from '../../src/utils/constants';
import { TranslationData } from '@/types/translatableComponent';

vi.mock('../../src/services/translationManager', () => ({
  TranslationManager: {
    localize: vi.fn((_translations: any, _key: string, _params: any, fallback: string) => {
      return fallback;
    }),
  },
}));

const filters: FilterState = {
  category: [],
  expiry: [],
  location: [],
  quantity: [],
  searchText: '',
  showAdvanced: false,
  sortMethod: 'name',
};

describe('createSearchAndFilters', () => {
  let mockTranslations: TranslationData;

  beforeEach(() => {
    mockTranslations = {
      filters: {
        clear_all_filters: 'Clear All Filters',
        search_placeholder: 'Search items...',
      },
      modal: {
        add_item: 'Add Item',
      },
    };
    vi.clearAllMocks();
  });

  it('should create search input with empty filters', () => {
    const result = createSearchAndFilters(filters, mockTranslations);

    expect(result).toContain(`id="${ELEMENTS.SEARCH_INPUT}"`);
    expect(result).toContain('placeholder="Search items..."');
    expect(result).toContain('value=""');
    expect(result).toContain('class="search-input "');
  });

  it('should create search input with search text and has-value class', () => {
    const _filters: FilterState = {
      ...filters,
      searchText: 'apple',
    };
    const result = createSearchAndFilters(_filters, mockTranslations);

    expect(result).toContain('value="apple"');
    expect(result).toContain('class="search-input has-value"');
  });

  it('should include clear filters and add item buttons', () => {
    const result = createSearchAndFilters(filters, mockTranslations);

    expect(result).toContain(`id="${ELEMENTS.CLEAR_FILTERS}"`);
    expect(result).toContain('class="clear-only-btn');
    expect(result).toContain('Clear All Filters');
    expect(result).toContain(`id="${ELEMENTS.OPEN_ADD_MODAL}"`);
    expect(result).toContain('Add Item');
  });

  it('should highlight clear filters when filters are active', () => {
    const _filters: FilterState = {
      ...filters,
      searchText: 'apple',
    };
    const result = createSearchAndFilters(_filters, mockTranslations);

    expect(result).toContain('class="clear-only-btn has-active-filters"');
  });
});
