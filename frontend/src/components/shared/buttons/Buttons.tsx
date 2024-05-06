import { textVariant } from "../../../helpers/cva/variants";
import { buttonProps } from "../../../types/types";

export function ButtonBack(props: buttonProps) {
  const { variant, text, src, onClick } = props;
  return (
    <button
      className='flex w-auto cursor-pointer justify-center gap-5 rounded-[4px] bg-blackMain px-3 py-1 font-semibold text-white xs:rounded-lg xs:px-[26px] xs:py-2'
      onClick={onClick}
    >
      <img className='w-[15px] self-center xs:w-[31px]' src={src} alt='icon' />
      <span className={textVariant({ variant })}>{text}</span>
    </button>
  );
}

export function ButtonForward(props: buttonProps) {
  const { variant = "usual", disabled, text, src, onClick } = props;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={variant === "registration" ? "submit" : "button"}
      className={`${disabled ? "opacity-25 cursor-not-allowed" : "cursor-pointer"} mt-auto flex transition-all w-full flex-row-reverse justify-center gap-[13px] rounded-[4px] bg-blackMain px-3 py-1 text-white xs:gap-5 xs:rounded-md xs:px-4 xs:py-2`}
    >
      <img className='w-[15px] self-center xs:w-[31px]' src={src} alt='icon' />
      <span className={textVariant({ variant })}>{text}</span>
    </button>
  );
}
type arrowProps = { src: string; onClick?: () => void; status: "active" | "inactive" };
export function Arrow(props: arrowProps) {
  const { onClick, src, status } = props;
  if (status == "inactive") {
    return (
      <button className='mx-[15px] opacity-40 xs:mx-6' onClick={onClick}>
        <img className='h-3 xs:h-5' src={src} alt='icon' />
      </button>
    );
  } else {
    return (
      <button className='mx-[15px] xs:mx-6' onClick={onClick}>
        <img className='h-3 xs:h-5' src={src} alt='icon' />
      </button>
    );
  }
}
