import { Avatar } from "../../reusable/Avatar";
import React from "react";
import { Tags } from "../../reusable/Tags";
import { tagsFormat } from "../../../helpers/data/tagsFormat";
import { graduationDateFormat } from "../../../helpers/data/graduationDateFormat";
import { ButtonForward } from "../../reusable/buttons/Buttons";
import aboutArrow from "../../../assets/icons/aboutArrow.svg";
import { ProfileData } from "../../../types/types";
import { useNavigate } from "react-router-dom";
export function ProfileCard({ href, data }: { href: string; data: ProfileData }) {
  const { photo, name, department }: { photo: string | null; name: string; department: string } = data;
  const navigate = useNavigate();
  return (
    <div className=' relative my-[6px] flex w-auto rounded-[11px] bg-white p-[15px] xs:w-[482px] xs:rounded-2xl xs:p-4'>
      <Avatar photo={photo}></Avatar>
      <div className='flex h-full w-full flex-col items-start font-notoSans'>
        <div className=' mb-[4px] flex flex-wrap gap-1 xs:mb-2'>
          <Tags variant='allProfiles' tags={tagsFormat(department)}></Tags>
        </div>
        <span className='text-[3.7vw] font-bold leading-[115%] text-blackMain xs:text-lg xs:leading-5'>{name}</span>
        <span className=' mt-[3.6px] text-[2.3vw] font-normal leading-[111%] text-grey xs:mt-2 xs:text-sm xs:leading-[150%]'>
          {graduationDateFormat(data)}
        </span>
        <ButtonForward
          text='Узнать подробнее'
          onClick={() => {
            navigate(href);
          }}
          src={aboutArrow}
        ></ButtonForward>
      </div>
    </div>
  );
}
