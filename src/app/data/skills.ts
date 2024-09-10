type Level = 1 | 2 | 3 | 4 | 5; // me-proof accident prevention conveniencetype

export type Skill = {
    name: string;
    level: Level;
};

export type SkillCategory = {
    name: string;
    skills: Skill[];
};

export const skills: ReadonlyArray<SkillCategory> = [
    {
        name: 'Languages',
        skills: [
            { name: 'Rust', level: 5 },
            { name: 'C/C++', level: 4 },
            { name: 'Java', level: 4 },
            { name: 'JavaScript', level: 3 },
            { name: 'SQL', level: 3 },
            { name: 'Python', level: 3 },
        ]
    },
    {
        name: 'Container Orchestration',
        skills: [
            { name: 'Docker', level: 3 },
            { name: 'Kubernetes', level: 3 },
        ]
    },
    {
        name: 'Web Front-End',
        skills: [
            { name: 'Angular', level: 4 },
            { name: 'React', level: 3 },
            { name: 'Blazor', level: 3 },
            { name: 'jQuery', level: 3 },
        ]
    }
]
