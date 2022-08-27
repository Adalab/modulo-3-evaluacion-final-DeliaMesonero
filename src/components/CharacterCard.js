import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <li>
      <Link to={`/user/${props.user.id}`}>
        <img
          src={props.user.image}
          alt={`Foto de ${props.user.name}`}
          title={`Foto de ${props.user.name}`}
        ></img>
        <h4> {props.user.name}</h4>
        <p>{props.user.species} </p>
      </Link>
    </li>
  );
};
export default CharacterCard;
