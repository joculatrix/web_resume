type Project = {
	title: string;
	img_src: string;
	desc: string;
	href: string;
}

export const projects: ReadonlyArray<Project> = [
	{
		title: 'synth_jxrs',
		img_src: '/assets/synth_jxrs.bmp',
		desc: 'An audio synthesizer written in Rust! Has a GUI with custom-made knobs and some MIDI integration.',
		href: 'https://github.com/joculatrix/synth_jxrs'
	}
]
