const footer = [
  {
    id: 1,
    title: "одежда",
    data: [
      "Детские брюки",
      "Детские комбинезоны",
      "Детские комплекты",
      "Детские конверты",
      "Детские купальники, плавки",
      "Детские куртки",
      "Мамам и папам",
      "Детские дождевики",
      "Детские пальто",
      "Детские платья, юбки",
      "Детские полукомбинезоны",
      "Детский софтшелл",
      "Детский флис",
      "Детские футболки, толстовки",
      "Школьная форма",
      "Детские шорты, брюки",
    ],
  },
  {
    id: 2,
    title: "обувь",
    data: [
      "Детские ботинки",
      "Детские кеды",
      "Детские кроссовки",
      "Детские мокасины",
      "Обувь для взрослых",
      "Детские резиновые сапоги",
      "Детские сабо",
      "Детские сандалии",
      "Детские сапоги",
      "Детские сноубутсы",
      "Детские тапочки",
      "Детские туфли",
      "Школьная обувь",
      "Детские шлепанцы",
    ],
  },
  {
    id: 3,
    title: "аксессуары",
    data: [
      "Детские зонты",
      "Детские игрушки",
      "Маски и антисептики",
      "Детское нижнее белье",
      "Детские очки",
      "Детские панамы, кепки",
      "Детские пинетки",
      "Подарки",
      "Детские рукавицы",
      "Детские рюкзаки и сумки",
      "Детское термобелье",
      "Детские шапки",
      "Детские шарфы, манишки",
    ],
  },
  {
    id: 4,
    title: "помощь",
    data: [
      "Личный кабинет",
      "Доставка и оплата",
      "Обмен и возврат",
      "Скидки и бонусы",
      "Наш блог",
      "Наша энциклопедия",
      "Частые вопросы",
      "Таблица размеров",
      "Состояние заказа",
      "О компании",
      "Контакты",
    ],
  },
];
export const Footer = () => {
  return (
    <footer className="w-full 10">
      <div className="w-full bg-[#F7F8F7] pt-10 pb-6">
        <div className=" w-full max-w-[1340px] mx-auto px-5 flex justify-between gap-4 flex-wrap ">
          {footer.map((item) => {
            if (item.id <= 3) {
              return (
                <div key={item.id} className="md:hidden">
                  <h3 className="mb-4 font-bold text-[14px]">{item.title}</h3>
                  {item.data?.map((item, i) => (
                    <p className="text-[14px] text-[#221A2599] mb-3" key={i}>
                      {item}
                    </p>
                  ))}
                </div>
              );
            }
          })}
          {footer.map((item) => {
            if (item.id == 4) {
              return (
                <div key={item.id} className="">
                  <h3 className="mb-4 font-bold text-[14px]">{item.title}</h3>
                  <div className="md:flex gap-4">
                    <div className="">
                      {item.data?.map((item, i) => {
                        if (i <= 5) {
                          return (
                            <p
                              className="text-[14px] text-[#221A2599] mb-3"
                              key={i}
                            >
                              {item}
                            </p>
                          );
                        }
                      })}
                    </div>
                    <div className="">
                      {item.data?.map((item, i) => {
                        if (i > 5) {
                          return (
                            <p
                              className="text-[14px] text-[#221A2599] mb-3"
                              key={i}
                            >
                              {item}
                            </p>
                          );
                        }
                      })}
                    </div>
                  </div>
                  <div className=" border-t border-t-[#99969A40] pt-6">
                    <p className="text-[14px] text-[#221A2599] mb-3">
                      Защита персональных данных
                    </p>
                    <p className="text-[14px] text-[#221A2599] mb-3">
                      Публичная оферта
                    </p>
                  </div>
                </div>
              );
            }
          })}
          <div>
            <h3 className="mb-4 font-bold text-[14px]">Подпишитесь</h3>

            <p className="text-[14px] text-[#55C380] mb-3">
              ...и мы будем оповещать вас <br /> о спецпредложениях и новинках
            </p>
            <div className="flex items-center gap-4 pb-1 border-b border-b-black mb-10">
              <img src="/assets/icons/paper.svg" alt="paper" />
              <p className="text-[14px] text-[#221A2599] mb-3">Ваша почта</p>
            </div>
            <img src="/assets/icons/rates.png" alt="paper" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1340px] mx-auto px-5 flex justify-between py-[10px] border-t border-t-[#99969A40] flex-wrap gap-4 ">
        <p>©2021 интернет-магазин детской функциональной одежды Диномама.ру</p>
        <div className="flex items-center gap-5 ">
          <p>Мы принимаем:</p>
          <img src="/assets/icons/visa.svg" alt="" />
          <img src="/assets/icons/mir.svg" alt="" />
          <img src="/assets/icons/master.svg" alt="" />
        </div>
      </div>
    </footer>
  );
};
