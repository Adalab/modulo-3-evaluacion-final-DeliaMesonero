import "../styles/FilterName.scss";
function FilterByGender(props) {
  return (
    <form className="formName">
      <label className="formLabel" htmlFor="gender">
        Buscar por género
        <select
          className="inputChar"
          name="gender"
          id="gender"
          value={props.filterByGender}
          onChange={props.handleFilterByGender}
        >
          <option value="all">Todos</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
        </select>
      </label>
    </form>
  );
}
export default FilterByGender;
