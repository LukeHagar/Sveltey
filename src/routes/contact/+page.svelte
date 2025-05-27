<script lang="ts">
    import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from '@lucide/svelte';
    import { toaster } from '$lib';

    let formData = $state({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    let loading = $state(false);

    async function handleSubmit(e: Event) {
        e.preventDefault();
        loading = true;
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            toaster.create({
                type: 'info',
                title: 'Message sent!',
                description: 'Thank you for contacting us. We\'ll get back to you soon.'
            });
            
            // Reset form
            formData = {
                name: '',
                email: '',
                subject: '',
                message: ''
            };
        } catch (error) {
            toaster.create({
                type: 'error',
                title: 'Error',
                description: 'Failed to send message. Please try again.'
            });
        } finally {
            loading = false;
        }
    }
</script>

<svelte:head>
    <title>Contact Us - Get in Touch</title>
    <meta name="description" content="Get in touch with our team. We're here to help with any questions about our SaaS platform." />
</svelte:head>

<div class="container mx-auto py-20">
    <div class="max-w-6xl mx-auto space-y-16">
        <!-- Header -->
        <header class="text-center space-y-4">
            <div class="flex items-center justify-center gap-2 mb-4">
                <MessageCircle class="size-8 text-primary-500" />
                <h1 class="h1">Get in <span class="text-primary-500">Touch</span></h1>
            </div>
            <p class="text-xl opacity-75 max-w-2xl mx-auto">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <!-- Contact Information -->
            <div class="space-y-8">
                <!-- Contact Methods -->
                <div class="space-y-6">
                    <div class="card preset-outlined-surface-200-800 p-6 space-y-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                                <Mail class="size-5 text-white" />
                            </div>
                            <div>
                                <h3 class="font-semibold">Email Us</h3>
                                <p class="text-sm opacity-75">support@sassy.dev</p>
                            </div>
                        </div>
                    </div>

                    <div class="card preset-outlined-surface-200-800 p-6 space-y-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center">
                                <Phone class="size-5 text-white" />
                            </div>
                            <div>
                                <h3 class="font-semibold">Call Us</h3>
                                <p class="text-sm opacity-75">+1 (555) 123-4567</p>
                            </div>
                        </div>
                    </div>

                    <div class="card preset-outlined-surface-200-800 p-6 space-y-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-tertiary-500 rounded-lg flex items-center justify-center">
                                <MapPin class="size-5 text-white" />
                            </div>
                            <div>
                                <h3 class="font-semibold">Visit Us</h3>
                                <p class="text-sm opacity-75">San Francisco, CA</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Response Time -->
                <div class="card preset-filled-primary-500 p-6 text-center">
                    <Clock class="size-8 mx-auto mb-3" />
                    <h3 class="h4 mb-2">Quick Response</h3>
                    <p class="text-sm opacity-90">
                        We typically respond within 24 hours during business days.
                    </p>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="lg:col-span-2">
                <div class="card preset-outlined-surface-200-800 p-8">
                    <div class="space-y-6">
                        <div>
                            <h2 class="h3 mb-2">Send us a message</h2>
                            <p class="opacity-75">Fill out the form below and we'll get back to you.</p>
                        </div>

                        <form onsubmit={handleSubmit} class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-2">
                                    <label class="label font-medium" for="name">
                                        Name *
                                    </label>
                                    <input 
                                        class="input preset-outlined-surface-200-800" 
                                        type="text" 
                                        id="name" 
                                        bind:value={formData.name} 
                                        placeholder="Your name"
                                        required 
                                        disabled={loading}
                                    />
                                </div>

                                <div class="space-y-2">
                                    <label class="label font-medium" for="email">
                                        Email *
                                    </label>
                                    <input 
                                        class="input preset-outlined-surface-200-800" 
                                        type="email" 
                                        id="email" 
                                        bind:value={formData.email} 
                                        placeholder="your@email.com"
                                        required 
                                        disabled={loading}
                                    />
                                </div>
                            </div>

                            <div class="space-y-2">
                                <label class="label font-medium" for="subject">
                                    Subject *
                                </label>
                                <input 
                                    class="input preset-outlined-surface-200-800" 
                                    type="text" 
                                    id="subject" 
                                    bind:value={formData.subject} 
                                    placeholder="What can we help you with?"
                                    required 
                                    disabled={loading}
                                />
                            </div>

                            <div class="space-y-2">
                                <label class="label font-medium" for="message">
                                    Message *
                                </label>
                                <textarea 
                                    class="textarea preset-outlined-surface-200-800" 
                                    id="message" 
                                    bind:value={formData.message} 
                                    placeholder="Tell us more about your question or feedback..."
                                    rows="6"
                                    required 
                                    disabled={loading}
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                class="btn preset-filled-primary-500 w-full flex items-center justify-center gap-2" 
                                disabled={loading}
                            >
                                {#if loading}
                                    <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                    Sending...
                                {:else}
                                    <Send class="size-4" />
                                    Send Message
                                {/if}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- FAQ Section -->
        <section class="space-y-8">
            <div class="text-center">
                <h2 class="h2 mb-4">Frequently Asked <span class="text-primary-500">Questions</span></h2>
                <p class="opacity-75">Quick answers to common questions.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="card preset-outlined-surface-200-800 p-6 space-y-3">
                    <h3 class="font-semibold">How can I get started?</h3>
                    <p class="text-sm opacity-75">
                        Simply sign up for an account and you'll have immediate access to our platform. Check out our pricing page for plan details.
                    </p>
                </div>

                <div class="card preset-outlined-surface-200-800 p-6 space-y-3">
                    <h3 class="font-semibold">Do you offer technical support?</h3>
                    <p class="text-sm opacity-75">
                        Yes! We provide comprehensive technical support via email and our help center. Premium plans include priority support.
                    </p>
                </div>

                <div class="card preset-outlined-surface-200-800 p-6 space-y-3">
                    <h3 class="font-semibold">Can I cancel my subscription anytime?</h3>
                    <p class="text-sm opacity-75">
                        Absolutely. You can cancel your subscription at any time from your dashboard. Your access will continue until the end of your billing period.
                    </p>
                </div>

                <div class="card preset-outlined-surface-200-800 p-6 space-y-3">
                    <h3 class="font-semibold">Is there a free trial?</h3>
                    <p class="text-sm opacity-75">
                        Yes! We offer a 14-day free trial for all new users. No credit card required to get started.
                    </p>
                </div>
            </div>
        </section>
    </div>
</div> 