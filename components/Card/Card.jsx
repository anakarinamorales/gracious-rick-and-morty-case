import style from './card.module.css';

const Card = props => {
  const { cardImage, cardTitle, children} = props;
  
  return (
    <div className={style.card}>
      <img src={cardImage} className={style.image}></img>
      <p className={style.title}>{cardTitle}</p>
      {children ? children : null}
    </div>
  );
};

export default Card;
