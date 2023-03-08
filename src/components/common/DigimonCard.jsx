import React from 'react';

import { Link } from 'react-router-dom';

// import { useDispatch } from 'react-redux';

const DigimonCard = (props) => {
  //   const dispatch = useDispatch();

  return (
    <div className="digimon-card">
      <Link to={``}>
        <div className="digimon-card__image">
          <img src={props.img01} alt="" />
        </div>
        <h3 classname="digimon-card__name">{props.name}</h3>
      </Link>
    </div>
  );
};

export default DigimonCard;
