<script lang="ts">
    import { Shield, Calendar, Mail, FileText } from 'lucide-svelte';

    const lastUpdated = 'May 27, 2025';
</script>

<svelte:head>
    <title>Privacy Policy - How We Protect Your Data</title>
    <meta name="description" content="Learn how we collect, use, and protect your personal information in our comprehensive privacy policy." />
</svelte:head>

<aside class="bg-primary-50-950 p-8 text-center">
    This privacy policy is a placeholder, and only an example of styling one for the template.
</aside>

<div class="container mx-auto py-20">
    <div class="max-w-4xl mx-auto space-y-12">
        <!-- Header -->
        <header class="text-center space-y-4">
            <div class="flex items-center justify-center gap-2 mb-4">
                <Shield class="size-8 text-primary-500" />
                <h1 class="h1">Privacy <span class="text-primary-500">Policy</span></h1>
            </div>
            <p class="text-xl opacity-75 max-w-2xl mx-auto">
                We take your privacy seriously. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div class="flex items-center justify-center gap-2 text-sm opacity-50">
                <Calendar class="size-4" />
                <span>Last updated: {lastUpdated}</span>
            </div>
        </header>

        <!-- Content -->
        <div class="prose prose-lg max-w-none">
            <div class="card text-surface-950-50 p-8 space-y-8">
                <section class="space-y-4">
                    <h2 class="h3 flex items-center gap-2">
                        <FileText class="size-5 text-primary-500" />
                        Information We Collect
                    </h2>
                    <p class="opacity-75">
                        We collect information you provide directly to us, such as when you create an account, 
                        update your profile, or contact us for support.
                    </p>
                    <div class="space-y-3">
                        <h4 class="font-semibold h4">Personal Information:</h4>
                        <ul class="list-disc list-inside space-y-1 opacity-75 ml-4">
                            <li>Name and email address</li>
                            <li>Profile information and preferences</li>
                            <li>Payment and billing information</li>
                            <li>Communication history with our support team</li>
                        </ul>
                    </div>
                    <div class="space-y-3">
                        <h4 class="font-semibold h4">Usage Information:</h4>
                        <ul class="list-disc list-inside space-y-1 opacity-75 ml-4">
                            <li>Log data and device information</li>
                            <li>Usage patterns and feature interactions</li>
                            <li>Performance and error data</li>
                        </ul>
                    </div>
                </section>

                <section class="space-y-4">
                    <h2 class="h3 flex items-center gap-2">
                        <Shield class="size-5 text-primary-500" />
                        How We Use Your Information
                    </h2>
                    <p class="opacity-75">
                        We use the information we collect to provide, maintain, and improve our services.
                    </p>
                    <ul class="list-disc list-inside space-y-2 opacity-75 ml-4">
                        <li>Provide and operate our SaaS platform</li>
                        <li>Process transactions and send related information</li>
                        <li>Send technical notices and support messages</li>
                        <li>Respond to customer service requests</li>
                        <li>Improve our services and develop new features</li>
                        <li>Monitor usage and prevent fraud or abuse</li>
                    </ul>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">Information Sharing</h2>
                    <p class="opacity-75">
                        We do not sell, trade, or otherwise transfer your personal information to third parties 
                        except as described in this policy.
                    </p>
                    <div class="space-y-3">
                        <h4 class="font-semibold h4">We may share your information:</h4>
                        <ul class="list-disc list-inside space-y-1 opacity-75 ml-4">
                            <li>With service providers who assist our operations</li>
                            <li>To comply with legal obligations</li>
                            <li>To protect our rights and prevent fraud</li>
                            <li>In connection with a business transfer</li>
                        </ul>
                    </div>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">Data Security</h2>
                    <p class="opacity-75">
                        We implement appropriate security measures to protect your personal information against 
                        unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <ul class="list-disc list-inside space-y-2 opacity-75 ml-4">
                        <li>Encryption of data in transit and at rest</li>
                        <li>Regular security assessments and monitoring</li>
                        <li>Access controls and authentication measures</li>
                        <li>Employee training on data protection</li>
                    </ul>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">Your Rights and Choices</h2>
                    <p class="opacity-75">
                        You have certain rights regarding your personal information:
                    </p>
                    <ul class="list-disc list-inside space-y-2 opacity-75 ml-4">
                        <li><strong class="font-semibold text-primary-500">Access:</strong> Request a copy of your personal information</li>
                        <li><strong class="font-semibold text-primary-500">Update:</strong> Correct inaccurate or incomplete information</li>
                        <li><strong class="font-semibold text-primary-500">Delete:</strong> Request deletion of your personal information</li>
                        <li><strong class="font-semibold text-primary-500">Portability:</strong> Receive your data in a portable format</li>
                        <li><strong class="font-semibold text-primary-500">Opt-out:</strong> Unsubscribe from marketing communications</li>
                    </ul>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">Data Retention</h2>
                    <p class="opacity-75">
                        We retain your personal information for as long as necessary to provide our services 
                        and fulfill the purposes outlined in this policy, unless a longer retention period 
                        is required by law.
                    </p>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">Cookies and Tracking</h2>
                    <p class="opacity-75">
                        We use cookies and similar technologies to enhance your experience, analyze usage, 
                        and provide personalized content.
                    </p>
                    <p class="opacity-75">
                        You can control cookie settings through your browser preferences. However, 
                        disabling cookies may affect the functionality of our service.
                    </p>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">International Data Transfers</h2>
                    <p class="opacity-75">
                        Your information may be transferred to and processed in countries other than your own. 
                        We ensure appropriate safeguards are in place to protect your data.
                    </p>
                </section>

                <section class="space-y-4">
                    <h2 class="h3">Changes to This Policy</h2>
                    <p class="opacity-75">
                        We may update this privacy policy from time to time. We will notify you of any 
                        material changes by posting the new policy on this page and updating the 
                        "last updated" date.
                    </p>
                </section>
            </div>
        </div>

        <!-- Contact Information -->
        <div class="card preset-filled-primary-500 p-8 text-center">
            <div class="flex items-center justify-center gap-2 mb-4">
                <Mail class="size-6" />
                <h2 class="h3">Questions About Privacy?</h2>
            </div>
            <p class="opacity-90 mb-6">
                If you have any questions about this privacy policy or our data practices, 
                please don't hesitate to contact us.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" class="btn preset-filled-surface-200-800">
                    Contact Us
                </a>
                <a href="mailto:privacy@sassy.dev" class="btn preset-ghost-surface-200-800">
                    privacy@sassy.dev
                </a>
            </div>
        </div>
    </div>
</div> 