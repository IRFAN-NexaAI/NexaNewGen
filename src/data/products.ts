export interface Product { name: string; description: string; specs: string[]; price: string | null; affiliateUrl: string; imageAlt: string }
// Placeholder affiliate links only. No fake URLs, no fake prices (price: null = not verified).
export const products = [
  { name: 'Creator Starter Microphone (placeholder)', description: 'Example product card. Replace with a real verified product and affiliate URL.', specs: ['USB connection','Cardioid pattern'], price: null, affiliateUrl: '#', imageAlt: 'Placeholder image for creator microphone' },
  { name: 'Ring Light for Creators (placeholder)', description: 'Example product card. Replace with a real verified product and affiliate URL.', specs: ['Adjustable brightness','Tripod included'], price: null, affiliateUrl: '#', imageAlt: 'Placeholder image for ring light' },
  { name: 'Wireless Earbuds (placeholder)', description: 'Example product card. Replace with a real verified product and affiliate URL.', specs: ['Bluetooth','Charging case'], price: null, affiliateUrl: '#', imageAlt: 'Placeholder image for wireless earbuds' },
];
