export { filmMarkup };

function genreById([...arr]) {
  const g = localStorage.getItem('GENRES');
  const genres = JSON.parse(g);
  let genreName;
  const array = [...arr];
  for (let i = 0; i < genres.length; i++) {
    for (let x = 0; x < array.length; x++) {
      if (array[x] === genres[i].id) {
        genreName = genres[i].name;
        array[x] = genreName;
      }
    }
  }

  if (array.length === 0) {
    return '';
  } else if (array.length === 1) {
    return `${array[0]}`;
  } else if (array.length === 2) {
    return `${array[0]}, ${array[1]}`;
  } else if (array.length === 3) {
    return `${array[0]}, ${array[1]}, ${array[2]}`;
  } else if (array.length === 4) {
    return `${array[0]}, ${array[1]}, ${array[2]}, ${array[3]}`;
  } else if (array.length === 5) {
    return `${array[0]}, ${array[1]}, ${array[2]}, ${array[3]}, ${array[4]}`;
  }
}

function filmMarkup(film) {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  let aboutOverview = 'No information';
  if (film.overview) {
    aboutOverview = film.overview;
  }

  return `
  <div class="modal-wrap">
      
      <div class="modal-container">
        <div class="modal-left">
      
          <img src="${
            film.poster_path === null
              ? 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
              : `${IMG_URL}${film.poster_path}`
          }"class="film-image" />
      
        </div>
        <div class="modal-right">
      
          <h2 class="film-modal-title">${film.original_title}</h2>
          <table class="film-info">
            <tr>
              <td class="table-name">Vote / Votes</td>
             <td class="table-value"><span class="rating-value">${film.vote_average.toFixed(
               1
             )}</span>/ ${film.vote_count}</td>
             </tr>
            <tr>
              <td class="table-name">Popularity</td>
              <td class="table-value">${film.popularity.toFixed(1)}</td>
            </tr>
            <tr>
              <td class="table-name">Original title</td>
              <td class="table-value">${film.original_title}</td>
            </tr>
            <tr>
              <td class="table-name">Genre</td>
              <td class="table-value">${genreById(film.genre_ids)}</td>
            </tr>
          </table>
<div class="modal-about">
          <h3 class="about-title">About</h3>
          <p class="about-desc">${aboutOverview}</p>
      </div>
      <div class="modal-button">
        <button class="btn watched-btn" type="button" data-addwatched>ADD TO WATCHED</button>
         <button class="btn watched-btn is-hidden" type="button" data-removewatched>REMOVE FROM WATCHED</button>
        <button class="btn queue-btn" type="button" data-addqueue>ADD TO QUEUE</button>
        <button class="btn queue-btn is-hidden" type="button" data-removequeue>REMOVE FROM QUEUE</button>
      </div>
          </div>
        </div>
      </div>  
    </div>`;
}
