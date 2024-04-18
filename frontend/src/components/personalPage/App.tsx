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
    <main className="flex flex-col items-start justify-center my-[17px] xs:my-[38px] mx-auto w-full lg:w-[95%] px-[25px] xs:px-11 bg-background">
      <ButtonBack
        text="Вернуться к анкетам"
        href={"/profiles"}
        src={prevPageArrow}
      ></ButtonBack>
      <AlumnusCard data={data}></AlumnusCard>
      <section className="w-full mb-[30px] xs:mb-[66px] flex flex-col items-center">
        <h2 className="mb-[14px] xs:mb-[30px] text-[17px] self-start font-notoSans font-bold xs:text-3xl leading-[110%] text-black">
          Проекты
        </h2>
        <div className="flex flex-col lg:flex-row items-center w-full flex-wrap mx-[25px] xs:mx-0 gap-[14px] xs:gap-[30px]">
          <Projects data={projectsTestData}></Projects>
        </div>
      </section>
      <section className="w-full">
        <h2 className="font-notoSans font-bold text-[17px] xs:text-3xl leading-[110%] text-black">
          Скиллы
        </h2>
        <div className="mt-[14px] xs:mt-[30px] flex w-full flex-wrap gap-[7px] xs:gap-4">
          <Skills data={data}></Skills>
        </div>
      </section>
    </main>
  );
}
