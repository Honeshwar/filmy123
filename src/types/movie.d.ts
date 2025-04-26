
export interface Movie {
  id: number;
  title: string;
  image: string;
  year: string | number; // Allow both number and string to fix type errors
  genre: string;
}
