import { Home, BookOpen, Mail, User, Star } from 'lucide-svelte';

export const navigation = [
	{
		path: '#about',
		name: '关于',
		icon: User,
		order: 1
	},
	{
		path: '#research',
		name: '研究',
		icon: Star,
		order: 2
	},
	{
		path: '#publications',
		name: '发表',
		icon: BookOpen,
		order: 3
	},
	{
		path: '#contact',
		name: '联系',
		icon: Mail,
		order: 4
	}
]; 