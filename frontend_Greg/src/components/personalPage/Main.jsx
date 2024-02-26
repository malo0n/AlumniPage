import {Button} from "../buttons/Button";
import backArrow from "../../assets/icons/backArrow.svg";
import {Tag} from "../personalPage/Tag";
export function Main(){
  return(
    <main className="main">
      <Button text="Вернуться к анкетам" src={backArrow}></Button>
      <Tag tags={{'tag':"Marketing"}}></Tag>
    </main>
  )
}