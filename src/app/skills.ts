export type Skill = {
    name: string;
    level: number;
};

export type SkillCategory = {
    name: string;
    skills: Skill[];
};

export const skills: ReadonlyArray<SkillCategory> = [
    {
        name: 'Languages',
        skills: [
            { name: 'Rust', level: 4 },
            { name: 'C/C++', level: 3 },
            { name: 'Java', level: 3 },
            { name: 'JavaScript', level: 3 },
            { name: 'SQL', level: 3 },
            { name: 'Python', level: 2 },
        ]
    },
    {
        name: 'Containers',
        skills: [
            { name: 'Docker', level: 3 },
            { name: 'Kubernetes', level: 3 },
        ]
    },
    {
        name: 'Web Front-End',
        skills: [
            { name: 'Angular', level: 3 },
            { name: 'React', level: 3 },
            { name: 'Blazor', level: 2 },
            { name: 'jQuery', level: 2 },
        ]
    }
]
