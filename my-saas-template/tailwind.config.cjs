// @ts-check
import { join } from 'path';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
// @ts-ignore
import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
    ],
    theme: {
        extend: {},
    },
    plugins: [
        forms,
        typography,
        skeleton({
            themes: {
                preset: [
                    { name: 'skeleton', enhancements: true },
                    { name: 'modern', enhancements: true },
                    { name: 'crimson', enhancements: true },
                ]
            }
        })
    ]
};
