import Button from "../components/Button";
import { AiFillPlusCircle } from "react-icons/ai";

const Card = ({ handleClick }) => {
  return (
    <section className="main-card">
      <div className="main-card__header">
        <h3 className="main-card__title">Introducción a las Matemáticas Elementales</h3>
      </div>
      <div className="main-card__body p-5">
        <AiFillPlusCircle className="main-card__icon" />
      </div>
    </section>
  );
};

export default Card;
