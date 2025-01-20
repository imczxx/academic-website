import { Home, BookOpen, Mail, User, Star } from 'lucide-svelte';

export const navigation = [
	{
		path: '/',
		name: 'about',
		icon: User,
		order: 1
	},
	{
		path: '/research',
		name: 'research',
		icon: Star,
		order: 2
	},
	{
		path: '/blog',
		name: 'blog',
		icon: BookOpen,
		order: 3
	},
	{
		path: '/publications',
		name: 'publications',
		icon: Home,
		order: 4
	},
	{
		path: '/contact',
		name: 'contact',
		icon: Mail,
		order: 5
	}
]; 