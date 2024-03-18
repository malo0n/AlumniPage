export function Skills({data}){
  const skills = data.skills.split(", ");
  console.log(skills);
  if (skills!="") {
    return skills.map((el,index)=>{
      return(
        <div key={index} className={`skill`}>
          {el}
        </div>
      )
    })
  }
  else{
    return(
      <span className="text" style={{fontFamily: "Noto Sans", fontSize: "20px"} }> <i>Тут пусто...</i> </span>
    )
  }
}