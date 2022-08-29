import "../styles/FilterByHouse.scss";
import "../styles/FilterName.scss";

function FilterByHouse(props) {
  const handleFilterByHouse = (ev) => {
    props.handleFilterByHouse(ev.target.value);
  };
  return (
    <label className="formLabel" htmlFor="house">
      Buscar por casa
      <select
        className="inputChar"
        name="house"
        id="house"
        value={props.filterByHouse}
        onChange={handleFilterByHouse}
      >
        <option value="all">Todos</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw"> Ravenclaw</option>
      </select>
    </label>
  );
}
export default FilterByHouse;
