<script lang="ts">
    import { supabase } from '$lib/supabase-client.js';
    import { toaster } from '$lib';
    import { Mail, Lock, LogIn, Github, Chrome, MessageCircle, Twitter, Eye, EyeOff, AlertTriangle } from '@lucide/svelte';
    import { onMount } from 'svelte';

    let { data } = $props();

    const session = $derived(data.session);

    let showPassword = $state(false);
    let authError = $state('');

    onMount(() => {
        // Check URL parameters to handle errors
        const urlParams = new URLSearchParams(window.location.search);
        const hashParams = new URLSearchParams(window.location.hash.substring(1));

        // Check for Supabase auth errors in URL params or hash
        const error = urlParams.get('error') || hashParams.get('error');
        const errorCode = urlParams.get('error_code') || hashParams.get('error_code');
        const errorDescription = urlParams.get('error_description') || hashParams.get('error_description');

        if (error) {
            let errorMessage = 'Authentication failed';
            
            // Map common Supabase error codes to user-friendly messages
            switch (errorCode) {
                case 'unexpected_failure':
                    if (errorDescription?.includes('user profile from external provider')) {
                        errorMessage = 'Unable to retrieve your profile from the OAuth provider. This may be due to privacy settings or a temporary issue. Please try again.';
                    } else {
                        errorMessage = 'An unexpected error occurred during authentication. Please try again.';
                    }
                    break;
                case 'oauth_callback_error':
                    errorMessage = 'OAuth authentication was cancelled or failed. Please try again.';
                    break;
                case 'access_denied':
                    errorMessage = 'Access was denied by the OAuth provider. Please try again and ensure you grant the necessary permissions.';
                    break;
                case 'server_error':
                    errorMessage = 'A server error occurred during authentication. Please try again in a moment.';
                    break;
                default:
                    // Use the error description if available, otherwise use generic message
                    if (errorDescription) {
                        errorMessage = decodeURIComponent(errorDescription.replace(/\+/g, ' '));
                    }
                    break;
            }

            authError = errorMessage;
            
            // Show toast notification for the error
            toaster.create({
                type: 'error',
                title: 'Authentication Error',
                description: errorMessage
            });

            // Clean up the URL by removing error parameters
            const cleanUrl = new URL(window.location.href);
            cleanUrl.searchParams.delete('error');
            cleanUrl.searchParams.delete('error_code');
            cleanUrl.searchParams.delete('error_description');
            cleanUrl.hash = '';
            
            // Use replaceState to avoid adding to browser history
            window.history.replaceState({}, '', cleanUrl.toString());
        }
    });
    
    let formData = $state({
        email: '',
        password: ''
    });
    
    let loading = $state(false);
    let oauthLoading = $state('');
    let message = $state('');

    // OAuth providers configuration - only GitHub enabled for demo
    const oauthProviders = [
        { 
            name: 'GitHub', 
            provider: 'github', 
            icon: Github, 
            color: 'bg-[#333] hover:bg-[#555] text-white',
            description: 'Continue with GitHub',
            enabled: true
        },
        { 
            name: 'Google', 
            provider: 'google', 
            icon: Chrome, 
            color: 'bg-gray-300 text-gray-500 cursor-not-allowed',
            description: 'Continue with Google (Demo Disabled)',
            enabled: false
        },
        { 
            name: 'Discord', 
            provider: 'discord', 
            icon: MessageCircle, 
            color: 'bg-gray-300 text-gray-500 cursor-not-allowed',
            description: 'Continue with Discord (Demo Disabled)',
            enabled: false
        },
        { 
            name: 'Twitter', 
            provider: 'twitter', 
            icon: Twitter, 
            color: 'bg-gray-300 text-gray-500 cursor-not-allowed',
            description: 'Continue with Twitter (Demo Disabled)',
            enabled: false
        }
    ];

    async function handleSubmit(e: Event) {
        e.preventDefault();
        
        // Disable email/password authentication for demo
        toaster.create({
            type: 'warning',
            title: 'Demo Mode',
            description: 'Email/password authentication is disabled in this demo. Please use GitHub login instead.'
        });
        return;
    }

    async function handleOAuth(provider: string) {
        // Only allow GitHub for demo
        if (provider !== 'github') {
            toaster.create({
                type: 'warning',
                title: 'Demo Mode',
                description: `${provider.charAt(0).toUpperCase() + provider.slice(1)} login is disabled in this demo. Only GitHub login is available.`
            });
            return;
        }

        // Clear any previous auth errors
        authError = '';
        message = '';

        oauthLoading = provider;
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: provider as any,
                options: {
                    redirectTo: `${window.location.origin}/auth/login`
                }
            });
            if (error) throw error;
        } catch (error: any) {
            toaster.create({
                type: 'error',
                title: `${provider} authentication failed`,
                description: error.message
            });
            authError = error.message;
        } finally {
            oauthLoading = '';
        }
    }

    function dismissAuthError() {
        authError = '';
    }
</script>

