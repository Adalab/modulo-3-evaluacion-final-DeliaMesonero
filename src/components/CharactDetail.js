import { Link } from "react-router-dom";
import "../styles/CharactDetail.scss";
function CharactDetail(props) {
  return (
    <>
      <section>
        <Link to="/">
          <p>Home</p>
        </Link>
        <img
          src={props.user.image}
          alt={`Foto de ${props.user.name}`}
          title={`Foto de ${props.user.name}`}
        ></img>
        <h4> {props.user.name}</h4>
        <p>{props.user.species} </p>
      </section>
    </>
  );
}
export default CharactDetail;
