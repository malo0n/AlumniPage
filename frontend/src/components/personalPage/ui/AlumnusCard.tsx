import { Avatar } from "../../reusable/Avatar";
import { Tags } from "../../reusable/Tags";
import { tagsFormat } from "../../../helpers/data/tagsFormat";
import { graduationDateFormat } from "../../../helpers/data/graduationDateFormat";
import { ProfileData } from "@/types/types";

export function AlumnusCard({ data }: { data: ProfileData }) {
  return (
    <div className="mb-[30px] xs:mb-[66px] w-full">
      <div className="mb-[7px] mt-5 xs:mt-11 xs:mb-4 w-full flex flex-col lg:flex-row p-[15px] xs:p-[34px] bg-white rounded-[11px] xs:rounded-[36px]">
        <div className="self-center mb-[14px] ">
          <Avatar photo={data.photo}></Avatar>
        </div>
        <div className="flex flex-col font-notoSans">
          <div className="flex flex-wrap gap-1 xs:gap-2 mb-2 xs:mb-4">
            <Tags variant="profile" tags={tagsFormat(data.department)}></Tags>
          </div>
          <span className="font-bold text-[17px] xs:text-[40px] leading-[115%] text-blackMain">
            {data.name}
          </span>
          <span className="font-normal text-[8px] xs:text-[18px] leading-[111%] text-blackMain mt-1 xs:mt-2">
            {graduationDateFormat(data)}
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col p-[15px] xs:p-[34px] rounded-[11px] xs:rounded-3xl bg-white gap-[3px] xs:gap-[6px]">
        <span className="font-notoSans font-medium text-[8px] xs:text-[18px] leading-[111%] text-grey">
          Дата рождения
          <span className="font-medium text-blackMain ml-[7px] xs:ml-4">
            {data.date_of_birth}
          </span>
        </span>
        <span className="font-notoSans font-medium text-[8px] xs:text-[18px] leading-[111%] text-grey">
          Место работы
          <span className="font-medium text-blackMain ml-[7px] xs:ml-4">
            {data.work}
          </span>
        </span>
        <span className="font-notoSans font-medium text-[8px] xs:text-[18px] leading-[111%] text-grey">
          Образование
          <span className="font-medium text-blackMain ml-[7px] xs:ml-4">
            {data.faculty}
          </span>
        </span>
      </div>
    </div>
  );
}
