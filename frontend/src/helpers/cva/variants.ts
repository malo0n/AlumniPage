import { cva } from "class-variance-authority";
export const textVariant = cva(
  "font-openSans tracking-[.1px] xs:tracking-wide text-center self-center leading-[7px] xs:leading-4 ",
  {
    variants: {
      variant: {
        usual: "text-[1.7vw] xs:text-xs  font-semibold",
        registration: "text-xl font-normal my-1 ml-5",
      },
    },
  },
);

export const tagVariants = cva(
  "text-[5px] leading-[143%] rounded-[3px] xs:rounded-md py-[3px] px-[7px] xs:py-[6px] xs:px-[14px] w-fit text-white tracking-wide font-semibold",
  {
    variants: {
      color: {
        EventManager: "bg-orange",
        ProjectManager: "bg-orange",
        ProductManager: "bg-orange",
        SMM: "bg-turquoise",
        Marketing: "bg-pink",
        "C-level": "bg-red",
        Web: "bg-lightGreen",
        Design: "bg-purple",
        Mobile: "bg-blue",
      },
      variant: {
        allProfiles: "xs:text-[10px] xs:leading-[120%]  font-notoSans",
        profile: "xs:text-[12px] xs:leading-[130%] font-openSans",
      },
    },
  },
);
