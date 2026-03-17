import packageJson from '../../package.json';

import { SimpleInventoryCard } from './simpleInventoryCard';
import { InventoryConfig } from '../types/homeAssistant';

const minimalGridCardDescription = 'A minimalist grid card to manage your inventories';

class MinimalInventoryGridCard extends SimpleInventoryCard {
  setConfig(config: InventoryConfig): void {
    const nextConfig: InventoryConfig = {
      ...config,
      grid: true,
      minimal: true,
      type: config.type || 'custom:simple-inventory-card-custom-minimal-grid',
    };

    super.setConfig(nextConfig);
  }

  static getStubConfig(): InventoryConfig | object {
    return {
      type: 'custom:simple-inventory-card-custom-minimal-grid',
      grid: true,
      minimal: true,
    };
  }
}

export { MinimalInventoryGridCard };

if (!customElements.get('simple-inventory-card-custom-minimal-grid')) {
  customElements.define('simple-inventory-card-custom-minimal-grid', MinimalInventoryGridCard);
}

window.customCards = window.customCards || [];
const minimalGridCardConfig = {
  type: 'simple-inventory-card-custom-minimal-grid',
  name: 'Simple Inventory Card Minimal Grid',
  description: minimalGridCardDescription,
  preview: true,
  documentationURL: 'https://github.com/blaineventurine/simple-inventory-card-custom',
};

const existingMinimalGridCard = window.customCards.find(
  (card) => card.type === 'simple-inventory-card-custom-minimal-grid',
);
if (!existingMinimalGridCard) {
  window.customCards.push(minimalGridCardConfig);
}

globalThis.setTimeout(() => {
  const event = new Event('custom_card_update', {
    bubbles: true,
    cancelable: false,
  });
  document.dispatchEvent(event);
}, 2000);

console.info(
  `%c Simple Inventory Card Minimal Grid %c ${packageJson.version}`,
  'color: steelblue; background: black; font-weight: bold;',
);
