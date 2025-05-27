<script lang="ts">
    import { supabase } from '$lib/supabaseClient';
    import { goto } from '$app/navigation';
    import { toaster } from '$lib';
    import { Mail, Lock, LogIn, UserPlus, Github, Chrome, MessageCircle, Twitter, Star, Eye, EyeOff } from 'lucide-svelte';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let activeTab = $state('login'); // 'login' or 'signup'
    let showPassword = $state(false);

    onMount(() => {
        // Check URL parameters to set initial tab
        const urlParams = new URLSearchParams(window.location.search);
        const mode = urlParams.get('mode');
        if (mode === 'signup') {
            activeTab = 'signup';
        }
    });
    
    let formData = $state({
        email: '',
        password: ''
    });
    
    let loading = $state(false);
    let oauthLoading = $state('');
    let message = $state('');

    // OAuth providers configuration
    const oauthProviders = [
        { 
            name: 'GitHub', 
            provider: 'github', 
            icon: Github, 
            color: 'bg-[#333] hover:bg-[#555] text-white',
            description: 'Continue with GitHub'
        },
        { 
            name: 'Google', 
            provider: 'google', 
            icon: Chrome, 
            color: 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300',
            description: 'Continue with Google'
        },
        { 
            name: 'Discord', 
            provider: 'discord', 
            icon: MessageCircle, 
            color: 'bg-[#5865F2] hover:bg-[#4752C4] text-white',
            description: 'Continue with Discord'
        },
        { 
            name: 'Twitter', 
            provider: 'twitter', 
            icon: Twitter, 
            color: 'bg-[#1DA1F2] hover:bg-[#1A91DA] text-white',
            description: 'Continue with Twitter'
        }
    ];

    async function handleSubmit(e: Event) {
        e.preventDefault();
        loading = true;
        message = '';
        
        try {
            if (activeTab === 'login') {
                const { error } = await supabase.auth.signInWithPassword({ 
                    email: formData.email, 
                    password: formData.password 
                });
                if (error) throw error;
                
                toaster.create({
                    type: 'info',
                    title: 'Welcome back!',
                    description: 'You have been logged in successfully.'
                });
            } else {
                const { data, error } = await supabase.auth.signUp({ 
                    email: formData.email, 
                    password: formData.password 
                });
                if (error) throw error;
                
                if (data.session) {
                    toaster.create({
                        type: 'info',
                        title: 'Welcome aboard!',
                        description: 'Your account has been created and you are now logged in.'
                    });
                } else if (data.user && !data.session) {
                    toaster.create({
                        type: 'info',
                        title: 'Account created successfully!',
                        description: 'Please check your email to confirm your account.'
                    });
                    return; // Don't redirect if email confirmation is needed
                }
            }
            
            goto('/dashboard');
        } catch (error: any) {
            toaster.create({
                type: 'error',
                title: activeTab === 'login' ? 'Login failed' : 'Signup failed',
                description: error.message
            });
            message = error.message;
        } finally {
            loading = false;
        }
    }

    async function handleOAuth(provider: string) {
        oauthLoading = provider;
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: provider as any,
                options: {
                    redirectTo: `${window.location.origin}/dashboard`
                }
            });
            if (error) throw error;
        } catch (error: any) {
            toaster.create({
                type: 'error',
                title: `${provider} ${activeTab} failed`,
                description: error.message
            });
        } finally {
            oauthLoading = '';
        }
    }

    function switchTab(tab: string) {
        activeTab = tab;
        message = '';
        formData = { email: '', password: '' };
    }
</script>

<svelte:head>
    <title>{activeTab === 'login' ? 'Sign In' : 'Create Account'} - Sassy</title>
    <meta name="description" content={activeTab === 'login' 
        ? 'Sign in to your account to access your dashboard and manage your projects.' 
        : 'Create your account to start building with our comprehensive SaaS template.'} />
</svelte:head>

