<script lang="ts">
    // Props are passed from the root +layout.svelte
    export let data; // Contains session from +layout.server.ts, then updated by +layout.svelte
</script>

<div class="container mx-auto space-y-16 p-8">
    <!-- Hero Section -->
    <section class="text-center py-16">
        <h1 class="h1 font-bold mb-4">Your Next SaaS Adventure Starts Here</h1>
        <p class="text-xl mb-8 text-color-secondary-500">
            The perfect template to kickstart your Supabase & SvelteKit project, styled with Skeleton.
        </p>
        <div>
            {#if data.session}
                <a href="/dashboard" class="btn variant-filled-primary btn-lg">Go to Dashboard</a>
            {:else}
                <a href="/auth/signup" class="btn variant-filled-primary btn-lg mr-2">Get Started</a>
                <a href="/auth/login" class="btn variant-ghost-surface btn-lg">Login</a>
            {/if}
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
        <h2 class="h2 text-center mb-12">Features Packed & Ready</h2>
        <div class="grid md:grid-cols-3 gap-8">
            <!-- Feature 1 -->
            <div class="card p-8 text-center">
                <h3 class="h3 mb-2">Supabase Integrated</h3>
                <p>Authentication and database ready to go. Just connect your instance.</p>
            </div>
            <!-- Feature 2 -->
            <div class="card p-8 text-center">
                <h3 class="h3 mb-2">Skeleton Themed</h3>
                <p>Beautifully styled components that are a joy to work with. Dark mode included!</p>
            </div>
            <!-- Feature 3 -->
            <div class="card p-8 text-center">
                <h3 class="h3 mb-2">SvelteKit Speed</h3>
                <p>Enjoy the power and performance of SvelteKit for a snappy user experience.</p>
            </div>
        </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-16 text-center bg-primary-500/10 dark:bg-primary-500/20 p-10 rounded-lg">
        <h2 class="h2 mb-4">Ready to Build Something Amazing?</h2>
        <p class="text-xl mb-8">
            This template provides the foundation. You bring the ideas.
        </p>
        {#if !data.session}
        <a href="/auth/signup" class="btn variant-filled-secondary btn-lg">Sign Up Now</a>
        {/if}
    </section>
</div>
