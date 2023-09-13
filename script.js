
const searchMovie = document.getElementById('searchName');
const APIKEY = 'ef7bc171';

function displayMovie() {
    fetch(`http://www.omdbapi.com/?t=${searchMovie.value}&apikey=${APIKEY}`)
        .then((res) => res.json())
        .then((data) => displayData(data))
        .catch((err) => {
            alert(err)
            document.getElementById('content').style.display = 'none';
            document.getElementById('notFound').style.display = 'block';
        });
}

function displayData(data) {
    console.log(data);
    document.getElementById('notFound').style.display = 'none';
    document.getElementById('poster').src = `${data.Poster}`;
    document.getElementById('title').innerHTML = `${data.Title}`;
    document.getElementById('year').innerHTML = `Year : ${data.Year}`;
    document.getElementById('director').innerHTML = `Director : ${data.Director}`;
    document.getElementById('actors').innerHTML = `Cast : ${data.Actors}`;
    document.getElementById('genre').innerHTML = `Genre : ${data.Genre}`;
    document.getElementById('collection').innerHTML = `BoxOffice : ${data.BoxOffice}`;
    document.getElementById('plot').innerHTML = `Plot : <br/>${data.Plot}`;
    document.getElementById('awards').innerHTML = `Awards : <br/>${data.Awards}`;
    document.getElementById('imdb').innerHTML = `<i class="fa-solid fa-star me-1" style="color: #e9f637;"></i>${data.imdbRating}`;
    document.getElementById('content').style.display = 'block';
}