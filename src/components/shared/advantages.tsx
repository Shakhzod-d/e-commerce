import img1 from "/assets/Group 43710.png";
import img2 from "/assets/Group 43711.png";
import img3 from "/assets/Group 43712.png";
import img4 from "/assets/returns.png";
import img5 from "/assets/Group 43709.png";

const Advantages = () => {
  const advantages = [
    {
      id: 1,
      img: img1,
      advantage: "Шоу-рум с хитами продаж!",
    },
    {
      id: 2,
      img: img2,
      advantage: "Гарантия качества!",
    },
    {
      id: 3,
      img: img3,
      advantage: "Нам доверяют!",
    },
    {
      id: 4,
      img: img4,
      advantage: "Возврат и обмен без проблем!",
    },
    {
      id: 5,
      img: img5,
      advantage: "С нами выгодно!",
    },
  ];
  return (
    <div className="w-full p-3 flex justify-center items-center bg-[#F7F8F7]">
      <ul className="grid grid-cols-5 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-1 gap-5">
        {advantages.map((item) => (
          <li key={item.id} className="flex flex-col items-center">
            <img src={item.img} alt={item.advantage} className="mb-1" />
            <h4 className="text-md font-semibold">{item.advantage}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Advantages;
