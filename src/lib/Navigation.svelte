<script>
	import { base } from '$app/paths';
	import { navigation } from '$lib/navigation';
	import { Github, Mail } from 'lucide-svelte';
	import NavHeader from './components/nav/NavHeader.svelte';
	import NavLinks from './components/nav/NavLinks.svelte';
	import NavFooter from './components/nav/NavFooter.svelte';

	export let isMobile = false;
	export let activeSection = 'about';
	export let toggleDrawer;
	export let isDrawerOpen = false;
	export let darkMode = false;
	export let toggleDarkMode;

	let selectedPath = '';

	function handleNavigationClick(path) {
		const target = document.querySelector(path);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
			selectedPath = path;
			if (isMobile) {
				toggleDrawer();
			}
		}
	}
</script>

<style>
	/* 基础样式类 */
	.nav-link {
		@apply flex items-center rounded-lg p-2 text-sm transition-colors duration-300
			   hover:bg-black/5 dark:hover:bg-white/5;
	}
	
	.nav-icon {
		@apply w-5 h-5;
	}
	
	.nav-section-padding {
		@apply px-4 py-2;
	}
	
	.theme-icon-base {
		@apply absolute inset-0 transition-opacity duration-200;
	}

	/* 合并的选中和焦点样式 */
	nav a.selected,
	nav a:focus {
		background-color: black !important;
		color: white !important;
	}

	nav a:focus {
		outline: none !important;
	}

	nav a:focus-visible {
		outline: 2px solid white !important;
	}
</style>

<!-- 将导航分成三个主要组件 -->
<nav class="flex flex-col justify-between">
	<NavHeader />
	<NavLinks {activeSection} {selectedPath} {handleNavigationClick} />
	<NavFooter {darkMode} {toggleDarkMode} />
</nav> 