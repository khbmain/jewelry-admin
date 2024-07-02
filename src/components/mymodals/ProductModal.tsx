import { useState } from 'react';
import { product } from '../../types/product';

export default function ProductModal({
  open = true,
}: {
  open?: boolean;
  onClose?: Function;
}) {
  const [images, setImages] = useState<File[]>([]);
  const [product, setProduct] = useState<product>({
    name: '',
    images: [],
    desc: '',
    price: 0,
    category: [],
    tag: [],
    total: 0,
    suggests: [],
  });

  function onFileAdded(e: any) {}

  return (
    <div className="h-screen w-screen bg-[#000000]/50 fixed top-0 left-0 z-9999 flex justify-center items-center backdrop-blur-[1px]">
      <div className="rounded-sm border border-stroke w-[30vw] bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Бараа нэмэх
          </h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">
          <div>
            <label className="mb-3 block text-black dark:text-white">Нэр</label>
            <input
              type="text"
              placeholder="Барааны нэр энд оруулна уу"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* <div>
            <label className="mb-3 block text-black dark:text-white">
              Active Input
            </label>
            <input
              type="text"
              placeholder="Active Input"
              className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
            />
          </div> */}

          {/* description */}
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Барааны дэлгэрэнгүй тайлбар
            </label>
            <textarea
              rows={6}
              placeholder="Барааны дэлгэрэнгүй тайлбар..."
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>

          {/*  */}
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Барааны зураг
            </label>
            <div className="flex gap-3 overflow-x-auto pb-3 ">
              {images.map((image, index) => (
                <ImgBlobViewer key={image.name + index} image={image} />
              ))}
              <div className="h-[130px] relative aspect-[2.3/3] bg-[#a8a8a8] flex items-center">
                <input
                  className="absolute w-full h-full top-0 left-0 opacity-0"
                  accept="image/*"
                  type="file"
                  multiple
                  onChange={(e) => {
                    let imgblobs = [];
                    for (let i = 0; i < e.target.files!.length; i++) {
                      imgblobs.push(e.target.files![i]);
                    }
                    setImages([...images, ...imgblobs]);
                  }}
                />
                <h1 className="text-white mx-3 text-center ">Зураг нэмэх</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImgBlobViewer({ image }: { image: File }) {
  return (
    <img
      src={URL.createObjectURL(image)}
      className="h-[130px] w-auto rounded-lg"
    />
  );
}
