import { useEffect, useState } from "react";
import "../styles/App.scss";
import getDataApi from "../services/fetch";
import ListCharacter from "./ListCharacter";
import Filters from "./Filters";
import CharactDetail from "./CharactDetail";
import { matchPath, Route, Routes, useLocation } from "react-router-dom";

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

  const houseFilter = dataChar
    .filter((user) => {
      if (filterByHouse === "all") {
        return true;
      } else {
        return user.house === filterByHouse;
      }
    })
    .filter((user) => {
      return user.name.toLowerCase().includes(filterName.toLowerCase());
    });

  const handleFilterName = (ev) => {
    setFilterName(ev.target.value);
  };

  //const nameFilter = dataChar.filter((user) => {
  //return user.name.toLowerCase().includes(filterName.toLowerCase());
  //});

  //detalle personaje

  const { pathname } = useLocation();
  const dataPath = matchPath("/user/:userId", pathname);

  const userId = dataPath !== null ? dataPath.params.userId : null;
  const userFound = dataChar.find((user) => {
    return user.id === parseInt(userId);
  });

  return (
    <div className="App">
      <header className="HeaderTitle">
        <h1> Harry Potter</h1>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <main className="main">
                <Filters
                  filterByHouse={filterByHouse}
                  handleFilterByHouse={handleFilterByHouse}
                  filterName={filterName}
                  handleFilterName={handleFilterName}
                  //nameFilter={nameFilter}
                />

                <ListCharacter
                  //dataChar={dataChar}
                  dataChar={houseFilter}
                  filterName={filterName}
                  //nameFilter={nameFilter}
                  handleFilterName={handleFilterName}
                />
              </main>
            </>
          }
        />
        <Route
          path="/user/:userId"
          element={<CharactDetail user={userFound} />}
        />
      </Routes>
    </div>
  );
}

export default App;
