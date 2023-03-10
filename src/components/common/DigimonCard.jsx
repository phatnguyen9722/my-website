import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// import { useDispatch } from 'react-redux';

const DigimonCard = (props) => {
  //   const dispatch = useDispatch();
  return (
    <div className="digimon-card">
      <Link to={``}>
        <div className="digimon-card__image">
          <img src={props.img01} alt="digimon" />
          <img src={props.img02} alt="digimon-2" />
        </div>
        <h3 className="digimon-card__name">{props.name}</h3>
      </Link>
    </div>
  );
};

DigimonCard.propTypes = {
  img01: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DigimonCard;
