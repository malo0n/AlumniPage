import { ButtonBack } from "../reusable/buttons/Buttons";
import prevPageArrow from "../../assets/icons/prevPageArrow.svg";
import { AlumnusCard } from "./ui/AlumnusCard";
import { Projects } from "./ui/Projects";
import { profileData } from "../../helpers/data/profileData";
import { projectsTestData } from "../../helpers/data/testData"; //! test
import { Skills } from "./ui/Skills";
import { ProfileData } from "../../types/types";

export function Main({ data }: { data: ProfileData }) {
  return (
    <main className='mx-auto my-[17px] flex w-full flex-col items-start justify-center bg-background px-[25px] xs:my-[38px] xs:px-11 lg:w-[95%]'>
      <ButtonBack
        text='Вернуться к анкетам'
        onClick={() => {
          window.history.back();
        }}
        src={prevPageArrow}
      ></ButtonBack>
      <AlumnusCard data={data}></AlumnusCard>
      <section className='mb-[30px] flex w-full flex-col items-center xs:mb-[66px]'>
        <h2 className='mb-[14px] self-start font-notoSans text-[17px] font-bold leading-[110%] text-black xs:mb-[30px] xs:text-3xl'>
          Проекты
        </h2>
        <div className='mx-[25px] flex w-full flex-col flex-wrap items-center gap-[14px] xs:mx-0 xs:gap-[30px] lg:flex-row'>
          <Projects data={projectsTestData}></Projects>
        </div>
      </section>
      <section className='w-full'>
        <h2 className='font-notoSans text-[17px] font-bold leading-[110%] text-black xs:text-3xl'>Скиллы</h2>
        <div className='mt-[14px] flex w-full flex-wrap gap-[7px] xs:mt-[30px] xs:gap-4'>
          <Skills data={data}></Skills>
        </div>
      </section>
    </main>
  );
}
