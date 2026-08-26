export interface NavItem {
	label: string;
	href: string;
}

export interface SiteConfig {
	name: string;
	legalName: string;
	domain: string;
	email: string;
	/** Official business phone number. */
	phone: { display: string; href: string } | null;
	nav: NavItem[];
	primaryCta: NavItem;
	serviceArea: {
		onsite: string;
		remote: string;
		communities: string[];
	};
	services: NavItem[];
}

export const site: SiteConfig = {
	name: 'Texas Technology Infrastructure',
	legalName: 'Texas Technology Infrastructure LLC',
	domain: 'https://texastechnologyinfrastructure.com',
	email: 'sales@texastechnologyinfrastructure.com',
	phone: { display: '(817) 745-5959', href: 'tel:+18177455959' },
	nav: [
		{ label: 'Services', href: '/services' },
		{ label: 'Industries', href: '/industries' },
		{ label: 'Service Area', href: '/service-area' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' },
	],
	primaryCta: { label: 'Request a Quote', href: '/contact' },
	serviceArea: {
		onsite: 'Onsite: Dallas–Fort Worth and surrounding communities.',
		remote: 'Remote IT services available beyond DFW.',
		communities: [
			'Dallas',
			'Fort Worth',
			'Arlington',
			'Irving / Las Colinas',
			'Plano',
			'Frisco',
			'Richardson',
			'Carrollton',
			'Grapevine',
			'Denton',
			'Grand Prairie',
			'Lewisville',
			'Garland',
			'Mesquite',
			'McKinney',
			'Allen',
			'Mansfield',
			'Burleson',
			'Cedar Hill',
			'Duncanville',
			'DeSoto',
			'Waxahachie',
			'Bedford',
			'Euless',
			'Hurst',
			'Southlake',
			'Colleyville',
			'Keller',
			'Azle',
			'Weatherford',
			'Roanoke',
			'The Colony',
			'Little Elm',
			'Coppell',
			'Flower Mound',
		],
	},
	services: [
		{ label: 'Managed IT Services', href: '/services#managed-it' },
		{ label: 'MSP & IT Provider Services', href: '/services#msp-providers' },
		{ label: 'Network Infrastructure Services', href: '/services#network-infrastructure' },
		{ label: 'Web & Business Technology Services', href: '/services#web-biztech' },
	],
};
