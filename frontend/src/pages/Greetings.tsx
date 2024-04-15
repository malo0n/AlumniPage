import { Header } from "../components/reusable/Header";
import { ButtonForward } from "../components/reusable/buttons/Buttons";
import aboutArrow from "../assets/icons/aboutArrow.svg";
import { Link } from "react-router-dom";
export default function Greetings() {
  return (
    <>
      <Header></Header>
      <div className="bg-background flex flex-col mt-10 mx-56">
        <h1 className="font-openSans font-bold text-7xl text-black-main">
          Добро пожаловать в закрытое <i className="text-orange">сообщество</i>{" "}
          коммьюнити БВСР
        </h1>
        <div className="min-w-72 self-end mt-24">
          <Link to="/registration">
            <ButtonForward
              text="Начать регистрацию"
              variant="registration"
              src={aboutArrow}
              href={"/registration"}
            ></ButtonForward>
          </Link>
        </div>
      </div>
    </>
  );
}
