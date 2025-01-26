<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import Navigation from '$lib/components/nav/Navigation.svelte';
	import { themeStore } from '$lib/stores/theme';
	import { responsiveStore } from '$lib/stores/responsive';
	import { navigationStore } from '$lib/stores/navigation';

	$: ({ darkMode, isSystemDark } = $themeStore);
	$: ({ isMobile, isDrawerOpen } = $responsiveStore);
	$: ({ activeSection } = $navigationStore);

	onMount(() => {
		const unsubscribeResponsive = responsiveStore.initResponsive();
		const unsubscribeNavigation = navigationStore.initNavigation();
		themeStore.initTheme();

		return () => {
			unsubscribeResponsive?.();
			unsubscribeNavigation?.();
			themeStore.cleanup();
		};
	});

	afterNavigate(() => {
		if (typeof MathJax !== 'undefined') {
			MathJax.typesetPromise();
		}
		responsiveStore.closeDrawer();
	});
</script>

<div class="layout">
	{#if isMobile}
		<button
			class="fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg"
			on:click={responsiveStore.toggleDrawer}
			aria-label="Toggle navigation menu">
			<svg 
				xmlns="http://www.w3.org/2000/svg" 
				class="h-6 w-6 text-gray-700 dark:text-gray-300" 
				fill="none" 
				viewBox="0 0 24 24" 
				stroke="currentColor">
				{#if isDrawerOpen}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				{/if}
			</svg>
		</button>
		<!-- Mobile drawer -->
		<div 
			class="fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out {isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}"
			class:pointer-events-none={!isDrawerOpen}
		>
			<!-- Drawer content -->
			<Navigation 
				{isMobile}
				{activeSection}
				toggleDrawer={responsiveStore.toggleDrawer}
				{isDrawerOpen}
				{darkMode}
				toggleTheme={themeStore.toggleTheme}
			/>
		</div>
		{#if isMobile && isDrawerOpen}
			<div 
				class="fixed inset-0 bg-black/50 z-30"
				on:click={responsiveStore.closeDrawer}
				aria-hidden="true"
			/>
		{/if}
	{:else}
		<!-- Desktop sidebar -->
		<Navigation 
			{isMobile}
			{activeSection}
			toggleDrawer={responsiveStore.toggleDrawer}
			{isDrawerOpen}
			{darkMode}
			toggleTheme={themeStore.toggleTheme}
		/>
	{/if}
	
	<div class="flex-1 flex flex-col min-h-screen">
		<main class="flex-1">
			<slot />
		</main>
	</div>
</div>

