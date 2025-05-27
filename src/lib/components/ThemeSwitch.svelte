<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
    import { Palette } from 'lucide-svelte';

	// Available color themes
	const colorThemes = [
		{ value: 'catppuccin', label: 'Catppuccin' },
		{ value: 'cerberus', label: 'Cerberus' },
		{ value: 'concord', label: 'Concord' },
		{ value: 'crimson', label: 'Crimson' },
		{ value: 'fennec', label: 'Fennec' },
		{ value: 'hamlindigo', label: 'Hamlindigo' },
		{ value: 'legacy', label: 'Legacy' },
		{ value: 'mint', label: 'Mint' },
		{ value: 'modern', label: 'Modern' },
		{ value: 'mona', label: 'Mona' },
		{ value: 'nosh', label: 'Nosh' },
		{ value: 'nouveau', label: 'Nouveau' },
		{ value: 'pine', label: 'Pine' },
		{ value: 'reign', label: 'Reign' },
		{ value: 'rocket', label: 'Rocket' },
		{ value: 'rose', label: 'Rose' },
		{ value: 'sahara', label: 'Sahara' },
		{ value: 'seafoam', label: 'Seafoam' },
		{ value: 'terminus', label: 'Terminus' },
		{ value: 'vintage', label: 'Vintage' },
		{ value: 'vox', label: 'Vox' },
		{ value: 'wintry', label: 'Wintry' }
	];

	let currentColorTheme = $state('skeleton');
	let isDarkMode = $state(true);
	let mounted = $state(false);
	let showDropdown = $state(false);

	// Load theme from localStorage on mount
	onMount(() => {
		if (browser) {
			const savedColorTheme = localStorage.getItem('colorTheme') || 'skeleton';
			const savedDarkMode = localStorage.getItem('darkMode') !== 'false'; // default to true

			currentColorTheme = savedColorTheme;
			isDarkMode = savedDarkMode;
			applyTheme(savedColorTheme, savedDarkMode);
			mounted = true;
		}
	});

	function applyTheme(colorTheme: string, darkMode: boolean) {
		if (browser) {
			// Handle dark mode class on html element
			if (darkMode) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}

			// Apply color theme to body
			document.body.setAttribute('data-theme', colorTheme);
		}
	}

	function toggleDarkMode() {
		isDarkMode = !isDarkMode;

		if (browser) {
			localStorage.setItem('darkMode', isDarkMode.toString());
			applyTheme(currentColorTheme, isDarkMode);
		}
	}

	function selectColorTheme(theme: string) {
		currentColorTheme = theme;
		showDropdown = false;

		if (browser) {
			localStorage.setItem('colorTheme', theme);
			applyTheme(theme, isDarkMode);
		}
	}

	// Set default theme immediately if not set
	$effect(() => {
		if (browser && !mounted) {
			const savedColorTheme = localStorage.getItem('colorTheme');
			const savedDarkMode = localStorage.getItem('darkMode');

			if (!savedColorTheme) {
				localStorage.setItem('colorTheme', 'skeleton');
			}
			if (!savedDarkMode) {
				localStorage.setItem('darkMode', 'true');
			}

			if (!savedColorTheme || !savedDarkMode) {
				applyTheme(savedColorTheme || 'skeleton', savedDarkMode !== 'false');
			}
		}
	});

	// Close dropdown when clicking outside
	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('.theme-dropdown')) {
			showDropdown = false;
		}
	}

	onMount(() => {
		if (browser) {
			document.addEventListener('click', handleClickOutside);
			return () => document.removeEventListener('click', handleClickOutside);
		}
	});
</script>

<div class="flex items-center space-x-3">
	<!-- Light/Dark Mode Toggle -->
	<button
		onclick={toggleDarkMode}
		class="btn btn-sm preset-outlined-surface-500 flex items-center h-8"
		title="Toggle light/dark mode"
		aria-label="Toggle light/dark mode"
	>
		<svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			{#if !isDarkMode}
				<!-- Sun icon for dark mode (click to go light) -->
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
				/>
			{:else}
				<!-- Moon icon for light mode (click to go dark) -->
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
				/>
			{/if}
		</svg>
	</button>

	<!-- Color Theme Selector -->
	<div class="theme-dropdown relative">
		<button
			onclick={() => (showDropdown = !showDropdown)}
			class="btn btn-sm preset-outlined-surface-500 h-8 flex items-center"
			title="Select color theme"
			aria-label="Select color theme"
			aria-expanded={showDropdown}
		>
			<Palette class="size-4" />
			<span class="text-sm capitalize">{currentColorTheme}</span>
			<svg
				class="ml-1 h-3 w-3 transition-transform {showDropdown ? 'rotate-180' : ''}"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</button>

		{#if showDropdown}
			<div
				class="card preset-outlined-primary-500 bg-surface-50-950 absolute left-0 z-50 mt-2 w-48 overflow-hidden rounded-lg shadow-lg"
			>
				{#each colorThemes as theme}
					<button
						onclick={() => selectColorTheme(theme.value)}
						class="hover:bg-surface-950-50 hover:text-surface-50-950 flex w-full items-center justify-between px-4 py-2 text-left text-sm transition-colors"
					>
						<span>{theme.label}</span>
						{#if currentColorTheme === theme.value}
							<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						{/if}
					</button>
				{/each}
			</div>
		{/if}
	</div>
</div>
