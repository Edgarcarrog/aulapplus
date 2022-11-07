
import { AiFillPlusCircle } from "react-icons/ai";

const Card = ({ title, subtitle, handleClick }) => {
  return (
    <section className="main-card" onClick={handleClick}>
      <div className="main-card__header">
        <h3 className="main-card__title">{title}</h3>
        <h4 className="main-card__title">{subtitle}</h4>
      </div>
      <div className="main-card__body p-5">
        <AiFillPlusCircle className="main-card__icon" />
      </div>
    </section>
  );
};

export default Card;
