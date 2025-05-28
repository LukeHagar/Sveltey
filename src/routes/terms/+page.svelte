<script lang="ts">
	import {
		FileText,
		Calendar,
		Mail,
		Scale,
		Check,
		AlertTriangle,
		CreditCard,
		Shield,
		Users,
		Globe,
		Gavel,
		FileX
	} from '@lucide/svelte';

	const lastUpdated = 'May 28, 2025';
</script>

<svelte:head>
	<title>Terms of Service - User Agreement</title>
	<meta
		name="description"
		content="Read our terms of service to understand your rights and obligations when using our SaaS platform."
	/>
</svelte:head>

<!-- Notice Banner -->
<div class="bg-warning-50 dark:bg-warning-950 border-warning-200 dark:border-warning-800 border-b">
	<div class="container mx-auto px-6 py-4">
		<div class="text-warning-800 dark:text-warning-200 flex items-center gap-3">
			<AlertTriangle class="size-5 flex-shrink-0" />
			<p class="text-sm">
				<strong>Template Notice:</strong> These terms of service are a placeholder example for styling
				purposes only.
			</p>
		</div>
	</div>
</div>

<div class="container mx-auto py-20">
	<div class="mx-auto max-w-4xl space-y-12">
		<!-- Header Section -->
		<header class="space-y-6 text-center">
			<div class="bg-primary-500/10 mb-4 inline-flex items-center justify-center rounded-full p-3">
				<Scale class="text-primary-500 size-8" />
			</div>
			<div class="space-y-4">
				<h1 class="h1">Terms of <span class="text-primary-500">Service</span></h1>
				<p class="mx-auto max-w-2xl text-xl opacity-75">
					These terms govern your use of our platform. Please read them carefully before using our
					services.
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
				<FileText class="text-primary-500 size-5" />
				Quick Navigation
			</h2>
			<div class="grid grid-cols-1 gap-3 text-sm md:grid-cols-2 lg:grid-cols-3">
				<a href="#acceptance" class="btn preset-ghost-surface-200-800 justify-start"
					>Acceptance of Terms</a
				>
				<a href="#service" class="btn preset-ghost-surface-200-800 justify-start"
					>Service Description</a
				>
				<a href="#accounts" class="btn preset-ghost-surface-200-800 justify-start">User Accounts</a>
				<a href="#usage" class="btn preset-ghost-surface-200-800 justify-start">Acceptable Use</a>
				<a href="#payment" class="btn preset-ghost-surface-200-800 justify-start">Payment Terms</a>
				<a href="#privacy" class="btn preset-ghost-surface-200-800 justify-start">Data & Privacy</a>
			</div>
		</div>

		<!-- Main Content -->
		<div class="space-y-8">
			<!-- Acceptance of Terms -->
			<section id="acceptance" class="card preset-outlined-surface-200-800 space-y-6 p-8">
				<header class="border-surface-300-600 flex items-center gap-3 border-b pb-4">
					<div class="bg-primary-500/10 rounded-lg p-2">
						<FileText class="text-primary-500 size-5" />
					</div>
					<h2 class="h3">Acceptance of Terms</h2>
				</header>
				<div class="space-y-4">
					<p class="leading-relaxed opacity-75">
						By accessing or using our SaaS platform ("Service"), you agree to be bound by these
						Terms of Service ("Terms"). If you disagree with any part of these terms, you may not
						access the Service.
					</p>
					<div
						class="bg-primary-50 dark:bg-primary-950 border-primary-200 dark:border-primary-800 rounded-lg border p-4"
					>
						<p class="text-primary-700 dark:text-primary-300 flex items-start gap-2 text-sm">
							<Check class="mt-0.5 size-4 flex-shrink-0" />
							By creating an account, you confirm that you have read, understood, and agree to these
							terms.
						</p>
					</div>
				</div>
			</section>

			<!-- Description of Service -->
			<section id="service" class="card preset-outlined-surface-200-800 space-y-6 p-8">
				<header class="border-surface-300-600 flex items-center gap-3 border-b pb-4">
					<div class="bg-secondary-500/10 rounded-lg p-2">
						<Globe class="text-secondary-500 size-5" />
					</div>
					<h2 class="h3">Description of Service</h2>
				</header>
				<div class="space-y-4">
					<p class="leading-relaxed opacity-75">
						Our platform provides software-as-a-service solutions including but not limited to:
					</p>
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div class="space-y-3">
							{#each ['User authentication and account management', 'Data storage and processing capabilities'] as feature}
								<div class="bg-surface-50-900 flex items-start gap-3 rounded-lg p-3">
									<Check class="text-success-500 mt-0.5 size-4 flex-shrink-0" />
									<span class="text-sm opacity-75">{feature}</span>
								</div>
							{/each}
						</div>
						<div class="space-y-3">
							{#each ['API access and integrations', 'Customer support and documentation'] as feature}
								<div class="bg-surface-50-900 flex items-start gap-3 rounded-lg p-3">
									<Check class="text-success-500 mt-0.5 size-4 flex-shrink-0" />
									<span class="text-sm opacity-75">{feature}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</section>

			<!-- User Accounts -->
			<section id="accounts" class="card preset-outlined-surface-200-800 space-y-6 p-8">
				<header class="border-surface-300-600 flex items-center gap-3 border-b pb-4">
					<div class="bg-tertiary-500/10 rounded-lg p-2">
						<Users class="text-tertiary-500 size-5" />
					</div>
					<h2 class="h3">User Accounts</h2>
				</header>
				<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
					<div class="space-y-4">
						<h4 class="text-primary-500 flex items-center gap-2 font-semibold">
							<Check class="size-4" />
							Account Creation
						</h4>
						<p class="text-sm leading-relaxed opacity-75">
							You must provide accurate and complete information when creating an account. You are
							responsible for maintaining the confidentiality of your account credentials.
						</p>
					</div>
					<div class="space-y-4">
						<h4 class="text-primary-500 flex items-center gap-2 font-semibold">
							<Shield class="size-4" />
							Account Responsibility
						</h4>
						<div class="space-y-2">
							{#each ['You are responsible for all activities under your account', 'Notify us immediately of any unauthorized use', 'Maintain accurate and up-to-date account information', 'Comply with all applicable laws and regulations'] as responsibility}
								<div class="flex items-start gap-2">
									<div class="bg-primary-500 mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
									<span class="text-sm opacity-75">{responsibility}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</section>

			<!-- Acceptable Use -->
			<section id="usage" class="card preset-outlined-surface-200-800 space-y-6 p-8">
				<header class="border-surface-300-600 flex items-center gap-3 border-b pb-4">
					<div class="bg-warning-500/10 rounded-lg p-2">
						<AlertTriangle class="text-warning-500 size-5" />
					</div>
					<h2 class="h3">Acceptable Use</h2>
				</header>
				<div class="space-y-6">
					<p class="leading-relaxed opacity-75">
						You agree not to use the Service for any unlawful purpose or in any way that could
						damage, disable, overburden, or impair the Service.
					</p>
					<div
						class="bg-error-50 dark:bg-error-950 border-error-200 dark:border-error-800 rounded-lg border p-6"
					>
						<h4
							class="text-error-700 dark:text-error-300 mb-4 flex items-center gap-2 font-semibold"
						>
							<FileX class="size-4" />
							Prohibited Activities
						</h4>
						<div class="grid grid-cols-1 gap-3 md:grid-cols-2">
							{#each ['Violating any applicable laws or regulations', 'Infringing on intellectual property rights', 'Transmitting harmful or malicious code', 'Attempting to gain unauthorized access', "Interfering with other users' use of the Service", 'Using the Service for spam or unsolicited communications'] as prohibition}
								<div class="flex items-start gap-2">
									<FileX class="text-error-500 mt-1 size-3 flex-shrink-0" />
									<span class="text-error-700 dark:text-error-300 text-sm">{prohibition}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</section>

			<!-- Payment Terms -->
			<section id="payment" class="card preset-outlined-surface-200-800 space-y-6 p-8">
				<header class="border-surface-300-600 flex items-center gap-3 border-b pb-4">
					<div class="bg-success-500/10 rounded-lg p-2">
						<CreditCard class="text-success-500 size-5" />
					</div>
					<h2 class="h3">Payment Terms</h2>
				</header>
				<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
					<div class="space-y-4">
						<h4 class="text-success-500 flex items-center gap-2 font-semibold">
							<CreditCard class="size-4" />
							Subscription Fees
						</h4>
						<p class="text-sm leading-relaxed opacity-75">
							Subscription fees are billed in advance on a monthly or annual basis. All fees are
							non-refundable except as expressly stated in these Terms.
						</p>
					</div>
					<div class="space-y-4">
						<h4 class="text-success-500 flex items-center gap-2 font-semibold">
							<Check class="size-4" />
							Payment Processing
						</h4>
						<div class="space-y-2">
							{#each ['Payment is due upon subscription or renewal', 'We may suspend access for overdue payments', 'Price changes require 30 days advance notice', 'Taxes are your responsibility unless otherwise stated'] as term}
								<div class="flex items-start gap-2">
									<div class="bg-success-500 mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
									<span class="text-sm opacity-75">{term}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</section>

			<!-- Additional Sections in Compact Cards -->
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
				<!-- Data and Privacy -->
				<div id="privacy" class="card preset-outlined-surface-200-800 space-y-4 p-6">
					<header class="border-surface-300-600 flex items-center gap-2 border-b pb-3">
						<Shield class="text-primary-500 size-5" />
						<h3 class="h4">Data and Privacy</h3>
					</header>
					<p class="text-sm leading-relaxed opacity-75">
						We respect your privacy and handle your data in accordance with our
						<a href="/privacy" class="text-primary-500 hover:text-primary-400 transition-colors"
							>Privacy Policy</a
						>. You retain ownership of your data and can export it at any time.
					</p>
				</div>

				<!-- Intellectual Property -->
				<div class="card preset-outlined-surface-200-800 space-y-4 p-6">
					<header class="border-surface-300-600 flex items-center gap-2 border-b pb-3">
						<FileText class="text-secondary-500 size-5" />
						<h3 class="h4">Intellectual Property</h3>
					</header>
					<p class="text-sm leading-relaxed opacity-75">
						The Service and its content are protected by intellectual property laws. We grant you a
						limited license to use the Service for your business purposes.
					</p>
				</div>

				<!-- Service Availability -->
				<div class="card preset-outlined-surface-200-800 space-y-4 p-6">
					<header class="border-surface-300-600 flex items-center gap-2 border-b pb-3">
						<Globe class="text-tertiary-500 size-5" />
						<h3 class="h4">Service Availability</h3>
					</header>
					<p class="text-sm leading-relaxed opacity-75">
						We aim for 99.9% uptime and will announce scheduled maintenance in advance. Status
						updates are provided during any service outages.
					</p>
				</div>

				<!-- Termination -->
				<div class="card preset-outlined-surface-200-800 space-y-4 p-6">
					<header class="border-surface-300-600 flex items-center gap-2 border-b pb-3">
						<FileX class="text-warning-500 size-5" />
						<h3 class="h4">Termination</h3>
					</header>
					<p class="text-sm leading-relaxed opacity-75">
						You may terminate your account anytime. We may suspend accounts for violations. Access
						continues until the end of your billing period.
					</p>
				</div>
			</div>

			<!-- Legal Notices -->
			<div class="card preset-outlined-surface-200-800 space-y-6 p-8">
				<header class="border-surface-300-600 flex items-center gap-3 border-b pb-4">
					<div class="bg-warning-500/10 rounded-lg p-2">
						<Gavel class="text-warning-500 size-5" />
					</div>
					<h2 class="h3">Legal Notices</h2>
				</header>
				<div class="grid grid-cols-1 gap-6 text-sm md:grid-cols-3">
					<div class="space-y-2">
						<h4 class="font-semibold">Limitation of Liability</h4>
						<p class="opacity-75">
							We shall not be liable for indirect, incidental, or consequential damages arising from
							your use of the Service.
						</p>
					</div>
					<div class="space-y-2">
						<h4 class="font-semibold">Indemnification</h4>
						<p class="opacity-75">
							You agree to indemnify us from claims arising from your use of the Service or
							violation of these Terms.
						</p>
					</div>
					<div class="space-y-2">
						<h4 class="font-semibold">Governing Law</h4>
						<p class="opacity-75">
							These Terms are governed by [Your Jurisdiction] law, without regard to conflict of law
							provisions.
						</p>
					</div>
				</div>
			</div>

			<!-- Changes Notice -->
			<div class="card preset-outlined-primary-500 p-6">
				<div class="flex items-start gap-3">
					<Calendar class="text-primary-500 mt-1 size-5 flex-shrink-0" />
					<div class="space-y-2">
						<h3 class="text-primary-500 font-semibold">Changes to Terms</h3>
						<p class="text-sm opacity-75">
							We may update these Terms at any time. Material changes will be communicated via email
							or through the Service. Continued use constitutes acceptance of updated Terms.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Contact CTA -->
		<div class="card preset-filled-primary-500 p-8 text-center text-white">
			<div class="mb-4 flex items-center justify-center gap-2">
				<Mail class="size-6" />
				<h2 class="h3">Questions About These Terms?</h2>
			</div>
			<p class="mx-auto mb-6 max-w-2xl opacity-90">
				If you have any questions about these Terms of Service, please contact our legal team. We're
				here to help clarify any concerns you may have.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/contact"
					class="btn preset-filled-surface-50 text-primary-500 hover:bg-surface-100"
				>
					Contact Us
				</a>
				<a
					href="mailto:legal@sassy.dev"
					class="btn preset-outlined-surface-50 border-white/30 text-white hover:bg-white/10"
				>
					legal@sassy.dev
				</a>
			</div>
		</div>
	</div>
</div>
