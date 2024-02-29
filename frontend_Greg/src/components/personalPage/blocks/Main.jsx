import {ButtonBack} from "../../buttons/Buttons";
import backArrow from "../../../assets/icons/backArrow.svg";
import { AlumnusCard } from "../base/AlumnusCard";
import { Projects } from "../base/Projects";
import {profileData} from "../../../helpers/profileData";
import {projectsData} from "../../../helpers/projectsData"; //!test
import { projectsTestData } from "../../../helpers/testData"; //! test
import { Skills } from "../base/Skills";
import { skillsData } from "../../../helpers/skillsData";
export function Main({data}){

  return(
    <main className="main">
      <ButtonBack text="Вернуться к анкетам" src={backArrow}></ButtonBack>
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