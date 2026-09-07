export interface LangInterface {
	menu: {
		home: string;
		experience: string;
		projects: string;
		"about-me": string;
	};
	home: {
		available: string;
		greeting: string;
		hero_strong: string;
		hero_rest: string;
		cta_work: string;
		cta_cv: string;
	};
	profile: {
		years_label: string;
		base_label: string;
		base_value: string;
		build_label: string;
		web_apps: string;
		mobile_apps: string;
		ecommerce: string;
		mgmt_platforms: string;
		build_note: string;
		products_label: string;
		amber_desc: string;
		guesty_desc: string;
		fatsack_desc: string;
	};
	stack: {
		subtitle: string;
	};
	experience: {
		title: string;
		subtitle: string;
		present: string;
		work_1: {
			date: string;
			title: string;
			company_at: string;
			paragraph_1: string;
			paragraph_2: string;
		};
		work_2: {
			date: string;
			title: string;
			company_at: string;
			paragraph_1: string;
			paragraph_2: string;
		};
		origin: string;
		chip_payments: string;
		chip_einvoicing: string;
	};
	projects: {
		title: string;
		subtitle: string;
		links: {
			code: string;
			api: string;
			web: string;
		};
		proj_1: { description: string };
		proj_2: { description: string };
		proj_3: { description: string };
		alt: {
			artesania: string;
			coronato: string;
			teslo: string;
		};
	};
	about: {
		title: string;
		subtitle: string;
		paragraph_1: string;
		paragraph_2: string;
		paragraph_3: string;
		fun_fact: string;
		highlight_amber: string;
		highlight_guesty: string;
		highlight_metal: string;
	};
	contact: {
		title: string;
		subtitle: string;
		mail_cta: string;
	};
	footer: {
		location: string;
	};
}
