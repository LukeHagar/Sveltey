<script lang="ts">
    import { goto } from '$app/navigation';
    import { toaster } from '$lib';
    import { supabase } from '$lib/supabaseClient';
    import { Eye, EyeOff, KeyRound, Lock, Save, AlertTriangle } from '@lucide/svelte';
    import type { Session } from '@supabase/supabase-js';
    import { onMount } from 'svelte';

    let password = $state('');
    let confirmPassword = $state('');
    let loading = $state(false);
    let showPassword = $state(false);
    let showConfirmPassword = $state(false);
    let session = $state<Session | null>(null);

    onMount(async () => {
        // Check if user is authenticated (came from reset link)
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        session = currentSession;
        
        if (!session) {
            toaster.create({
                type: 'error',
                title: 'Invalid reset link',
                description: 'Please request a new password reset link.'
            });
            goto('/auth/reset-password');
        }
    });

    async function handleUpdatePassword(e: Event) {
        e.preventDefault();
        
        // Disable password update for demo
        toaster.create({
            type: 'warning',
            title: 'Demo Mode',
            description: 'Password update is disabled in this demo. Please use GitHub login instead.'
        });
        return;
        
        // Original code commented out for demo
        /*
        if (password !== confirmPassword) {
            toaster.create({
                type: 'error',
                title: 'Passwords don\'t match',
                description: 'Please ensure both passwords are the same.'
            });
            return;
        }

        if (password.length < 6) {
            toaster.create({
                type: 'error',
                title: 'Password too short',
                description: 'Password must be at least 6 characters long.'
            });
            return;
        }

        loading = true;
        
        try {
            const { error } = await supabase.auth.updateUser({ 
                password: password 
            });
            
            if (error) throw error;
            
            toaster.create({
                type: 'info',
                title: 'Password updated!',
                description: 'Your password has been successfully updated.'
            });
            
            goto('/dashboard');
        } catch (error: any) {
            toaster.create({
                type: 'error',
                title: 'Update failed',
                description: error.message
            });
        } finally {
            loading = false;
        }
        */
    }
</script>

<svelte:head>
    <title>Update Password - Sveltey</title>
    <meta name="description" content="Set your new password to secure your account." />
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
                        Password update is disabled in this demo. Only <strong>GitHub login</strong> is available.
                    </p>
                </div>
            </div>
        </div>

        <!-- Header -->
        <header class="text-center space-y-4">
            <div class="flex items-center justify-center gap-2 mb-4">
                <KeyRound class="size-8 text-primary-500" />
                <h1 class="h1">Update <span class="text-primary-500">Password</span></h1>
            </div>
            <p class="text-lg opacity-75">
                Choose a strong password to secure your account.
            </p>
        </header>

        <!-- Update Form Card -->
        <div class="card preset-outlined-surface-200-800 p-8 space-y-6">
            <form onsubmit={handleUpdatePassword} class="space-y-6">
                <div class="space-y-4 opacity-50">
                    <div class="space-y-2">
                        <label class="label font-medium" for="password">
                            <Lock class="size-4 inline mr-2" />
                            New Password
                        </label>
                        <div class="relative">
                            <input 
                                class="input preset-outlined-surface-200-800 pr-10" 
                                type={showPassword ? 'text' : 'password'}
                                id="password" 
                                bind:value={password} 
                                placeholder="Create a strong password (disabled in demo)"
                                disabled={true}
                                minlength="6"
                                autocomplete="new-password"
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
                        <p class="text-xs opacity-50">Must be at least 6 characters long</p>
                    </div>
                    
                    <div class="space-y-2">
                        <label class="label font-medium" for="confirmPassword">
                            <Lock class="size-4 inline mr-2" />
                            Confirm New Password
                        </label>
                        <div class="relative">
                            <input 
                                class="input preset-outlined-surface-200-800 pr-10" 
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword" 
                                bind:value={confirmPassword} 
                                placeholder="Confirm your password (disabled in demo)"
                                disabled={true}
                                autocomplete="new-password"
                            />
                            <button
                                type="button"
                                class="absolute right-3 top-1/2 -translate-y-1/2 text-surface-500"
                                disabled={true}
                                aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                                title={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                            >
                                {#if showConfirmPassword}
                                    <EyeOff class="size-4" />
                                {:else}
                                    <Eye class="size-4" />
                                {/if}
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Password Strength Indicator -->
                {#if password.length > 0}
                    <div class="space-y-2 opacity-50">
                        <p class="text-sm font-medium">Password Strength:</p>
                        <div class="flex gap-1">
                            <div class="h-2 flex-1 rounded {password.length >= 6 ? 'bg-success-500' : 'bg-surface-300'}"></div>
                            <div class="h-2 flex-1 rounded {password.length >= 8 ? 'bg-success-500' : 'bg-surface-300'}"></div>
                            <div class="h-2 flex-1 rounded {password.length >= 10 && /[A-Z]/.test(password) && /[0-9]/.test(password) ? 'bg-success-500' : 'bg-surface-300'}"></div>
                        </div>
                        <p class="text-xs opacity-50">
                            {#if password.length < 6}
                                Weak - Add more characters
                            {:else if password.length < 8}
                                Good - Consider adding more characters
                            {:else if password.length >= 10 && /[A-Z]/.test(password) && /[0-9]/.test(password)}
                                Strong - Great password!
                            {:else}
                                Good - Consider adding uppercase letters and numbers
                            {/if}
                        </p>
                    </div>
                {/if}

                <!-- Password Match Indicator -->
                {#if confirmPassword.length > 0}
                    <div class="flex items-center gap-2 text-sm opacity-50">
                        {#if password === confirmPassword}
                            <div class="w-2 h-2 bg-success-500 rounded-full"></div>
                            <span class="text-success-600 dark:text-success-400">Passwords match</span>
                        {:else}
                            <div class="w-2 h-2 bg-error-500 rounded-full"></div>
                            <span class="text-error-600 dark:text-error-400">Passwords don't match</span>
                        {/if}
                    </div>
                {/if}

                <button 
                    type="submit" 
                    class="btn preset-outlined-surface-200-800 w-full flex items-center justify-center gap-2 opacity-50 cursor-not-allowed" 
                    disabled={true}
                >
                    <Save class="size-4" />
                    Update Password (Demo Disabled)
                </button>
            </form>
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