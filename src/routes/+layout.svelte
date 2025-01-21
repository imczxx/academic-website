<script>
	import '../app.css';
	import '$lib/styles/layout.css';
	import { navigation } from '$lib/navigation';
	import { base } from '$app/paths';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { getSystemTheme, watchSystemTheme } from '$lib/theme';

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
				<ul class="p-4">
					{#each navigation.sort((a, b) => a.order - b.order) as { path, name, icon: Icon }}
						<li>
							<a 
								href="{base}{path}" 
								class="flex items-center gap-3 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200
									   {path.slice(1) === activeSection ? 'bg-gray-100 dark:bg-gray-700' : ''}"
								on:click|preventDefault={(e) => {
									const target = document.querySelector(path);
									if(target) {
										target.scrollIntoView({ behavior: 'smooth' });
										if(isMobile) {
											isDrawerOpen = false;
										}
									}
								}}
								aria-label="Navigation menu"
							>
								<svelte:component this={Icon} class="w-5 h-5" />
								<span>{name}</span>
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
				<ul class="p-4">
					{#each navigation.sort((a, b) => a.order - b.order) as { path, name, icon: Icon }}
						<li>
							<a 
								href="{base}{path}" 
								class="flex items-center gap-3 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200
									   {path.slice(1) === activeSection ? 'bg-gray-100 dark:bg-gray-700' : ''}"
								on:click|preventDefault={(e) => {
									const target = document.querySelector(path);
									if(target) {
										target.scrollIntoView({ behavior: 'smooth' });
										if(isMobile) {
											isDrawerOpen = false;
										}
									}
								}}
								aria-label="Navigation menu"
							>
								<svelte:component this={Icon} class="w-5 h-5" />
								<span>{name}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
			
			<!-- Social media links -->
			<div class="p-4 border-t dark:border-gray-700">
				<div class="flex justify-center space-x-4">
					<!-- GitHub -->
					<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
					   class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
					   aria-label="GitHub">
						<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
						</svg>
					</a>
					
					<!-- Email -->
					<a href="mailto:your.email@example.com" 
					   class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
					   aria-label="Email">
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
								  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
						</svg>
					</a>
					
					<!-- WeChat -->
					<button class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 relative group" aria-label="WeChat">
						<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
							<path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.045c.133 0 .24-.11.24-.246 0-.06-.024-.12-.04-.177l-.325-1.233a.492.492 0 01.177-.554c1.526-1.115 2.496-2.851 2.496-4.785 0-3.505-3.085-6.357-7.055-5.957zm-2.06 3.922c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z"/>
						</svg>
						<!-- WeChat QR code -->
						<div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
							<img src="/wechat-qr.jpg" alt="WeChat QR Code" class="w-32 h-32" />
						</div>
					</button>
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
