import PropTypes from 'prop-types';

import style from './card.module.css';

const Card = (props) => {
  const { cardImage, cardTitle, children } = props;

  return (
    <div className={style.card}>
      <img src={cardImage} className={style.image} alt={`${cardTitle} portrait`} />
      <p className={style.title}>{cardTitle}</p>
      {children || null}
    </div>
  );
};

Card.propTypes = {
  cardImage: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  children: PropTypes.func,
};

Card.defaultProps = {
  children: null,
};

export default Card;
