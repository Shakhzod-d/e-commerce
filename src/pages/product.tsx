import { Swiper, SwiperSlide } from "swiper/react";
import heart from "../assets/heart.png";
import { Navigation, Pagination, Scrollbar, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import { useEffect, useState } from "react";
import { Advantages, Description, Follow } from "../components/shared";
import { Container } from "../components/ui/container";
import { useParams } from "react-router-dom";
import axios from "axios";

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
}

const Product = () => {
  const { id } = useParams();

  const [data, setData] = useState<ProductProps>();

  useEffect(() => {
    axios
      .get("https://da5d82458f584cf7.mokky.dev/products/" + id)
      .then((req) => setData(req.data));
  }, [id]);

  const [thumbsSwiper] = useState(null);

  return (
    <div>
      <Container>
        <div className="w-full">
          <div className="w-full flex lg:flex-col lg:items-center justify-between items-start">
            <div className="max-w-[640px] lg:max-w-[450px] w-full flex flex-col">
              <Swiper
                slidesPerView={1}
                modules={[Navigation, Pagination, Scrollbar, Thumbs]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                thumbs={{ swiper: thumbsSwiper }}
                className="w-full mb-2"
              >
                {data?.images?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={item}
                      alt=""
                      className="max-w-[640px] w-full h-[640px] md:h-[450px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                slidesPerView={4}
                spaceBetween={5}
                // slidesPerView={data?.images?.length}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Navigation, Pagination, Scrollbar, Thumbs]}
                className="w-full my-swiper"
              >
                {data?.images?.map((item, index) => (
                  <SwiperSlide key={index} className="">
                    <img
                      src={item}
                      alt=""
                      className="w-[124px] h-[162px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="max-w-[450px] w-full flex flex-col items-center lg:mt-5 px-3">
              <h4 className="text-[14px] text-[#99969A] mb-7">{747474}</h4>
              <h3 className="text-2xl font-semibold text-center text-gray-500 my-5">
                {data?.title}
              </h3>
              <h3 className="p-2 bg-[#F5C6D180] text-xl font-semibold">
                {data?.price}
              </h3>
              <h4 className="text-[14px] text-red-500 mt-2 mb-5">
                {data?.desc}{" "}
              </h4>
              <h4 className="text-[14px] font-semibold text-center text-gray-500">
                Доставим бесплатно!* Оплата долями от 5 225 ₽
              </h4>
              <div className="flex my-4">
                <button className="px-5 py-2 bg-green-600 text-white text-2xl font-semibold uppercase">
                  в корзину
                </button>
                <div className="flex justify-center items-center px-3 text-center bg-gray-100">
                  <img src={heart} alt="like" className="w-[20px] h-[20px]" />
                </div>
              </div>
              <div className="text-sm text-green-600 flex flex-wrap sm:flex-col sm:items-center">
                <h4 className=" p-1 border-b-[2px] border-dashed border-green-600">
                  Доставка и оплата
                </h4>
                <span className="border-green-600 border-[1px] mx-2 sm:hidden"></span>
                <h4 className="p-1 border-b-[2px] border-dashed border-green-600 ">
                  Наличие в шоу-руме
                </h4>
                <span className="border-green-600 border-[1px] mx-2 sm:hidden"></span>
                <h4 className="p-1 border-b-[2px] border-dashed border-green-600">
                  Нашли дешевле?
                </h4>
              </div>
            </div>
          </div>
          <div className="my-5">
            <Advantages />
          </div>
          <div className="mt-11">
            <Description />
          </div>
          <div>
            <Follow />
          </div>
        </div>
        <div className="flex flex-col items-center w-max bg-red-900">
          <h4 className="text-[14px] text-[#99969A]">{data?.code}</h4>
          <h3 className="text-3xl font-bold text-center">{data?.comp}</h3>
          <h3 className="p-2 bg-[#F5C6D180] text-xl font-semibold">
            {data?.price}
          </h3>
        </div>
      </Container>
    </div>
  );
};

export default Product;
