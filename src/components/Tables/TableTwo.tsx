import { productType } from '../../types/product';
import ProductOne from '../../images/product/product-01.png';
import ProductThree from '../../images/product/product-03.png';
import ProductFour from '../../images/product/product-04.png';
import { toTugrik } from '../../lib/helper';
import ProductModal from '../mymodals/productmodal';
import { useEffect, useState } from 'react';
import { db } from '../../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

const productData: productType[] = [
  {
    images: [ProductOne],
    name: 'Apple Watch Series 7',
    category: ['Electronics'],
    price: 296,
    total: 22,
    desc: 'Нэр нтр',
  },
  {
    images: [ProductThree],
    name: 'Dell Inspiron 15',
    category: ['Electronics'],
    price: 443,
    total: 64,
    desc: '247',
  },
  {
    images: [ProductFour],
    name: 'HP Probook 450',
    category: ['Electronics'],
    price: 499,
    total: 72,
    desc: '',
  },
];

const TableTwo = () => {
  const [modal, setModal] = useState<productType | boolean>(false);
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    // get products from firestore product collection
    async function getProducts() {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const productCollection = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(productCollection);

      setProducts(productCollection);
    }
    getProducts();
  }, []);

  return (
    <>
      {
        <ProductModal
          open={modal}
          onClose={() => {
            setModal(false);
          }}
        />
      }
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex justify-between py-6 px-4 md:px-6 xl:px-7.5">
          <h4 className=" text-xl font-semibold text-black dark:text-white">
            Бараанууд
          </h4>

          <button
            onClick={() => {
              setModal(true);
            }}
            className="inline-flex items-center justify-center rounded-full bg-meta-3 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Бараа нэмэх +
          </button>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-3 flex items-center">
            <p className="font-medium">Бараа</p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="font-medium">Ангилал</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Үнэ</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Тоо хэмжээ</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Цэс</p>
          </div>
        </div>

        {products.map((product, key) => (
          <div
            className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-3 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-12.5 w-15 rounded-md">
                  <img src={product.image[0]} alt="Product" />
                </div>
                <p className="text-sm text-black dark:text-white">
                  {product.name}
                </p>
              </div>
            </div>
            <div className="col-span-2 hidden items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {product.category}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {toTugrik(product.price)}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {product.total}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-meta-3 line-clamp-2">{product.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TableTwo;
