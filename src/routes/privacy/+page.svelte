<script lang="ts">
    import { Shield, Calendar, Mail, FileText, Eye, Lock, Share, Cookie, Globe, UserCheck, AlertTriangle, Database } from '@lucide/svelte';

    const lastUpdated = 'May 27, 2025';
</script>

<svelte:head>
    <title>Privacy Policy - How We Protect Your Data</title>
    <meta name="description" content="Learn how we collect, use, and protect your personal information in our comprehensive privacy policy." />
</svelte:head>

<!-- Notice Banner -->
<div class="bg-warning-50 dark:bg-warning-950 border-warning-200 dark:border-warning-800 border-b">
	<div class="container mx-auto px-6 py-4">
		<div class="text-warning-800 dark:text-warning-200 flex items-center gap-3">
			<AlertTriangle class="size-5 flex-shrink-0" />
			<p class="text-sm">
				<strong>Template Notice:</strong> This privacy policy is a placeholder example for styling
				purposes only.
			</p>
		</div>
	</div>
</div>

<div class="container mx-auto py-20">
    <div class="max-w-4xl mx-auto space-y-12">
        <!-- Header Section -->
        <header class="text-center space-y-6">
            <div class="inline-flex items-center justify-center p-3 bg-primary-500/10 rounded-full mb-4">
                <Shield class="size-8 text-primary-500" />
            </div>
            <div class="space-y-4">
                <h1 class="h1">Privacy <span class="text-primary-500">Policy</span></h1>
                <p class="text-xl opacity-75 max-w-2xl mx-auto">
                    We take your privacy seriously. This policy explains how we collect, use, and protect your personal information.
                </p>
            </div>
            <div class="flex items-center justify-center gap-2 text-sm opacity-50">
                <Calendar class="size-4" />
                <span>Last updated: {lastUpdated}</span>
            </div>
        </header>

        <!-- Quick Navigation -->
        <div class="card preset-outlined-surface-200-800 p-6">
            <h2 class="h4 mb-4 flex items-center gap-2">
                <FileText class="size-5 text-primary-500" />
                Quick Navigation
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                <a href="#collection" class="btn preset-ghost-surface-200-800 justify-start">Information Collection</a>
                <a href="#usage" class="btn preset-ghost-surface-200-800 justify-start">How We Use Data</a>
                <a href="#sharing" class="btn preset-ghost-surface-200-800 justify-start">Information Sharing</a>
                <a href="#security" class="btn preset-ghost-surface-200-800 justify-start">Data Security</a>
                <a href="#rights" class="btn preset-ghost-surface-200-800 justify-start">Your Rights</a>
                <a href="#cookies" class="btn preset-ghost-surface-200-800 justify-start">Cookies & Tracking</a>
            </div>
        </div>

        <!-- Privacy Highlights -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="card preset-filled-success-500 p-6 text-center text-white">
                <Lock class="size-8 mx-auto mb-3" />
                <h3 class="font-semibold mb-2">Secure</h3>
                <p class="text-sm opacity-90">Data encrypted in transit and at rest</p>
            </div>
            <div class="card preset-filled-primary-500 p-6 text-center text-white">
                <UserCheck class="size-8 mx-auto mb-3" />
                <h3 class="font-semibold mb-2">Transparent</h3>
                <p class="text-sm opacity-90">Clear policies on data usage</p>
            </div>
            <div class="card preset-filled-secondary-500 p-6 text-center text-white">
                <Shield class="size-8 mx-auto mb-3" />
                <h3 class="font-semibold mb-2">Compliant</h3>
                <p class="text-sm opacity-90">GDPR and privacy law compliant</p>
            </div>
        </div>

        <!-- Main Content -->
        <div class="space-y-8">
            <!-- Information We Collect -->
            <section id="collection" class="card preset-outlined-surface-200-800 p-8 space-y-6">
                <header class="flex items-center gap-3 pb-4 border-b border-surface-300-600">
                    <div class="p-2 bg-primary-500/10 rounded-lg">
                        <Database class="size-5 text-primary-500" />
                    </div>
                    <h2 class="h3">Information We Collect</h2>
                </header>
                <div class="space-y-6">
                    <p class="opacity-75 leading-relaxed">
                        We collect information you provide directly to us, such as when you create an account, 
                        update your profile, or contact us for support.
                    </p>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="space-y-4">
                            <h4 class="font-semibold text-primary-500 flex items-center gap-2">
                                <UserCheck class="size-4" />
                                Personal Information
                            </h4>
                            <div class="space-y-3">
                                {#each [
                                    'Name and email address',
                                    'Profile information and preferences',
                                    'Payment and billing information',
                                    'Communication history with our support team'
                                ] as item}
                                    <div class="flex items-start gap-3 p-3 bg-surface-50-900 rounded-lg">
                                        <Eye class="size-4 text-primary-500 flex-shrink-0 mt-0.5" />
                                        <span class="text-sm opacity-75">{item}</span>
                                    </div>
                                {/each}
                            </div>
                        </div>
                        
                        <div class="space-y-4">
                            <h4 class="font-semibold text-secondary-500 flex items-center gap-2">
                                <Globe class="size-4" />
                                Usage Information
                            </h4>
                            <div class="space-y-3">
                                {#each [
                                    'Log data and device information',
                                    'Usage patterns and feature interactions',
                                    'Performance and error data'
                                ] as item}
                                    <div class="flex items-start gap-3 p-3 bg-surface-50-900 rounded-lg">
                                        <Eye class="size-4 text-secondary-500 flex-shrink-0 mt-0.5" />
                                        <span class="text-sm opacity-75">{item}</span>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- How We Use Your Information -->
            <section id="usage" class="card preset-outlined-surface-200-800 p-8 space-y-6">
                <header class="flex items-center gap-3 pb-4 border-b border-surface-300-600">
                    <div class="p-2 bg-secondary-500/10 rounded-lg">
                        <FileText class="size-5 text-secondary-500" />
                    </div>
                    <h2 class="h3">How We Use Your Information</h2>
                </header>
                <div class="space-y-6">
                    <p class="opacity-75 leading-relaxed">
                        We use the information we collect to provide, maintain, and improve our services.
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {#each [
                            'Provide and operate our SaaS platform',
                            'Process transactions and send related information',
                            'Send technical notices and support messages',
                            'Respond to customer service requests',
                            'Improve our services and develop new features',
                            'Monitor usage and prevent fraud or abuse'
                        ] as usage}
                            <div class="flex items-start gap-3 p-4 bg-primary-50 dark:bg-primary-950 rounded-lg border border-primary-200 dark:border-primary-800">
                                <Shield class="size-4 text-primary-500 flex-shrink-0 mt-1" />
                                <span class="text-sm text-primary-700 dark:text-primary-300">{usage}</span>
                            </div>
                        {/each}
                    </div>
                </div>
            </section>

            <!-- Information Sharing -->
            <section id="sharing" class="card preset-outlined-surface-200-800 p-8 space-y-6">
                <header class="flex items-center gap-3 pb-4 border-b border-surface-300-600">
                    <div class="p-2 bg-warning-500/10 rounded-lg">
                        <Share class="size-5 text-warning-500" />
                    </div>
                    <h2 class="h3">Information Sharing</h2>
                </header>
                <div class="space-y-6">
                    <div class="bg-warning-50 dark:bg-warning-950 p-6 rounded-lg border border-warning-200 dark:border-warning-800">
                        <p class="text-warning-700 dark:text-warning-300 font-medium mb-3">
                            We do not sell, trade, or otherwise transfer your personal information to third parties 
                            except as described in this policy.
                        </p>
                    </div>
                    
                    <div class="space-y-4">
                        <h4 class="font-semibold text-warning-500 flex items-center gap-2">
                            <Share class="size-4" />
                            We may share your information:
                        </h4>
                        <div class="space-y-3">
                            {#each [
                                'With service providers who assist our operations',
                                'To comply with legal obligations',
                                'To protect our rights and prevent fraud',
                                'In connection with a business transfer'
                            ] as sharing}
                                <div class="flex items-start gap-2">
                                    <div class="w-2 h-2 bg-warning-500 rounded-full flex-shrink-0 mt-2"></div>
                                    <span class="text-sm opacity-75">{sharing}</span>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </section>

            <!-- Additional Sections in Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Data Security -->
                <div id="security" class="card preset-outlined-surface-200-800 p-6 space-y-4">
                    <header class="flex items-center gap-2 pb-3 border-b border-surface-300-600">
                        <Lock class="size-5 text-success-500" />
                        <h3 class="h4">Data Security</h3>
                    </header>
                    <p class="opacity-75 text-sm leading-relaxed mb-4">
                        We implement appropriate security measures to protect your personal information.
                    </p>
                    <div class="space-y-2">
                        {#each [
                            'Encryption of data in transit and at rest',
                            'Regular security assessments',
                            'Access controls and authentication',
                            'Employee training on data protection'
                        ] as security}
                            <div class="flex items-start gap-2">
                                <Lock class="size-3 text-success-500 flex-shrink-0 mt-1" />
                                <span class="text-xs opacity-75">{security}</span>
                            </div>
                        {/each}
                    </div>
                </div>

                <!-- Your Rights -->
                <div id="rights" class="card preset-outlined-surface-200-800 p-6 space-y-4">
                    <header class="flex items-center gap-2 pb-3 border-b border-surface-300-600">
                        <UserCheck class="size-5 text-primary-500" />
                        <h3 class="h4">Your Rights</h3>
                    </header>
                    <p class="opacity-75 text-sm leading-relaxed mb-4">
                        You have certain rights regarding your personal information:
                    </p>
                    <div class="space-y-2">
                        {#each [
                            { right: 'Access', description: 'Request a copy of your data' },
                            { right: 'Update', description: 'Correct inaccurate information' },
                            { right: 'Delete', description: 'Request data deletion' },
                            { right: 'Portability', description: 'Receive data in portable format' }
                        ] as { right, description }}
                            <div class="flex items-start gap-2">
                                <UserCheck class="size-3 text-primary-500 flex-shrink-0 mt-1" />
                                <div>
                                    <span class="text-xs font-semibold text-primary-500">{right}:</span>
                                    <span class="text-xs opacity-75"> {description}</span>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>

                <!-- Data Retention -->
                <div class="card preset-outlined-surface-200-800 p-6 space-y-4">
                    <header class="flex items-center gap-2 pb-3 border-b border-surface-300-600">
                        <Database class="size-5 text-tertiary-500" />
                        <h3 class="h4">Data Retention</h3>
                    </header>
                    <p class="opacity-75 text-sm leading-relaxed">
                        We retain your personal information for as long as necessary to provide our services 
                        and fulfill the purposes outlined in this policy, unless a longer retention period 
                        is required by law.
                    </p>
                </div>

                <!-- Cookies and Tracking -->
                <div id="cookies" class="card preset-outlined-surface-200-800 p-6 space-y-4">
                    <header class="flex items-center gap-2 pb-3 border-b border-surface-300-600">
                        <Cookie class="size-5 text-warning-500" />
                        <h3 class="h4">Cookies & Tracking</h3>
                    </header>
                    <p class="opacity-75 text-sm leading-relaxed">
                        We use cookies and similar technologies to enhance your experience, analyze usage, 
                        and provide personalized content. You can control cookie settings through your browser.
                    </p>
                </div>
            </div>

            <!-- International Transfers & Changes -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="card preset-outlined-surface-200-800 p-6 space-y-4">
                    <header class="flex items-center gap-2 pb-3 border-b border-surface-300-600">
                        <Globe class="size-5 text-secondary-500" />
                        <h3 class="h4">International Data Transfers</h3>
                    </header>
                    <p class="opacity-75 text-sm leading-relaxed">
                        Your information may be transferred to and processed in countries other than your own. 
                        We ensure appropriate safeguards are in place to protect your data.
                    </p>
                </div>

                <div class="card preset-outlined-primary-500 p-6 space-y-4">
                    <header class="flex items-center gap-2 pb-3 border-b border-primary-300">
                        <Calendar class="size-5 text-primary-500" />
                        <h3 class="h4 text-primary-500">Changes to This Policy</h3>
                    </header>
                    <p class="text-sm opacity-75">
                        We may update this privacy policy from time to time. We will notify you of any 
                        material changes by posting the new policy on this page and updating the 
                        "last updated" date.
                    </p>
                </div>
            </div>
        </div>

        <!-- Contact CTA -->
        <div class="card preset-filled-primary-500 p-8 text-center text-white">
            <div class="flex items-center justify-center gap-2 mb-4">
                <Mail class="size-6" />
                <h2 class="h3">Questions About Privacy?</h2>
            </div>
            <p class="opacity-90 mb-6 max-w-2xl mx-auto">
                If you have any questions about this privacy policy or our data practices, 
                please don't hesitate to contact us. We're committed to protecting your privacy.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" class="btn preset-filled-surface-50 text-primary-500 hover:bg-surface-100">
                    Contact Us
                </a>
                <a href="mailto:privacy@sassy.dev" class="btn preset-outlined-surface-50 text-white border-white/30 hover:bg-white/10">
                    privacy@sassy.dev
                </a>
            </div>
        </div>
    </div>
</div>