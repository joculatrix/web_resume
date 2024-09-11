type JobInfo = {
	title: string;
	employer?: string;
	dates?: [string, string];
	description: string[];
}

export const jobs: ReadonlyArray<JobInfo> = [
	{
		title: 'Band Librarian',
		employer: 'Western Colorado University',
		dates: ['Aug. 22', 'May 24'],
		description: [
			'Maintained a spreadsheet to catalogue new and existing symphonic band pieces.',
			'Frequently worked irregular hours on large music-copying projects on-demand.',
			'Managed creation, cloud storage, and distribution of resources to high-school band directors during the annual All-Colorado Honor Band.'
		]
	},{
		title: 'Recording Technician',
		employer: 'Western Colorado University',
		dates: ['Aug. 21', 'May 22'],
		description: [
			'Managed physical equipment and software to record and broadcast music department concerts.',
			'Worked efficiently with minimal faculty oversight.',
			'Continued to return to role on request to fill in for concerts or aid newer technicians.'
		]
	}
]
