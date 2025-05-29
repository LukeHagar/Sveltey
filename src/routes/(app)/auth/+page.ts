import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Sign In',
    description: 'Sign in to your account or create a new one to access your dashboard and start building with Sveltey.',
    robots: 'noindex,nofollow', // Don't index auth pages
    openGraph: {
      title: 'Sign In - Sveltey',
      description: 'Sign in to your account or create a new one to access your dashboard.'
    }
  }) satisfies MetaTagsProps;

  return {
    pageMetaTags
  };
}; 