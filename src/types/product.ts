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
  category?: string[]; // half
  tag?: string[]; // no
  insertedAt?: string; // yes
  updatedAt?: string; // yes
  total: number; // no
  suggests?: string[]; // ?
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
