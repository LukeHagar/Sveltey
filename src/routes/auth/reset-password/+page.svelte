<script lang="ts">
    import { supabase } from '$lib/supabaseClient';
    import { toaster } from '$lib';
    import { Mail, Send, ArrowLeft, KeyRound, AlertTriangle } from '@lucide/svelte';

    let email = $state('');
    let loading = $state(false);
    let sent = $state(false);

    async function handleReset(e: Event) {
        e.preventDefault();
        
        // Disable password reset for demo
        toaster.create({
            type: 'warning',
            title: 'Demo Mode',
            description: 'Password reset is disabled in this demo. Please use GitHub login instead.'
        });
        return;
        
        // Original code commented out for demo
        /*
        loading = true;
        
        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/auth/update-password`
            });
            
            if (error) throw error;
            
            sent = true;
            toaster.create({
                type: 'info',
                title: 'Reset email sent!',
                description: 'Check your email for password reset instructions.'
            });
        } catch (error: any) {
            toaster.create({
                type: 'error',
                title: 'Reset failed',
                description: error.message
            });
        } finally {
            loading = false;
        }
        */
    }
</script>

<svelte:head>
    <title>Reset Password - Sassy</title>
    <meta name="description" content="Reset your password to regain access to your account." />
</svelte:head>

<div class="container mx-auto py-20">
    <div class="max-w-md mx-auto space-y-8">
        <!-- Demo Notice -->
        <div class="card preset-outlined-warning-500 p-4">
            <div class="flex items-start gap-3">
                <AlertTriangle class="size-5 text-warning-500 flex-shrink-0 mt-0.5" />
                <div class="space-y-2">
                    <h3 class="font-semibold text-warning-700 dark:text-warning-300">Demo Mode</h3>
                    <p class="text-sm text-warning-600 dark:text-warning-400">
                        Password reset is disabled in this demo. Only <strong>GitHub login</strong> is available.
                    </p>
                </div>
            </div>
        </div>

        <!-- Header -->
        <header class="text-center space-y-4">
            <div class="flex items-center justify-center gap-2 mb-4">
                <KeyRound class="size-8 text-primary-500" />
                <h1 class="h1">Reset <span class="text-primary-500">Password</span></h1>
            </div>
            <p class="text-lg opacity-75">
                Enter your email address and we'll send you a link to reset your password.
            </p>
        </header>

        <!-- Reset Form Card -->
        <div class="card preset-outlined-primary-500 p-8 space-y-6">
            {#if !sent}
                <form onsubmit={handleReset} class="space-y-6">
                    <div class="space-y-2 opacity-50">
                        <label class="label font-medium" for="email">
                            <Mail class="size-4 inline mr-2" />
                            Email Address
                        </label>
                        <input 
                            class="input preset-outlined-surface-200-800" 
                            type="email" 
                            id="email" 
                            bind:value={email} 
                            placeholder="Enter your email address (disabled in demo)"
                            disabled={true}
                            autocomplete="email"
                        />
                        <p class="text-xs opacity-75">
                            We'll send password reset instructions to this email address.
                        </p>
                    </div>

                    <button 
                        type="submit" 
                        class="btn preset-outlined-surface-200-800 w-full flex items-center justify-center gap-2 opacity-50 cursor-not-allowed" 
                        disabled={true}
                    >
                        <Send class="size-4" />
                        Send Reset Email (Demo Disabled)
                    </button>
                </form>
            {:else}
                <!-- Success State -->
                <div class="text-center space-y-4">
                    <div class="w-16 h-16 bg-success-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail class="size-8 text-white" />
                    </div>
                    <h2 class="h3">Check your email</h2>
                    <p class="opacity-75">
                        We've sent password reset instructions to <strong>{email}</strong>
                    </p>
                    <p class="text-sm opacity-50">
                        Didn't receive the email? Check your spam folder or try again.
                    </p>
                    <button 
                        type="button"
                        class="btn preset-outlined-surface-200-800 w-full"
                        onclick={() => { sent = false; email = ''; }}
                    >
                        Try Different Email
                    </button>
                </div>
            {/if}
        </div>

        <!-- Back to Login -->
        <div class="text-center">
            <a href="/auth" class="btn preset-ghost-surface-200-800 flex items-center justify-center gap-2">
                <ArrowLeft class="size-4" />
                Back to Sign In
            </a>
        </div>

        <!-- Help Section -->
        <div class="text-center space-y-4">
            <div class="flex items-center justify-center gap-4 text-sm opacity-50">
                <a href="/contact" class="hover:opacity-75 transition-opacity">Need Help?</a>
                <span>•</span>
                <a href="/privacy" class="hover:opacity-75 transition-opacity">Privacy Policy</a>
            </div>
        </div>
    </div>
</div> 