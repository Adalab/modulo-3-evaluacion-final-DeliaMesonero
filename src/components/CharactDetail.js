import { Link } from "react-router-dom";
import "../styles/CharactDetail.scss";
import gryf from "../images/gryf.jpg";
import huf from "../images/hufflepuff.jpg";
import raven from "../images/ravenclaw.jpg";
import sly from "../images/Slytherin.jpg";

function CharactDetail(props) {
  const alive = (value) => {
    if (value === true) {
      return <p>Vivo</p>;
    } else {
      return <p>Muerto</p>;
    }
  };

  const houseIcon = () => {
    if (props.user.house === "Gryffindor") {
      return <img className="ImgHouse" src={gryf} alt="Gryffindor" />;
    } else if (props.user.house === "Hufflepuff") {
      return <img className="ImgHouse" src={huf} alt="Hufflepuff" />;
    } else if (props.user.house === "Ravenclaw") {
      return <img className="ImgHouse" src={raven} alt="Ravenclaw" />;
    } else {
      return <img className="ImgHouse" src={sly} alt="Slytherin" />;
    }
  };
  const aliveIcon = () => {
    const alive = <i className="fa-solid fa-heart"></i>;
    const dead = <i className="fa-solid fa-book-skull"></i>;
    if (props.user.alive) {
      return alive;
    } else {
      return dead;
    }
  };
  return (
    <>
      <section className="sectionDeatil">
        <Link className="linkBack" to="/">
          <p className="back">Volver</p>
        </Link>
        <div className="detailCha">
          <div className="detailImgContainer">
            <img
              className="detailImg"
              src={props.user.image}
              alt={`Foto de ${props.user.name}`}
              title={`Foto de ${props.user.name}`}
            ></img>
          </div>
          <div className="infoContainer">
            <h4 className="detailName detailInfo">
              {" "}
              Nombre: {props.user.name}
            </h4>
            <p className="detailInfo">
              Casa: {props.user.house}
              {houseIcon()}
            </p>
            <p className="detailInfo">
              Especie:
              {props.user.species}{" "}
            </p>
            <p className="detailInfo">Género:{props.user.gender}</p>
            <p className="detailSatatus detailInfo ">
              <span>Estatus:{alive(props.user.alive)}</span>
              <span className="aliveIcon">{aliveIcon(props.user.alive)}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default CharactDetail;
