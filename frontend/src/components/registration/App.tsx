import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { ButtonForward } from "../../components/shared/buttons/Buttons";
import { RegistrationForm } from "@/types/types";
import aboutArrow from "../../assets/icons/aboutArrow.svg";
import { CustomInput, CustomSelect } from "../../components/shared/inputs/Inputs";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegistrationForm>();
  const onSubmit: SubmitHandler<RegistrationForm> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    navigate("/confirm");
  };
  const departments = [
    { label: "Web", value: "Web" },
    { label: "SMM", value: "SMM" },
    { label: "C-Level", value: "C-Level" },
    { label: "Дизайн", value: "Design" },
    { label: "IOS", value: "IOS" },
  ];
  const years = [
    { label: "2024", value: "2024" },
    { label: "2023", value: "2023" },
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
    { label: "2020", value: "2020" },
    { label: "2019", value: "2019" },
    { label: "2018", value: "2018" },
    { label: "2017", value: "2017" },
    { label: "2016", value: "2016" },
  ];

  return (
    <main className='mt-9 flex flex-col items-center justify-center'>
      <h1 className='mb-10 text-5xl font-bold'>Регистрация</h1>
      <form className='flex w-[400px] flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            control={control}
            name='name'
            rules={{ required: true }}
            render={({ field: { onChange, onBlur } }) => (
              <CustomInput
                name='name'
                onBlur={onBlur}
                onChange={onChange}
                placeholder='Имя'
                className={errors.name ? "border-red-500 bg-red-100" : ""}
              />
            )}
          />
        </div>
        <div>
          <Controller
            control={control}
            name='surname'
            rules={{ required: true }}
            render={({ field: { onChange, onBlur } }) => (
              <CustomInput name='surname' onBlur={onBlur} onChange={onChange} placeholder='Фамилия' />
            )}
          />
        </div>
        <div>
          <Controller
            control={control}
            name='department'
            rules={{ required: true}}
            render={({ field: { onChange, value, onBlur, ref } }) => (
              <CustomSelect
                placeholder='Отдел'
                onBlur={onBlur}
                isMulti={true}
                options={departments}
                value={value}
                onChange={onChange}
                noOptionsMessage={() => "Такого варианта нет"}
                maxMenuHeight={200}
              />
            )}
          />
        </div>
        <div className='flex w-full gap-2'>
          <div className='w-full'>
            <Controller
              control={control}
              name='year_of_entry'
              rules={{ required: true}}
              render={({ field: { onChange, value, onBlur, ref, } }) => (
                <CustomSelect
                  placeholder='Год вступления'
                  onBlur={onBlur}
                  options={years}
                  value={value}
                  onChange={onChange}
                  noOptionsMessage={() => "Такого варианта нет"}
                  maxMenuHeight={200}
                />
              )}
            />
          </div>
          <div className='w-full'>
            <Controller
              control={control}
              name='year_of_graduation'
              rules={{ required: true }}
              render={({ field: { onChange, value, onBlur, ref } }) => (
                <CustomSelect
                  placeholder='Год выпуска'
                  onBlur={onBlur}
                  options={[{ label: "В организации", value: "-" }, ...years]}
                  value={value}
                  onChange={onChange}
                  noOptionsMessage={() => "Такого варианта нет"}
                  maxMenuHeight={200}
                />
              )}
            />
          </div>
        </div>
        <div>
          <Controller
            control={control}
            name='email'
            rules={{pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, required: true}}
            render={({ field: { onChange, onBlur } }) => (
              <CustomInput name='email' onBlur={onBlur} onChange={onChange} placeholder='Почта' />
            )}
          />
          {errors.email && <p className='text-sm font-semibold text-red '>{errors.email.message}</p>}
        </div>
        <ButtonForward
          text='Продолжить'
          variant='registration'
          src={aboutArrow}
          disabled={isSubmitting || !isValid}
        ></ButtonForward>
      </form>
    </main>
  );
}
