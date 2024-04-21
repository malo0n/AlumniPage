import { ProfileData } from "@/types/types";

export function Skills({ data }: { data: ProfileData }) {
  if (data.skills == "" || data.skills == null)
    return (
      <span className='font-notoSans text-[8px] font-medium leading-[100%] text-grey xs:text-lg'>
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
          className='h-auto w-fit rounded-[3px] bg-white px-[7px] py-0 text-center font-montserrat text-[7px] font-normal leading-[150%] tracking-[-0.02em] text-blackMain xs:rounded-[7px] xs:px-[19px] xs:py-[2px] xs:text-base'
        >
          {el}
        </div>
      );
    });
  }
}
