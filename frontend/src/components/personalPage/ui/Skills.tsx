import { ProfileData } from "@/types/types";

export function Skills({ data }: { data: ProfileData }) {
  if (data.skills == "" || data.skills == null)
    return (
      <span className="font-notoSans font-medium text-[8px] xs:text-lg leading-[100%] text-grey">
        {" "}
        <i>Тут пусто...</i>{" "}
      </span>
    );
  else {
    const skills: string[] = data.skills.split(", ");
    return skills.map((el: string, index: number) => {
      return (
        <div
          key={index}
          className="rounded-[3px] xs:rounded-[7px] py-0 xs:py-[2px] px-[7px] xs:px-[19px] w-fit h-auto bg-white text-center font-montserrat font-normal leading-[150%] text-[7px] xs:text-base tracking-[-0.02em] text-blackMain"
        >
          {el}
        </div>
      );
    });
  }
}