<svelte:head>
    <title>Sign In - Sveltey</title>
    <meta name="description" content="Sign in to your account to access your dashboard and manage your projects." />
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
                        This is a demo deployment. Only <strong>GitHub login</strong> is enabled. 
                        Email/password authentication and other OAuth providers are disabled for demonstration purposes.
                    </p>
                </div>
            </div>
        </div>

        <!-- Auth Error Display -->
        {#if authError}
            <div class="card preset-outlined-error-500 p-4">
                <div class="flex items-start gap-3">
                    <AlertTriangle class="size-5 text-error-500 flex-shrink-0 mt-0.5" />
                    <div class="flex-1 space-y-2">
                        <h3 class="font-semibold text-error-700 dark:text-error-300">Authentication Failed</h3>
                        <p class="text-sm text-error-600 dark:text-error-400">{authError}</p>
                        <button 
                            type="button"
                            class="text-xs text-error-500 hover:text-error-600 underline"
                            onclick={dismissAuthError}
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            </div>
        {/if}

        <!-- Header -->
        <header class="text-center space-y-4">
            <div class="flex items-center justify-center gap-2 mb-4">
                <LogIn class="size-8 text-primary-500" />
                <h1 class="h1">Welcome <span class="text-primary-500">Back</span></h1>
            </div>
            <p class="text-lg opacity-75">
                Sign in to your account to access your dashboard and manage your projects.
            </p>
        </header>

        <!-- Login Form Card -->
        <div class="card preset-outlined-primary-500 p-8 space-y-6">
            <!-- Error Message -->
            {#if message}
                <div class="card preset-outlined-error-500 p-4 text-center">
                    <p class="text-error-600 dark:text-error-400 text-sm">{message}</p>
                </div>
            {/if}

            <!-- Email/Password Form (Disabled for demo) -->
            <form onsubmit={handleSubmit} class="space-y-6">
                <div class="space-y-4 opacity-50">
                    <div class="space-y-2">
                        <label class="label font-medium" for="email">
                            <Mail class="size-4 inline mr-2" />
                            Email Address
                        </label>
                        <input 
                            class="input preset-outlined-surface-200-800" 
                            type="email" 
                            id="email" 
                            bind:value={formData.email} 
                            placeholder="Enter your email (disabled in demo)"
                            disabled={true}
                            autocomplete="email"
                        />
                    </div>
                    
                    <div class="space-y-2">
                        <label class="label font-medium" for="password">
                            <Lock class="size-4 inline mr-2" />
                            Password
                        </label>
                        <div class="relative">
                            <input 
                                class="input preset-outlined-surface-200-800 pr-10" 
                                type={showPassword ? 'text' : 'password'}
                                id="password" 
                                bind:value={formData.password} 
                                placeholder="Enter your password (disabled)"
                                disabled={true}
                                autocomplete="current-password"
                            />
                            <button
                                type="button"
                                class="absolute right-3 top-1/2 -translate-y-1/2 text-surface-500"
                                disabled={true}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                title={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {#if showPassword}
                                    <EyeOff class="size-4" />
                                {:else}
                                    <Eye class="size-4" />
                                {/if}
                            </button>
                        </div>
                    </div>
                </div>

                <button 
                    type="submit" 
                    class="btn preset-outlined-surface-200-800 w-full flex items-center justify-center gap-2 opacity-50 cursor-not-allowed" 
                    disabled={true}
                >
                    <LogIn class="size-4" />
                    Sign In (Demo Disabled)
                </button>
            </form>

            <!-- Divider -->
            <div class="flex items-center">
                <hr class="flex-grow opacity-30" />
                <span class="px-4 text-sm opacity-50">or continue with</span>
                <hr class="flex-grow opacity-30" />
            </div>

            <!-- OAuth Providers -->
            <div class="space-y-3">
                {#each oauthProviders as provider}
                    <button
                        type="button"
                        class="btn w-full flex items-center justify-center gap-3 {provider.color}"
                        onclick={() => handleOAuth(provider.provider)}
                        disabled={!provider.enabled || loading || oauthLoading !== ''}
                        aria-label="{provider.description}"
                        title={provider.enabled ? provider.description : `${provider.name} login is disabled in demo mode`}
                    >
                        {#if oauthLoading === provider.provider}
                            <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-current" aria-hidden="true"></div>
                            Connecting...
                        {:else}
                            <provider.icon class="size-4" aria-hidden="true" />
                            {provider.description}
                        {/if}
                    </button>
                {/each}
            </div>
        </div>

        <!-- Footer Links -->
        <div class="text-center space-y-4">
            <p class="text-sm opacity-75">
                Don't have an account? 
                <a 
                    href="/auth/register"
                    class="text-primary-500 hover:text-primary-600 transition-colors font-medium"
                >
                    Create one here
                </a>
            </p>
            <div class="flex items-center justify-center gap-4 text-sm opacity-50">
                <a href="/privacy" class="hover:opacity-75 transition-opacity">Privacy Policy</a>
                <span>•</span>
                <a href="/terms" class="hover:opacity-75 transition-opacity">Terms of Service</a>
            </div>
        </div>
    </div>
</div> 