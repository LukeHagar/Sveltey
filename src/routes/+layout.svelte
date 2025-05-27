<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { toaster } from '$lib';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import { Avatar, Modal, Toaster } from '@skeletonlabs/skeleton-svelte';
	import { BookOpen, DollarSign, Home, LayoutDashboard, LogOut, User } from 'lucide-svelte';
	import 'prism-themes/themes/prism-vsc-dark-plus.css';
	import { onMount } from 'svelte';
	import '../app.css';

	let { data, children } = $props();
	let { session, supabase } = $derived(data);

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
					<span class="text-xl font-bold">Sassy</span>
				</a>

				<!-- Main Navigation -->
				<div class="hidden items-center space-x-1 md:flex">
					<a href="/" class="btn preset-ghost-surface-200-800 flex items-center gap-2">
						<Home class="size-4" />
						<span>Home</span>
					</a>
					<a href="/pricing" class="btn preset-ghost-surface-200-800 flex items-center gap-2">
						<DollarSign class="size-4" />
						<span>Pricing</span>
					</a>
					<a href="/blog" class="btn preset-ghost-surface-200-800 flex items-center gap-2">
						<BookOpen class="size-4" />
						<span>Blog</span>
					</a>
					{#if session}
						<a href="/dashboard" class="btn preset-ghost-surface-200-800 flex items-center gap-2">
							<LayoutDashboard class="size-4" />
							<span>Dashboard</span>
						</a>
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
						<a href="/auth" class="btn preset-outlined-surface-500 h-8 flex items-center gap-2">
							<User class="size-4" />
							<span>Sign In</span>
						</a>
						<a href="/auth?mode=signup" class="btn preset-filled-primary-500 flex items-center gap-2">
							<span>Get Started</span>
						</a>
					</div>
				{/if}
			</div>
		</div>

		<!-- Mobile Navigation Menu (Hidden by default, would need JS to toggle) -->
		<div class="border-surface-300-600-token mt-4 border-t pt-4 md:hidden">
			<div class="flex flex-col space-y-2">
				<a href="/" class="btn preset-ghost-surface-200-800 flex items-center justify-start gap-2">
					<Home class="size-4" />
					<span>Home</span>
				</a>
				<a
					href="/pricing"
					class="btn preset-ghost-surface-200-800 flex items-center justify-start gap-2"
				>
					<DollarSign class="size-4" />
					<span>Pricing</span>
				</a>
				<a
					href="/blog"
					class="btn preset-ghost-surface-200-800 flex items-center justify-start gap-2"
				>
					<BookOpen class="size-4" />
					<span>Blog</span>
				</a>
				{#if session}
					<a
						href="/dashboard"
						class="btn preset-ghost-surface-200-800 flex items-center justify-start gap-2"
					>
						<LayoutDashboard class="size-4" />
						<span>Dashboard</span>
					</a>
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
					<span class="text-xl font-bold">Sassy</span>
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
					<a href="/docs" class="block opacity-75 transition-opacity hover:opacity-100"
						>Documentation</a
					>
					<a href="/contact" class="block opacity-75 transition-opacity hover:opacity-100"
						>Contact</a
					>
					<a href="/help" class="block opacity-75 transition-opacity hover:opacity-100"
						>Help Center</a
					>
				</div>
			</div>

			<!-- Legal Links -->
			<div class="space-y-4">
				<h3 class="font-semibold">Legal</h3>
				<div class="space-y-2 text-sm">
					<a href="/privacy" class="block opacity-75 transition-opacity hover:opacity-100"
						>Privacy Policy</a
					>
					<a href="/terms" class="block opacity-75 transition-opacity hover:opacity-100"
						>Terms of Service</a
					>
					<a href="/cookies" class="block opacity-75 transition-opacity hover:opacity-100"
						>Cookie Policy</a
					>
				</div>
			</div>
		</div>

		<!-- Footer Bottom -->
		<div
			class="border-surface-300-600-token mt-8 flex flex-col items-center justify-between border-t pt-8 md:flex-row"
		>
			<p class="text-sm opacity-50">© 2025 Sassy. All rights reserved.</p>
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
