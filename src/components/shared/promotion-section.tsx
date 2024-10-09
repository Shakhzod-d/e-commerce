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
  promotion: boolean;
  images: string[];
  size: string[];
  desc: string;
  title: string;
  id: string;
  price: string;
}

const PromotionSection = () => {
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
          modules={[Navigation, Pagination, Scrollbar, A11y]}
        >
          {data.map(
            (item: Props) =>
              item?.promotion && (
                <SwiperSlide key={item.id}>
                  <Card
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

export default PromotionSection;
