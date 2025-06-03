<script lang="ts">
    // Icons
    import { Rocket, Database, Zap, Star, Users, GitBranch } from '@lucide/svelte';

    import Skeleton from '$lib/assets/skeleton.svelte'

    let { data } = $props();
</script>

<div class="container mx-auto py-20 space-y-20">
    <!-- Hero Section -->
    <header class="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
        <div class="order-2 lg:order-1 max-w-3xl space-y-8">
            <h1 class="h1">Launch Your SaaS in <span class="text-primary-500">Minutes</span></h1>
            <p class="text-2xl opacity-75">
                The complete SvelteKit & Supabase template with authentication, payments, and beautiful UI components. 
                Skip the boilerplate and focus on what matters most.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
                {#if data.session}
                    <a 
                        href="/app/dashboard" 
                        class="btn btn-lg preset-filled-primary-500"
                        aria-label="Go to your dashboard"
                    >
                        <Rocket class="size-5" aria-hidden="true" />
                        <span>Go to Dashboard</span>
                    </a>
                {:else}
                    <a 
                        href="/auth/signup" 
                        class="btn btn-lg preset-filled-primary-500"
                        aria-label="Sign up for free account"
                    >
                        <Star class="size-5" aria-hidden="true" />
                        <span>Get Started Free</span>
                    </a>
                    <a 
                        href="/auth/login" 
                        class="btn btn-lg preset-outlined-primary-500"
                        aria-label="Sign in to existing account"
                    >
                        <span>Sign In</span>
                    </a>
                {/if}
            </div>
        </div>
        <!-- Hero Image/Graphic -->
        <div class="order-1 lg:order-2 flex justify-center">
            <div class="size-64 lg:size-96 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center shadow-2xl animate-tilt" role="img" aria-label="SaaS launch illustration">
                <Rocket class="size-32 lg:size-64 text-primary-500" aria-hidden="true" />
            </div>
        </div>
    </header>

    <hr class="hr max-w-48" />

    <!-- Stats Section -->
    <section>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
            <div class="space-y-1">
                <span class="font-bold text-7xl">99%</span>
                <p class="text-primary-500">Faster Development</p>
            </div>
            <div class="space-y-1">
                <span class="font-bold text-7xl">50+</span>
                <p class="text-primary-500">Components Ready</p>
            </div>
            <div class="space-y-1">
                <span class="font-bold text-7xl">100%</span>
                <p class="text-primary-500">Type Safe</p>
            </div>
            <div class="space-y-1">
                <span class="font-bold text-7xl">∞</span>
                <p class="text-primary-500">Possibilities</p>
            </div>
        </div>
    </section>

    <hr class="hr max-w-48" />

    <!-- Features Section -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
        <div class="card preset-outlined-surface-200-800 p-4 md:p-8 space-y-4">
            <Database class="stroke-primary-500 size-10" aria-hidden="true" />
            <h3 class="h3">Supabase Ready</h3>
            <p class="opacity-75">
                Authentication, real-time database, and file storage configured out of the box. 
                Just add your Supabase credentials and you're ready to go.
            </p>
        </div>
        <div class="card preset-outlined-surface-200-800 p-4 md:p-8 space-y-4">
            <Zap class="stroke-primary-500 size-10" aria-hidden="true" />
            <h3 class="h3">Lightning Fast</h3>
            <p class="opacity-75">
                Built with SvelteKit for maximum performance. Server-side rendering, 
                optimistic updates, and blazing fast navigation included.
            </p>
        </div>
        <div class="card preset-outlined-surface-200-800 p-4 md:p-8 space-y-4">
            <GitBranch class="stroke-primary-500 size-10" aria-hidden="true" />
            <h3 class="h3">Developer Experience</h3>
            <p class="opacity-75">
                TypeScript, ESLint, Prettier, and comprehensive documentation. 
                Built by developers, for developers with love and attention to detail.
            </p>
        </div>
    </section>

    <hr class="hr max-w-48" />

    <!-- Technologies Section -->
    <section class="text-center space-y-8">
        <h2 class="h2">Built With <span class="text-primary-500">Modern Tools</span></h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div class="space-y-2">
                <div class="mx-auto flex items-center justify-center">
                    <img src="/svelte-logo-square.svg" alt="SvelteKit" class="size-16">
                </div>
                <p class="text-lg font-extrabold">SvelteKit</p>
            </div>
            <div class="space-y-2">
                <div class="mx-auto flex items-center justify-center">
                    <img src="/supabase-logo-icon.svg" alt="Supabase" class="size-16">
                </div>
                <p class="text-lg font-extrabold">Supabase</p>
            </div>
            <div class="space-y-2">
                <div class="mx-auto flex items-center justify-center">
                    <img src="/ts-logo-512.svg" alt="TypeScript" class="size-16">
                </div>
                <p class="text-lg font-extrabold">TypeScript</p>
            </div>
            <div class="space-y-2">
                <div class="mx-auto flex items-center justify-center">
                    <Skeleton alt="Skeleton UI" class="size-16 fill-black dark:fill-white" />
                </div>
                <p class="text-lg font-extrabold">Skeleton UI</p>
            </div>
        </div>
    </section>

    <hr class="hr max-w-48" />

    <!-- Call to Action Section -->
    <section class="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-4">
        <div class="text-center md:text-left space-y-2">
            <h3 class="h3">Ready to build your next big idea?</h3>
            <p class="opacity-75">Join thousands of developers who trust our template to kickstart their SaaS projects.</p>
        </div>
        {#if !data.session}
            <a 
                href="/auth/signup" 
                class="btn md:btn-lg preset-filled-primary-500"
                aria-label="Start building your SaaS today"
            >
                <Users class="size-5" aria-hidden="true" />
                <span>Start Building Today</span>
            </a>
        {:else}
            <a 
                href="/pricing" 
                class="btn md:btn-lg preset-filled-secondary-500"
                aria-label="View pricing plans"
            >
                <Star class="size-5" aria-hidden="true" />
                <span>View Pricing</span>
            </a>
        {/if}
    </section>
</div>
