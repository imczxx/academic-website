<script>
	import '../app.css';
	import '$lib/styles/layout.css';
	import { navigation } from '$lib/navigation';
	import { base } from '$app/paths';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { getSystemTheme, watchSystemTheme } from '$lib/theme';
	import { Github, Mail } from 'lucide-svelte';

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
			<nav class="relative w-64 h-full bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
				<div class="nav-header">
					<div class="flex items-center space-x-4">
						<img src="/me.jpg" alt="Profile" class="w-16 h-16 rounded-full object-cover" />
						<a href="{base}/" class="text-xl font-bold" aria-label="Profile">Your Name</a>
					</div>
				</div>
				<ul class="p-2">
					{#each navigation.sort((a, b) => a.order - b.order) as { path, name, icon: Icon }}
						<li>
							<a 
								href="{base}{path}" 
								class="group flex items-center justify-between rounded-lg p-2 text-sm transition-colors duration-300
									   {path.slice(1) === activeSection ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}"
								on:click|preventDefault={(e) => {
									const target = document.querySelector(path);
									if(target) {
										target.scrollIntoView({ behavior: 'smooth' });
										if(isMobile) {
											isDrawerOpen = false;
										}
									}
								}}
							>
								<span class="flex items-center gap-2">
									<svelte:component this={Icon} class="size-4" />
									<span class="font-medium">{name}</span>
								</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	{:else}
		<!-- Desktop sidebar -->
		<nav class="flex flex-col justify-between">
			<div>
				<div class="nav-header">
					<div class="flex items-center space-x-4">
						<img src="/me.jpg" alt="Profile" class="w-10 h-10 rounded-full object-cover" />
						<a href="{base}/" class="text-xl font-bold" aria-label="Profile">Your Name</a>
					</div>
				</div>
				<ul class="p-2">
					{#each navigation.sort((a, b) => a.order - b.order) as { path, name, icon: Icon }}
						<li>
							<a 
								href="{base}{path}" 
								class="group flex items-center justify-between rounded-lg p-2 text-sm transition-colors duration-300
									   {path.slice(1) === activeSection ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}"
								on:click|preventDefault={(e) => {
									const target = document.querySelector(path);
									if(target) {
										target.scrollIntoView({ behavior: 'smooth' });
										if(isMobile) {
											isDrawerOpen = false;
										}
									}
								}}
							>
								<span class="flex items-center gap-2">
									<svelte:component this={Icon} class="size-4" />
									<span class="font-medium">{name}</span>
								</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
			
			<!-- Social media links -->
			<div class="p-4 border-t dark:border-gray-700">
				<div class="flex justify-center space-x-4">
					<!-- GitHub -->
					<a href="https://github.com/yourusername" 
					   target="_blank" 
					   rel="noopener noreferrer" 
					   class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
					   aria-label="GitHub">
						<Github class="w-6 h-6" />
					</a>
					
					<!-- Email -->
					<a href="mailto:your.email@example.com" 
					   class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
					   aria-label="Email">
						<Mail class="w-6 h-6" />
					</a>
				</div>
			</div>
			
			<!-- Dark mode button -->
			<div class="p-4">
				<button
					on:click={toggleDarkMode}
					class="w-full flex items-center gap-3 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
					aria-label={darkMode ? 'switch to light mode' : 'switch to dark mode'}
				>
					<div class="relative w-5 h-5">
						<div class="absolute inset-0 transition-opacity duration-200"
							 class:opacity-0={darkMode}
							 class:opacity-100={!darkMode}>
							<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700 group-hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
							</svg>
						</div>
						<div class="absolute inset-0 transition-opacity duration-200"
							 class:opacity-0={!darkMode}
							 class:opacity-100={darkMode}>
							<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-300 group-hover:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
							</svg>
						</div>
					</div>
					<span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
				</button>
			</div>
		</nav>
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
		@apply bg-gray-800 border-gray-700;
	}

	:global(.dark) nav a {
		@apply text-gray-200;
	}

	:global(.dark) nav a:hover {
		@apply text-blue-400;
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
</style>
