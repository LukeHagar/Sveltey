<script lang="ts">
    // Icons
    import { Check, X, Star, Zap, Crown, Mail } from '@lucide/svelte';
    
    interface Props {
        // Assuming session might be useful here, though not directly used in this basic structure
        data: any;
    }

    let { data }: Props = $props();

    const plans = [
        {
            name: 'Starter',
            price: 0,
            period: 'mo',
            description: 'Perfect for side projects and getting started',
            features: [
                { name: 'Up to 3 projects', included: true },
                { name: 'Basic analytics', included: true },
                { name: 'Community support', included: true },
                { name: 'Advanced integrations', included: false },
                { name: 'Priority support', included: false },
                { name: 'Custom domains', included: false }
            ],
            popular: false,
            buttonText: data.session ? 'Current Plan' : 'Get Started',
            buttonClass: 'preset-outlined-surface-200-800'
        },
        {
            name: 'Pro',
            price: 19,
            period: 'mo',
            description: 'Best for growing businesses and teams',
            features: [
                { name: 'Unlimited projects', included: true },
                { name: 'Advanced analytics', included: true },
                { name: 'Priority support', included: true },
                { name: 'Advanced integrations', included: true },
                { name: 'Custom domains', included: true },
                { name: 'Team collaboration', included: false }
            ],
            popular: true,
            buttonText: data.session ? 'Upgrade to Pro' : 'Start Pro Trial',
            buttonClass: 'preset-filled-primary-500'
        },
        {
            name: 'Enterprise',
            price: 99,
            period: 'mo',
            description: 'For large teams with advanced needs',
            features: [
                { name: 'Everything in Pro', included: true },
                { name: 'Team collaboration', included: true },
                { name: 'Advanced security', included: true },
                { name: 'Custom integrations', included: true },
                { name: 'Dedicated support', included: true },
                { name: 'SLA guarantee', included: true }
            ],
            popular: false,
            buttonText: 'Contact Sales',
            buttonClass: 'preset-outlined-primary-500'
        }
    ];
</script>

<svelte:head>
    <title>Pricing - Choose Your Plan</title>
    <meta name="description" content="Simple, transparent pricing for every stage of your journey. Start free and scale as you grow." />
</svelte:head>

<div class="container mx-auto py-20 space-y-20">
    <!-- Header -->
    <header class="text-center space-y-4 max-w-3xl mx-auto">
        <h1 class="h1">Simple, <span class="text-primary-500">Transparent</span> Pricing</h1>
        <p class="text-2xl opacity-75">
            Choose the perfect plan for your needs. Start free and scale as you grow. 
            No hidden fees, no surprises.
        </p>
    </header>

    <hr class="hr max-w-48 mx-auto" />

    <!-- Pricing Cards -->
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {#each plans as plan}
            <div class="card {plan.popular ? 'preset-outlined-primary-500 relative' : 'preset-outlined-secondary-500'} p-6 md:p-8 space-y-6 {plan.popular ? 'scale-105 shadow-2xl' : 'hover:scale-105'} transition-all duration-300">
                
                {#if plan.popular}
                    <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span class="badge preset-filled-primary-500 flex items-center gap-1">
                            <Star class="size-3" />
                            Most Popular
                        </span>
                    </div>
                {/if}

                <!-- Plan Header -->
                <div class="text-center space-y-2">
                    <div class="flex items-center justify-center gap-2">
                        {#if plan.name === 'Starter'}
                            <Zap class="size-6 text-primary-500" />
                        {:else if plan.name === 'Pro'}
                            <Star class="size-6 text-primary-500" />
                        {:else}
                            <Crown class="size-6 text-primary-500" />
                        {/if}
                        <h3 class="h3 {plan.popular ? 'text-primary-500' : ''}">{plan.name}</h3>
                    </div>
                    <p class="opacity-75 text-sm">{plan.description}</p>
                </div>

                <!-- Price -->
                <div class="text-center space-y-1">
                    <div class="flex items-baseline justify-center gap-1">
                        <span class="text-5xl font-bold">${plan.price}</span>
                        <span class="text-lg opacity-75">/{plan.period}</span>
                    </div>
                    {#if plan.price > 0}
                        <p class="text-sm opacity-50">Billed monthly</p>
                    {/if}
                </div>

                <!-- Features -->
                <ul class="space-y-3">
                    {#each plan.features as feature}
                        <li class="flex items-center gap-3">
                            {#if feature.included}
                                <Check class="size-5 text-success-500 flex-shrink-0" />
                            {:else}
                                <X class="size-5 text-error-500 flex-shrink-0" />
                            {/if}
                            <span class="{feature.included ? '' : 'opacity-50'}">{feature.name}</span>
                        </li>
                    {/each}
                </ul>

                <!-- CTA Button -->
                <button class="btn w-full {plan.buttonClass}">
                    {plan.buttonText}
                </button>
            </div>
        {/each}
    </section>

    <hr class="hr max-w-48 mx-auto" />

    <!-- FAQ Section -->
    <section class="max-w-4xl mx-auto space-y-8">
        <h2 class="h2 text-center">Frequently Asked Questions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-4">
                <h3 class="h4 text-primary-500">Can I change plans anytime?</h3>
                <p class="opacity-75">
                    Yes! You can upgrade, downgrade, or cancel your subscription at any time. 
                    Changes take effect on your next billing cycle.
                </p>
            </div>
            <div class="space-y-4">
                <h3 class="h4 text-primary-500">Is there a free trial?</h3>
                <p class="opacity-75">
                    Our Starter plan is completely free forever. Pro plans include a 14-day free trial 
                    with no credit card required.
                </p>
            </div>
            <div class="space-y-4">
                <h3 class="h4 text-primary-500">What payment methods do you accept?</h3>
                <p class="opacity-75">
                    We accept all major credit cards, PayPal, and bank transfers for Enterprise plans. 
                    All payments are processed securely through Stripe.
                </p>
            </div>
            <div class="space-y-4">
                <h3 class="h4 text-primary-500">Do you offer refunds?</h3>
                <p class="opacity-75">
                    Yes! We offer a 30-day money-back guarantee for all paid plans. 
                    No questions asked.
                </p>
            </div>
        </div>
    </section>

    <hr class="hr max-w-48 mx-auto" />

    <!-- Contact Section -->
    <section class="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-4 max-w-4xl mx-auto">
        <div class="text-center md:text-left space-y-2">
            <h3 class="h3">Need a custom solution?</h3>
            <p class="opacity-75">
                Enterprise teams with specific requirements can get in touch for custom pricing and features.
            </p>
        </div>
        <a href="mailto:sales@example.com" class="btn btn-lg preset-filled-secondary-500 text-surface-50-950">
            <Mail class="size-5" />
            <span>Contact Sales</span>
        </a>
    </section>
</div>
