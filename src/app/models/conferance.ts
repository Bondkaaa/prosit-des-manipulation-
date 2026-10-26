export interface Conferance {
  id?: number;
  name: string;
  description?: string;
  location: string;
  date: string;
  time?: string;
  price?: number;
  nbPlaces?: number;
  imageUrl?: string;
}