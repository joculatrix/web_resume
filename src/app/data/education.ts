type SchoolInfo = {
	school_name: string;
	degree: string;
	minors?: string[];
	grad_date: string;
	achievements?: string[];
	img_src?: string;
}

export const school: SchoolInfo = {
	school_name: 'Western Colorado University',
	degree: 'Bachelor of Arts - Music',
	minors: ['Computer Science', 'Music Technology'],
	grad_date: 'May 2024',
	achievements: [
		'Winner: 2023 George F. Damson music performance competition',
		'Recipient: 2024 Perry Anderson Music Citizenship Award for leadership',
		'Composed music performed by WCU students and faculty at public concerts'
	],
	img_src: '/assets/wcu_logo.png'
}
