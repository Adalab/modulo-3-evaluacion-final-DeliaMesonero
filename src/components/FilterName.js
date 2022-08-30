import "../styles/FilterName.scss";
function FilterName(props) {
  const handleFilterName = (ev) => {
    props.handleFilterName(ev.taget.value);
  };
  return (
    <label className="formLabel" htmlFor="character">
      Buscar por personaje
      <input
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
        className="inputChar"
        type="text"
        name="character"
        id="character"
        placeholder="Harry Potter"
        value={props.filterName}
        onChange={props.handleFilterName}
      />
    </label>
  );
}
export default FilterName;
