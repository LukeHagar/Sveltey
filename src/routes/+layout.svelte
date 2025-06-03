<script lang="ts">
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { Modal, Toaster } from '@skeletonlabs/skeleton-svelte';
	import { MetaTags, deepMerge } from 'svelte-meta-tags';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { toaster } from '$lib';

	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	
	import 'prism-themes/themes/prism-vsc-dark-plus.css';
	import '../app.css';

	try {
		injectSpeedInsights();
	} catch (error) {
		console.error(error);
	}

	let { data, children } = $props();
	let { session, supabase } = $derived(data);

	// Merge base meta tags with page-specific meta tags
	let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags || {}));

	// Helper function to check if a path is active
	function isActivePath(path: string): boolean {
		if (path === '/') {
			return page.url.pathname === '/';
		}
		return page.url.pathname.startsWith(path);
	}

	// Helper function to get navigation link classes
	function getNavLinkClasses(path: string): string {
		const isActive = isActivePath(path);
		const baseClasses = 'btn flex items-center gap-2';

		if (isActive) {
			return `${baseClasses} preset-filled-primary-500 text-on-primary-500 cursor-default`;
		}
		return `${baseClasses} preset-ghost-surface-200-800`;
	}


	onMount(() => {
		// Sync client-side session with server-side on mount
		const { data } = supabase.auth.onAuthStateChange((event, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<!-- Meta Tags -->
<MetaTags {...metaTags} />

<!-- Skeleton Toasts and Modals -->
<Toaster {toaster}></Toaster>
<Modal />

<!-- Header -->
<Header {data} />

<!-- Main Content -->
<main class="min-h-screen p-4">
	{@render children()}
</main>

<!-- Footer -->
<Footer />
