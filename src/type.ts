export interface Glasses {
  id: number,
  name: string;
  title: string;
  image: string;
  info: string;
  size: 28 | 36 | 42 ;
  colors: { frameColor: string; image: string }[];
  price: number;
  isInCart: boolean;
}
