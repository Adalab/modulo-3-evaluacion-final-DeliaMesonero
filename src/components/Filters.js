import FilterName from "./FilterName";
import FilterByHouse from "./FilterByHouse";

function Filters(props) {
  return <FilterByHouse FilterHouse={props.FilterHouse}></FilterByHouse>;
}
export default Filters;
