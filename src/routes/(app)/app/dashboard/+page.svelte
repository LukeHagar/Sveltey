<script lang="ts">
	import {
		User,
		Settings,
		CreditCard,
		Key,
		BarChart,
		Shield,
		Star,
		Users,
		Zap
	} from 'lucide-svelte';

	// The session is managed by the root layout and available through page.data
	const { data } = $props();

	const session = $derived(data.session);
	const user = $derived(session?.user);

	// Mock dashboard data - in a real app, this would come from your backend
	const dashboardStats = [
		{ label: 'Projects', value: '3', icon: BarChart, color: 'text-primary-500' },
		{ label: 'API Calls', value: '12.4k', icon: Zap, color: 'text-success-500' },
		{ label: 'Users', value: '24', icon: Users, color: 'text-warning-500' },
		{ label: 'Uptime', value: '99.9%', icon: Shield, color: 'text-error-500' }
	];

	const quickActions = [
		{
			title: 'My Profile',
			description: 'View and manage your personal information and application preferences.',
			icon: User,
			action: 'Go to Profile',
			href: '/app/dashboard/profile',
			available: false
		},
		{
			title: 'Subscription',
			description: 'Check your current plan, billing history, and manage your subscription.',
			icon: CreditCard,
			action: 'Manage Subscription',
			href: '/dashboard/billing',
			available: false
		},
		{
			title: 'API Keys',
			description: 'Manage your API keys for programmatic access to our services.',
			icon: Key,
			action: 'Manage Keys',
			href: '/dashboard/api-keys',
			available: false
		},
		{
			title: 'Usage Analytics',
			description: 'View detailed usage statistics and analytics for your account.',
			icon: BarChart,
			action: 'View Analytics',
			href: '/dashboard/analytics',
			available: false
		},
		{
			title: 'Settings',
			description: 'Configure your account settings, notifications, and preferences.',
			icon: Settings,
			action: 'Open Settings',
			href: '/dashboard/settings',
			available: false
		}
	];
</script>

<svelte:head>
	<title>Dashboard - Welcome Back</title>
	<meta
		name="description"
		content="Manage your account, view analytics, and access all your SaaS features from your personalized dashboard."
	/>
</svelte:head>

