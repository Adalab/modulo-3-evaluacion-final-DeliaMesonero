function FilterByHouse(props) {
  const handleChange = (ev) => {
    props.handleFilterByHouse(ev.target.value);
  };
  return (
    <label htmlFor="house">
      Buscar por casa
      <select
        name="house"
        id="house"
        value={props.FilterByHouse}
        onChange={handleChange}
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
