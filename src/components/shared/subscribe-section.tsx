const SubscribeSection = () => {
  return (
    <div className=" bg-[#55c380]">
      <img
        className=" origin-top-left rotate-[-1.69deg]"
        src="https://via.placeholder.com/32x32"
      />
      <div className="">
        <div className=" items-center gap-4 inline-flex">
          <img className="w-8 h-8" src="https://via.placeholder.com/32x32" />
          <div className="text-center text-white text-[28px] font-black font-['Ruda'] leading-[44px]">
            Подпишитесь на рассылку
          </div>
        </div>
        <div className=" text-white/80 text-2xl font-normal font-['Ruda'] leading-[34px]">
          Мы будем сообщать вам только
          <br />о крутых акциях и присылать полезные статьи
        </div>
      </div>
      <div className="">
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-center gap-1 inline-flex">
            <div className="h-6 pl-[3.50px] pr-[2.50px] pt-[2.50px] pb-[4.59px] justify-center items-center flex">
              <img
                className="w-[18px] h-[16.91px]"
                src="https://via.placeholder.com/18x17"
              />
            </div>
            <div className="text-white/60 text-lg font-normal font-['Ruda'] leading-tight">
              Ваш емаил
            </div>
          </div>
          <div className="w-[420px] h-px bg-white" />
        </div>
        <div className=" bg-[#c2f7d7] justify-start items-start inline-flex">
          <div className="p-3 justify-start items-start gap-2.5 flex">
            <div className="text-center text-[#09943e] text-base font-normal font-['Ruda'] uppercase leading-[18px] tracking-wide">
              подписаться
            </div>
          </div>
          <div className="p-3 bg-white justify-start items-start gap-2.5 flex">
            <div className="w-[18px] pl-px pr-[5px] py-[3px] justify-center items-center flex">
              <img
                className="w-[8.49px] h-[8.49px] origin-top-left rotate-45"
                src="https://via.placeholder.com/8x8"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="origin-top-left rotate-[-139.32deg] opacity-60 w-[56.22px] h-[63.35px] left-[1275.93px] top-[34.65px] absolute"></div>
    </div>
  );
};

export default SubscribeSection;
