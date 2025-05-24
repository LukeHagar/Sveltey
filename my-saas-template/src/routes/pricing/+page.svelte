<script lang="ts">
    // Assuming session might be useful here, though not directly used in this basic structure
    export let data; 
</script>

<div class="container mx-auto p-8">
    <h1 class="h1 text-center mb-12">Find the Plan That's Right For You</h1>

    <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Tier 1: Free -->
        <div class="card p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h2 class="h2 text-center mb-4">Free</h2>
            <p class="text-4xl font-bold text-center mb-6">$0<span class="text-lg font-normal">/mo</span></p>
            <ul class="space-y-2 mb-8">
                <li><span class="text-primary-500 mr-2">&#10003;</span> Basic Feature 1</li>
                <li><span class="text-primary-500 mr-2">&#10003;</span> Basic Feature 2</li>
                <li><span class="text-secondary-500 mr-2">&times;</span> Advanced Feature A</li>
                <li><span class="text-secondary-500 mr-2">&times;</span> Advanced Feature B</li>
            </ul>
            <button class="btn variant-soft-primary w-full">
                {#if data.session}Get Started{:else}Sign Up{/if}
            </button>
        </div>

        <!-- Tier 2: Pro (Most Popular) -->
        <div class="card p-6 shadow-xl border-2 border-primary-500 relative overflow-hidden">
            <span class="badge variant-filled-primary absolute top-0 right-0 -mr-1 -mt-1 z-10 transform rotate-12 translate-x-4 -translate-y-2">Most Popular</span>
            <h2 class="h2 text-center mb-4 text-primary-500">Pro</h2>
            <p class="text-4xl font-bold text-center mb-6">$19<span class="text-lg font-normal">/mo</span></p>
            <ul class="space-y-2 mb-8">
                <li><span class="text-primary-500 mr-2">&#10003;</span> Basic Feature 1</li>
                <li><span class="text-primary-500 mr-2">&#10003;</span> Basic Feature 2</li>
                <li><span class="text-primary-500 mr-2">&#10003;</span> Advanced Feature A</li>
                <li><span class="text-secondary-500 mr-2">&times;</span> Advanced Feature B</li>
            </ul>
            <button class="btn variant-filled-primary w-full">
                {#if data.session}Upgrade to Pro{:else}Sign Up for Pro{/if}
            </button>
        </div>

        <!-- Tier 3: Enterprise -->
        <div class="card p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h2 class="h2 text-center mb-4">Enterprise</h2>
            <p class="text-4xl font-bold text-center mb-6">$49<span class="text-lg font-normal">/mo</span></p>
            <ul class="space-y-2 mb-8">
                <li><span class="text-primary-500 mr-2">&#10003;</span> Basic Feature 1</li>
                <li><span class="text-primary-500 mr-2">&#10003;</span> Basic Feature 2</li>
                <li><span class="text-primary-500 mr-2">&#10003;</span> Advanced Feature A</li>
                <li><span class="text-primary-500 mr-2">&#10003;</span> Advanced Feature B</li>
            </ul>
            <button class="btn variant-soft-primary w-full">Contact Us</button>
        </div>
    </div>
</div>
