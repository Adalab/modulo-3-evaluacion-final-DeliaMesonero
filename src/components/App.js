import { useEffect, useState } from "react";
import "../styles/App.scss";
import getDataApi from "../services/fetch";
import ListCharacter from "./ListCharacter";
import Filters from "./Filters";
import CharactDetail from "./CharactDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  //variables estado
  const [dataChar, setDataChar] = useState([]);
  const [filterByHouse, setFilterByHouse] = useState("Gryffindor");
  const [filterName, setFilterName] = useState("");

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

  const houseFilter = dataChar.filter((user) => {
    if (filterByHouse === "all") {
      return true;
    } else {
      return user.house === filterByHouse;
    }
  });

  const handleFilterName = (ev) => {
    setFilterName(ev.target.value);
  };

  const nameFilter = dataChar.filter((user) => {
    return user.name.toLowerCase().includes(filterName.toLowerCase());
  });

  //detalle personaje

  const { pathname } = useLocation();
  const dataPath = matchPatch("/user/:userId", pathname);

  const userId = dataPath !== null ? dataPath.params.userId : null;
  const userFound = dataChar.find((user) => {
    return user.id === userId;
  });

  return (
    <div className="App">
      <header>
        <h1> Harry Potter</h1>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  filterByHouse={filterByHouse}
                  handleFilterByHouse={handleFilterByHouse}
                  filterName={filterName}
                  handleFilterName={handleFilterName}
                  //nameFilter={nameFilter}
                />

                <ListCharacter
                  dataChar={houseFilter}
                  filterName={filterName}
                  nameFilter={nameFilter}
                  handleFilterName={handleFilterName}
                />
              </>
            }
          />
          <Route
            path="/user/:userId"
            element={<CharactDetail user={userFound} />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
