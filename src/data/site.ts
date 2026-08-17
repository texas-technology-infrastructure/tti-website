export interface NavItem {
	label: string;
	href: string;
}

export interface SiteConfig {
	name: string;
	legalName: string;
	domain: string;
	email: string;
	/** Not finalized. Keep null until a real number exists — never fabricate. */
	phone: string | null;
	nav: NavItem[];
	primaryCta: NavItem;
	serviceArea: {
		onsite: string;
		remote: string;
	};
}

export const site: SiteConfig = {
	name: 'TTI',
	legalName: 'Texas Technology Infrastructure LLC',
	domain: 'https://texastechnologyinfrastructure.com',
	email: 'sales@texastechnologyinfrastructure.com',
	phone: null,
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
	},
};
