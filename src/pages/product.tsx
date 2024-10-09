import {Swiper, SwiperSlide} from 'swiper/react'
import img1 from '../assets/images/comb1/molo-5w24n203-9113_10.jpg'
import img2 from '../assets/images/comb1/molo.jpg'
import img3 from '../assets/images/comb1/molo2.jpg'
import img4 from '../assets/images/comb1/molo_4.jpg'
import heart from '../assets/heart.png'
import { Navigation, Pagination, Scrollbar, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs'
import { useState } from 'react'
import { Advantages, Description, Follow } from '../components/shared'
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
        <><div className="w-full">
            <div className="w-full flex lg:flex-col lg:items-center justify-between items-start">
                <div className='max-w-[640px] lg:max-w-[450px] w-full flex flex-col'>
                    <Swiper
                        slidesPerView={1}
                        modules={[Navigation, Pagination, Scrollbar, Thumbs]}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        thumbs={{ swiper: thumbsSwiper }}
                        className='w-full mb-2'
                    >
                        {product.images.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item} alt="" className='max-w-[640px] w-full h-[640px] md:h-[450px] object-cover' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        spaceBetween={5}
                        slidesPerView={product.images.length}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[Navigation, Pagination, Scrollbar, Thumbs]}
                        className='w-full my-swiper'
                    >
                        {product.images.map((item, index) => (
                            <SwiperSlide key={index} className=''>
                                <img src={item} alt="" className='w-[124px] h-[162px] object-cover' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='max-w-[450px] w-full flex flex-col items-center lg:mt-5 px-3'>
                    <h4 className='text-[14px] text-[#99969A] mb-7'>{product.code}</h4>
                    <h3 className='text-3xl font-bold text-center'>{product.comp}</h3>
                    <h3 className='text-2xl font-semibold text-center text-gray-500 my-5'>{product.name}</h3>
                    <h3 className='p-2 bg-[#F5C6D180] text-xl font-semibold'>{product.price}</h3>
                    <h4 className='text-[14px] text-red-500 mt-2 mb-5'>🔥 Черная пятница: скидка действует до 28 ноября</h4>
                    <h4 className='text-[14px] font-semibold text-center text-gray-500'>Доставим бесплатно!* Оплата долями от 5 225 ₽</h4>
                    <div className='flex my-4'>
                        <button className='px-5 py-2 bg-green-600 text-white text-2xl font-semibold uppercase'>в корзину</button>
                        <div className='flex justify-center items-center px-3 text-center bg-gray-100'>
                            <img src={heart} alt="like" className='w-[20px] h-[20px]' />
                        </div>
                    </div>
                    <div className='text-sm text-green-600 flex flex-wrap sm:flex-col sm:items-center'>
                        <h4 className=' p-1 border-b-[2px] border-dashed border-green-600'>Доставка и оплата</h4>
                        <span className='border-green-600 border-[1px] mx-2 sm:hidden'></span>
                        <h4 className='p-1 border-b-[2px] border-dashed border-green-600 '>Наличие в шоу-руме</h4>
                        <span className='border-green-600 border-[1px] mx-2 sm:hidden'></span>
                        <h4 className='p-1 border-b-[2px] border-dashed border-green-600'>Нашли дешевле?</h4>
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <Advantages />
            </div>
            <div className='mt-11'>
                <Description />
            </div>
            <div>
                <Follow />
            </div>
        </div><div className="flex flex-col items-center w-max bg-red-900">
                <h4 className="text-[14px] text-[#99969A]">{product.code}</h4>
                <h3 className="text-3xl font-bold text-center">{product.comp}</h3>
                <h3 className="p-2 bg-[#F5C6D180] text-xl font-semibold">
                    {product.price}
                </h3>
            </div></>
      </div>
    </div>
  );
};

export default Product;
