import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Pricing',
    description: 'Choose the perfect plan for your SaaS project. Flexible pricing options designed to grow with your business, from startups to enterprise.',
    openGraph: {
      title: 'Pricing Plans - Sveltey SaaS Template',
      description: 'Choose the perfect plan for your SaaS project. Flexible pricing options designed to grow with your business.'
    }
  }) satisfies MetaTagsProps;

  return {
    pageMetaTags
  };
}; 