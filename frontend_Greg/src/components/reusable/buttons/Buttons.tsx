import { Link } from "react-router-dom";
import { textVariant } from "../../../helpers/cva/variants";
import { buttonProps } from "../../../types/types";

export function ButtonBack({ variant, text, src, href }: buttonProps) {
  return (
    <Link className="text-decoration-none" to={href}>
      <button className="w-auto rounded-[4px] py-1 px-3 flex justify-center gap-5 font-semibold cursor-pointer bg-blackMain text-white xs:py-2 xs:px-[26px] xs:rounded-lg">
        <img
          className="w-[15px] xs:w-[31px] self-center"
          src={src}
          alt="icon"
        />
        <span className={textVariant({ variant })}>{text}</span>
      </button>
    </Link>
  );
}

export function ButtonForward({ variant, text, src, href }: buttonProps) {
  return (
    <a className="mt-auto w-full" href={href}>
      <button className="gap-[13px] py-1 px-3 rounded-[4px] flex justify-center flex-row-reverse xs:gap-5 cursor-pointer bg-blackMain text-white xs:py-2 xs:px-4 xs:rounded-md w-full">
        <img
          className="w-[15px] xs:w-[31px] self-center"
          src={src}
          alt="icon"
        />
        <span className={textVariant({ variant })}>{text}</span>
      </button>
    </a>
  );
}

export function Arrow({
  src,
  onClick,
  status,
}: {
  src: string;
  onClick?: () => void;
  status: "active" | "inactive";
}) {
  if (status == "inactive") {
    return (
      <button className="mx-[15px] xs:mx-6 opacity-40" onClick={onClick}>
        <img className="h-3 xs:h-5" src={src} alt="icon" />
      </button>
    );
  } else {
    return (
      <button className="mx-[15px] xs:mx-6" onClick={onClick}>
        <img className="h-3 xs:h-5" src={src} alt="icon" />
      </button>
    );
  }
}
