const CharacterCard = (props) => {
  return (
    <li>
      <a href="">
        <img
          src={props.user.image}
          alt={`Foto de ${props.user.name}`}
          title={`Foto de ${props.user.name}`}
        ></img>
        <h4> {props.user.name}</h4>
        <p>{props.user.species} </p>
      </a>
    </li>
  );
};
export default CharacterCard;
