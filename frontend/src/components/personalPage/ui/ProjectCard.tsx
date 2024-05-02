import projectDefault from "../../../assets/icons/projectDefault.svg";
import aboutArrow from "../../../assets/icons/aboutArrow.svg";
import { ButtonForward } from "../../shared/buttons/Buttons";
import { projectStatus } from "../../../helpers/data/projectsData";
//!underTest↓↓↓

type Props = { status: string; projectName: string; role: string }
export function ProjectCard(props:Props) {
  const { status, projectName, role } = props;
  return (
    <div className='flex h-auto w-full flex-col rounded-[11px] bg-white px-4 py-3 xs:rounded-3xl xs:px-[36px] xs:py-[27px] lg:w-[48.2%] '>
      <div className='mb-[14px] flex items-center xs:mb-[30px]'>
        <img className='size-[52px] xs:size-auto' src={projectDefault} alt='icon' />
        <div className='ml-[13px] flex w-full flex-col justify-center font-notoSans xs:ml-[30px] xs:w-[264px]'>
          <span
            className={`font-montserrat text-[2.3vw] font-semibold leading-[100%] xs:text-sm ${
              projectStatus(status) == "activeProjectText" ? "text-greenText" : "text-orangeText"
            }`}
          >
            {status}
          </span>
          <span className='mb-1 mt-[2px] font-montserrat text-[3.7vw] font-semibold leading-[117%] text-black xs:mb-[10px] xs:mt-1 xs:text-[24px]'>
            {projectName}
          </span>
          <span className='text-[2.3vw] font-medium leading-[111%] text-grey xs:text-[18px]'>{role}</span>
        </div>
      </div>
      <ButtonForward text={"Перейти к проекту"} src={aboutArrow}></ButtonForward>
    </div>
  );
}
