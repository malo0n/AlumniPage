import { Avatar } from "../../reusable/Avatar";
import { Tags } from "../../reusable/Tags";
import { tagsFormat } from "../../../helpers/data/tagsFormat";
import { graduationDateFormat } from "../../../helpers/data/graduationDateFormat";
import { ProfileData } from "@/types/types";

export function AlumnusCard({ data }: { data: ProfileData }) {
  return (
    <div className='mb-[30px] w-full xs:mb-[66px]'>
      <div className='mb-[7px] mt-5 flex w-full flex-col rounded-[11px] bg-white p-[15px] xs:mb-4 xs:mt-11 xs:rounded-[36px] xs:p-[34px] lg:flex-row'>
        <div className='mb-[14px] self-center '>
          <Avatar photo={data.photo}></Avatar>
        </div>
        <div className='flex flex-col font-notoSans'>
          <div className='mb-2 flex flex-wrap gap-1 xs:mb-4 xs:gap-2'>
            <Tags variant='profile' tags={tagsFormat(data.department)}></Tags>
          </div>
          <span className='text-[17px] font-bold leading-[115%] text-blackMain xs:text-[40px]'>{data.name}</span>
          <span className='mt-1 text-[8px] font-normal leading-[111%] text-blackMain xs:mt-2 xs:text-[18px]'>
            {graduationDateFormat(data)}
          </span>
        </div>
      </div>
      <div className='flex w-full flex-col gap-[3px] rounded-[11px] bg-white p-[15px] xs:gap-[6px] xs:rounded-3xl xs:p-[34px]'>
        <span className='font-notoSans text-[8px] font-medium leading-[111%] text-grey xs:text-[18px]'>
          Дата рождения
          <span className='ml-[7px] font-medium text-blackMain xs:ml-4'>{data.date_of_birth}</span>
        </span>
        <span className='font-notoSans text-[8px] font-medium leading-[111%] text-grey xs:text-[18px]'>
          Место работы
          <span className='ml-[7px] font-medium text-blackMain xs:ml-4'>{data.work}</span>
        </span>
        <span className='font-notoSans text-[8px] font-medium leading-[111%] text-grey xs:text-[18px]'>
          Образование
          <span className='ml-[7px] font-medium text-blackMain xs:ml-4'>{data.faculty}</span>
        </span>
      </div>
    </div>
  );
}
