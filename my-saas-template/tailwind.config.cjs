// @ts-check
import { join } from 'path';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        // Path to Skeleton Svelte components
        join(require.resolve('@skeletonlabs/skeleton-svelte'), '../**/*.{html,js,svelte,ts}'),
        // Path to Skeleton core
        join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
    ],
    theme: {
        extend: {},
    },
    plugins: [
        forms,
        typography
        // Skeleton plugin is removed
    ]
};
