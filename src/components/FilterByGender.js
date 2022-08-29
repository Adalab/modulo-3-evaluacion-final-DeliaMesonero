import "../styles/FilterName.scss";

function FilterByGender(props) {
  const handleFilterByGender = (ev) => {
    props.handleFilterByGender(ev.target.value);
  };
  return (
    <label className="formLabel" htmlFor="gender">
      Buscar por género
      <select
        className="inputChar"
        name="gender"
        id="gender"
        value={props.filterByGender}
        onChange={handleFilterByGender}
      >
        <option value="all">Todos</option>
        <option value="male">Masculino</option>
        <option value="female">Femenino</option>
      </select>
    </label>
  );
}
export default FilterByGender;
