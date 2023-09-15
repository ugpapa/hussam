import React from "react";
import useLikesStore from "@/stores/useLikesStore";

export const LikesButtonComponent = () => {
  
  const increment = useLikesStore((state) => state.increaseLikes);

  return (
    <button onClick={increment}>Like!</button>
  );
}
