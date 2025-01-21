import { Home, BookOpen, Mail, User, Star } from 'lucide-svelte';

export const navigation = [
	{
		path: '#about',
		name: 'about',
		icon: User,
		order: 1
	},
	{
		path: '#research',
		name: 'research',
		icon: Star,
		order: 2
	},
	{
		path: '#publications',
		name: 'publications',
		icon: BookOpen,
		order: 3
	},
	{
		path: '#contact',
		name: 'contact',
		icon: Mail,
		order: 4
	}
]; 