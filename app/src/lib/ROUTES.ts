export type Route = {
	label: string;
	icon: string;
	link: string;
};

export const ROUTES: Route[] = [
	{
		label: 'Home',
		icon: 'home',
		link: '/'
	},
	{
		label: 'About',
		icon: 'info-circle',
		link: '/about'
	}
];
