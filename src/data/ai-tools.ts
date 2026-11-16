export type Pricing = 'Free' | 'Freemium' | 'Paid';
export interface AITool { name: string; category: string; description: string; features: string[]; pricing: Pricing; url: string; affiliateUrl: string }
export const categories = ['All','AI Video','AI Image','AI Audio','AI Writing','AI Coding','AI Automation','AI Productivity'] as const;
// Only well-known tools. Pricing is the widely known free/paid status, not a price.
// No invented prices, features or affiliate partnerships. Affiliate links are
// placeholders ('#') until real URLs are provided by the owner.
export const aiTools: AITool[] = [
  { name: 'ChatGPT', category: 'AI Writing', description: 'Conversational AI for writing, brainstorming and coding help.', features: ['Chat interface','Code help','Free tier available'], pricing: 'Freemium', url: 'https://chat.openai.com', affiliateUrl: '#' },
  { name: 'Claude', category: 'AI Writing', description: 'Conversational AI for long-form writing and analysis.', features: ['Long context','Document analysis','Free tier available'], pricing: 'Freemium', url: 'https://claude.ai', affiliateUrl: '#' },
  { name: 'Midjourney', category: 'AI Image', description: 'AI image generation known for artistic, cinematic styles.', features: ['Text-to-image','Style control','Community gallery'], pricing: 'Paid', url: 'https://www.midjourney.com', affiliateUrl: '#' },
  { name: 'Leonardo AI', category: 'AI Image', description: 'AI image generation with fine-tuned models and canvas editing.', features: ['Text-to-image','Image editing','Free daily credits'], pricing: 'Freemium', url: 'https://leonardo.ai', affiliateUrl: '#' },
  { name: 'Runway', category: 'AI Video', description: 'AI video generation and editing tools for creators.', features: ['Text-to-video','Video editing','Generative models'], pricing: 'Freemium', url: 'https://runwayml.com', affiliateUrl: '#' },
  { name: 'Pika', category: 'AI Video', description: 'AI video generation from text and images.', features: ['Text-to-video','Image-to-video','Free tier available'], pricing: 'Freemium', url: 'https://pika.art', affiliateUrl: '#' },
  { name: 'Suno', category: 'AI Audio', description: 'AI music generation from text prompts.', features: ['Text-to-music','Song generation','Free tier available'], pricing: 'Freemium', url: 'https://suno.com', affiliateUrl: '#' },
  { name: 'ElevenLabs', category: 'AI Audio', description: 'AI voice generation, cloning and text-to-speech.', features: ['Text-to-speech','Voice cloning','Free tier available'], pricing: 'Freemium', url: 'https://elevenlabs.io', affiliateUrl: '#' },
  { name: 'GitHub Copilot', category: 'AI Coding', description: 'AI pair programmer inside the editor.', features: ['Code completion','Chat in editor','IDE integration'], pricing: 'Paid', url: 'https://github.com/features/copilot', affiliateUrl: '#' },
  { name: 'Zapier', category: 'AI Automation', description: 'Automation connecting apps and workflows, with AI features.', features: ['App integrations','Automated workflows','Free tier available'], pricing: 'Freemium', url: 'https://zapier.com', affiliateUrl: '#' },
  { name: 'Notion AI', category: 'AI Productivity', description: 'AI writing and organisation inside Notion workspaces.', features: ['Writing help','Summaries','Workspace search'], pricing: 'Paid', url: 'https://www.notion.so/product/ai', affiliateUrl: '#' },
  { name: 'Canva', category: 'AI Productivity', description: 'Design platform with AI image and text tools.', features: ['Templates','Magic Studio AI','Free tier available'], pricing: 'Freemium', url: 'https://www.canva.com', affiliateUrl: '#' },
  { name: 'CapCut', category: 'AI Video', description: 'Video editor with AI captions, effects and templates.', features: ['Auto captions','Templates','Free tier available'], pricing: 'Freemium', url: 'https://www.capcut.com', affiliateUrl: '#' },
  { name: 'Grammarly', category: 'AI Writing', description: 'Writing assistant for grammar, tone and clarity.', features: ['Grammar checks','Tone suggestions','Free tier available'], pricing: 'Freemium', url: 'https://www.grammarly.com', affiliateUrl: '#' },
];
