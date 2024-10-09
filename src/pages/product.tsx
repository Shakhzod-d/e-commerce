import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/images/comb1/molo-5w24n203-9113_10.jpg";
import img2 from "../assets/images/comb1/molo.jpg";
import img3 from "../assets/images/comb1/molo2.jpg";
import img4 from "../assets/images/comb1/molo_4.jpg";
import { Navigation, Pagination, Scrollbar, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import { useState } from "react";

const Product = () => {
  const product = {
    comp: "Molo",
    name: "Комбинезон Polaris Fur Polaris Fur (мамонт)",
    price: "20 900 ₽",
    images: [img1, img2, img3, img4],
    code: 74712,
  };

  const [thumbsSwiper] = useState(null);

  return (
    <div className="w-full">
      <div className="w-full flex lg:flex-col justify-between items-center bg-yellow-300">
        <div className="max-w-[640px] lg:max-w-[450px] w-full flex flex-col bg-blue-900">
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, Thumbs]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            thumbs={{ swiper: thumbsSwiper }}
            className="w-full"
          >
            {product.images.map((item, index) => (
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
            spaceBetween={5}
            slidesPerView={product.images.length}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Navigation, Pagination, Scrollbar, Thumbs]}
            className="w-full my-swiper"
          >
            {product.images.map((item, index) => (
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
        <div className="flex flex-col items-center w-max bg-red-900">
          <h4 className="text-[14px] text-[#99969A]">{product.code}</h4>
          <h3 className="text-3xl font-bold text-center">{product.comp}</h3>
          <h3 className="p-2 bg-[#F5C6D180] text-xl font-semibold">
            {product.price}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Product;
