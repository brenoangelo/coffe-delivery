export interface ProductResponse {
  id: number;
  title: string;
  description: string;
  categories: {
    title: string;
    name: string;
  }[];
  imgUrl: string;
  price: number;
  priceFormatted: string;
  count: number;
}

const LOCALSTORAGE_KEY = '@coffe-delivery-checkout-1.0.0';

export function getCheckout(): ProductResponse[] {
  const data = localStorage.getItem(LOCALSTORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data) as ProductResponse[];
}

export function setCheckout(data: ProductResponse[]): ProductResponse[] {
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));

    return data;
  } catch (error) {
    throw error;
  }
}
