import { api } from '../../../api/axios';

export interface ProductResponse {
  id: number;
  title: string;
  description: string;
  price: number;
  categories: [
    {
      title: string;
      name: string;
    },
  ];
  imgUrl: string;
  stockCount: number;
}

export async function getProducts(): Promise<ProductResponse[]> {
  try {
    const { data } = await api.get<ProductResponse[]>('/products');

    return data;
  } catch (error) {
    throw new Error('ocorreu um erro!');
  }
}
