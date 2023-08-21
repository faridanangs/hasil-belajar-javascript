document.querySelector('.search-button').addEventListener('click', async () => {
    try {
        const inputUser = document.querySelector('.input-keyword');
        const showApi = await dataApi(inputUser.value);
        const dataMovie = showMovieAll(showApi);

    }catch(err){
        alert(err);
    }
});

// show movie 
function dataApi(resolve){
    return fetch('http://www.omdbapi.com/?apikey=b1570f6e&s=' + resolve)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            if(response.Response === 'false'){
                throw new Error(response.Error);
            }
            return response.Search;
        });
};

function showMovieAll(value){
    let dataMovieAll = '';
    value.forEach( m => {
        return dataMovieAll += showMovie(m);
    })
    document.querySelector('.movie-container').innerHTML = dataMovieAll;
}


// detail movie 
document.addEventListener('click', async function(e){
    try {
        if(e.target.classList.contains('modal-detail-botton')){
            const imdbid = e.target.dataset.imdbid;
            const moveDetail = await dataMovieDetail(imdbid);
            const movieDetaillol = dataDetailAll(moveDetail);
        }
    } catch(err){
        alert(err);
    }
})

function dataMovieDetail(value){
    return fetch('http://www.omdbapi.com/?apikey=b1570f6e&i=' + value)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            if(response.Response === 'false'){
                throw new Error(response.Error);
            }
            return response;
        })
}

function dataDetailAll(value){
    const detailHtmlMovie = showMovieDetail(value);
    document.querySelector('.modal-body').innerHTML = detailHtmlMovie;
}

// menyimpan tampilan dan detail 
// tampilan 
function showMovie(i){
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${i.Poster}" class="card-img-top" style="height: 20rem;">
                    <div class="card-body" >
                    <h5 class="card-title d-flex">${i.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Tahun rilis: ${i.Year}</h6>
                    <a href="#" class="btn btn-outline-primary d-block modal-detail-botton" 
                    data-imdbid="${i.imdbID}" data-bs-toggle="modal" data-bs-target="#MovieDetailModal">Show Detail</a>
                    </div>
                </div>
            </div>`;
}
// detail 
function showMovieDetail(parameter){
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${parameter.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                        <li class="list-group-item"><h4>${parameter.Title} (${parameter.Year})</h4></li>
                        <li class="list-group-item"><strong>Director : </strong>${parameter.Director}</li>
                        <li class="list-group-item"><strong>Actor : </strong>${parameter.Actors}</li>
                        <li class="list-group-item"><strong>Writer : </strong>${parameter.Writer}</li>
                        <li class="list-group-item"><strong>Plot : </strong>${parameter.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}
