import { whyData } from "../../utils/constants";
import { Container } from "../ui/container";

const WhySection = () => {
  return (
    <section>
      <Container className="flex justify-center gap-10 flex-wrap">
        {whyData.map((item) => (
          <div className="h-[92px] flex-col justify-center items-center gap-2 inline-flex">
            <img className="w-12 h-12" src={`/why/${item.id}.png`} />
            <div className="w-[110px] text-center text-black text-xs font-bold font-['Ruda'] leading-[18px]">
              {item.title}{" "}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default WhySection;
