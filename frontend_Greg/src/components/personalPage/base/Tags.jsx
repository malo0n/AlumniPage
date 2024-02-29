export function Tags({tags}){
  return tags.map((el) => {
    return (
    <div key={tags.indexOf(el)} className={`tag tag-${el}`}>
      <span className="tag_text">{el}</span>
    </div>
    );
  });
}