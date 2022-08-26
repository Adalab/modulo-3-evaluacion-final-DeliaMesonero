import { useEffect, useState } from "react";
import "../styles/App.scss";
import getDataApi from "../services/fetch";
import ListCharacter from "./ListCharacter";
import Filters from "./Filters";
import FilterByHouse from "./FilterByHouse";

function App() {
  //const [renderList, setRenderList] = useState(getDataApi);

  //variables estado
  const [dataChar, setDataChar] = useState([]);
  const [FilterByHouse, setFilterByHouse] = useState("all");

  //const htmlCharc = renderList.map((item) => {
  //return;
  //<li></li>;
  //});

  useEffect(() => {
    getDataApi().then((getDataApi) => {
      setDataChar(getDataApi);
    });
  }, []);
  const handleFilterByHouse = (value) => {
    setFilterByHouse(value);
  };
  return (
    <div className="App">
      <header>
        <h1> Harry Potter</h1>
      </header>
      <main>
        <form>
          <label htmlFor="character">
            Buscar por personaje
            <input
              className="inputChar"
              type="text"
              name="character"
              id="character"
            />
          </label>
          <Filters
            FilterHouse={FilterByHouse}
            handleFilterByHouse={handleFilterByHouse}
          />
        </form>
        <ListCharacter dataChar={dataChar}></ListCharacter>
      </main>
    </div>
  );
}

export default App;
