<script>
    import { base } from '$app/paths';
    import { navigation } from '$lib/components/nav/navigation';
    
    export let activeSection;
    export let selectedPath;
    export let handleNavigationClick;
</script>

<ul class="px-4 py-2">
    {#each navigation.sort((a, b) => a.order - b.order) as { path, name, icon: Icon }}
        <li>
            <a 
                href="{base}{path}" 
                class="group nav-link {path.slice(1) === activeSection || path === selectedPath ? 'selected' : ''}"
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