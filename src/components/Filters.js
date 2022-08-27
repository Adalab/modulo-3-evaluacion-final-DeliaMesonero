import FilterName from "./FilterName";
import FilterByHouse from "./FilterByHouse";

function Filters(props) {
  return (
    <form>
      <FilterByHouse
        filterByHouse={props.filterByHouse}
        handleFilterByHouse={props.handleFilterByHouse}
      />
      <FilterName
        filterName={props.filterName}
        handleFilterName={props.handleFilterName}
        nameFilter={props.nameFilter}
      />
    </form>
  );
}
export default Filters;
