<script lang="ts">
    import { page } from '$app/stores';
    // The session is primarily managed by the root +layout.svelte and its onAuthStateChange.
    // $page.data.session will reflect what +layout.server.ts (root) provides initially.
    // The reactive `session` variable in the root layout is the most up-to-date client-side.
    // We expect the root layout to pass the session as a prop or for us to access it via $page.data
    // if the new dashboard/+layout.server.ts or root/+layout.server.ts makes it available.

    // Props are passed from the root +layout.svelte slot: <slot {session} />
    // So, if root layout has: <slot session={s} />, then export let session; here.
    // For now, let's assume the root layout makes it available through $page.data.session
    // after client-side auth.

    // No explicit client-side redirect here; handled by root layout's reactivity
    // or the dashboard/+layout.server.ts if session was available to it.
</script>

<div class="container mx-auto p-8">
    <h1 class="h1 mb-6">Dashboard</h1>

    {#if $page.data.session}
        <p class="mb-8 text-lg">Welcome back, <span class="font-semibold">{$page.data.session.user.email}</span>!</p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="card p-6">
                <h3 class="h5 mb-2">My Profile</h3>
                <p class="text-sm text-surface-500 mb-4">View and manage your personal information and application preferences.</p>
                <button class="btn variant-soft-surface w-full sm:w-auto" disabled>Go to Profile (soon)</button>
            </div>

            <div class="card p-6">
                <h3 class="h5 mb-2">Subscription Status</h3>
                <p class="text-sm text-surface-500 mb-4">Check your current plan, billing history, and manage your subscription.</p>
                <button class="btn variant-soft-surface w-full sm:w-auto" disabled>Manage Subscription (soon)</button>
            </div>

            <div class="card p-6">
                <h3 class="h5 mb-2">API Keys</h3>
                <p class="text-sm text-surface-500 mb-4">Manage your API keys for programmatic access to our services.</p>
                <button class="btn variant-soft-surface w-full sm:w-auto" disabled>Manage API Keys (soon)</button>
            </div>

            <div class="card p-6">
                <h3 class="h5 mb-2">Usage Analytics</h3>
                <p class="text-sm text-surface-500 mb-4">View your usage statistics and analytics for the services you use.</p>
                <button class="btn variant-soft-surface w-full sm:w-auto" disabled>View Usage (soon)</button>
            </div>
        </div>
    {:else if $page.data.session === null}
        <!-- This condition means session is explicitly null (e.g., after logout or if root server.ts returned null and client hasn't updated) -->
        <div class="card p-6 text-center">
            <h2 class="h4 mb-4">Access Denied</h2>
            <p class="mb-6">You need to be logged in to access the dashboard.</p>
            <a href="/auth/login" class="btn variant-filled-primary">Login</a>
        </div>
    {:else}
        <!-- This is the initial state where $page.data.session might be undefined -->
        <div class="card p-6 text-center">
            <p>Loading user information...</p>
            <!-- Skeleton Loader could be nice here -->
        </div>
    {/if}
</div>
