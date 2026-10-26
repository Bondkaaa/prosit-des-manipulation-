export interface Conferance {
  id: number;
  name: string;
  date: string;
  place: string;
}

export const CONFERANCES: Conferance[] = [
  { id: 1, name: 'angular', date: '2023-01-01', place: 'tunis' },
  { id: 2, name: 'react', date: '2023-02-01', place: 'sfax' },
  { id: 3, name: 'vue', date: '2023-03-01', place: 'sousse' },
];
