// 导出所有主题相关功能
import { getSystemTheme, watchSystemTheme } from './utils';

// 创建主题状态存储
const theme = {
    darkMode: false
};

// 初始化主题
export function initTheme() {
    if (typeof window !== 'undefined') {
        // 检查本地存储的主题设置
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            theme.darkMode = savedTheme === 'dark';
        } else {
            // 如果没有保存的主题设置，则使用系统主题
            theme.darkMode = getSystemTheme() === 'dark';
        }
        updateTheme();
    }
}

// 更新主题
export function updateTheme() {
    if (theme.darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

// 切换主题
export function toggleTheme() {
    theme.darkMode = !theme.darkMode;
    localStorage.setItem('theme', theme.darkMode ? 'dark' : 'light');
    updateTheme();
}

export { theme, getSystemTheme, watchSystemTheme }; 