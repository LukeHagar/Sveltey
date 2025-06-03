<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { Check, ChevronDown, Moon, Palette, Sun } from '@lucide/svelte';

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

	let currentColorTheme = $state('legacy');
	let isDarkMode = $state(true);
	let mounted = $state(false);
	let showDropdown = $state(false);

	// Load theme from localStorage on mount
	onMount(() => {
		if (browser) {
			const savedColorTheme = localStorage.getItem('colorTheme') || 'legacy';
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
				localStorage.setItem('colorTheme', 'legacy');
			}
			if (!savedDarkMode) {
				localStorage.setItem('darkMode', 'true');
			}

			if (!savedColorTheme || !savedDarkMode) {
				applyTheme(savedColorTheme || 'legacy', savedDarkMode !== 'false');
			}
		}
	});
</script>

<!-- Light/Dark Mode Toggle -->
<button
	onclick={toggleDarkMode}
	class="btn btn-sm items-center"
	title="Toggle light/dark mode"
	aria-label="Toggle light/dark mode"
>
	{#if !isDarkMode}
		<Sun class="size-4" aria-hidden="true" />
	{:else}
		<Moon class="size-4" aria-hidden="true" />
	{/if}
</button>

<!-- Color Theme Selector -->
<div class="relative">
	<button
		onclick={() => (showDropdown = !showDropdown)}
		class="btn btn-sm flex h-8 items-center"
		title="Select color theme"
		aria-label="Select color theme"
		aria-expanded={showDropdown}
	>
		<Palette class="size-4" aria-hidden="true" />
		<span class="capitalize hidden sm:block">{currentColorTheme}</span>
		<ChevronDown class={`size-4 transition-transform ${showDropdown === true ? 'rotate-180' : ''}`} aria-hidden="true" />
	</button>

	{#if showDropdown}
		<div
			class="card preset-outlined-primary-500 bg-surface-50-950 absolute right-0 sm:left-0 z-50 mt-2 w-24 sm:w-48 overflow-hidden rounded-lg shadow-lg"
		>
			{#each colorThemes as theme}
				<button
					onclick={() => selectColorTheme(theme.value)}
					class="btn btn-sm flex w-full items-center justify-between px-4 py-2 transition-colors"
					aria-label="Select {theme.label} theme"
				>
					<span>{theme.label}</span>
					{#if currentColorTheme === theme.value}
						<Check class="size-4" aria-hidden="true" />
					{/if}
				</button>
			{/each}
		</div>
	{/if}
</div>
