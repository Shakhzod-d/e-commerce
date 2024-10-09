import type { FC } from "react";

interface TitleProps {
  string: string;
  link?: {
    to: string;
    text: string;
  };
  button?: string;
}

const Title: FC<TitleProps> = ({ string, link, button }) => {
  return (
    <div className="flex items-center gap-5 mb-6 md:flex-col">
      <div className="flex-1 h-px bg-[#99969a]/25 md:hidden" />
      <h2 className="text-[#221a25] text-[28px] font-black leading-[44px] md:text-[16px]">
        {string}
      </h2>

      {link?.text && (
        <a
          href={link?.to}
          className="text-[#55c380] text-[28px] font-normal leading-[44px] md:hidden"
        >
          {link?.text}
        </a>
      )}
      <div
        className={`${
          button ? "w-full max-w-[355px]" : "flex-1"
        } h-px bg-[#99969a]/25 md:hidden`}
      />

      {button && (
        <button>
          <div className="h-[42px] rounded-[1px] border-2 border-[#b7debf] justify-center items-center inline-flex">
            <div className="p-3 justify-start items-start gap-2.5 flex">
              <div className="text-[#0ca145] text-base font-normal font-['Ruda'] uppercase leading-[18px] tracking-wide">
                {button}
              </div>
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default Title;
