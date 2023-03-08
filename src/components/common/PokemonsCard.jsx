import React from 'react';

import { Link } from 'react-router-dom';

// import { useDispatch } from 'react-redux';

const PokemonsCard = (props) => {
  //   const dispatch = useDispatch();

  return (
    <div className="pokemon-card">
      <Link to={``}>
        <div className="pokemon-card__image">
          <img src={props.img01} alt="" />
        </div>
        <h3 classname="pokemon-card__name">{props.name}</h3>
      </Link>
    </div>
  );
};

export default PokemonsCard;
