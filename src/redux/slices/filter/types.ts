export enum SortTypeEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
  COLLECTION_DESC = 'collection',
  COLLECTION_ASC = '-collection',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}

export type Sort = {
  sortProperty: SortTypeEnum;
  name: string;
};

export interface FilterSliceState {
  currentPage: number;
  sortType: Sort;
  categoryId: string;
}
