import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// import { useDispatch } from 'react-redux';
import numberWithCommas from '../../utils/numberWithCommas';

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
        <div className="digimon-card__coin">
          {numberWithCommas(props.coin)}
          <span className="digimon-card__coin__old">
            <del>{numberWithCommas(999)} $</del>
          </span>
        </div>
      </Link>
    </div>
  );
};

DigimonCard.propTypes = {
  img01: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  coin: PropTypes.number.isRequired,
};

export default DigimonCard;
