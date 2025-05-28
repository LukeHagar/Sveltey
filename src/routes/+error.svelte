<script lang="ts">
    import { page } from '$app/state';
    import { AlertTriangle, Home, RefreshCw, ArrowLeft } from 'lucide-svelte';
    
    let status = $derived(page.status);
    let message = $derived(page.error?.message);

    const getErrorInfo = (status: number) => {
        switch (status) {
            case 404:
                return {
                    title: 'Page Not Found',
                    description: 'The page you\'re looking for doesn\'t exist or has been moved.',
                    icon: AlertTriangle,
                    color: 'text-warning-500'
                };
            case 500:
                return {
                    title: 'Server Error',
                    description: 'Something went wrong on our end. Please try again later.',
                    icon: AlertTriangle,
                    color: 'text-error-500'
                };
            case 403:
                return {
                    title: 'Access Forbidden',
                    description: 'You don\'t have permission to access this page.',
                    icon: AlertTriangle,
                    color: 'text-error-500'
                };
            default:
                return {
                    title: 'Something went wrong',
                    description: 'An unexpected error occurred. Please try again.',
                    icon: AlertTriangle,
                    color: 'text-error-500'
                };
        }
    };

    let errorInfo = $derived(getErrorInfo(status));
</script>

<svelte:head>
    <title>Error {status} - Something went wrong</title>
    <meta name="description" content="An error occurred while loading the page. Please try again or return to the homepage." />
</svelte:head>

<div class="container mx-auto py-20">
    <div class="max-w-2xl mx-auto text-center space-y-8">
        <!-- Error Icon and Status -->
        <div class="space-y-4">
            <errorInfo.icon class="size-20 mx-auto {errorInfo.color}" />
            <div class="space-y-2">
                <h1 class="h1">
                    <span class="text-7xl font-bold {errorInfo.color}">{status}</span>
                </h1>
                <h2 class="h2">{errorInfo.title}</h2>
            </div>
        </div>

        <!-- Error Description -->
        <div class="card preset-outlined-surface-200-800 p-8 space-y-4">
            <p class="text-lg opacity-75">{errorInfo.description}</p>
            {#if message}
                <div class="card preset-outlined-error-500 p-4">
                    <p class="text-error-600 dark:text-error-400 text-sm font-mono">{message}</p>
                </div>
            {/if}
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
                onclick={() => window.history.back()} 
                class="btn preset-outlined-surface-200-800 flex items-center gap-2"
            >
                <ArrowLeft class="size-4" />
                <span>Go Back</span>
            </button>
            
            <button 
                onclick={() => window.location.reload()} 
                class="btn preset-outlined-surface-200-800 flex items-center gap-2"
            >
                <RefreshCw class="size-4" />
                <span>Try Again</span>
            </button>
            
            <a href="/" class="btn preset-filled-primary-500 flex items-center gap-2">
                <Home class="size-4" />
                <span>Go Home</span>
            </a>
        </div>

        <!-- Help Section -->
        <div class="text-sm opacity-50 space-y-2">
            <p>Still having trouble? Here are some helpful links:</p>
            <div class="flex items-center justify-center gap-4">
                <a href="/blog" class="hover:opacity-75 transition-opacity">Blog</a>
                <span>•</span>
                <a href="/contact" class="hover:opacity-75 transition-opacity">Contact Support</a>
                <span>•</span>
                <a href="/help" class="hover:opacity-75 transition-opacity">Help Center</a>
            </div>
        </div>
    </div>
</div> 