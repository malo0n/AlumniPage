

export function Tag({tags}){
  return(
    <div className={`tag tag-${tags.tag}`}>
      <span className="tag_text">{tags.tag}</span>
    </div>
  )
}