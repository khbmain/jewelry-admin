export type Product = {
  image: string;
  name: string;
  category: string;
  price: number;
  sold: number;
  profit: number;
};

export type product = {
  id?: string;
  images: string[];
  name: string;
  desc?: string;
  price: number;
  category?: string[];
  tag?: string[];
  insertedAt?: string;
  updatedAt?: string;
  total: number;
  suggests?: string[];
};

export type orders = {
  id: string;
  adderss: string;
  phone: string;
  orders: order[];
  insertedAt: string;
  paymented: boolean;
  delivery: boolean;
};

export type order = {
  product: product;
  count: number;
};
