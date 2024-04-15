import { Avatar } from "../../reusable/Avatar";
import React from "react";
import { Tags } from "../../reusable/Tags";
import { tagsFormat } from "../../../helpers/data/tagsFormat";
import { graduationDateFormat } from "../../../helpers/data/graduationDateFormat";
import { ButtonForward } from "../../reusable/buttons/Buttons";
import aboutArrow from "../../../assets/icons/aboutArrow.svg";
import { ProfileData } from "../../../types/types";
export function ProfileCard({
  href,
  data,
}: {
  href: string;
  data: ProfileData;
}) {
  const {
    photo,
    name,
    department,
  }: { photo: string | null; name: string; department: string } = data;
  return (
    <div className=" w-auto p-[15px] rounded-[11px] my-[6px] relative xs:w-[482px] flex xs:p-4 bg-white xs:rounded-2xl">
      <Avatar photo={photo}></Avatar>
      <div className="flex flex-col items-start w-full h-full font-notoSans">
        <div className=" mb-[4px] flex flex-wrap gap-1 xs:mb-2">
          <Tags variant="allProfiles" tags={tagsFormat(department)}></Tags>
        </div>
        <span className="text-[3.7vw] leading-[115%] font-semibold xs:text-lg text-blackMain xs:leading-5">
          {name}
        </span>
        <span className=" text-[2.3vw] leading-[111%] mt-[3.6px] font-normal xs:text-sm text-grey xs:leading-[150%] xs:mt-2">
          {graduationDateFormat(data)}
        </span>
        <ButtonForward
          text="Узнать подробнее"
          href={href}
          src={aboutArrow}
        ></ButtonForward>
      </div>
    </div>
  );
}
