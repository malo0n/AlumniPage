import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { ButtonForward } from "../../components/shared/buttons/Buttons";
import aboutArrow from "../../assets/icons/aboutArrow.svg";
import { CustomInput } from "../../components/shared/inputs/Inputs";

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

  return (
    <main className='mt-24 flex w-[40%] flex-col items-center justify-center self-center'>
      <h1 className='mb-24 text-5xl font-bold'>Подтверждение</h1>
      {/* <span className='mb-7 text-2xl'>Введите код из письма</span> */}
      <form className='flex w-full flex-col gap-8'>
        <Controller
          control={control}
          name='code'
          render={({ field: { onChange, onBlur } }) => (
            <CustomInput name='code' onBlur={onBlur} onChange={onChange} placeholder='Код' />
          )}
        />
        <ButtonForward onClick={handleSubmit(onSubmit)} variant='registration' text='Завершить' src={aboutArrow} />
      </form>
    </main>
  );
}
