export type Product = {
  image: string;
  name: string;
  category: string;
  price: number;
  sold: number;
  profit: number;
};

export type productType = {
  id?: string;
  images: string[];
  name: string;
  desc?: string;
  price: number; // yes
  category?: string[]; // yes
  tag?: string[]; // no
  insertedAt?: string; // yes
  updatedAt?: string; // yes
  total: number; // yes
  suggests?: string[]; // ?
};

export type ordersType = {
  id: string;
  adderss: string;
  phone: string;
  orders: orderType[];
  insertedAt: string;
  paymented: boolean;
  delivery: boolean;
};

export type orderType = {
  product: productType;
  count: number;
};
