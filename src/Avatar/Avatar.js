import React from "react";
import "../style.css";

const Avatar = ({ data, handleRandomize }) => {
  return (
    <div className="avatar-wrapper">
      <div className="avatar">
        <img width="260" height="280" src={data?.body?.imgUrl} alt="" />
        <img width="260" height="280" src={data?.eyes?.imgUrl} alt="" />
        <img width="260" height="280" src={data?.noses?.imgUrl} alt="" />
        <img width="260" height="280" src={data?.eyebrows?.imgUrl} alt="" />
        <img width="260" height="280" src={data?.mouths?.imgUrl} alt="" />
        <img width="260" height="280" src={data?.glasses?.imgUrl} alt="" />
        <img width="260" height="280" src={data?.clothingL1?.imgUrl} alt="" />
        <img width="260" height="280" src={data?.clothingL2?.imgUrl} alt="" />
        <img width="260" height="280" src={data?.clothingL3?.imgUrl} alt="" />
        <img width="260" height="280" src={data?.neckwear?.imgUrl} alt="" />
        <img width="260" height="280" src={data?.hair?.imgUrl} alt="" />
        <img width="260" height="280" src={data?.earrings?.imgUrl} alt="" />
        <img width="260" height="280" src={data?.hats?.imgUrl} alt="" />
      </div>
      <div className="btn-randomize">
        <button onClick={handleRandomize}>randomize</button>
      </div>
    </div>
  );
};

export default Avatar;
