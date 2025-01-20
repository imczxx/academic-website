<script>
	import '../app.css';
	import '$lib/styles/layout.css';
	import { navigation } from '$lib/navigation';
	import { base } from '$app/paths';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	let isDrawerOpen = false;
	let isMobile = false;

	onMount(() => {
		// 检查是否为移动设备
		const checkMobile = () => {
			isMobile = window.innerWidth < 768;
		};
		
		checkMobile();
		window.addEventListener('resize', checkMobile);
		
		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	});

	function toggleDrawer() {
		isDrawerOpen = !isDrawerOpen;
	}

	afterNavigate(() => {
		if (typeof MathJax !== 'undefined') {
			MathJax.typesetPromise();
		}
		// 导航后关闭抽屉
		isDrawerOpen = false;
	});
</script>

<div class="layout">
	{#if isMobile}
		<!-- 移动端抽屉按钮 -->
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

		<!-- 移动端抽屉 -->
		<div 
			class="fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out {isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}"
			class:pointer-events-none={!isDrawerOpen}
		>
			<!-- 遮罩层 -->
			<div 
				class="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
				class:opacity-0={!isDrawerOpen}
				class:opacity-100={isDrawerOpen}
				on:click={toggleDrawer}
			></div>

			<!-- 抽屉内容 -->
			<nav class="relative w-64 h-full bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
				<div class="nav-header">
					<a href="{base}/" class="text-xl font-bold">Your Name</a>
				</div>
				<ul>
					{#each navigation.sort((a, b) => a.order - b.order) as { path, name }}
						<li>
							<a href="{base}{path}">{name}</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	{:else}
		<!-- 桌面端侧边栏 -->
		<nav>
			<div class="nav-header">
				<a href="{base}/" class="text-xl font-bold">Your Name</a>
			</div>
			<ul>
				{#each navigation.sort((a, b) => a.order - b.order) as { path, name }}
					<li>
						<a href="{base}{path}">{name}</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
	
	<div class="flex-1 flex flex-col min-h-screen">
		<main class="flex-1">
			<slot />
		</main>
	</div>
</div>

<style>
	/* 添加暗色模式支持 */
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
</style>
