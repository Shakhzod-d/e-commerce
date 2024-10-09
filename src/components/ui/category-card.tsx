interface Props {
  title: string;
  img: string;
}

const CategoryCard = ({ title, img }: Props) => {
  return (
    <div className="bg-[#f7f8f7] flex-1 flex justify-center items-center flex-col min-w-[200px] py-6 cursor-pointer">
      <img className=" mb-14 h-[125px]" src={img} />
      <div className="flex-col justify-start items-center gap-4 inline-flex">
        <div className="text-[#221a25] text-lg font-black font-['Ruda'] leading-snug">
          {title}
        </div>
        <div className="hover:bg-[#2cdf70]/10 w-11 h-11 flex justify-center items-center transition duration-300">
          <img src="/icons/arrow.svg" />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
