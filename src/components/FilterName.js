import "../styles/FilterName.scss";
function FilterName(props) {
  const handleFilterName = (ev) => {
    props.handleFilterName(ev.taget.value);
  };
  return (
    <form className="formName">
      <label className="formLabel" htmlFor="character">
        Buscar por personaje
        <input
          className="inputChar"
          type="text"
          name="character"
          id="character"
          value={props.FilterName}
          onChange={props.handleFilterName}
        />
      </label>
    </form>
  );
}
export default FilterName;
