import { CSSResult, css } from 'lit-element';

export const itemRowStyles: CSSResult = css`
  .item-row {
    display: flex;
    flex-direction: column;
    padding: 12px;
    margin-bottom: 8px;
    border: 1px solid var(--divider-color, #e8e8e8);
    border-radius: 8px;
    gap: 8px;
    cursor: pointer;
  }

  .item-row.zero-quantity {
    opacity: 0.6;
    background: var(--secondary-background-color, #f5f5f5);
  }

  .item-row.auto-add-enabled {
    border-left: 4px solid var(--success-color, #4caf50);
  }

  .item-info {
    flex: 1;
    min-width: 0;
    max-width: calc(100% - 200px); /* Reserve space for buttons */
  }

  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .item-name {
    font-weight: bold;
    font-size: 1.1em;
  }

  .category {
    font-style: italic;
    font-size: 0.9em;
    opacity: 0.7;
  }

  .location {
    font-size: 1em;
    font-style: italic;
    opacity: 0.7;
  }

  .location-category {
    font-size: 1em;
    font-style: italic;
    opacity: 0.7;
  }

  .item-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .item-name-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 4px;
    max-width: 100%;
  }

  .item-name-line .item-name {
    flex: 0 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .item-name-line .category {
    flex-shrink: 0;
    font-size: 0.9em;
    opacity: 0.7;
    font-style: italic;
    white-space: nowrap;
    margin-left: auto;
  }

  .item-details {
    color: var(--secondary-text-color);
    font-size: 0.9em;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    flex: 1;
  }

  .item-controls {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
    align-items: center;
  }

  .quantity {
    font-weight: bold;
    color: var(--primary-color);
  }

  .expiry {
    font-weight: 500;
    padding: 2px 6px;
    border-radius: 4px;
  }

  .expiry.expired {
    color: var(--error-color, #dc3545);
    background-color: rgba(220, 53, 69, 0.1);
  }

  .expiry.expires-today {
    color: var(--warning-color, #ff9800);
    background-color: rgba(255, 152, 0, 0.1);
    font-weight: 600;
  }

  .expiry.expiring-soon {
    color: var(--warning-color, #ff9800);
    background-color: rgba(255, 152, 0, 0.05);
  }

  .expiry.expiry-safe {
    color: var(--success-color, #4caf50);
    background-color: rgba(76, 175, 80, 0.05);
  }

  .auto-add-info {
    font-size: 0.8em;
    color: var(--success-color);
    font-weight: bold;
  }

  .category-group {
    margin-bottom: 20px;
  }

  .location-group {
    margin-bottom: 20px;
  }

  .category-header {
    font-weight: bold;
    font-size: 1.1em;
    color: var(--primary-color);
    margin-bottom: 8px;
    padding: 8px 12px;
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 6px;
    border-left: 4px solid var(--primary-color);
  }

  .location-header {
    font-weight: bold;
    font-size: 1.1em;
    color: var(--primary-color);
    margin-bottom: 8px;
    padding: 8px 12px;
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 6px;
    border-left: 4px solid var(--primary-color);
  }

  .item-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
  }

  .item-grid-card {
    margin-bottom: 0;
    min-height: 168px;
    padding: 0;
    overflow: hidden;
  }

  .item-grid-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 168px;
    padding: 16px;
    gap: 16px;
  }

  .item-grid-main {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
  }

  .item-grid-main .item-name {
    font-size: 1.4em;
    line-height: 1.2;
  }

  .item-grid-description {
    font-size: 1.05em;
    color: var(--secondary-text-color);
    word-break: break-word;
  }

  .item-grid-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 12px;
  }

  .item-grid-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    min-width: 0;
  }

  .item-grid-meta .quantity {
    font-size: 1.6em;
    line-height: 1;
  }

  .item-grid-location {
    font-weight: bold;
    color: var(--primary-color);
    font-size: 1.6em;
    line-height: 1;
  }

  .item-grid-meta .expiry,
  .item-grid-meta .location,
  .item-grid-meta .category,
  .item-grid-meta .location-category,
  .item-grid-meta .auto-add-info {
    font-size: 0.85em;
  }

  .item-grid-actions {
    position: relative;
    align-self: stretch;
    display: flex;
    align-items: flex-end;
  }

  .item-grid-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }

  .item-grid-menu-panel {
    display: none;
    gap: 8px;
  }

  .item-grid-card.menu-open .item-grid-menu-panel {
    display: flex;
  }

  .item-grid-card.menu-open .grid-menu-btn ha-icon {
    transform: rotate(180deg);
  }

  .grid-action-btn {
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
    padding: 0;
    border: 1px solid var(--divider-color, #d0d0d0);
    border-radius: 12px;
    background: var(--card-background-color, #ffffff);
    color: var(--primary-text-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);
  }

  .grid-action-btn ha-icon {
    --mdc-icon-size: 24px;
    transition: transform 0.2s ease;
  }
`;
