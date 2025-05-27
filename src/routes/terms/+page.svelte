<script lang="ts">
    import { FileText, Calendar, Mail, Scale } from 'lucide-svelte';

    const lastUpdated = 'December 15, 2024';
</script>

<svelte:head>
    <title>Terms of Service - User Agreement</title>
    <meta name="description" content="Read our terms of service to understand your rights and obligations when using our SaaS platform." />
</svelte:head>

<aside class="bg-primary-50-950 p-8 text-center">
    These terms of service are a placeholder, and only an example of styling one for the template.
</aside>

<div class="container mx-auto py-20">
    <div class="max-w-4xl mx-auto space-y-12">
        <!-- Header -->
        <header class="text-center space-y-4">
            <div class="flex items-center justify-center gap-2 mb-4">
                <Scale class="size-8 text-primary-500" />
                <h1 class="h1">Terms of <span class="text-primary-500">Service</span></h1>
            </div>
            <p class="text-xl opacity-75 max-w-2xl mx-auto">
                These terms govern your use of our platform. Please read them carefully before using our services.
            </p>
            <div class="flex items-center justify-center gap-2 text-sm opacity-50">
                <Calendar class="size-4" />
                <span>Last updated: {lastUpdated}</span>
            </div>
        </header>

        <!-- Content -->
        <div class="prose prose-lg max-w-none">
            <div class="card preset-outlined-surface-200-800 p-8 space-y-8">
                <section class="space-y-4">
                    <h2 class="h3 flex items-center gap-2">
                        <FileText class="size-5 text-primary-500" />
                        Acceptance of Terms
                    </h2>
                    <p class="opacity-75">
                        By accessing or using our SaaS platform ("Service"), you agree to be bound by these 
                        Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                    </p>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">Description of Service</h2>
                    <p class="opacity-75">
                        Our platform provides software-as-a-service solutions including but not limited to:
                    </p>
                    <ul class="list-disc list-inside space-y-1 opacity-75 ml-4">
                        <li>User authentication and account management</li>
                        <li>Data storage and processing capabilities</li>
                        <li>API access and integrations</li>
                        <li>Customer support and documentation</li>
                    </ul>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">User Accounts</h2>
                    <div class="space-y-3">
                        <h4 class="font-semibold">Account Creation</h4>
                        <p class="opacity-75">
                            You must provide accurate and complete information when creating an account. 
                            You are responsible for maintaining the confidentiality of your account credentials.
                        </p>
                        
                        <h4 class="font-semibold">Account Responsibility</h4>
                        <ul class="list-disc list-inside space-y-1 opacity-75 ml-4">
                            <li>You are responsible for all activities under your account</li>
                            <li>Notify us immediately of any unauthorized use</li>
                            <li>Maintain accurate and up-to-date account information</li>
                            <li>Comply with all applicable laws and regulations</li>
                        </ul>
                    </div>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">Acceptable Use</h2>
                    <p class="opacity-75">
                        You agree not to use the Service for any unlawful purpose or in any way that could damage, 
                        disable, overburden, or impair the Service.
                    </p>
                    <div class="space-y-3">
                        <h4 class="font-semibold">Prohibited Activities:</h4>
                        <ul class="list-disc list-inside space-y-1 opacity-75 ml-4">
                            <li>Violating any applicable laws or regulations</li>
                            <li>Infringing on intellectual property rights</li>
                            <li>Transmitting harmful or malicious code</li>
                            <li>Attempting to gain unauthorized access</li>
                            <li>Interfering with other users' use of the Service</li>
                            <li>Using the Service for spam or unsolicited communications</li>
                        </ul>
                    </div>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">Payment Terms</h2>
                    <div class="space-y-3">
                        <h4 class="font-semibold">Subscription Fees</h4>
                        <p class="opacity-75">
                            Subscription fees are billed in advance on a monthly or annual basis. 
                            All fees are non-refundable except as expressly stated in these Terms.
                        </p>
                        
                        <h4 class="font-semibold">Payment Processing</h4>
                        <ul class="list-disc list-inside space-y-1 opacity-75 ml-4">
                            <li>Payment is due upon subscription or renewal</li>
                            <li>We may suspend access for overdue payments</li>
                            <li>Price changes require 30 days advance notice</li>
                            <li>Taxes are your responsibility unless otherwise stated</li>
                        </ul>
                    </div>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">Data and Privacy</h2>
                    <p class="opacity-75">
                        We respect your privacy and handle your data in accordance with our Privacy Policy. 
                        By using the Service, you consent to our collection and use of information as described.
                    </p>
                    <div class="space-y-3">
                        <h4 class="font-semibold">Your Data:</h4>
                        <ul class="list-disc list-inside space-y-1 opacity-75 ml-4">
                            <li>You retain ownership of your data</li>
                            <li>We may access data to provide technical support</li>
                            <li>We implement security measures to protect your data</li>
                            <li>You can export your data at any time</li>
                        </ul>
                    </div>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">Intellectual Property</h2>
                    <p class="opacity-75">
                        The Service and its original content, features, and functionality are owned by us and 
                        are protected by international copyright, trademark, patent, and other intellectual property laws.
                    </p>
                    <div class="space-y-3">
                        <h4 class="font-semibold">License Grant:</h4>
                        <p class="opacity-75">
                            We grant you a limited, non-exclusive, non-transferable license to use the Service 
                            for your internal business purposes in accordance with these Terms.
                        </p>
                    </div>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">Service Availability</h2>
                    <p class="opacity-75">
                        We strive to maintain high availability but do not guarantee uninterrupted access to the Service. 
                        We may perform maintenance, updates, or modifications that temporarily affect availability.
                    </p>
                    <ul class="list-disc list-inside space-y-1 opacity-75 ml-4">
                        <li>We aim for 99.9% uptime on our paid plans</li>
                        <li>Scheduled maintenance will be announced in advance</li>
                        <li>We provide status updates during outages</li>
                    </ul>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">Termination</h2>
                    <div class="space-y-3">
                        <h4 class="font-semibold">By You:</h4>
                        <p class="opacity-75">
                            You may terminate your account at any time through your account settings. 
                            Your access will continue until the end of your current billing period.
                        </p>
                        
                        <h4 class="font-semibold">By Us:</h4>
                        <p class="opacity-75">
                            We may terminate or suspend your account immediately for violations of these Terms, 
                            illegal activities, or non-payment of fees.
                        </p>
                    </div>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">Limitation of Liability</h2>
                    <p class="opacity-75">
                        To the maximum extent permitted by law, we shall not be liable for any indirect, 
                        incidental, special, consequential, or punitive damages arising from your use of the Service.
                    </p>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">Indemnification</h2>
                    <p class="opacity-75">
                        You agree to indemnify and hold us harmless from any claims, damages, or expenses 
                        arising from your use of the Service or violation of these Terms.
                    </p>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">Governing Law</h2>
                    <p class="opacity-75">
                        These Terms shall be governed by and construed in accordance with the laws of 
                        [Your Jurisdiction], without regard to its conflict of law provisions.
                    </p>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">Changes to Terms</h2>
                    <p class="opacity-75">
                        We reserve the right to modify these Terms at any time. We will notify users of 
                        material changes via email or through the Service. Continued use constitutes acceptance of updated Terms.
                    </p>
                </section>
            </div>
        </div>

        <!-- Contact Information -->
        <div class="card preset-filled-primary-500 p-8 text-center">
            <div class="flex items-center justify-center gap-2 mb-4">
                <Mail class="size-6" />
                <h2 class="h3">Questions About These Terms?</h2>
            </div>
            <p class="opacity-90 mb-6">
                If you have any questions about these Terms of Service, please contact our legal team.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" class="btn preset-outlined-surface-200-800">
                    Contact Us
                </a>
                <a href="mailto:legal@sassy.dev" class="btn preset-ghost-surface-200-800">
                    legal@sassy.dev
                </a>
            </div>
        </div>
    </div>
</div> 