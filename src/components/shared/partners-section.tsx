const PartnersSection = () => {
  return (
    <section>
      <div className="flex overflow-hidden justify-between flex-wrap md:justify-center">
        {Array(8)
          .fill(0)
          .map((_, ind) => (
            <img
              src={`/partners/${ind + 1}.png`}
              className={ind > 4 ? "md:hidden" : ""}
            />
          ))}
      </div>
    </section>
  );
};

export default PartnersSection;
