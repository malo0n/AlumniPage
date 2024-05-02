import { BeatLoader } from "react-spinners";
export default function Loader() {
  return (
    <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
    <BeatLoader color='#8000ff' speedMultiplier={0.7} />
    </div>
  );
}
