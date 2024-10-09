const PartnersSection = () => {
  return (
    <section>
      <div className="flex overflow-hidden justify-between">
        {Array(8)
          .fill(0)
          .map((_, ind) => (
            <img src={`/partners/${ind + 1}.png`} />
          ))}
      </div>
    </section>
  );
};

export default PartnersSection;
