import {ButtonBack} from "../../buttons/Buttons";
import prevPageArrow from "../../../assets/icons/prevPageArrow.svg";
import { AlumnusCard } from "../base/AlumnusCard";
import { Projects } from "../base/Projects";
import {profileData} from "../../../helpers/profileData";
import { projectsTestData } from "../../../helpers/testData"; //! test
import { Skills } from "../base/Skills";
import { skillsData } from "../../../helpers/skillsData";
export function Main({data}){
  return(
    <main className="profileMain">
      <ButtonBack text="Вернуться к анкетам" href={"/profiles"} src={prevPageArrow}></ButtonBack>
      <AlumnusCard data={profileData(data)}></AlumnusCard>
      <section className="projects">
        <h2 className="title projects__title">Проекты</h2>
        <div className="projects__container">
          <Projects data={projectsTestData} ></Projects> 
        </div>
      </section>
      <section className="skills">
        <h2 className="title skills__title">Скиллы</h2>
        <div className="skills__container">
          <Skills data={skillsData(data)}></Skills>
        </div>
      </section>
    </main>
  )
}