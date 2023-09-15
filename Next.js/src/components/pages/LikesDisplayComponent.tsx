import React from "react";
import useLikesStore from "@/stores/useLikesStore";

export const LikesDisplayComponent = () => {
  const likes = useLikesStore((state) => state.likes);

  return (
    <div>Current Likes: {likes}</div>
  );
};