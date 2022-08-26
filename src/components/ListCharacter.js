//import userEvent from "@testing-library/user-event";
import CharacterCard from "./CharacterCard";

function ListCharacter(props) {
  const charElements = props.dataChar.map((dataChar, index) => {
    return <CharacterCard user={dataChar} key={index} />;
  });
  return (
    <section>
      <ul>{charElements}</ul>
    </section>
  );
}
export default ListCharacter;
