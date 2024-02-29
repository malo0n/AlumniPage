export function ButtonBack({text,src}){
  return(
    <a className="link-back" href="#">
        <button className={`button button-back`}>
        <img className="button_icon button_icon-back" src={src} alt="icon"/>
        <span className="button_text">{text}</span>
      </button>
    </a>
  )
}

export function ButtonForward({text,src}){
  return(
    <a className="link-forward" href="#">
        <button className={`button button-forward`}>
        <img className="button_icon button_icon-forward" src={src} alt="icon"/>
        <span className="button_text">{text}</span>
      </button>
    </a>
  )
}