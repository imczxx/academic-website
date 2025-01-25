import { writable } from 'svelte/store';

function createNavigationStore() {
    const { subscribe, set } = writable({
        activeSection: 'about'
    });

    return {
        subscribe,
        initNavigation: () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        set({ activeSection: entry.target.id });
                    }
                });
            }, { threshold: 0.5 });
            
            document.querySelectorAll('section[id]').forEach((section) => {
                observer.observe(section);
            });

            return () => observer.disconnect();
        }
    };
}

export const navigationStore = createNavigationStore(); 