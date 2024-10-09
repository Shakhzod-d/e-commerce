import type { FC } from "react";
import { Link } from "react-router-dom";

interface ProductProps {
  title: string;
  isUniq?: {
    bg: string;
    text: string;
  };
  desc: string;
  price: string;
  sizes: string[];
  discountPrice?: string;
  images: string[];
  id: string;
}

const Product: FC<ProductProps> = ({
  title,
  // isUniq,
  desc,
  price,
  sizes,
  // discountPrice,
  images,
  id,
}) => {
  return (
    <Link to={`/product/${id}`} className="max-w-[310px] h-[550px] relative">
      <div className="">
        <img className="w-full" src={images?.[0]} />
      </div>
      <img src="/icons/like.png" className="absolute top-[10px] right-[10px]" />
      {/* <div className="h-[34px] flex items-center max-w-[max-content] p-1.5 bg-[#55c380] rounded-[1px] ">
        <div className="text-center text-white text-xs font-bold  uppercase leading-snug tracking-wide">
          {isUniq?.text}
        </div>
      </div> */}
      <div className=" flex-col justify-end items-center gap-1 inline-flex">
        <div className="w-[310px] text-center text-[#221a25] text-sm font-black  uppercase leading-none tracking-wide">
          {title}
        </div>
        <div className="w-[310px] text-center text-[#221a25]/80 text-lg font-normal  leading-normal">
          {desc}
        </div>
        <div className="w-[310px] text-center text-[#221a25] text-lg font-normal  leading-normal">
          {price} ₽
        </div>
        <div className="pt-2 justify-center items-center gap-2 inline-flex">
          {sizes.map((item) => (
            <div className="p-1 bg-[#f7f8f7] flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="w-[22px] text-center text-[#0ca145] text-xs font-bold  uppercase leading-snug tracking-wide">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Product;
