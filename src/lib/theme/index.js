// 导出所有主题相关功能
import { theme } from './store';
import { getSystemTheme, watchSystemTheme } from './utils';
import { initTheme, toggleTheme, updateTheme } from './actions';

export {
  theme,
  getSystemTheme,
  watchSystemTheme,
  initTheme,
  toggleTheme,
  updateTheme
}; 