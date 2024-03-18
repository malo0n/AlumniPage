export function Tags({className, tags}){
  return tags.map((el, index) => {
    return (
    <div key={index} className={`tag tag-${el} ${className}`}>
      <span className="tag_text">{el}</span>
    </div>
    );
  });
}