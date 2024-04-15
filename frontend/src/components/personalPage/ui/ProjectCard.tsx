import projectDefault from "../../../assets/icons/projectDefault.svg";
import aboutArrow from "../../../assets/icons/aboutArrow.svg";
import { ButtonForward } from "../../reusable/buttons/Buttons";
import { projectStatus } from "../../../helpers/data/projectsData";
//!underTest↓↓↓
export function ProjectCard({
  data,
}: {
  data: { status: string; projectName: string; role: string };
}) {
  const { status, projectName, role } = data;
  return (
    <div className="w-full lg:w-[48.2%] h-auto bg-white rounded-[11px] xs:rounded-3xl py-3 xs:py-[27px] px-4 xs:px-[36px] flex flex-col ">
      <div className="flex items-center mb-[14px] xs:mb-[30px]">
        <img
          className="size-[52px] xs:size-auto"
          src={projectDefault}
          alt="icon"
        />
        <div className="ml-[13px] xs:ml-[30px] font-notoSans flex flex-col justify-center w-full xs:w-[264px]">
          <span
            className={`font-montserrat font-semibold text-[2.3vw] xs:text-sm leading-[100%] ${
              projectStatus(status) == "activeProjectText"
                ? "text-greenText"
                : "text-orangeText"
            }`}
          >
            {status}
          </span>
          <span className="mt-[2px] xs:mt-1 mb-1 xs:mb-[10px] font-montserrat font-semibold text-[3.7vw] xs:text-[24px] leading-[117%] text-black">
            {projectName}
          </span>
          <span className="font-medium text-[2.3vw] xs:text-[18px] leading-[111%] text-grey">
            {role}
          </span>
        </div>
      </div>
      <ButtonForward
        text={"Перейти к проекту"}
        src={aboutArrow}
        href="#"
      ></ButtonForward>
    </div>
  );
}
