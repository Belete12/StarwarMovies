
// https://swapi.dev/api/people/'

   async function getStarWars() {
    try {     
      const response = await fetch('https://swapi.dev/api/films/');
      const data = await response.json();

      const movies = data.results;


      movies.forEach(movie => {

        var table = document.createElement('thead');

        table.innerHTML = `<tr><td>${movie.title} </td> </tr>`
       document.getElementById('ListItem').appendChild(table);

      });
   
    } catch (error) {
      console.error(error);
    }
  }

  getStarWars();