import { Link } from "react-router-dom";
export const Navbar = () => {
  const filter: string[] = [
    "Мальчики",
    "Девочки",
    "Сезоны",
    "Бренды",
    "Доставка",
    "Помощь",
  ];
  return (
    <header>
      <div className="w-full px-[6xp] bg-[#F7F8F7] h-[32px] ">
        <div className="w-full max-w-[1340px] mx-auto flex justify-between items-center px-5">
          <div className="flex gap-4">
            <img src="../src/assets/icons/location.svg" alt="location" />
            <span className="flex text-[14px] gap-1">
              Шоурум: Москва, ул. Малая Филевская, д. 8, корп. 1
              <p className="text-[#99969A]">c 10:00 до 20:00</p>
            </span>
          </div>
          <div>
            <div className="flex gap-1 ">
              <img src="../src/assets/icons/user.svg" alt="user" />
              <Link to={"/login"}>
                <p>Вход</p>
              </Link>
              <span>|</span>
              <Link to={"/register"}>
                <p className="text-[#0CA145]">Регистрация</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1340px] mx-auto flex justify-between items-center py-6 relative px-5">
        <div className="flex items-center  gap-10">
          <img
            src="../src/assets/icons/media.svg"
            alt="media"
            className="cursor-pointer"
          />
          <div>
            <p className="tex-[#221A25] font-bold">+7 (495) 788-77-50</p>
            <span className="flex text-[#99969A] text-[10px] items-center">
              или напишите нам
              <img src="../src/assets/icons/whatsapp.svg" alt="whatsapp" />
              <p className="text-[14px]">+7 (495) 788-77-50</p>
            </span>
          </div>
        </div>

        <img
          src="../src/assets/icons/logo.png"
          alt="logo"
          className="absolute left-[40%] -top-5"
        />

        <div className="flex items-center gap-16">
          <div className="flex items-center border-b border-b-black gap-1">
            <img src="../src/assets/icons/search.svg" alt="search" />
            <input
              type="text"
              className="w-[250px] focus:border-none !important active:border-none"
              placeholder="Я ищу"
            />
          </div>
          <div className="flex gap-6 items-center">
            <img src="../src/assets/icons/favorite.svg" alt="favorite" />
            <img src="../src/assets/icons/cart.svg" alt="cart" />
          </div>
        </div>
      </div>
      <div className="border-t border-t-[#99969A40]">
        <div className="w-full max-w-[751px] mx-auto flex justify-between p-3">
          {filter.map((item, index) => (
            <p key={index} className="text-[#221A25] font-bold cursor-pointer">{item}</p>
          ))}
        </div>
      </div>
    </header>
  );
};
