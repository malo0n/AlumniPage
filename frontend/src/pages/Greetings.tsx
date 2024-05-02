import { Header } from "../components/shared/Header";
import { ButtonForward } from "../components/shared/buttons/Buttons";
import aboutArrow from "../assets/icons/aboutArrow.svg";
import { useNavigate } from "react-router-dom";
export default function Greetings() {
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <div className='mx-56 mt-10 flex flex-col bg-background'>
        <h1 className='text-black-main font-openSans text-7xl font-bold'>
          Добро пожаловать в закрытое <i className='text-orange'>сообщество</i> коммьюнити БВСР
        </h1>
        <div className='mt-24 min-w-72 self-end'>
          <ButtonForward
            text='Начать регистрацию'
            variant='registration'
            src={aboutArrow}
            onClick={() => navigate("/registration")}
          ></ButtonForward>
        </div>
      </div>
    </>
  );
}
