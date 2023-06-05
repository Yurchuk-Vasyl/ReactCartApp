export type CartItems = {
  id: string;
  imageUrl: string;
  name: string;
  sizes: string[];
  price: number;
  withoutSale?: number;
  category: number;
  color: string[];
  count: number;
  chooseItemLoc?: string;
};
