export type ClothesItem = {
  id: string;
  imageUrl: string;
  name: string;
  sizes: string[];
  price: number;
  withoutSale?: number;
  category: number;
  rating: number;
  color: string[];
  collection: string;
};

export type FetchPizzaArgs = {
  currentPage: number;
  category: string;
  sortBy: string;
  order: string;
};

export enum Status {
  LOADING = 'loading',
  ERROR = 'error',
  SUCCESS = 'success',
}

export type ClothesSliceState = {
  clothesItems: ClothesItem[];
  status: Status;
};
