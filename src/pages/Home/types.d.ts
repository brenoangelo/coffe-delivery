export interface Coffee {
  id: number;
  title: string;
  description: string;
  categories: {
    title: string;
    name: string;
  }[];
  priceFormatted: string;
  price: number;
  imgUrl: string;
  stockCount: number;
}

export interface CoffeeCatalog extends Coffee {
  count: number;
}
