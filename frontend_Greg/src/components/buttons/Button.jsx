export function Button({text,src}){
  return(
    <a href="#">
      <button className="button button-back open-sans-semibold">
        <img className="button_icon button_icon-back" src={src} alt="icon"/>
        <span className="button_text">{text}</span>
      </button>
    </a>
  )
}