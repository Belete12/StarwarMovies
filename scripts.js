
// https://swapi.dev/api/people/'

   async function getStarWars() {
    try {     
      const response = await fetch('https://swapi.dev/api/films/');
      const data = await response.json();
      const movies = data.results;
    } catch (error) {
      console.error(error);
    }
  }