
// https://swapi.dev/api/people/'

// fetch data from star war  API 
// store the data in HTML page that displays the list of datas

   async function getStarWars() {
    try {     
      const response = await fetch('https://swapi.dev/api/films/');
      const data = await response.json();

      const movies = data.results;


      movies.forEach(movie => {

        var table = document.createElement('thead');

        table.innerHTML = `<tr><td>${movie.title} </td><td>${movie.episode_id} </td><td>${movie.director} </td>  <td>${movie.producer} </td><td>${movie.release_date} </td></tr>`
       document.getElementById('ListItem').appendChild(table);

      });
   
    } catch (error) {
      console.error(error);
    }
  }

// call the function
  getStarWars();