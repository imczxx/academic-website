<script>
	import '../app.css';
	import { navigation } from '$lib/navigation';
	import { base } from '$app/paths';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { getSystemTheme, watchSystemTheme } from '$lib/theme';
	import { Github, Mail } from 'lucide-svelte';
	import Navigation from '$lib/Navigation.svelte';
	import { initTheme } from '@theme';
	import ThemeToggle from '$lib/components/theme/ThemeToggle.svelte';

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

		// 在组件挂载后初始化主题
		// 这时一定是在浏览器环境中，不需要检查 window
		initTheme();

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
		<!-- Mobile drawer -->
		<div 
			class="fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out {isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}"
			class:pointer-events-none={!isDrawerOpen}
		>
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
			<ThemeToggle />
		</main>
	</div>
</div>

