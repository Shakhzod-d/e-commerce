import {
  CategoriesSection,
  FamousSection,
  NewsSection,
  PartnersSection,
  PromotionSection,
  SocialSection,
  WhySection,
  // SubscribeSection,
} from "../components/shared";

const Home = () => {
  return (
    <main>
      <WhySection />
      <PartnersSection />
      <CategoriesSection />
      <SocialSection />
      <NewsSection />
      <FamousSection />
      <PromotionSection />
      {/* <SubscribeSection /> */}
    </main>
  );
};

export default Home;
