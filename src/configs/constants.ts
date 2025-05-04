interface Section {
	title: string;
	width: string;
	path: string;
	element: string;
	iconsURL: string;
	webTitle: string;
	isSelected: boolean;
}

export const sections: Section[] = [
	{
		title: 'HOME',
		width: '10%',
		path: '/',
		element: 'Home',
		iconsURL: '/images/icons/home.png',
		webTitle: 'Dang Khoa 🔅 Home',
		isSelected: false,
	},
	{
		title: 'BLOGS',
		width: '10%',
		path: '/blog',
		element: 'Notes',
		iconsURL: '/images/icons/notes.png',
		webTitle: 'Dang Khoa 🔅 Notes',
		isSelected: false,
	},
	{
		title: 'TOOLS',
		width: '10%',
		path: '/tools',
		element: 'Tools',
		iconsURL: '/images/icons/tools.png',
		webTitle: 'Dang Khoa 🔅 Tools',
		isSelected: false,
	},
	{
		title: 'ABOUT',
		width: '10%',
		path: '/about',
		element: 'About',
		iconsURL: '/images/icons/about.png',
		webTitle: 'Dang Khoa 🔅 About',
		isSelected: false,
	},
];
