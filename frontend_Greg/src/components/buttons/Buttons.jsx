import { Link } from "react-router-dom"

export function ButtonBack({text,src,href, onClick}){
  return(
    <Link className="link-back" to={href}>
      <button className={`button button-back`} onClick={onClick}>
        <img className="button_icon button_icon-back" src={src} alt="icon"/>
        <span className="button_text">{text}</span>
      </button>
    </Link>
  )
}

export function ButtonForward({text,src,href, onClick}){
  return(
    <a className="link-forward" href={href}>
      <button className={`button button-forward`} onClick={onClick}>
        <img className="button_icon button_icon-forward" src={src} alt="icon"/>
        <span className="button_text">{text}</span>
      </button>
    </a>
  )
}

export function Arrow({src, onClick, status}){
  if (status == "inactive"){
    return(
      <button className={`button button-arrow button-arrow-inactive`} onClick={onClick}>
        <img className="arrow" src={src} alt="icon"/>
      </button>
    )
  }
  else{
    return(
      <button className={`button button-arrow`} onClick={onClick}>
        <img className="arrow" src={src} alt="icon"/>
      </button>
    )
  }
}