<div class="container mx-auto space-y-20 py-20">
	{#if session}
		<!-- Welcome Header -->
		<header class="mx-auto max-w-3xl space-y-4 text-center">
			<h1 class="h1">
				Welcome back, <span class="text-primary-500">{user?.user_metadata.full_name || 'User'}</span>!
			</h1>
			<p class="text-xl opacity-75">
				Manage your account, monitor usage, and access all your SaaS features from your personalized
				dashboard.
			</p>
		</header>

		<div class="flex justify-center">
			<hr class="hr border-surface-500 max-w-64" />
		</div>

		<!-- Stats Overview -->
		<section class="space-y-8">
			<h2 class="h2 text-center">Account Overview</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each dashboardStats as stat}
					<div
						class="card preset-outlined-surface-500 space-y-4 p-6 text-center transition-all duration-300 hover:scale-105"
						role="article"
						aria-label="{stat.label}: {stat.value}"
					>
						<stat.icon class={`mx-auto size-8 ${stat.color}`} aria-hidden="true" />
						<div class="space-y-1">
							<div class="text-3xl font-bold">{stat.value}</div>
							<p class="text-sm opacity-75">{stat.label}</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<div class="flex justify-center">
			<hr class="hr border-surface-500 max-w-64" />
		</div>

		<!-- Quick Actions -->
		<section class="space-y-8">
			<h2 class="h2 text-center">Quick Actions</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each quickActions as action}
					<div
						class="card preset-outlined-surface-500 group space-y-4 p-6 transition-all duration-300 hover:scale-105 md:p-8"
					>
						<action.icon
							class="text-primary-500 size-10 transition-transform group-hover:scale-110"
							aria-hidden="true"
						/>
						<h3 class="h4 group-hover:text-primary-500 transition-colors">{action.title}</h3>
						<p class="text-sm opacity-75">{action.description}</p>

						{#if action.available}
							<a 
								href={action.href} 
								class="btn preset-filled-primary-500 w-full"
								aria-label="{action.action} - {action.title}"
							>
								{action.action}
							</a>
						{:else}
							<button 
								class="btn preset-outlined-surface-500 w-full opacity-50" 
								disabled
								aria-label="{action.action} - {action.title} (Coming Soon)"
								title="This feature is coming soon"
							>
								{action.action} (Coming Soon)
							</button>
						{/if}
					</div>
				{/each}
			</div>
		</section>

		<div class="flex justify-center">
			<hr class="hr border-surface-500 max-w-64" />
		</div>

		<!-- Account Status & Upgrade -->
		<section class="space-y-8">
			<div class="card preset-outlined-primary-500 space-y-6 p-8 text-center">
				<div class="flex items-center justify-center gap-2">
					<Star class="text-primary-500 size-8" aria-hidden="true" />
					<h3 class="h3 text-primary-500">Current Plan: Starter</h3>
				</div>
				<p class="mx-auto max-w-2xl opacity-75">
					You're currently on our free Starter plan. Upgrade to unlock advanced features, higher
					limits, and priority support.
				</p>
				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<a 
						href="/pricing" 
						class="btn preset-filled-primary-500"
						aria-label="Upgrade your plan to unlock premium features"
					>
						<Star class="size-5" aria-hidden="true" />
						<span>Upgrade Plan</span>
					</a>
					<button 
						class="btn preset-outlined-surface-500" 
						disabled
						aria-label="View usage statistics (Coming Soon)"
						title="Usage statistics feature is coming soon"
					>
						<BarChart class="size-5" aria-hidden="true" />
						<span>View Usage</span>
					</button>
				</div>
			</div>
		</section>

		<!-- Recent Activity (Placeholder) -->
		<section class="space-y-8">
			<h2 class="h2 text-center">Recent Activity</h2>
			<div class="card preset-outlined-surface-500 space-y-4 p-8 text-center">
				<BarChart class="text-primary-500 mx-auto size-16 opacity-50" aria-hidden="true" />
				<h3 class="h4">No recent activity</h3>
				<p class="opacity-75">
					Start using our services to see your activity here. Create your first project or make an
					API call to get started.
				</p>
				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<button 
						class="btn preset-filled-primary-500" 
						disabled
						aria-label="Create new project (Coming Soon)"
						title="Project creation feature is coming soon"
					>
						Create Project (Coming Soon)
					</button>
					<button 
						class="btn preset-outlined-surface-500" 
						disabled
						aria-label="View documentation (Coming Soon)"
						title="Documentation feature is coming soon"
					>
						View Documentation (Coming Soon)
					</button>
				</div>
			</div>
		</section>
	{:else if session === null}
		<!-- Access Denied -->
		<div class="card preset-outlined-error-500 mx-auto max-w-2xl space-y-6 p-8 text-center md:p-12">
			<Shield class="text-error-500 mx-auto size-16" aria-hidden="true" />
			<h2 class="h3">Access Denied</h2>
			<p class="opacity-75">
				You need to be logged in to access your dashboard. Please sign in to continue.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a 
					href="/auth/login" 
					class="btn preset-filled-primary-500"
					aria-label="Sign in to access your dashboard"
				>
					<User class="size-5" aria-hidden="true" />
					<span>Sign In</span>
				</a>
				<a 
					href="/auth/signup" 
					class="btn preset-outlined-surface-500"
					aria-label="Create new account to get started"
				>
					<span>Create Account</span>
				</a>
			</div>
		</div>
	{:else}
		<!-- Loading State -->
		<div
			class="card preset-outlined-surface-500 mx-auto max-w-2xl space-y-4 p-8 text-center md:p-12"
			role="status"
			aria-live="polite"
		>
			<div 
				class="border-primary-500 mx-auto h-12 w-12 animate-spin rounded-full border-b-2"
				aria-label="Loading dashboard"
			></div>
			<h3 class="h4">Loading your dashboard...</h3>
			<p class="opacity-75">Please wait while we prepare your personalized experience.</p>
		</div>
	{/if}
</div>
