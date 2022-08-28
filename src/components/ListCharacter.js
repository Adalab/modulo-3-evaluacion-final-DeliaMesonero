import CharacterCard from "./CharacterCard";
import "../styles/ListCharacter.scss";

function ListCharacter(props) {
  const charElements = props.dataChar.map((dataChar, index) => {
    return <CharacterCard user={dataChar} key={index} />;
  });
  return (
    <section className="listSection">
      <ul className="listCha">{charElements}</ul>
    </section>
  );
}
export default ListCharacter;
