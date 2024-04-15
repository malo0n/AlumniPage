import { tagVariants } from "../../helpers/cva/variants";
import { Tag, TagsProps } from "../../types/types";
export function Tags({ tags, variant }: TagsProps) {
  return tags.map((el: Tag, index) => {
    return (
      <div key={index} className={tagVariants({ color: el, variant: variant })}>
        <span>{`${el}`}</span>
      </div>
    );
  });
}
