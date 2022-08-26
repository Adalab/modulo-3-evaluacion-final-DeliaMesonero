import { useEffect, useState } from "react";
import "../styles/App.scss";
import getDataApi from "../services/fetch";
import ListCharacter from "./ListCharacter";

function App() {
  //const [renderList, setRenderList] = useState(getDataApi);
  const [dataChar, setDataChar] = useState([]);

  //const htmlCharc = renderList.map((item) => {
  //return;
  //<li></li>;
  //});

  useEffect(() => {
    getDataApi().then((getDataApi) => {
      setDataChar(getDataApi);
    });
  }, []);

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
          <label htmlFor="house">
            Buscar por casa
            <select>
              <option value="all">Todos</option>
              <option value="Ross">Roos</option>
              <option value="Rachel">Rachel</option>
              <option value="Joey">Joey</option>
              <option value="Phoebe">Phoebe</option>
              <option></option>
            </select>
          </label>
        </form>
        <ListCharacter dataChar={dataChar}></ListCharacter>
      </main>
    </div>
  );
}

export default App;
