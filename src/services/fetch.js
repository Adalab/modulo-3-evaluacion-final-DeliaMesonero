function getDataApi() {
  return fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((user, index) => {
        return {
          image:
            user.image === ""
              ? "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
              : user.image,
          name: user.name,
          species: user.species,
          house: user.house,
          gender: user.gender,
          alive: user.alive,
          id: index,
        };
      });
      return dataClean;
    });
}

export default getDataApi;
