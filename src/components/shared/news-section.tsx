import { Button, NewsCard, Title } from "../ui";
import { Container } from "../ui/container";

const NewsSection = () => {
  return (
    <section>
      <Container>
        <Title string={"Наш блог"} />
        <div className="flex gap-5 mb-4">
          {Array(3)
            .fill(0)
            .map((_, ind) => {
              return (
                <NewsCard
                  image={"/news/1.jpg"}
                  date={"18.09.2021"}
                  comments={"12"}
                  views={"90"}
                  title={"Во что обувать ребёнка осенью?"}
                  description={
                    "Осень — это мокро, холодно и часто совсем не предсказуемо. И если родители предпочтут “нелётную” погоду переждать дома, то детей не удержать — им срочно нужно мерить лужи и “готовить кашку” в свежей грязи :) При какой..."
                  }
                  key={ind}
                />
              );
            })}
        </div>
        <div className="flex justify-center">
          <Button text={"читать еще"} />
        </div>
      </Container>
    </section>
  );
};

export default NewsSection;
