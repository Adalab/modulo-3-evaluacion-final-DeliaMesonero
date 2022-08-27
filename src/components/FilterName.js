function FilterName(props) {
  const handleFilterName = (ev) => {
    handleFilterName(ev.taget.toLowerCase.value);
  };
  return (
    <label htmlFor="character">
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
  );
}
export default FilterName;
