import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createResponsiveStore() {
    const { subscribe, set } = writable({
        isMobile: false,
        isDrawerOpen: false
    });

    return {
        subscribe,
        initResponsive: () => {
            if (browser) {
                const checkMobile = () => {
                    set({
                        isMobile: window.innerWidth < 768,
                        isDrawerOpen: false
                    });
                };
                
                checkMobile();
                window.addEventListener('resize', checkMobile);
                return () => window.removeEventListener('resize', checkMobile);
            }
        },
        toggleDrawer: () => {
            update(state => ({
                ...state,
                isDrawerOpen: !state.isDrawerOpen
            }));
        },
        closeDrawer: () => {
            update(state => ({
                ...state,
                isDrawerOpen: false
            }));
        }
    };
}

export const responsiveStore = createResponsiveStore(); 