import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { ButtonForward } from "../../components/reusable/buttons/Buttons";
import { RegistrationForm } from "@/types/types";
import aboutArrow from "../../assets/icons/aboutArrow.svg";
import {
  CustomInput,
  CustomSelect,
} from "../../components/reusable/inputs/Inputs";

export default function App() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegistrationForm>();
  const onSubmit: SubmitHandler<RegistrationForm> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
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
    <main className="flex flex-col items-center justify-center mt-9">
      <h1 className="text-5xl font-bold mb-10">Регистрация</h1>
      <form
        className="flex flex-col gap-4 w-[400px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur } }) => (
            <CustomInput
              name="name"
              onBlur={onBlur}
              onChange={onChange}
              placeholder="Имя"
            />
          )}
        />
        {errors.name && (
          <p className="text-red text-lg">{errors.name.message}</p>
        )}
        <Controller
          control={control}
          name="surname"
          render={({ field: { onChange, onBlur } }) => (
            <CustomInput
              name="surname"
              onBlur={onBlur}
              onChange={onChange}
              placeholder="Фамилия"
            />
          )}
        />
        <Controller
          control={control}
          name="department"
          render={({ field: { onChange, value, onBlur, ref } }) => (
            <CustomSelect
              placeholder="Отдел"
              onBlur={onBlur}
              isMulti={true}
              options={departments}
              value={value}
              onChange={onChange}
              noOptionsMessage={()=> "Такого варианта нет"}
              maxMenuHeight={200}

            />
          )}
        />
        <div className="w-full flex gap-2">
          <Controller
            control={control}
            name="year_of_entry"
            render={({ field: { onChange, value, onBlur, ref, name } }) => (
              <CustomSelect
                placeholder="Год вступления"
                onBlur={onBlur}
                options={years}
                value={value}
                onChange={onChange}
                noOptionsMessage={()=> "Такого варианта нет"}
                maxMenuHeight={200}

              />
            )}
          />
          <Controller
            control={control}
            name="year_of_graduation"
            render={({ field: { onChange, value, onBlur, ref } }) => (
              <CustomSelect
                placeholder="Год выпуска"
                onBlur={onBlur}
                options={years}
                value={value}
                onChange={onChange}
                noOptionsMessage={()=> "Такого варианта нет"}
                maxMenuHeight={200}
              />
            )}
          />
        </div>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur } }) => (
            <CustomInput
              name="email"
              onBlur={onBlur}
              onChange={onChange}
              placeholder="Почта"
              
            />
          )}
        />
        <ButtonForward
          text="Продолжить"
          variant="registration"
          src={aboutArrow}
          href="/confirm"
        ></ButtonForward>
      </form>
    </main>
  );
}
