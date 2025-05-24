<script lang="ts">
    import { supabase } from '$lib/supabaseClient';
    import { goto } from '$app/navigation';
    import { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';

    let email = '';
    let password = '';
    let loading = false;
    let message = '';

    async function handleSignup() {
        loading = true;
        message = '';
        try {
            const { data, error } = await supabase.auth.signUp({ email, password });
            if (error) throw error;
            if (data.session) {
                // User is logged in immediately
                 const t: ToastSettings = { message: 'Signed up and logged in!', background: 'variant-filled-success' };
                toastStore.trigger(t);
                goto('/dashboard');
            } else if (data.user && !data.session) {
                // User exists but needs to confirm email (if email confirmation is enabled in Supabase)
                const t: ToastSettings = { message: 'Signup successful! Please check your email to confirm your account.', background: 'variant-filled-success', autohide: false };
                toastStore.trigger(t);
            }
        } catch (error: any) {
             const t: ToastSettings = { message: error.message || 'Signup failed', background: 'variant-filled-error' };
            toastStore.trigger(t);
            message = error.message;
        } finally {
            loading = false;
        }
    }
</script>

<div class="container mx-auto p-8 card">
    <h1 class="h1 mb-4">Create Account</h1>
    {#if message}<p class="text-error-500 mb-4">{message}</p>{/if}
    <form on:submit|preventDefault={handleSignup} class="space-y-4">
        <div>
            <label class="label" for="email">Email</label>
            <input class="input" type="email" id="email" bind:value={email} required />
        </div>
        <div>
            <label class="label" for="password">Password</label>
            <input class="input" type="password" id="password" bind:value={password} required />
        </div>
        <button type="submit" class="btn variant-filled-primary" disabled={loading}>
            {#if loading}Loading...{:else}Sign Up{/if}
        </button>
    </form>
    <p class="mt-4">Already have an account? <a href="/auth/login" class="anchor">Log in</a></p>
</div>
