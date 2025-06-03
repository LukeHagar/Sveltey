<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { page } from '$app/state';
	import { toaster } from '$lib';
	import { Modal, Toaster } from '@skeletonlabs/skeleton-svelte';
	import 'prism-themes/themes/prism-vsc-dark-plus.css';
	import { onMount } from 'svelte';
	import { MetaTags, deepMerge } from 'svelte-meta-tags';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

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

	// Helper function to get mobile navigation link classes
	function getMobileNavLinkClasses(path: string): string {
		const isActive = isActivePath(path);
		const baseClasses = 'btn flex items-center justify-start gap-2';

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

<Header {data} />

<!-- Main Content -->
<main class="min-h-screen p-4">
	{@render children()}
	<!-- Pass session to child pages -->
</main>

<!-- Footer -->
<footer class="bg-surface-100-850-token border-surface-200-700-token mt-20 border-t">
	<div class="container mx-auto px-6 py-12">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
			<!-- Brand Column -->
			<div class="space-y-4">
				<div class="flex items-center gap-2">
					<div class="bg-primary-500 flex h-8 w-8 items-center justify-center rounded-lg">
						<span class="text-lg font-bold text-white">S</span>
					</div>
					<span class="text-xl font-bold">Sveltey</span>
				</div>
				<p class="text-sm opacity-75">
					The complete SvelteKit & Supabase SaaS template. Launch your next project in minutes, not
					months.
				</p>
			</div>

			<!-- Product Links -->
			<div class="space-y-4">
				<h3 class="font-semibold">Product</h3>
				<div class="space-y-2 text-sm">
					<a href="/pricing" class="block opacity-75 transition-opacity hover:opacity-100"
						>Pricing</a
					>
					<a href="/blog" class="block opacity-75 transition-opacity hover:opacity-100">Blog</a>
					<a href="/dashboard" class="block opacity-75 transition-opacity hover:opacity-100"
						>Dashboard</a
					>
				</div>
			</div>

			<!-- Support Links -->
			<div class="space-y-4">
				<h3 class="font-semibold">Support</h3>
				<div class="space-y-2 text-sm">
					<a
						href="https://github.com/LukeHagar/sveltey"
						class="block opacity-75 transition-opacity hover:opacity-100"
					>
						GitHub
					</a>
					<a href="/contact" class="block opacity-75 transition-opacity hover:opacity-100">
						Contact
					</a>
					<a href="/help" class="block opacity-75 transition-opacity hover:opacity-100">
						Help Center
					</a>
				</div>
			</div>

			<!-- Legal Links -->
			<div class="space-y-4">
				<h3 class="font-semibold">Legal</h3>
				<div class="space-y-2 text-sm">
					<a href="/privacy" class="block opacity-75 transition-opacity hover:opacity-100">
						Privacy Policy
					</a>
					<a href="/terms" class="block opacity-75 transition-opacity hover:opacity-100">
						Terms of Service
					</a>
					<a href="/cookies" class="block opacity-75 transition-opacity hover:opacity-100">
						Cookie Policy
					</a>
				</div>
			</div>
		</div>

		<!-- Footer Bottom -->
		<div
			class="border-surface-300-600-token mt-8 flex flex-col items-center justify-between border-t pt-8 md:flex-row"
		>
			<p class="text-sm opacity-50">© 2025 Sveltey. All rights reserved.</p>
			<div class="mt-4 flex items-center gap-4 md:mt-0">
				<span class="text-sm opacity-50">Built with</span>
				<div class="flex items-center gap-2 text-sm opacity-75">
					<span>SvelteKit</span>
					<span>•</span>
					<span>Supabase</span>
					<span>•</span>
					<span>Skeleton UI</span>
				</div>
			</div>
		</div>
	</div>
</footer>
