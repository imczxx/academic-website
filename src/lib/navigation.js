import { Home, BookOpen, Mail, User, Star } from 'lucide-svelte';

export const navigation = [
	{
		path: '/',
		name: 'research',
		icon: Star,
		order: 1
	},
	{
		path: '/blog',
		name: 'blog',
		icon: BookOpen,
		order: 2
	},
	{
		path: '/publications',
		name: 'publications',
		icon: User,
		order: 3
	},
	{
		path: '/contact',
		name: 'contact',
		icon: Mail,
		order: 4
	}
]; 