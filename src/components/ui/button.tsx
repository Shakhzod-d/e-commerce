interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <div className="h-[42px] bg-[#0ca145] rounded-[1px] inline-flex">
      <div className="p-3 gap-2.5 flex">
        <div className="text-white text-base font-normal uppercase leading-[18px] tracking-wide">
          {text}
        </div>
      </div>
      <div className="p-3 bg-black/10 gap-2.5 flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.5638 13.2365C6.39508 13.0677 6.30029 12.8388 6.30029 12.6002C6.30029 12.3615 6.39508 12.1326 6.5638 11.9639L9.5275 9.00017L6.5638 6.03647C6.39986 5.86673 6.30914 5.63939 6.31119 5.40341C6.31324 5.16743 6.4079 4.9417 6.57476 4.77483C6.74163 4.60797 6.96736 4.51332 7.20334 4.51126C7.43932 4.50921 7.66666 4.59993 7.8364 4.76387L11.4364 8.36387C11.6051 8.53265 11.6999 8.76152 11.6999 9.00017C11.6999 9.23882 11.6051 9.4677 11.4364 9.63647L7.8364 13.2365C7.66763 13.4052 7.43875 13.5 7.2001 13.5C6.96145 13.5 6.73258 13.4052 6.5638 13.2365Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Button;
