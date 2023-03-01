export const tabs = [
	{
		id: 'tasks',
		icon: 'check',
		label: 'Tasks',
		route: '/tasks'
	},
	{
		id: 'appointments',
		icon: 'calendar',
		label: 'Appointments',
		route: '/appointments'
	}
];

export const getCurrentTab = (currentRoute: string): number => {
	let currentTab = 0;
	tabs.forEach((tab, index) => {
		if (tab.route === currentRoute) {
			currentTab = index;
		}
	});

	return currentTab;
};
