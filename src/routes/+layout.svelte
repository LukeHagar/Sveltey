<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { page } from '$app/state';
	import { toaster } from '$lib';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import { Avatar, Modal, Toaster } from '@skeletonlabs/skeleton-svelte';
	import { BookOpen, DollarSign, Home, LayoutDashboard, LogOut, User } from '@lucide/svelte';
	import 'prism-themes/themes/prism-vsc-dark-plus.css';
	import { onMount } from 'svelte';
	import { MetaTags, deepMerge } from 'svelte-meta-tags';
	import '../app.css';

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

<!-- Navigation Header -->
<header class="bg-surface-50-950-token border-surface-200-700-token border-b">
	<nav class="container mx-auto px-6 py-4">
		<div class="flex items-center justify-between">
			<!-- Left side - Brand and Main navigation -->
			<div class="flex items-center space-x-8">
				<!-- Brand -->
				<a href="/" class="flex items-center gap-2 transition-opacity hover:opacity-75">
					<div class="bg-primary-500 flex h-8 w-8 items-center justify-center rounded-lg">
						<span class="text-lg font-bold text-white">S</span>
					</div>
					<span class="text-xl font-bold">Sveltey</span>
				</a>

				<!-- Main Navigation -->
				<div class="hidden items-center space-x-1 md:flex">
					{#if isActivePath('/')}
						<span class={getNavLinkClasses('/')} aria-current="page">
							<Home class="size-4" />
							<span>Home</span>
						</span>
					{:else}
						<a href="/" class={getNavLinkClasses('/')}>
							<Home class="size-4" />
							<span>Home</span>
						</a>
					{/if}

					{#if isActivePath('/pricing')}
						<span class={getNavLinkClasses('/pricing')} aria-current="page">
							<DollarSign class="size-4" />
							<span>Pricing</span>
						</span>
					{:else}
						<a href="/pricing" class={getNavLinkClasses('/pricing')}>
							<DollarSign class="size-4" />
							<span>Pricing</span>
						</a>
					{/if}

					{#if isActivePath('/blog')}
						<span class={getNavLinkClasses('/blog')} aria-current="page">
							<BookOpen class="size-4" />
							<span>Blog</span>
						</span>
					{:else}
						<a href="/blog" class={getNavLinkClasses('/blog')}>
							<BookOpen class="size-4" />
							<span>Blog</span>
						</a>
					{/if}

					{#if session}
						{#if isActivePath('/app/dashboard')}
							<span class={getNavLinkClasses('/app/dashboard')} aria-current="page">
								<LayoutDashboard class="size-4" />
								<span>Dashboard</span>
							</span>
						{:else}
							<a href="/app/dashboard" class={getNavLinkClasses('/app/dashboard')}>
								<LayoutDashboard class="size-4" />
								<span>Dashboard</span>
							</a>
						{/if}
					{/if}
				</div>
			</div>

			<!-- Right side - User actions and theme switcher -->
			<div class="flex items-center space-x-3">
				<ThemeSwitch />

				{#if session}
					<!-- User Profile Section -->
					<div class="border-surface-300-600-token flex items-center gap-3 border-l pl-3">
						<Avatar
							size="size-8"
							src={session.user.user_metadata.avatar_url}
							name={session.user.user_metadata.full_name || session.user.email}
						/>
						<div class="hidden md:block">
							<p class="text-sm font-medium">
								{session.user.user_metadata.full_name || session.user.email?.split('@')[0]}
							</p>
							<p class="text-xs opacity-75">{session.user.email}</p>
						</div>
						<form action="/auth/logout" method="POST" style="display: inline;">
							<button
								type="submit"
								class="btn preset-outlined-surface-200-800 btn-sm flex items-center gap-2"
								title="Sign Out"
							>
								<LogOut class="size-4" />
								<span class="hidden sm:inline">Sign Out</span>
							</button>
						</form>
					</div>
				{:else}
					<!-- Authentication Buttons -->
					<div class="flex items-center gap-2">
						{#if isActivePath('/auth')}
							<span
								class="btn preset-filled-primary-500 flex h-8 cursor-default items-center gap-2"
								aria-current="page"
							>
								<User class="size-4" />
								<span>Sign In</span>
							</span>
						{:else}
							<a href="/auth" class="btn preset-outlined-surface-500 flex h-8 items-center gap-2">
								<User class="size-4" />
								<span>Sign In</span>
							</a>
						{/if}
						<a
							href="/auth?mode=signup"
							class="btn preset-filled-primary-500 flex items-center gap-2"
						>
							<span>Get Started</span>
						</a>
					</div>
				{/if}
			</div>
		</div>

		<!-- Mobile Navigation Menu (Hidden by default, would need JS to toggle) -->
		<div class="border-surface-300-600-token mt-4 border-t pt-4 md:hidden">
			<div class="flex flex-col space-y-2">
				{#if isActivePath('/')}
					<span class={getMobileNavLinkClasses('/')} aria-current="page">
						<Home class="size-4" />
						<span>Home</span>
					</span>
				{:else}
					<a href="/" class={getMobileNavLinkClasses('/')}>
						<Home class="size-4" />
						<span>Home</span>
					</a>
				{/if}

				{#if isActivePath('/pricing')}
					<span class={getMobileNavLinkClasses('/pricing')} aria-current="page">
						<DollarSign class="size-4" />
						<span>Pricing</span>
					</span>
				{:else}
					<a href="/pricing" class={getMobileNavLinkClasses('/pricing')}>
						<DollarSign class="size-4" />
						<span>Pricing</span>
					</a>
				{/if}

				{#if isActivePath('/blog')}
					<span class={getMobileNavLinkClasses('/blog')} aria-current="page">
						<BookOpen class="size-4" />
						<span>Blog</span>
					</span>
				{:else}
					<a href="/blog" class={getMobileNavLinkClasses('/blog')}>
						<BookOpen class="size-4" />
						<span>Blog</span>
					</a>
				{/if}

				{#if session}
					{#if isActivePath('/app/dashboard')}
						<span class={getMobileNavLinkClasses('/app/dashboard')} aria-current="page">
							<LayoutDashboard class="size-4" />
							<span>Dashboard</span>
						</span>
					{:else}
						<a href="/app/dashboard" class={getMobileNavLinkClasses('/app/dashboard')}>
							<LayoutDashboard class="size-4" />
							<span>Dashboard</span>
						</a>
					{/if}
				{/if}
			</div>
		</div>
	</nav>
</header>

<!-- Main Content -->
<main class="min-h-screen">
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
