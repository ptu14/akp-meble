type Money = number;

export interface Product {
  id: string;
  name: string;
  shopName: string;
  image: string;
  price: Money;
  priceOld?: Money;
  itemsLeft: number;
  description: string;
}
