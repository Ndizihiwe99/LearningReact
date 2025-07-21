import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";

interface LikeProps {
  onClicked: () => void;
}

function Like({ onClicked }: LikeProps) {
  const [status, setStatus] = useState(false);

  const UseOnClicked = () => {
    setStatus(!status);
    onClicked();
  };

  if (status) return <CiHeart color="blue" size="30" onClick={UseOnClicked} />;
  return <FcLike size="30" onClick={UseOnClicked} />;
}

export default Like;
