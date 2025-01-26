<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import Navigation from '$lib/components/nav/Navigation.svelte';
	import ThemeToggle from '$lib/components/theme/ThemeToggle.svelte';
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
				toggleDarkMode={themeStore.toggleDarkMode}
			/>
		</div>
	{:else}
		<!-- Desktop sidebar -->
		<Navigation 
			{isMobile}
			{activeSection}
			toggleDrawer={responsiveStore.toggleDrawer}
			{isDrawerOpen}
			{darkMode}
			toggleDarkMode={themeStore.toggleDarkMode}
		/>
	{/if}
	
	<div class="flex-1 flex flex-col min-h-screen">
		<main class="flex-1">
			<slot />
			<ThemeToggle />
		</main>
	</div>
</div>

