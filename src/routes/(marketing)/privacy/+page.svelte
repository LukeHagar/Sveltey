<script lang="ts">
    import { Shield, Eye, Lock, Users, FileText, Mail, AlertTriangle } from '@lucide/svelte';
</script>

<div class="container mx-auto py-20 max-w-4xl">
    <!-- Header -->
    <header class="text-center space-y-6 mb-16">
        <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                <Shield class="size-6 text-white" />
            </div>
            <h1 class="h1">Privacy <span class="text-primary-500">Policy</span></h1>
        </div>
        <p class="text-xl opacity-75 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>
        <div class="text-sm opacity-50">
            Last updated: May 27, 2025
        </div>
    </header>

    <!-- Warning Notice -->
    <div class="card preset-outlined-warning-500 p-6 mb-12">
        <div class="flex items-start gap-3">
            <AlertTriangle class="size-5 text-warning-500 flex-shrink-0 mt-0.5" />
            <div class="space-y-2">
                <h3 class="font-semibold text-warning-700 dark:text-warning-300">Template Notice</h3>
                <p class="text-sm text-warning-600 dark:text-warning-400">
                    This is a template privacy policy for demonstration purposes. Please consult with legal professionals 
                    to create a privacy policy that complies with applicable laws and regulations for your specific use case.
                </p>
            </div>
        </div>
    </div>

    <!-- Quick Navigation -->
    <nav class="card preset-outlined-surface-500 p-6 mb-12">
        <h2 class="h4 mb-4 flex items-center gap-2">
            <FileText class="size-5 text-primary-500" />
            Quick Navigation
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <a href="#information-collection" class="text-primary-500 hover:text-primary-600 transition-colors">Information We Collect</a>
            <a href="#information-use" class="text-primary-500 hover:text-primary-600 transition-colors">How We Use Information</a>
            <a href="#information-sharing" class="text-primary-500 hover:text-primary-600 transition-colors">Information Sharing</a>
            <a href="#data-security" class="text-primary-500 hover:text-primary-600 transition-colors">Data Security</a>
            <a href="#your-rights" class="text-primary-500 hover:text-primary-600 transition-colors">Your Rights</a>
            <a href="#contact" class="text-primary-500 hover:text-primary-600 transition-colors">Contact Us</a>
        </div>
    </nav>

    <!-- Privacy Highlights -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div class="card preset-filled-success-500 p-6 text-center">
            <Lock class="size-8 mx-auto mb-3" />
            <h3 class="h5 mb-2 text-success-contrast-500 font-extrabold">Secure by Design</h3>
            <p class="text-sm text-success-contrast-500 opacity-90">
                Your data is encrypted and protected with industry-standard security measures.
            </p>
        </div>
        <div class="card preset-filled-primary-500 p-6 text-center">
            <Eye class="size-8 mx-auto mb-3" />
            <h3 class="h5 mb-2 text-primary-contrast-500 font-extrabold">Transparent</h3>
            <p class="text-sm text-primary-contrast-500 opacity-90">
                We're clear about what data we collect and how we use it.
            </p>
        </div>
        <div class="card preset-filled-secondary-500 p-6 text-center">
            <Users class="size-8 mx-auto mb-3" />
            <h3 class="h5 mb-2 text-secondary-contrast-500 font-extrabold">Your Control</h3>
            <p class="text-sm text-secondary-contrast-500 opacity-90">
                You have full control over your data and can request deletion at any time.
            </p>
        </div>
    </section>

    <!-- Main Content -->
    <div class="space-y-12">
        <!-- Information We Collect -->
        <section id="information-collection" class="space-y-6">
            <h2 class="h2 text-primary-500 flex items-center gap-2">
                <FileText class="size-6" />
                Information We Collect
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="card preset-outlined-surface-500 p-6 space-y-4">
                    <h3 class="h4">Account Information</h3>
                    <ul class="space-y-2 text-sm opacity-75">
                        <li>• Email address</li>
                        <li>• Name and profile information</li>
                        <li>• Authentication data</li>
                        <li>• Account preferences</li>
                    </ul>
                </div>
                
                <div class="card preset-outlined-surface-500 p-6 space-y-4">
                    <h3 class="h4">Usage Information</h3>
                    <ul class="space-y-2 text-sm opacity-75">
                        <li>• Application usage patterns</li>
                        <li>• Feature interactions</li>
                        <li>• Performance metrics</li>
                        <li>• Error logs and diagnostics</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- How We Use Information -->
        <section id="information-use" class="space-y-6">
            <h2 class="h2 text-primary-500 flex items-center gap-2">
                <Shield class="size-6" />
                How We Use Your Information
            </h2>
            
            <div class="space-y-4">
                <div class="card preset-outlined-surface-500 p-6">
                    <h3 class="h4 mb-3">Service Provision</h3>
                    <p class="opacity-75">
                        We use your information to provide, maintain, and improve our services, 
                        including user authentication, data storage, and feature functionality.
                    </p>
                </div>
                
                <div class="card preset-outlined-surface-500 p-6">
                    <h3 class="h4 mb-3">Communication</h3>
                    <p class="opacity-75">
                        We may use your contact information to send important service updates, 
                        security notifications, and respond to your support requests.
                    </p>
                </div>
                
                <div class="card preset-outlined-surface-500 p-6">
                    <h3 class="h4 mb-3">Analytics and Improvement</h3>
                    <p class="opacity-75">
                        We analyze usage patterns to understand how our service is used and 
                        to identify areas for improvement and new features.
                    </p>
                </div>
            </div>
        </section>

        <!-- Information Sharing -->
        <section id="information-sharing" class="space-y-6">
            <h2 class="h2 text-primary-500 flex items-center gap-2">
                <Users class="size-6" />
                Information Sharing
            </h2>
            
            <div class="card preset-outlined-surface-500 p-6">
                <p class="opacity-75 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties, 
                    except in the following circumstances:
                </p>
                <ul class="space-y-2 opacity-75">
                    <li>• <strong>Service Providers:</strong> Trusted third-party services that help us operate our platform</li>
                    <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li>• <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                    <li>• <strong>Consent:</strong> When you explicitly consent to sharing your information</li>
                </ul>
            </div>
        </section>

        <!-- Data Security -->
        <section id="data-security" class="space-y-6">
            <h2 class="h2 text-primary-500 flex items-center gap-2">
                <Lock class="size-6" />
                Data Security
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="card preset-outlined-surface-500 p-6 space-y-4">
                    <h3 class="h4">Technical Safeguards</h3>
                    <ul class="space-y-2 text-sm opacity-75">
                        <li>• End-to-end encryption</li>
                        <li>• Secure data transmission (HTTPS)</li>
                        <li>• Regular security audits</li>
                        <li>• Access controls and monitoring</li>
                    </ul>
                </div>
                
                <div class="card preset-outlined-surface-500 p-6 space-y-4">
                    <h3 class="h4">Operational Security</h3>
                    <ul class="space-y-2 text-sm opacity-75">
                        <li>• Employee training and background checks</li>
                        <li>• Incident response procedures</li>
                        <li>• Regular backups and disaster recovery</li>
                        <li>• Compliance with security standards</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Your Rights -->
        <section id="your-rights" class="space-y-6">
            <h2 class="h2 text-primary-500 flex items-center gap-2">
                <Eye class="size-6" />
                Your Rights and Choices
            </h2>
            
            <div class="space-y-4">
                <div class="card preset-outlined-surface-500 p-6">
                    <h3 class="h4 mb-3">Access and Portability</h3>
                    <p class="opacity-75">
                        You have the right to access your personal data and request a copy of your information 
                        in a portable format.
                    </p>
                </div>
                
                <div class="card preset-outlined-surface-500 p-6">
                    <h3 class="h4 mb-3">Correction and Updates</h3>
                    <p class="opacity-75">
                        You can update your account information at any time through your account settings 
                        or by contacting our support team.
                    </p>
                </div>
                
                <div class="card preset-outlined-surface-500 p-6">
                    <h3 class="h4 mb-3">Deletion</h3>
                    <p class="opacity-75">
                        You have the right to request deletion of your personal data. We will honor such requests 
                        except where retention is required by law.
                    </p>
                </div>
            </div>
        </section>

        <!-- Contact Information -->
        <section id="contact" class="space-y-6">
            <h2 class="h2 text-primary-500 flex items-center gap-2">
                <Mail class="size-6" />
                Contact Us
            </h2>
            
            <div class="card preset-outlined-primary-500 p-8 text-center space-y-4">
                <p class="opacity-75">
                    If you have any questions about this Privacy Policy or our data practices, 
                    please don't hesitate to contact us.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" class="btn preset-filled-primary-500">
                        <Mail class="size-4" />
                        Contact Support
                    </a>
                    <a href="mailto:privacy@sveltey.dev" class="btn preset-outlined-surface-500">
                        privacy@sveltey.dev
                    </a>
                </div>
            </div>
        </section>
    </div>
</div>