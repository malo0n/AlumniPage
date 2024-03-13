export function Skills({data}){
  const dataFormat = data.skills.split(", ");
  if (dataFormat!=='') {
    return dataFormat.map((el,index)=>{
      return(
        <div key={index} className={`skill`}>
          {el}
        </div>
      )
    })
  }
  else{
    return(
      <span> <i>Тут пусто...</i> </span>
    )
  }
}