<div class="container mx-auto py-20">
    <div class="max-w-md mx-auto space-y-8">
        <!-- Header -->
        <header class="text-center space-y-4">
            <div class="flex items-center justify-center gap-2 mb-4">
                {#if activeTab === 'login'}
                    <LogIn class="size-8 text-primary-500" />
                    <h1 class="h1">Welcome <span class="text-primary-500">Back</span></h1>
                {:else}
                    <Star class="size-8 text-primary-500" />
                    <h1 class="h1">Get <span class="text-primary-500">Started</span></h1>
                {/if}
            </div>
            <p class="text-lg opacity-75">
                {#if activeTab === 'login'}
                    Sign in to your account to access your dashboard and manage your projects.
                {:else}
                    Create your account to start building with our comprehensive SaaS template.
                {/if}
            </p>
        </header>

        <!-- Tab Switcher -->
        <div class="card preset-outlined-primary-500 p-2">
            <div class="flex gap-1">
                <button
                    type="button"
                    class="btn flex-1 {activeTab === 'login' ? 'preset-filled-primary-500' : 'preset-ghost-primary-500'}"
                    onclick={() => switchTab('login')}
                    disabled={loading || oauthLoading !== ''}
                >
                    <LogIn class="size-4" />
                    Sign In
                </button>
                <button
                    type="button"
                    class="btn flex-1 {activeTab === 'signup' ? 'preset-filled-primary-500' : 'preset-ghost-primary-500'}"
                    onclick={() => switchTab('signup')}
                    disabled={loading || oauthLoading !== ''}
                >
                    <UserPlus class="size-4" />
                    Sign Up
                </button>
            </div>
        </div>

        <!-- Auth Form Card -->
        <div class="card preset-outlined-primary-500 p-8 space-y-6">
            <!-- Error Message -->
            {#if message}
                <div class="card preset-outlined-error-500 p-4 text-center">
                    <p class="text-error-600 dark:text-error-400 text-sm">{message}</p>
                </div>
            {/if}

            <!-- Email/Password Form -->
            <form onsubmit={handleSubmit} class="space-y-6">
                <div class="space-y-4">
                    <div class="space-y-2">
                        <label class="label font-medium" for="email">
                            <Mail class="size-4 inline mr-2" />
                            Email Address
                        </label>
                        <input 
                            class="input preset-outlined-primary-500" 
                            type="email" 
                            id="email" 
                            bind:value={formData.email} 
                            placeholder="Enter your email"
                            required 
                            disabled={loading || oauthLoading !== ''}
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
                                class="input preset-outlined-primary-500 pr-10" 
                                type={showPassword ? 'text' : 'password'}
                                id="password" 
                                bind:value={formData.password} 
                                placeholder={activeTab === 'login' ? 'Enter your password' : 'Create a strong password'}
                                required 
                                disabled={loading || oauthLoading !== ''}
                                minlength={activeTab === 'signup' ? 6 : undefined}
                                autocomplete={activeTab === 'login' ? 'current-password' : 'new-password'}
                            />
                            <button
                                type="button"
                                class="absolute right-3 top-1/2 -translate-y-1/2 text-surface-500 hover:text-surface-700 dark:hover:text-surface-300"
                                onclick={() => showPassword = !showPassword}
                                disabled={loading || oauthLoading !== ''}
                            >
                                {#if showPassword}
                                    <EyeOff class="size-4" />
                                {:else}
                                    <Eye class="size-4" />
                                {/if}
                            </button>
                        </div>
                        {#if activeTab === 'signup'}
                            <p class="text-xs opacity-50">Must be at least 6 characters long</p>
                        {/if}
                    </div>
                </div>

                <button 
                    type="submit" 
                    class="btn preset-filled-primary-500 w-full flex items-center justify-center gap-2" 
                    disabled={loading || oauthLoading !== ''}
                >
                    {#if loading}
                        <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        {activeTab === 'login' ? 'Signing you in...' : 'Creating your account...'}
                    {:else}
                        {#if activeTab === 'login'}
                            <LogIn class="size-4" />
                            Sign In
                        {:else}
                            <UserPlus class="size-4" />
                            Create Account
                        {/if}
                    {/if}
                </button>
            </form>

            <!-- Terms Notice for Signup -->
            {#if activeTab === 'signup'}
                <p class="text-xs opacity-50 text-center">
                    By creating an account, you agree to our 
                    <a href="/terms" class="text-primary-500 hover:text-primary-600 transition-colors">Terms of Service</a> 
                    and 
                    <a href="/privacy" class="text-primary-500 hover:text-primary-600 transition-colors">Privacy Policy</a>.
                </p>
            {/if}

            <!-- Forgot Password for Login -->
            {#if activeTab === 'login'}
                <div class="text-center">
                    <a href="/auth/reset-password" class="text-sm text-primary-500 hover:text-primary-600 transition-colors">
                        Forgot your password?
                    </a>
                </div>
            {/if}

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
                        disabled={loading || oauthLoading !== ''}
                    >
                        {#if oauthLoading === provider.provider}
                            <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                            Connecting...
                        {:else}
                            <svelte:component this={provider.icon} class="size-4" />
                            {provider.description}
                        {/if}
                    </button>
                {/each}
            </div>
        </div>

        <!-- Footer Links -->
        <div class="text-center space-y-4">
            {#if activeTab === 'login'}
                <p class="text-sm opacity-75">
                    Don't have an account? 
                    <button 
                        type="button"
                        class="text-primary-500 hover:text-primary-600 transition-colors font-medium"
                        onclick={() => switchTab('signup')}
                    >
                        Create one here
                    </button>
                </p>
            {:else}
                <p class="text-sm opacity-75">
                    Already have an account? 
                    <button 
                        type="button"
                        class="text-primary-500 hover:text-primary-600 transition-colors font-medium"
                        onclick={() => switchTab('login')}
                    >
                        Sign in here
                    </button>
                </p>
            {/if}
            <div class="flex items-center justify-center gap-4 text-sm opacity-50">
                <a href="/privacy" class="hover:opacity-75 transition-opacity">Privacy Policy</a>
                <span>•</span>
                <a href="/terms" class="hover:opacity-75 transition-opacity">Terms of Service</a>
            </div>
        </div>
    </div>
</div> 