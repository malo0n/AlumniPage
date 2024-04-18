import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { ButtonForward } from "../../components/reusable/buttons/Buttons";
import aboutArrow from "../../assets/icons/aboutArrow.svg";
import {
  CustomInput,
} from "../../components/reusable/inputs/Inputs";

interface Confirm {
  code: string;
}
export default function App() {
  const onSubmit: SubmitHandler<Confirm> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Confirm>();  

  return(
    <main className="flex flex-col items-center justify-center mt-9 w-[40%] self-center">
      <h1 className="text-5xl font-bold mb-5">Подтверждение</h1>
      <span className="text-2xl mb-7">Введите код из сообщения</span>
      <form className="w-full flex flex-col gap-8">
        <Controller
          control={control}
          name="code"
          render={({ field: { onChange,  onBlur } }) => (
            <CustomInput
              name="code"
              onBlur={onBlur}
              onChange={onChange}
              placeholder="Код"
            />
          )}
        />
        <ButtonForward text="Завершить" src={aboutArrow} href="#"/>
      </form>
    </main>
  )
}