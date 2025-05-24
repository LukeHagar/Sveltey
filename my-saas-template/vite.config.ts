import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills'; // Import the plugin

export default defineConfig({
	plugins: [
		sveltekit(),
		nodePolyfills({
			// Options (if any) go here, e.g., to include specific polyfills
			protocolImports: true, // Recommended for Supabase
		})
	]
});
