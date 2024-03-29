import React from "react";

const InfoCard = ({card}) => {
    const {name, discription, icon, bgClass} = card;
  return (
    <div className={`card md:card-side shadow-xl text-white p-6 ${bgClass}`}>
      <figure>
        <img
          src={icon}
          alt="card icon"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{discription}</p>
      </div>
    </div>
  );
};

export default InfoCard;
