import { Link } from "react-router-dom";
import "../styles/CharactDetail.scss";

function CharactDetail(props) {
  const alive = (value) => {
    if (value === true) {
      return <p>Vivo</p>;
    } else {
      return <p>Muerto</p>;
    }
  };
  return (
    <>
      <section>
        <Link to="/">
          <p>Volver</p>
        </Link>
        <img
          src={props.user.image}
          alt={`Foto de ${props.user.name}`}
          title={`Foto de ${props.user.name}`}
        ></img>
        <h4> Nombre: {props.user.name}</h4>
        <p>Especie:{props.user.species} </p>
        <p>Género:{props.user.gender}</p>
        <p>Estatus:{alive(props.user.alive)}</p>
      </section>
    </>
  );
}
export default CharactDetail;
