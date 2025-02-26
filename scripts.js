// https://swapi.dev/api/people/'
// fetch data from star war  API 
// store the data in HTML page that displays the list of datas

  const films1= 'https://swapi.dev/api/films/';
  const character2='https://swapi.dev/api/people/';

  
async function getStarWars() {
    try{
    const[film_res, char_res] = await Promise.all([
        fetch(films1),
        fetch(character2)
    ]);
    const films_data= await film_res.json();
    const char_data=await char_res.json();
    const movies=films_data.results;
    const characters= char_data.results;
    movies.forEach(movie => {
        characters.forEach(character =>{
            var table = document.createElement('thead');
            table.innerHTML = `<tr><td>${movie.title} </td><td>${movie.episode_id} </td><td>${movie.director} </td>  <td>${movie.producer} </td><td>${character.name} </td></tr>`
        document.getElementById('ListItem').appendChild(table);

        })

        });
    }// end try
    catch(error){
        console.log(error)
    }
} // end function



  getStarWars();