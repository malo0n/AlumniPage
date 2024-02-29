export function Skills({data}){
  const dataFormat = data.skills.split(", ");
  if (dataFormat!='') {
    return dataFormat.map((el)=>{
      return(
        <div key={dataFormat.indexOf(el)} className={`skill`}>
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