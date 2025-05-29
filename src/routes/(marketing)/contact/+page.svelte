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
                                <p class="text-sm opacity-75">support@sveltey.dev</p>
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
            <h2 class="h2 text-center">Frequently Asked Questions</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div class="space-y-4">
                    <h3 class="h4 text-primary-500">How quickly do you respond?</h3>
                    <p class="opacity-75">
                        We aim to respond to all inquiries within 24 hours during business days. 
                        For urgent matters, please call us directly.
                    </p>
                </div>
                <div class="space-y-4">
                    <h3 class="h4 text-primary-500">Do you offer technical support?</h3>
                    <p class="opacity-75">
                        Yes! We provide comprehensive technical support for all our customers. 
                        Premium plans include priority support with faster response times.
                    </p>
                </div>
                <div class="space-y-4">
                    <h3 class="h4 text-primary-500">Can I schedule a demo?</h3>
                    <p class="opacity-75">
                        Absolutely! Contact us to schedule a personalized demo of our platform. 
                        We'll show you how our solution can meet your specific needs.
                    </p>
                </div>
                <div class="space-y-4">
                    <h3 class="h4 text-primary-500">What about custom solutions?</h3>
                    <p class="opacity-75">
                        We offer custom development and integration services for enterprise clients. 
                        Reach out to discuss your specific requirements.
                    </p>
                </div>
            </div>
        </section>
    </div>
</div> 