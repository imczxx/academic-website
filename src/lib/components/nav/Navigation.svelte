<script>
	import { base } from '$app/paths';
	import { navigation } from '$lib/components/nav/navigation';
	import { Github, Mail } from 'lucide-svelte';
	import NavHeader from '$lib/components/nav/NavHeader.svelte';
	import NavLinks from '$lib/components/nav/NavLinks.svelte';
	import NavFooter from '$lib/components/nav/NavFooter.svelte';
	import { onMount } from 'svelte';

	export let isMobile = false;
	export let activeSection = 'about';
	export let toggleDrawer;
	export let isDrawerOpen = false;
	export let darkMode = false;
	export let toggleTheme;

	let selectedPath = '';

	function handleNavigationClick(path) {
		const target = document.querySelector(path);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
			if (isMobile) {
				toggleDrawer();
			}
		}
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			() => {
				// 获取所有 sections 并计算它们的位置
				const allSections = Array.from(document.querySelectorAll('section[id]'));
				const visibleSections = allSections
					.filter(section => {
						const rect = section.getBoundingClientRect();
						return rect.top < window.innerHeight && rect.bottom > 0;
					})
					.map(section => ({
						id: section.id,
						top: section.getBoundingClientRect().top
					}));

				// 如果有可见的 sections，选择最上面的一个
				if (visibleSections.length > 0) {
					const topSection = visibleSections.reduce((prev, current) => 
						prev.top < current.top ? prev : current
					);
					activeSection = topSection.id;
				}
			},
			{
				threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
			}
		);

		// 观察所有 section
		document.querySelectorAll('section[id]').forEach((section) => {
			observer.observe(section);
		});

		return () => observer.disconnect();
	});
</script>

<!-- 将导航分成三个主要组件 -->
<nav class="flex flex-col justify-between {darkMode ? 'dark' : ''}">
	<NavHeader />
	<NavLinks {activeSection} {selectedPath} {handleNavigationClick} />
	<NavFooter {darkMode} {toggleTheme} />
</nav> 