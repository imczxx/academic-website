import { theme } from './store';

export function initTheme() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const isSystemDark = mediaQuery.matches;
    const savedTheme = localStorage.getItem('theme');
    const darkMode = savedTheme ? savedTheme === 'dark' : isSystemDark;
    
    theme.set({ darkMode, isSystemDark, isTransitioning: false });
    
    if (darkMode) {
        document.documentElement.classList.add('dark');
    }
}

export function toggleTheme() {
    theme.update(state => {
        if (state.isTransitioning) return state;
        
        const newDarkMode = !state.darkMode;
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
        
        document.documentElement.classList.add('transitioning-theme');
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        setTimeout(() => {
            document.documentElement.classList.remove('transitioning-theme');
            theme.update(s => ({ ...s, isTransitioning: false }));
        }, 200);
        
        return {
            ...state,
            darkMode: newDarkMode,
            isTransitioning: true
        };
    });
}

export function updateTheme(darkMode) {
    if (darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
} 