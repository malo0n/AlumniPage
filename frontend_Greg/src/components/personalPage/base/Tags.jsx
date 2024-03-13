export function Tags({tags}){
  return tags.map((el, index) => {
    return (
    <div key={index} className={`tag tag-${el}`}>
      <span className="tag_text">{el}</span>
    </div>
    );
  });
}