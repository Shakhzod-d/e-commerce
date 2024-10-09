import { useEffect, useState } from "react";
import { Card, Title } from "../ui";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Container } from "../ui/container";

interface Props {
  xit: boolean;
  images: string[];
  size: string[];
  desc: string;
  title: string;
  id: string;
  price: string;
}

const FamousSection = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://da5d82458f584cf7.mokky.dev/products")
      .then((req) => setData(req.data));
  }, []);

  return (
    <section>
      <Container>
        <Title string={"Распродажа"} button="все со скидкой" />
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          navigation
          breakpoints={{
            320: {
              slidesPerView: 1,
              modules: [],
            },
            640: {
              slidesPerView: 2, // 640px dan katta ekranda 2 slayder ko'rinadi
            },
            768: {
              slidesPerView: 3, // 768px dan katta ekranda 3 slayder
            },
            1024: {
              slidesPerView: 4, // 1024px dan katta ekranda 4 ta slayder
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
        >
          {data.map(
            (item: Props) =>
              item?.xit && (
                <SwiperSlide key={item.id}>
                  <Card
                    id={item.id}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    sizes={item.size}
                    images={item.images}
                  />
                </SwiperSlide>
              )
          )}
        </Swiper>
      </Container>
    </section>
  );
};

export default FamousSection;
