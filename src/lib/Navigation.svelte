<script>
	import { base } from '$app/paths';
	import { navigation } from '$lib/navigation';
	import { Github, Mail } from 'lucide-svelte';

	export let isMobile = false;
	export let activeSection = 'about';
	export let toggleDrawer;
	export let isDrawerOpen = false;
	export let darkMode = false;
	export let toggleDarkMode;

	function handleNavigationClick(path) {
		const target = document.querySelector(path);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
			if (isMobile) {
				toggleDrawer();
			}
		}
	}
</script>

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
							   {path.slice(1) === activeSection ? 
							   'bg-black/10 dark:bg-white/10' : 
							   'hover:bg-black/5 dark:hover:bg-white/5'}"
						on:click|preventDefault={() => handleNavigationClick(path)}
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
		<ul class="space-y-2">
			<!-- GitHub -->
			<li>
				<a href="https://github.com/yourusername" 
				   target="_blank" 
				   rel="noopener noreferrer" 
				   class="group flex items-center rounded-lg p-2 text-sm transition-colors duration-300
						  hover:bg-black/5 dark:hover:bg-white/5">
					<span class="flex items-center gap-2">
						<Github class="w-5 h-5" />
						<span class="font-medium">GitHub</span>
					</span>
				</a>
			</li>
			
			<!-- Email -->
			<li>
				<a href="mailto:your.email@example.com" 
				   class="group flex items-center rounded-lg p-2 text-sm transition-colors duration-300
						  hover:bg-black/5 dark:hover:bg-white/5">
					<span class="flex items-center gap-2">
						<Mail class="w-5 h-5" />
						<span class="font-medium">Email</span>
					</span>
				</a>
			</li>
		</ul>
	</div>
	
	<!-- Dark mode button -->
	<div class="p-4">
		<button
			on:click={toggleDarkMode}
			class="w-full flex items-center gap-3 py-2 px-4 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors duration-200"
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