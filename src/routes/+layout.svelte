<script>
	import '../app.css';
	import '$lib/styles/layout.css';
	import { navigation } from '$lib/navigation';
	import { base } from '$app/paths';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { getSystemTheme, watchSystemTheme } from '$lib/theme';
	import { Github, Mail } from 'lucide-svelte';
	import Navigation from '$lib/Navigation.svelte';

	let isDrawerOpen = false;
	let isMobile = false;
	let darkMode = false;
	let isSystemDark = false;
	let isTransitioning = false;
	let activeSection = 'about';

	onMount(() => {
		// Check if device is mobile
		const checkMobile = () => {
			isMobile = window.innerWidth < 768;
		};
		
		checkMobile();
		window.addEventListener('resize', checkMobile);
		
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		isSystemDark = mediaQuery.matches;
		
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			darkMode = savedTheme === 'dark';
		} else {
			darkMode = isSystemDark;
		}
		
		updateTheme();

		// Replace original listener with watchSystemTheme
		const unsubscribe = watchSystemTheme((isDark) => {
			if (!localStorage.getItem('theme')) {
				isSystemDark = isDark === 'dark';
				darkMode = isSystemDark;
				updateTheme();
			}
		});

		// Add scroll observer
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					activeSection = entry.target.id;
				}
			});
		}, { threshold: 0.5 });
		
		// Observe all sections
		document.querySelectorAll('section[id]').forEach((section) => {
			observer.observe(section);
		});

		return () => {
			window.removeEventListener('resize', checkMobile);
			observer.disconnect();
			unsubscribe();
		};
	});

	function toggleDrawer() {
		isDrawerOpen = !isDrawerOpen;
	}

	afterNavigate(() => {
		if (typeof MathJax !== 'undefined') {
			MathJax.typesetPromise();
		}
		// Close drawer after navigation
		isDrawerOpen = false;
	});

	function toggleDarkMode() {
		darkMode = !darkMode;
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');
		updateTheme();
	}

	function updateTheme() {
		if (darkMode) {  // Use darkMode instead of theme
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<div class="layout">
	{#if isMobile}
		<!-- Mobile drawer button -->
		<button 
			class="fixed top-4 left-4 z-50 p-2 rounded-full bg-gray-100 dark:bg-gray-800 
				   hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600 transition-all duration-200"
			on:click={toggleDrawer}
			aria-label="Toggle menu"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>

		<!-- Mobile drawer -->
		<div 
			class="fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out {isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}"
			class:pointer-events-none={!isDrawerOpen}
		>
			<!-- Overlay -->
			<button
				type="button"
				class="overlay"
				on:click={() => (isDrawerOpen = false)}
				on:keydown={(e) => {
					if (e.key === 'Escape') {
						isDrawerOpen = false;
					}
				}}
				aria-label="Close menu"
			></button>

			<!-- Drawer content -->
			<Navigation {isMobile} {activeSection} {toggleDrawer} {isDrawerOpen} {darkMode} {toggleDarkMode} />
		</div>
	{:else}
		<!-- Desktop sidebar -->
		<Navigation {isMobile} {activeSection} {toggleDrawer} {isDrawerOpen} {darkMode} {toggleDarkMode} />
	{/if}
	
	<div class="flex-1 flex flex-col min-h-screen">
		<main class="flex-1">
			<slot />
		</main>
	</div>
</div>

<style>
	/* Add dark mode support */
	:global(.dark) nav {
		@apply bg-black border-white/10;
	}

	:global(.dark) nav a {
		@apply text-white;
	}

	:global(.dark) nav a:hover {
		@apply text-white/80;
	}

	:global(.dark) .nav-header {
		@apply border-gray-700;
	}

	.overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 40;
		border: none;
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}

	/* Update navigation link styles */
	nav a {
		text-decoration: none;
		color: #333;
		font-size: 1.1rem;
		display: block;
	}

	/* Update icon colors in dark mode */
	:global(.dark) nav a :global(svg) {
		@apply text-gray-400;
	}

	:global(.dark) nav a:hover :global(svg) {
		@apply text-blue-400;
	}

	:global(:root) {
		/* Light theme variables */
		--background-color: #ffffff;
		--text-color: #000000;
	}
	
	:global(:root.dark) {
		/* Dark theme variables */
		--background-color: #1a1a1a;
		--text-color: #ffffff;
	}

	/* Add styles for focused navigation links with higher specificity */
	nav a:focus {
		background-color: white !important;
		color: black !important;
		outline: none !important; /* Remove default focus outline */
	}

	/* Optionally, add a custom focus outline with higher specificity */
	nav a:focus-visible {
		outline: 2px solid black !important;
	}
</style>
