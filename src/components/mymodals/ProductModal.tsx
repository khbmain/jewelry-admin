import { useEffect, useRef, useState } from 'react';
import { productType } from '../../types/product';
import { useOnClickOutside } from 'usehooks-ts';
import SelectGroupTwo from '../Forms/SelectGroup/SelectGroupTwo';
import { uploadFiles } from '../../helper';
import MultiSelect from '../Forms/MultiSelect';

export default function ProductModal({
  open = false,
  onClose = () => {},
  onComplete = () => {},
}: {
  open?: boolean | productType;
  onClose?: Function;
  onComplete?: Function;
}) {
  const ref = useRef(null);
  const [images, setImages] = useState<File[]>([]);
  const [progresses, setProgresses] = useState<any>([]);
  const [product, setProduct] = useState<productType>({
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

  function onOutside() {
    onClose();
  }

  useOnClickOutside(ref, onOutside);
  useEffect(() => {
    console.log(progresses);
  }, [progresses]);

  return (
    <div
      className={`h-screen w-screen bg-[#000000]/50 fixed top-0 left-0 z-9999 justify-center items-center backdrop-blur-[1px] ${
        open ? 'flex' : 'hidden'
      }`}
    >
      <div
        ref={ref}
        className="max-h-[60vh] overflow-auto rounded-sm border border-stroke w-[30vw] bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
      >
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

          <div>
            <label className="mb-3 block text-black dark:text-white">Үнэ</label>
            <input
              type="number"
              placeholder="Барааны үнэ энд оруулна уу ( ₮ )"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* description */}
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Дэлгэрэнгүй тайлбар
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
              {images.map((image) => (
                <ImgBlobViewer key={image.name} image={image} />
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
          {/* class */}
          <MultiSelect id="categories" />
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Барааны тоо хэмжээ
            </label>
            <input
              type="number"
              placeholder="Уг бараанаас хэд байгааг оруулна уу..."
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="flex gap-4 justify-end">
            <button
              onClick={() => {
                setProduct({
                  name: '',
                  images: [],
                  desc: '',
                  price: 0,
                  category: [],
                  tag: [],
                  total: 0,
                  suggests: [],
                });
                onClose();
              }}
              className="inline-flex items-center justify-center rounded-md bg-slate-500 py-2 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Болих
            </button>
            <button
              onClick={() => {
                uploadFiles(
                  images,
                  (urls: any) => {
                    console.log(urls);
                  },
                  (progresses: any[]) =>
                    console.log(progresses.map((item) => item.progress)),
                );
              }}
              className="inline-flex items-center justify-center rounded-md bg-meta-3 py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Нэмэх
            </button>
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
