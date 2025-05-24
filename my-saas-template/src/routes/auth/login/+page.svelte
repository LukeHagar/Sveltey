<script lang="ts">
    import { supabase } from '$lib/supabaseClient';
    import { goto } from '$app/navigation';
    import { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';

    let email = '';
    let password = '';
    let loading = false;
    let message = '';

    async function handleLogin() {
        loading = true;
        message = '';
        try {
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) throw error;
            // Toast for success will be handled by onAuthStateChange + SvelteToast via flash message if we redirect
            // For now, direct navigation and a local toast
            const t: ToastSettings = { message: 'Logged in successfully!', background: 'variant-filled-success' };
            toastStore.trigger(t);
            goto('/dashboard'); // Or wherever you want to redirect after login
        } catch (error: any) {
            const t: ToastSettings = { message: error.message || 'Login failed', background: 'variant-filled-error' };
            toastStore.trigger(t);
            message = error.message;
        } finally {
            loading = false;
        }
    }
</script>

<div class="container mx-auto p-8 card">
    <h1 class="h1 mb-4">Login</h1>
    {#if message}<p class="text-error-500 mb-4">{message}</p>{/if}
    <form on:submit|preventDefault={handleLogin} class="space-y-4">
        <div>
            <label class="label" for="email">Email</label>
            <input class="input" type="email" id="email" bind:value={email} required />
        </div>
        <div>
            <label class="label" for="password">Password</label>
            <input class="input" type="password" id="password" bind:value={password} required />
        </div>
        <button type="submit" class="btn variant-filled-primary" disabled={loading}>
            {#if loading}Loading...{:else}Login{/if}
        </button>
    </form>
    <p class="mt-4">Don't have an account? <a href="/auth/signup" class="anchor">Sign up</a></p>
</div>
