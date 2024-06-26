import { BeatLoader } from "react-spinners";
import React from "react";

export default function Loader() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <BeatLoader color="#8000ff" speedMultiplier={0.7} />
    </div>
  );
}
