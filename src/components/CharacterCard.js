import { Link } from "react-router-dom";
import "../styles/CharacterCard.scss";

const CharacterCard = (props) => {
  return (
    <li className="cardCha">
      <Link className="cardLink" to={`/user/${props.user.id}`}>
        <img
          className="cardImg"
          src={props.user.image}
          alt={`Foto de ${props.user.name}`}
          title={`Foto de ${props.user.name}`}
        ></img>
        <h4 className="cardName"> {props.user.name}</h4>
        <p className="cardSpecies">{props.user.species} </p>
      </Link>
    </li>
  );
};
export default CharacterCard;
