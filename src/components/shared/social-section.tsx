import { Title } from "../ui";
import { Container } from "../ui/container";

const SocialSection = () => {
  return (
    <section>
      <Container>
        <Title
          string="Мы в инстаграм"
          link={{ to: "#", text: " @dinomama.ru" }}
        />
      </Container>

      <img src="/instagram.jpg" className="w-full" />
    </section>
  );
};

export default SocialSection;
