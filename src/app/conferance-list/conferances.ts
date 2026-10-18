export interface Conferance {
  id: number;
  name: string;
  date: string;
  place: string;
  description: string;
}

export const CONFERANCES: Conferance[] = [
  {
    id: 1,
    name: 'Angular Frontiers',
    date: '2026-11-18',
    place: 'Tunis',
    description:
      'Explore modern Angular patterns, accessible interfaces, and practical application architecture.',
  },
  {
    id: 2,
    name: 'React Connect',
    date: '2027-01-21',
    place: 'Sfax',
    description:
      'A community day for building reliable React applications and sharing frontend engineering practices.',
  },
  {
    id: 3,
    name: 'Vue Horizons',
    date: '2027-03-12',
    place: 'Sousse',
    description:
      'Discover the Vue ecosystem, composition patterns, and tools for teams shipping web experiences.',
  },
  {
    id: 4,
    name: 'Web Foundations',
    date: '2027-04-08',
    place: 'Tunis',
    description:
      'A practical look at browser APIs, performance, and the foundations of inclusive web development.',
  },
  {
    id: 5,
    name: 'Frontend Futures',
    date: '2027-05-20',
    place: 'Sfax',
    description:
      'Meet frontend practitioners and discuss the ideas shaping the next generation of web products.',
  },
];