import { categoriesData } from "../../utils/constants";
import { CategoryCard } from "../ui";
import { Container } from "../ui/container";

const CategoriesSection = () => {
  return (
    <section>
      <Container>
        <div className="flex gap-5 justify-between flex-wrap md:grid md:grid-cols-2">
          {categoriesData.map((item) => (
            <CategoryCard
              title={item.title}
              img={`/categories/${item.id}.png`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoriesSection;
